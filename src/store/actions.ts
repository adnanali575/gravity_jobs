import {
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  getDocs,
  where,
  setDoc,
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
        setDoc(doc(db, "user", credential.user.uid), {
          firstName: "adnan",
          lastName: "Doe",
          companyName: "ABC Inc.",
          role: "HR Manager",
          numberOfRecruitments: 10,
          email: "johndoe@example.com",
          number: "+1 (555) 123-4567",
          userId: credential.user.uid,
        });
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

  // Setting Current User ID -------------------------

  setCurrentUserDetails: ({ commit }: { commit: Commit }, payload: string) => {
    commit("setCurrentUserDetails", payload);
  },

  // Post Condidate Details ------------------------
  postJob: ({ state }: { state: any }, payload: jobPostingObject) => {

    setDoc(doc(db, "jobs", state.userId), payload)
    .then((credentials)=>{
      console.log('Job Posted Successfully')
    })
    .catch(()=>{
      console.log('Some thing went wrong.....!')
    })
  },

  // Get Employee Data By Query Search Data ------------------------
  getData: ({ commit }: { commit: Commit }) => {
    const searchValues = ["Vue js", "React"];
    const q = query(
      collection(db, "jobs"),
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
      collection(db, "user"),
      where("email", "==", payload.email)
    );
    getDocs(q)
      .then((querySnap) => {
        querySnap.forEach((e) => {
          commit("setShowProfile", e.data());
          console.log(e.data());
          router.push("/profile");
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
