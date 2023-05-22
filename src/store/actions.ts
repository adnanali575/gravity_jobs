import {
  collection,
  addDoc,
  doc,
  query,
  setDoc,
  onSnapshot,
  orderBy,
  Timestamp,
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
import type { State, UserDetails, JobPostingObject } from "@/types";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  // Sign up ------------------------
  signUp: ({ state }: { state: State }, payload: UserDetails) => {
    state.signUpLoader = true;
    console.log(payload);
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((credential) => {
        if (credential.user.uid) {
          console.log(payload);
          setDoc(doc(db, "users", credential.user.uid), payload).then(() => {
            state.signUpLoader = false;
            router.push("/");
          });
        }
      })
      .catch((error) => {
        state.signUpLoader = false;
        console.log(error);
      });
  },

  // Sign in ------------------------
  SignIn: (
    { state }: { state: State },
    payload: { email: string; password: string }
  ) => {
    state.signInLoader = true;
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((credential) => {
        router.push("/");
        state.signInLoader = false;
      })
      .catch((error) => {
        state.signInLoader = false;
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

  resetPassword: ({ state }: { state: State }, payload: string) => {
    state.forgotPasswordLoader = true;
    sendPasswordResetEmail(auth, payload)
      .then(() => {
        state.forgotPasswordLoader = false;
        router.push("/reset-confirm");
      })
      .catch((error: any) => {
        state.forgotPasswordLoader = false;
      });
  },

  // Update Profile of Current User -------------------------
  updateProfile: ({ state }: { state: State }, payload: UserDetails) => {
    const docRef = db.collection("users").doc(payload.userId);

    state.accountUpdateLoader = true;
    docRef
      .update(payload)
      .then(() => {
        state.accountUpdateLoader = false;
      })
      .catch((error) => {
        state.accountUpdateLoader = false;
      });
  },

  // Get Conditates Data By Query Search Data ------------------------
  getCandidatesData: ({ commit, state }: { commit: Commit; state: State }) => {
    try {
      state.searchLoader = true;
      db.collection("jobs").onSnapshot((querySnap) => {
        state.employeesInfo = [];
        querySnap.forEach((doc) => {
          let data = { ...doc.data() };
          data.docId = doc.id;
          data.loading = false;
          data.seniority = data.seniority[0];
          commit("setCandidatesData", data);
        });
        state.searchLoader = false;
      });
    } catch (error: any) {
      state.searchLoader = false;
    }
  },

  // Get Conditates Data By Query Search Data ------------------------
  getCandidatesDataByQuerySearch: (
    { commit, state }: { commit: Commit; state: State },
    payload: {
      stacks: Array<string>;
      location: Array<string>;
      seniority: Array<string>;
    }
  ) => {
    try {
      state.searchLoader = true;
      db.collection("jobs")
        .where("stacks", "array-contains-any", payload.stacks)
        .where("location", "==", payload.location)
        .onSnapshot((querySnap) => {
          state.employeesInfo = [];
          querySnap.forEach((doc) => {
            let data = { ...doc.data() };
            data.docId = doc.id;
            data.loading = false;
            data.seniority = data.seniority[0];
            commit("setCandidatesData", data);
            router.push("/search");
          });
          state.searchLoader = false;
        });
    } catch (error: any) {
      state.searchLoader = false;
    }
  },

  // ----------------------------------------------------------------------------------------

  // Post Condidate Details for job ------------------------
  postJob: ({ state }: { state: any }, payload: JobPostingObject) => {
    addDoc(collection(db, "jobs"), payload)
      .then(() => {
        router.push("/submitted");
      })
      .catch(() => {});
  },

  // adding functions ---------------------------------------------
  // Shortlist Conditates ------------------------
  shortlistEmployee: (
    { state }: { state: State },
    payload: JobPostingObject
  ) => {
    let id = state.currentUserDetails.userId;

    let obj = state.employeesInfo.find((el) => el.userId == payload.userId);
    if (obj) obj.loading = true;

    const messagesRef = collection(db, "users/" + id + "/shortlisted");
    addDoc(messagesRef, { ...payload })
      .then(() => {
        if (obj) obj.loading = false;
      })
      .catch((error: any) => {
        if (obj) obj.loading = false;
      });
  },
  // Contact Conditates ------------------------
  contactEmployees: (
    { state }: { state: State },
    payload: JobPostingObject
  ) => {
    let currentUser = state.currentUserDetails;

    let condidate = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      imageUrl: payload.imageUrl,
      userId: payload.userId,
      selectorId: currentUser.userId,
    };

    let user = {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      imageUrl: currentUser.imageUrl,
      selectedDocId: payload.userId,
      userId: currentUser.userId,
    };

    let obj = state.shortListedEmployees.find(
      (el) => el.userId == payload.userId
    );

    try {
      if (obj) obj.loading = true;

      const messagesRef = collection(db, "users/" + user.userId + "/contacted");
      addDoc(messagesRef, { ...payload }).then(() => {
        // Deleting condidate from previouse List
        const documentRef = firebase
          .firestore()
          .collection("users")
          .doc(user.userId);
        const subCollectionRef = documentRef.collection("shortlisted");
        const query = subCollectionRef.where("docId", "==", payload.docId);
        query.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete();
            if (obj) obj.loading = false;
          });

          setDoc(
            doc(db, "users", payload.userId, "chatUsers", currentUser.userId),
            user
          );
          setDoc(
            doc(db, "users", currentUser.userId, "chatUsers", payload.userId),
            condidate
          );
        });
      });
    } catch (error: any) {
      if (obj) obj.loading = false;
    }
  },
  // Interview Conditates ------------------------
  interviewEmployees: (
    { state }: { state: State },
    payload: JobPostingObject
  ) => {
    let id = state.currentUserDetails.userId;

    let obj = state.contactedEmployees.find(
      (el) => el.userId == payload.userId
    );
    try {
      if (obj) obj.loading = true;

      const messagesRef = collection(db, "users/" + id + "/interviewing");
      addDoc(messagesRef, { ...payload }).then(() => {
        // Deleting condidate from previouse List
        const documentRef = firebase.firestore().collection("users").doc(id);
        const subCollectionRef = documentRef.collection("contacted");
        const query = subCollectionRef.where("docId", "==", payload.docId);
        query.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            state.cardButtonLoader = false;
            doc.ref.delete();
          });
        });
      });
    } catch (error: any) {
      state.cardButtonLoader = false;
      if (obj) obj.loading = false;
    }
  },

  // Hire Conditates ------------------------
  hireEmployees: ({ state }: { state: State }, payload: JobPostingObject) => {
    let id = state.currentUserDetails.userId;

    let obj = state.interviewingEmployees.find(
      (el) => el.userId == payload.userId
    );

    if (obj) obj.loading = true;

    const messagesRef = collection(db, "users/" + id + "/hired");
    addDoc(messagesRef, { ...payload }).then(() => {
      // Deleting condidate from previouse List
      const documentRef = firebase.firestore().collection("users").doc(id);
      const subCollectionRef = documentRef.collection("interviewing");
      const query = subCollectionRef.where("docId", "==", payload.docId);
      query
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete();
          });
        })
        .catch((error: any) => {
          if (obj) obj.loading = true;
        });
    });
  },

  // Hire Conditates ------------------------
  terminateEmployees: (
    { state }: { state: State },
    payload: JobPostingObject
  ) => {
    let id = state.currentUserDetails.userId;

    let docId = ref("");

    if (id > payload.userId) docId.value = id + payload.userId;
    else docId.value = payload.userId + id;

    let obj = state.hiredEmployees.find((el) => el.userId == payload.userId);

    if (obj) obj.loading = true;

    // Deleting condidate from previouse List
    const documentRef = db.collection("users").doc(id);
    const subCollectionRef = documentRef.collection("hired");
    const query = subCollectionRef.where("docId", "==", payload.docId);
    query
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });

        // Deleting user doc from chats collection
        const chatUsersRef = db.collection("chats").doc(docId.value);
        chatUsersRef.delete();

        // Deleting user chats from chats collection
        const parentDocRef = db.collection("chats").doc(docId.value);
        const conversationsRef = parentDocRef.collection("conversations");
        conversationsRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });

        // Deleting employee from user's chatUser's Collection
        const ownerColRef = db
          .collection("users")
          .doc(id)
          .collection("chatUsers");
        const ownerDocRef = ownerColRef.doc(payload.userId);
        ownerDocRef.delete();

        // Deleting owner from user's chatUser's Collection
        const employeeDocRef = db
          .collection("users")
          .doc(id)
          .collection("chatUsers");
        const employeeColRef = employeeDocRef.doc(payload.userId);
        employeeColRef.delete();
      })
      .catch((error: any) => {
        if (obj) obj.loading = false;
      });
  },

  // Get functions ---------------------------------------------

  // Get Shortlisted Conditates -------------------
  getShortlistedEmployees: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    let id = state.currentUserDetails.userId;

    try {
      state.shortListLoader = true;
      onSnapshot(
        query(collection(db, "users/" + id + "/shortlisted")),
        (snapshot: any) => {
          state.shortListedEmployees = [];
          snapshot.forEach((doc: any) => {
            let data = { ...doc.data(), loading: false };
            commit("SetShortlistEmployees", data);
          });
          state.shortListLoader = false;
        }
      );
    } catch (error: any) {
      state.shortListLoader = false;
    }
  },

  // Get Contacted Conditates -------------------
  getContactedEmployees: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    let id = state.currentUserDetails.userId;
    try {
      state.contactLoader = true;
      onSnapshot(
        query(collection(db, "users/" + id + "/contacted")),
        (snapshot: any) => {
          state.contactedEmployees = [];
          state.contactLoader = false;
          snapshot.forEach((doc: any) => {
            let data = { ...doc.data(), loading: false };

            commit("SetContactedEmployees", data);
          });
        }
      );
    } catch (error: any) {
      state.contactLoader = false;
    }
  },

  // Get Interviewing Conditates -------------------
  getInterviewingEmployees: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    let id = state.currentUserDetails.userId;
    try {
      state.interviewLoader = true;
      onSnapshot(
        query(collection(db, "users/" + id + "/interviewing")),
        (snapshot: any) => {
          state.interviewingEmployees = [];
          state.interviewLoader = false;
          snapshot.forEach((doc: any) => {
            let data = { ...doc.data(), loading: false };
            commit("setInterviewingEmployees", data);
          });
        }
      );
    } catch (error: any) {
      state.interviewLoader = false;
    }
  },

  // Get Interviewing Conditates -------------------
  showProfile: (
    { commit, state }: { commit: Commit; state: State },
    payload: string
  ) => {
    try {
      state.profileLoader = true;
      db.collection("jobs")
        .doc(payload)
        .onSnapshot((doc) => {
          let data = { ...doc.data() };
          data.docId = doc.id;
          data.experienceTitle = data.seniority[0];

          let passingDate = data.passingYear.toDate();
          data.passingYear = passingDate.getFullYear();
          data.passingMonth = passingDate.toLocaleString("default", {
            month: "long",
          });

          let skillDate = data.skillStartingYear.toDate();
          data.skillStartingYear = skillDate.getFullYear();
          data.skillStartingMonth = skillDate.toLocaleString("default", {
            month: "long",
          });

          state.profileLoader = false;
          commit("setShowProfile", data);
        });
    } catch (error: any) {
      state.profileLoader = false;
    }
  },

  // Get Hired Conditates -------------------
  getHiredEmployees: ({ commit, state }: { commit: Commit; state: State }) => {
    let id = state.currentUserDetails.userId;
    try {
      state.hireLoader = true;
      onSnapshot(
        query(collection(db, "users/" + id + "/hired")),
        (snapshot: any) => {
          state.hiredEmployees = [];
          state.hireLoader = false;
          snapshot.forEach((doc: any) => {
            let data = { ...doc.data(), loading: false };
            commit("setHiredEmployees", data);
          });
        }
      );
    } catch (error: any) {
      state.hireLoader = false;
    }
  },

  // __________________________________________________________________________________
  // Get All the chat users
  getChatUsers: ({ commit, state }: { commit: Commit; state: State }) => {
    const id = state.currentUserDetails.userId;

    try {
      state.chatListLoader = true;
      onSnapshot(
        query(collection(db, "users/" + id + "/chatUsers")),
        (snapshot: any) => {
          state.chatUsers = [];

          if (snapshot.empty) state.chatListLoader = false;

          snapshot.forEach((doc: any) => {
            let data = { ...doc.data() };

            let docId = ref("");
            if (id > data.userId) docId.value = id + data.userId;
            else docId.value = data.userId + id;

            const docRef = db.collection("chats").doc(docId.value);
            docRef.onSnapshot((snapshot) => {
              let lastChats = { ...snapshot.data() };
              data.date = lastChats.lastMessageTime;
              data.lastMessage = lastChats.lastMessage;

              if (data.date || data.selectorId == id) {
                if (data.date) {
                  const timestamp = data.date.toDate();
                  data.hours = timestamp.getHours();
                  data.minutes = timestamp.getMinutes();
                  commit("setChatUsers", data);
                } else {
                  commit("setChatUsers", data);
                }
                state.chatListLoader = false;
              }
            });
          });
        }
      );
    } catch (error: any) {
      state.chatListLoader = false;
    }
  },

  // Send message to other end user
  sendMessage: (
    { state }: { state: State },
    payload: { text: string; recieverId: string }
  ) => {
    let senderId = state.currentUserDetails.userId;

    let docId = ref("");

    if (senderId > payload.recieverId)
      docId.value = senderId + payload.recieverId;
    else docId.value = payload.recieverId + senderId;

    let data = {
      userName: `${state.currentUserDetails.firstName} ${state.currentUserDetails.lastName}`,
      date: Timestamp.now(),
      text: payload.text,
      imageUrl: state.currentUserDetails.imageUrl,
      senderId: senderId,
      recieverId: payload.recieverId,
    };

    const messagesRef = collection(
      db,
      "chats/" + docId.value + "/conversations"
    );
    addDoc(messagesRef, { ...data }).then(() => {
      setDoc(doc(db, "chats", docId.value), {
        lastMessage: payload.text,
        lastMessageTime: Timestamp.now(),
      });
    });
  },

  // Get all the messages from chat's sub-collection
  getMessages: (
    { commit, state }: { commit: Commit; state: State },
    payload: string
  ) => {
    const id = state.currentUserDetails.userId;

    let docId = ref("");
    if (id > payload) docId.value = id + payload;
    else docId.value = payload + id;

    const subDocRef = db
      .collection("users")
      .doc(id)
      .collection("chatUsers")
      .doc(payload);
    subDocRef.onSnapshot((snaphost) => {
      let data = { ...snaphost.data() };
      commit("setCurrentChatUser", data);

      onSnapshot(
        query(
          collection(db, "chats/" + docId.value + "/conversations"),
          orderBy("date", "desc")
        ),
        (snapshot: any) => {
          state.messages = [];
          snapshot.forEach((doc: any) => {
            let data = { ...doc.data() };
            const timestamp = data.date.toDate();
            data.hours = timestamp.getHours();
            data.minutes = timestamp.getMinutes();
            commit("setMessages", data);
          });
        }
      );
    });
  },
};
