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
  signUpObject,
  UserDetails,
  jobPostingObject,
  employeesInfoTypes,
} from "@/types";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import store from "./store";

export default {
  // Sign up ------------------------
  signUp: ({}, payload: signUpObject) => {
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
      .then(async (credential) => {
        router.push({ name: "Search" });
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
        alert("Email could not sent");
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
  updateProfile: ({}, payload: signUpObject) => {
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

      state.shortListedEmployees = Array<employeesInfoTypes>();

      data.shortlisted.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("SetShortlistEmployees", data);
          });
      });

      state.contactedEmployees = Array<employeesInfoTypes>();
      data.contacted.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("SetContactedEmployees", data);
          });
      });
      state.interviewingEmployees = Array<employeesInfoTypes>();

      data.interviewing.forEach((e: string) => {
        db.collection("jobs")
          .doc(e)
          .get()
          .then((doc) => {
            let data = { ...doc.data(), docId: doc.id };
            commit("setInterviewingEmployees", data);
          });
      });

      state.hiredEmployees = Array<employeesInfoTypes>();
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
    let employees = Array<employeesInfoTypes>();

    try {
      let docRef = db.collection("jobs");

      const snapshot1 = await docRef
        .where("stacks", "array-contains-any", payload.stacks)
        .get();

      snapshot1.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        employees.push(data as employeesInfoTypes);
      });

      const snapshot2 = await docRef
        .where("location", "==", payload.location)
        .get();

      snapshot2.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        employees.push(data as employeesInfoTypes);
      });

      const snapshot3 = await docRef
        .where("seniority", "array-contains-any", payload.seniority)
        .get();

      snapshot3.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        employees.push(data as employeesInfoTypes);
      });

      function removeDuplicates(arr: Array<employeesInfoTypes>) {
        let commonEmployees = Array<employeesInfoTypes>();
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

  // Get Message of users ------------------------
  getMessages: (
    { commit, state }: { commit: Commit; state: State },
    payload: string
  ) => {
    console.log("=>", payload);
    onSnapshot(
      query(
        collection(db, "users/" + "XCwR3m7OdabR6ODfQpHUfCgchYj2" + "/messages"),
        orderBy("date", "desc")
      ),
      (snapshot: any) => {
        state.messages = Array<Messages>();
        snapshot.forEach((e: any) => {
          const data = e.data();
          const timestamp = data.date.toDate();
          data.hours = timestamp.getHours();
          data.minutes = timestamp.getMinutes();
          commit("setMessages", data);
        });
      }
    );
  },

  sendMessage: ({ state }: { state: State }, payload: string) => {
    const date = new Date();
    state.messages = Array<Messages>();
    addDoc(
      collection(db, "users/" + "XCwR3m7OdabR6ODfQpHUfCgchYj2" + "/messages"),
      {
        text: payload,
        date: date,
        seen: false,
        senderId: "XCwR3m7OdabR6ODfQpHUfCgchYj2",
        receiverId: "XCwR3m7OdabR6ODfQpHUfCgchYj2",
        userName: "Waseem Akram",
        userProfile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrRJhr_dsfrKGahCBCz2tNhmPWUpu7qs9bg&usqp=CAU",
      }
    ).then(() => {
      console.log("Your Message Sent With ID: ", payload);
    });
  },
};
