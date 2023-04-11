<template>
  <div class="side-bar">
    <v-navigation-drawer class="bg-background-menu">
      <v-layout full-height class="d-flex flex-column justify-space-between">
        <div class="top-menu">
          <span class="logo-img">
            <img class="my-10 mx-auto" src="../assets/icons/logo2.svg" />
          </span>

          <v-btn class="navigation-btn" variant="text" router to="/search">
            <img src="@/assets/icons/Search.svg" />
            Search
          </v-btn>
          <v-btn class="navigation-btn" variant="text" router to="/shortlist">
            <img src="@/assets/icons/star_outlined.svg" />
            Shortlist
          </v-btn>
          <v-btn class="navigation-btn" variant="text" router to="/chat">
            <img src="@/assets/icons/messenger_1.svg" />
            Chat
          </v-btn>
        </div>

        <PostBtn variant="outlined" class="post-btn" />

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
import PostBtn from "./PostBtn.vue";
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
