<template>
  <div class="d-flex pa-3 align-center">
    <notification />
    <v-sheet class="d-flex align-center">
      <v-divider vertical class="me-2" thickness="2px"></v-divider>
      <b style="width: 100px">Jean Durand</b>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
            v-bind="props"
          ></v-btn>
        </template>

        <v-list width="245px" density="compact">
          <v-list-item
            value="settings"
            title="Settings"
            prepend-icon="mdi-format-list-checks"
            active-color="primary"
            router to="/account"
          >
          </v-list-item>
          <v-list-item
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
import notification from "./Notification.vue";
console
let show = false;
</script>
