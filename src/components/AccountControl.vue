<template>
    <v-list width="245px" density="compact">
          <v-list-item
            value="settings"
            title="Settings"
            prepend-icon="mdi-cog-outline"
            active-color="primary"
            router
            to="/account-settings"
          >
          </v-list-item>
          <v-list-item
            @click="SignOut"
            value="logout"
            title="Log out"
            prepend-icon="mdi-logout"
            active-color="primary"
          >
          </v-list-item>
        </v-list>
</template>

<script setup lang="ts">
import store from '@/store/store';

let SignOut = () => {
  store.dispatch('signOut')
};
</script>