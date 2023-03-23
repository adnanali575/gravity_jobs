<template>
  <v-app>
    <v-layout class="layout">
      <router-view name="NavBar"></router-view>
      <router-view class="header" name="header"></router-view>

      <v-main class="main-container">
        <router-view></router-view>
      </v-main>

      <router-view name="BottomNavBar"></router-view>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 2000;
}

.main-container {
  overflow-x: hidden;
  overflow-y: auto;
}

.layout {
  position: fixed;
  height: 100vh;
}
</style>
