<template>
  <div class="header-right-menu pa-3">
    <notification />
    <v-sheet class="d-flex align-center">
      <v-divider vertical class="me-2" thickness="2px"></v-divider>
      <b style="width: 100px">Jean Durand</b>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            density="comfortable"
            v-bind="props"
            icon="mdi-dots-vertical"
          ></v-btn>
        </template>

        <AccountControl />
      </v-menu>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import notification from "./Notification.vue";
import AccountControl from "./AccountControl.vue";
</script>

<style scoped lang="scss">
.header-right-menu {
  display: flex;
  align-items: center;
}

@media (max-width: 1279px) {
  .header-right-menu {
    display: none;
  }
}
</style>
