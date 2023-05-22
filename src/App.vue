<template>
  <v-app>
    <div class="body-pre-loader" v-if="store.state.bodyPreLoader">
      <PreLoader />
    </div>
    <v-layout class="layout" v-else>
      <router-view name="SideBar"></router-view>
      <router-view
        :headerTitle="headerTitle"
        class="header"
        name="header"
      ></router-view>

      <v-main class="main-container py-0">
        <router-view class="main-view"></router-view>
      </v-main>

      <router-view name="BottomNavBar"></router-view>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import PreLoader from "@/components/PreLoader.vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import store from "./store/store";
import { onMounted } from "vue";
import { onSnapshot, doc } from "firebase/firestore";
import db from "./firebaseInit";

const route = useRoute();
const headerTitle = computed(() => {
  if (route.name === "Chat") return "Chat";
  if (route.name === "AccountSettings") return "My Account";
  if (route.name === "Post") return "Post Job";
});

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.state.bodyPreLoader = true;
      try {
        onSnapshot(doc(db, "users", user.uid), (doc: any) => {
          let data = { ...doc.data(), userId: user.uid };
          console.log(user.email, user.uid);
          store.commit("setCurrentUserDetails", data);
          store.state.bodyPreLoader = false;

          store.dispatch("getShortlistedEmployees");
          store.dispatch("getContactedEmployees");
          store.dispatch("getInterviewingEmployees");
          store.dispatch("getHiredEmployees");
        });
      } catch (error) {
        store.state.bodyPreLoader = false;
      }
    } else {
      console.log("Logged Out");
    }
  });
});
</script>

<style lang="scss">
.introduction,
.reset-confirm,
.sign-in,
.sign-up,
.reset-password,
.forgot-password {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.header {
  position: fixed;
  width: 100%;
  z-index: 2000;
}

.main-container {
  overflow-x: hidden;
  overflow-y: auto;
}

.main-view {
  animation: animate 0.3s linear;
}

.body-pre-loader {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.layout {
  position: fixed;
  height: 100vh;
}
</style>
