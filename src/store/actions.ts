import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebaseInit";
import router from "@/router/router";
import db from "@/firebaseInit";
import type { Commit } from "vuex";
import type { jobPostingObject } from "@/types";
import type { employeesInfoTypes } from "@/types";

export default {
  // Sign up ------------------------
  signUp: ({}, payload: any) => {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((credential) => {
        console.log(credential.user);
        router.push({ name: "Search" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  // Sign in ------------------------
  SignIn: ({}, payload: { email: string; password: string }) => {
    console.log(payload.email, payload.password);
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((credential) => {
        console.log(credential.user);
        router.push({ name: "Search" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  // Post Condidate Details ------------------------
  postJob: ({}, payload: jobPostingObject) => {
    console.log(payload);
    const colRef = collection(db, "user");
    addDoc(colRef, payload)
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // Get Employee Data By Query Search Data ------------------------
  getData: ({ commit }: { commit: Commit }) => {
    const searchValues = ['Vue js', 'React']
    const q = query(
      collection(db, "user"),
      where("stacks", "array-contains-any", searchValues)
    );
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("SetGetData", e.data());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // Show profile for relevant Employee ------------------------
  showProfile: (
    { commit }: { commit: Commit },
    payload: employeesInfoTypes
  ) => {
    const q = query(
      collection(db, "employees"),
      where("email", "==", "test2@gmail.com")
    );
    getDocs(q)
      .then((querySnapshot) => {
        // const doc = querySnapshot.docs[0];
        console.log("Test");
        // console.log(querySnapshot.docs[0].data());
        // querySnapshot.docs.forEach((e) => {
        //   console.log(e);
        // });
        // return doc.id;
      })
      .catch((error) => {
        console.log(error);
      });

    // router.push('/profile')
  },

  // Get Employee of Status Shortlist ------------------------
  getShortlistEmployees: ({ commit }: { commit: Commit }, payload: string) => {
    const q = query(collection(db, "user"), where("status", "==", payload));
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("SetGetShortlistEmployees", e.data());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // Get Employees of Status Contacted ------------------------
  getContactedEmployees: ({ commit }: { commit: Commit }, payload: string) => {
    const q = query(collection(db, "user"), where("status", "==", payload));
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("SetGetContactedEmployees", e.data());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // Get Employees of Status Interviewing ------------------------
  getInterviewingEmployees: (
    { commit }: { commit: Commit },
    payload: string
  ) => {
    const q = query(collection(db, "user"), where("status", "==", payload));
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("setGetInterviewingEmployees", e.data());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // Get Employee of Status Hired ------------------------
  getHiredEmployees: ({ commit }: { commit: Commit }, payload: string) => {
    const q = query(collection(db, "user"), where("status", "==", payload));
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("setGetHiredEmployees", e.data());
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
