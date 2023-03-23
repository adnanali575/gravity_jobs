<template>
  <div
    class="bottom-bar-container gb-white d-xs-block d-sm-block d-md-block d-lg-none d-xl-none"
  >
    <v-app-bar flat class="bottom-bar" location="bottom">
      <v-list
        width="100%"
        density="compact"
        class="d-flex align-start justify-space-around"
      >
        <v-list-item height="" value="search" router to="/search">
          <span>
            <img src="@/assets/icons/search_black.svg" />
          </span>
        </v-list-item>

        <v-list-item height="" value="shortlist" router to="/shortlist">
          <span>
            <img src="@/assets/icons/star_black.svg" />
          </span>
        </v-list-item>

        <v-list-item height="" value="chat" router to="/chat">
          <span>
            <img src="@/assets/icons/messenger_black.svg" />
          </span>
        </v-list-item>

        <notification />

        <v-list-item height="" value="profile" router to="/profile">
          <span>
            <img src="@/assets/icons/user_black.svg" />
          </span>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import notification from "./Notification.vue";
</script>

<style scoped>
.bottom-bar {
  height: 56px;
  box-shadow: 0px 0px 1px 1px #d8d8d8;
}

.icons-box {
  width: 100%;
  box-sizing: border-box;
}

.bottom-bar img{
  width: 24px;
}
</style>
