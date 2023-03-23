<template>
  <div class="side-bar">
    <v-navigation-drawer class="bg-background-menu ">
      <v-layout full-height class="d-flex flex-column justify-space-between">
        <div class="top-menu">
          <span class="logo-img">
            <img class="my-10 mx-auto" src="../assets/icons/logo2.svg" />
          </span>

          <v-list density="compact" class="mt-8">
            <v-list-item height="56px" value="search" router to="/search">
              <span class="d-flex align-center">
                <v-avatar>
                  <span><img src="@/assets/icons/Search.svg" /></span>
                </v-avatar>
                <v-list-item-title>Search</v-list-item-title>
              </span>
            </v-list-item>

            <v-list-item height="56px" value="shortlist" router to="/shortlist">
              <span class="d-flex align-center">
                <v-avatar>
                  <span><img src="@/assets/icons/star_outlined.svg" /></span>
                </v-avatar>
                <v-list-item-title>Shortlist</v-list-item-title>
              </span>
            </v-list-item>

            <v-list-item height="56px" value="chat" router to="/chat">
              <span class="d-flex align-center">
                <v-avatar>
                  <span><img src="@/assets/icons/messenger_1.svg" /></span>
                </v-avatar>
                <v-list-item-title>Chat</v-list-item-title>
              </span>
            </v-list-item>
          </v-list>
        </div>

        <div class="bottom-menu gb-red pa-3">
          <span>
            <PricingPopup />
          </span>
          <router-link class="text-white text-decoration-none" to="/search">
            <p class="text-body-2 my-5">Terms & conditions</p>
          </router-link>
          <router-link class="text-white text-decoration-none" to="/search">
            <p class="text-body-2 my-5">Policy privacy</p>
          </router-link>
          <p class="text-body-2 my-5 text-label-placeholder">
            © Gravity 2021, All rights reserved.
          </p>
        </div>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import PricingPopup from "./PricingPopup.vue";
</script>

<style scoped>


.v-navigation-drawer{
  height: 100vh;
  position: fixed;
}

.v-list-item--active {
  border-left: 2px solid #fff;
}

.v-card a {
  color: #fff;
}

.logo-img {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
