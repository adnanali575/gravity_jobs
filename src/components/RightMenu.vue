<template>
  <div class="header-right-menu pa-3">
    <notification />
    <v-sheet class="d-flex align-center">
      <v-divider vertical class="me-2" thickness="2px"></v-divider>
      <b style="width: 100px">Jean Durand</b>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          ></v-btn>
        </template>

        <v-list width="245px" density="compact">
          <v-list-item
            value="settings"
            title="Settings"
            prepend-icon="mdi-format-list-checks"
            active-color="primary"
            router
            to="/account-settings"
          >
          </v-list-item>
          <v-list-item
            @click="SignOut"
            value="logout"
            title="Log out"
            prepend-icon="mdi-export"
            active-color="primary"
          >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { auth } from "@/firebaseInit";
import router from '@/router/router'
import { signOut, onAuthStateChanged } from "@firebase/auth";
import notification from "./Notification.vue";
import { ref } from "vue";

let show = ref(false);

let SignOut = () => {
  signOut(auth)
    .then(() => {
      router.push({ name: "SignIn" });
    })
    .catch(() => {});
};
</script>

<style scoped lang="scss">
.header-right-menu {
  display: flex;
  align-items: center;
}

@media (max-width: 1050px) {
  .header-right-menu {
    display: none;
  }
}
</style>
