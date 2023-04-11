<template>
  <div
    class="bottom-bar-container gb-white d-xs-block d-sm-block d-md-block d-lg-none d-xl-none"
  >
    <v-app-bar flat class="bottom-bar" location="bottom">
      <div class="nav-list">
        <v-btn class="nav-btn" router to="/search">
          <img src="@/assets/icons/search_black.svg" />
        </v-btn>

        <v-btn class="nav-btn" router to="/shortlist">
          <img src="@/assets/icons/star_black.svg" />
        </v-btn>

        <v-btn class="nav-btn" router to="/chat">
          <img src="@/assets/icons/messenger_black.svg" />
        </v-btn>

        <notification class="nav-btn" />

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="nav-btn" v-bind="props">
              <img src="@/assets/icons/user_black.svg" />
            </v-btn>
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
              @click="signOut"
              value="logout"
              title="Log out"
              prepend-icon="mdi-export"
              active-color="primary"
            >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import notification from "./Notification.vue";

const signOut = () => {};
</script>

<style scoped lang="scss">
.bottom-bar {
  height: 56px;
  box-shadow: 0px 0px 1px 1px #d8d8d8;

  .icons-box {
    width: 100%;
    box-sizing: border-box;
  }

  .bottom-bar img {
    width: 24px;
  }

  .nav-list {
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .nav-btn {
      height: 64px;
      border-radius: 0px;

      img {
        margin-top: -10px;
      }
    }
  }
}
</style>
