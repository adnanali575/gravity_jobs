<template>
  <v-app>
    <v-layout class="layout">
      <router-view name="SideBar"></router-view>
      <router-view
        :headerTitle="headerTitle"
        class="header"
        name="header"
      ></router-view>

      <v-main class="main-container">
        <router-view class="main-view"></router-view>
        <router-view name="FloatinMessage"></router-view>
      </v-main>

      <router-view name="BottomNavBar"></router-view>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import store from "./store/store";

const route = useRoute();
const headerTitle = computed(() => {
  if (route.name === "Chat") return "Chat";
  if (route.name === "AccountSettings") return "My Account";
  if (route.name === "Post") return "Post Job";
});

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch('setCurrentUserDetails', user.uid)
    console.log('Signed In')
    // ...
  } else {
    console.log('Logged Out')
  }
  
});

</script>

<style>
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
  padding-bottom: 0px !important;
  padding-top: 0px !important;
  overflow-x: hidden;
  overflow-y: auto;
}

.main-view {
  animation: animate 0.3s linear;
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
