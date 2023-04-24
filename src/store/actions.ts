import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  getDocs,
  where,
  setDoc,
  updateDoc,
  onSnapshot,
  orderBy,
  arrayUnion,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebaseInit";
import router from "@/router/router";
import db from "@/firebaseInit";
import type { Commit } from "vuex";
import type {
  Messages,
  State,
  SignUpObject,
  UserDetails,
  JobPostingObject,
  EmployeesInfoTypes,
} from "@/types";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import store from "./store";
import { ref } from "vue";

export default {
  // Sign up ------------------------
  signUp: ({}, payload: SignUpObject) => {
    console.log(payload);
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((credential) => {
        setDoc(doc(db, "users", credential.user.uid), payload);
        router.push({ name: "Search" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  // Sign in ------------------------
  SignIn: ({}, payload: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((credential) => {
        router.push("/search");
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  // User Sign Out -------------------------

  signOut: () => {
    signOut(auth)
      .then(() => {
        router.push("/sign-in");
      })
      .catch((error) => {
        alert("New there may some problems....");
      });
  },

  // Sending Reset Email -------------------------

  resetPassword: ({}, payload: string) => {
    sendPasswordResetEmail(auth, payload)
      .then(() => {
        console.log("Password reset email sent successfully");
        router.push("/reset-confirm");
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // Update Profile of Current User -------------------------
  updateProfile: ({}, payload: SignUpObject) => {
    console.log(payload);

    const docRef = db.collection("users").doc(payload.userId);

    docRef
      .update(payload)
      .then(() => {
        console.log("Document updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },

  // Setting Current User Details -------------------------
  setCurrentUserDetails: (
    { commit, state }: { commit: Commit; state: State },
    payload: string
  ) => {
    store.state.bodyPreLoader = true;
    onSnapshot(doc(db, "users", payload), (doc: any) => {
      let data = { ...doc.data(), userId: payload };
      commit("setCurrentUserDetails", data);
      store.state.bodyPreLoader = false;

      state.shortListedEmployees = Array<EmployeesInfoTypes>();

      data.shortlisted.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("SetShortlistEmployees", data);
          });
      });

      state.contactedEmployees = Array<EmployeesInfoTypes>();
      data.contacted.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("SetContactedEmployees", data);
          });
      });
      state.interviewingEmployees = Array<EmployeesInfoTypes>();

      data.interviewing.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("setInterviewingEmployees", data);
          });
      });

      state.hiredEmployees = Array<EmployeesInfoTypes>();
      data.hired.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("setHiredEmployees", data);
          });
      });
    });
  },

  // Post Condidate Details for job ------------------------
  getData: async (
    { commit, state }: { commit: Commit; state: State },
    payload: {
      stacks: Array<string>;
      location: string;
      seniority: Array<string>;
    }
  ) => {
    let employees = Array<EmployeesInfoTypes>();

    try {
      let docRef = db.collection("jobs");

      const snapshot1 = await docRef
        .where("stacks", "array-contains-any", payload.stacks)
        .get();

      snapshot1.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        employees.push(data as EmployeesInfoTypes);
      });

      const snapshot2 = await docRef
        .where("location", "==", payload.location)
        .get();

      snapshot2.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        employees.push(data as EmployeesInfoTypes);
      });

      const snapshot3 = await docRef
        .where("seniority", "array-contains-any", payload.seniority)
        .get();

      snapshot3.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        employees.push(data as EmployeesInfoTypes);
      });

      function removeDuplicates(arr: Array<EmployeesInfoTypes>) {
        let commonEmployees = Array<EmployeesInfoTypes>();
        let ids = new Set();

        for (let obj of arr) {
          if (!ids.has(obj.docId)) {
            ids.add(obj.docId);
            commonEmployees.push(obj);
          }
        }

        return commonEmployees;
      }

      let commonEmployees = removeDuplicates(employees);
      commit("SetGetData", commonEmployees);
      router.push("/search");
    } catch (error) {
      console.log("Error retrieving employee data: ", error);
    }
  },

  // Get Information of all User --------------
  getUsersDetails: ({ commit, state }: { commit: Commit; state: State }) => {
    onSnapshot(query(collection(db, "users")), (doc) => {
      state.usersDetails = Array<UserDetails>();
      doc.forEach((doc) => {
        commit("setUsersDetails", { ...doc.data(), userId: doc.id });
      });
    });
  },

  // Get profile Details for relevant Employee ------------------------
  showProfile: ({ commit }: { commit: Commit }, payload: string) => {
    const q = query(collection(db, "jobs"), where("userId", "==", payload));
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("setShowProfile", e.data());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // ----------------------------------------------------------------------------------------
  // Update Employee Status ------------------------
  updateEmployeeStatus: (
    {},
    payload: {
      docId: string;
      userId: string;
      fieldRef: string;
      arrayToRemove: string;
    }
  ) => {
    const docRef = db.collection("users").doc(payload.userId);

    docRef
      .update({
        [payload.fieldRef]: arrayUnion(payload.docId),
      })
      .then(() => {
        if (payload.arrayToRemove) {
          const docRef = db.collection("users").doc(payload.userId);
          docRef;
          docRef.update({
            [payload.arrayToRemove]: firebase.firestore.FieldValue.arrayRemove(
              payload.docId
            ),
          });
        }
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  },

  // Post Condidate Details for job ------------------------
  terminateEmployee: (
    { state }: { state: any },
    payload: { docId: string; userId: string; arrayToRemove: string }
  ) => {
    const docRef = db.collection("users").doc(payload.userId);
    docRef;
    docRef.update({
      [payload.arrayToRemove]: firebase.firestore.FieldValue.arrayRemove(
        payload.docId
      ),
    });
  },

  // Send message to next end user ------------------------
  sendMessage: (
    { commit, state }: { commit: Commit; state: State },
    payload: {
      text: string;
      senderId: string;
      receiverId: string;
      userName: string;
      profile: string;
    }
  ) => {
    const date = new Date();
    
    addDoc(collection(db, "users/" + payload.receiverId + "/messages"), {
      text: payload.text,
      date: date,
      seen: false,
      senderId: payload.senderId,
      receiverId: payload.receiverId,
      userName: payload.userName,
      userProfile: payload.profile,
    }).then(() => {
      console.log("Your Message Sent Successfully");
    });
  },

  // Get Message of users ------------------------
  getMessages: async (
    { commit, state }: { commit: Commit; state: State },
    payload: { senderId: string; receiverId: string }
  ) => {
    try {
      state.messages = Array<Messages>();

      const q1 = query(
        collection(db, "users/" + payload.receiverId + "/messages"),
        where("senderId", "==", payload.senderId)
      );
      onSnapshot(q1, (querySnapshot) => {
        querySnapshot.forEach((e) => {
          const data = e.data();
          const timestamp = data.date.toDate();
          data.date = timestamp;
          data.hours = timestamp.getHours();
          data.minutes = timestamp.getMinutes();
          commit("setMessages", data);
        });
      });

      const q2 = query(
        collection(db, "users/" + payload.senderId + "/messages"),
        where("senderId", "==", payload.receiverId)
      );
      onSnapshot(q2, (querySnapshot) => {
        querySnapshot.forEach((e) => {
          const data = e.data();
          const timestamp = data.date.toDate();
          data.date = timestamp;
          data.hours = timestamp.getHours();
          data.minutes = timestamp.getMinutes();
          commit("setMessages", data);
        });
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  },
};
