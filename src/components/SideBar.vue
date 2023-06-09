<template>
  <div class="side-bar">
    <v-navigation-drawer class="bg-background-menu">
      <v-layout full-height class="d-flex flex-column justify-space-between">
        <div class="top-menu">
          <router-link to="/">
            <span class="logo-img">
              <img class="my-7 mx-auto" src="../assets/icons/logo2.svg" />
            </span>
          </router-link>

          <v-btn class="navigation-btn" variant="text" router to="/search">
            <img src="../assets/icons/search_white.svg" />
            Search
          </v-btn>
          <v-btn class="navigation-btn" variant="text" router to="/shortlist">
            <img src="../assets/icons/star_outlined.svg" />
            Shortlist
          </v-btn>
          <v-btn class="navigation-btn" variant="text" router to="/chat">
            <img src="../assets/icons/messenger_1.svg" />
            Chat
          </v-btn>
          <v-btn class="navigation-btn" variant="text" router to="/post-job">
            <v-icon class="post-icon"
              >mdi-clipboard-check-multiple-outline</v-icon
            >
            Apply Now
          </v-btn>
        </div>

        <div class="bottom-menu gb-red pa-3">
          <span>
            <PricingPopup />
          </span>
          <p class="text-body-2 my-5">Terms & conditions</p>
          <p class="text-body-2 my-5">Policy privacy</p>
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

<style scoped lang="scss">
.logo-img {
  width: 100%;
  display: flex;
  justify-content: center;
}

.navigation-btn {
  width: 100%;
  height: 60px;
  border-radius: 0px;
  justify-content: flex-start;
  text-transform: capitalize;

  img {
    margin: 0px 10px;
    width: 24px;
  }
  .post-icon {
    margin: 0px 10px;
    font-size: 24px;
  }
}

.top-menu {
  .v-btn--active {
    border-left: 4px solid #fff;
  }
}

.post-btn {
  width: 90%;
  border-radius: 40px;
  margin: auto;
}
</style>
