<template>
  <div class="left" id="list">
    <div class="search-bar-menu bg-white">
      <div class="search-field d-flex align-center justify-space-between">
        <span class="text-field-box d-flex align-center">
          <v-btn icon="" class="search-btn bg-input-background" flat>
            <img src="@/assets/icons/search_black.svg" alt="" />
          </v-btn>
          <BaseInput
            class="ps-14"
            v-model="searchText"
            placeholder="Search Inbox"
          />
        </span>
        <slot name="close-list"></slot>
      </div>
    </div>

    <div class="list">
      <v-divider class="divider"></v-divider>
      <v-list class="py-0">
        <div v-for="(user, index) in usersDetails" :key="index">
          <v-list-item @click="openChat" class="chat-item" :value="user.userId">
            <v-sheet class="py-2 d-flex">
              <v-avatar class="profile-avatar me-4">
                <img :src="user.userProfile" />
              </v-avatar>

              <div class="inner-content">
                <div class="d-flex justify-space-between">
                  <b class="heading"
                    >{{ user.firstName }} {{ user.lastName }}</b
                  >
                  <p>12:45</p>
                </div>
                <div class="text d-flex align-center">
                  <p>{{ user.lastMessage }}</p>
                  <v-badge
                    v-if="false"
                    class="me-1"
                    color="primary"
                    dot
                  ></v-badge>
                </div>
              </div>
            </v-sheet>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import store from "@/store/store";
import { computed, onMounted, ref } from "vue";

let searchText = ref<string>("");

onMounted(() => {
  store.dispatch("getUsersDetails");
});

let usersDetails = computed(() => {
  return store.state.usersDetails;
});

const openChat = () => {
  store.dispatch("getMessages", store.state.currentUserDetails.userId);
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.left {
  width: 500px;
  display: grid;
  grid-template-rows: 80px 1fr;

  .divider {
    opacity: 1;
    color: $divider-color;
  }
}

.search-bar-menu {
  padding: 0px 20px;
  width: 100%;

  .search-btn {
    margin-right: -52px;
  }
}

.list {
  overflow-x: hidden;
  overflow-y: auto;
}

.heading {
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
}

.search-field {
  width: 100%;
  height: 100%;
  background-color: $white;
}

.text-field-box {
  height: 56px;
  width: 100%;
}

.text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.75px;
}

.v-list-item {
  transition: all 0.1s ease-in-out;
}

.v-list-item--active {
  border-left: 8px solid $primary;
}

.profile-avatar {
  width: 64px;
  height: 64px;

  img{
    width: 100%;
    height: auto;
  }
}

.profile-avatar img {
  height: 100%;
}

.inner-content {
  width: 100%;
}

@media (max-width: 900px) {
  .text-field-box {
    width: 85% !important;
  }
}

@media (max-width: 300px) {
  .text {
    p {
      display: none;
    }
  }
}
</style>
