<template>
  <div class="left" id="list">
    <div class="search-bar-menu bg-white">
      <div class="search-field d-flex align-center justify-space-between">
        <v-btn icon="" class="search-btn bg-input-background" flat>
          <img src="../assets/icons/search.svg" alt="" />
        </v-btn>
        <validationFreeInput
          class="ps-11"
          v-model="searchText"
          placeholder="Search Inbox"
        />
        <slot name="close-list"></slot>
      </div>
    </div>

    <div class="list">
      <v-divider class="divider"></v-divider>
      <v-list class="py-0">
        <PreLoader v-if="chatListLoader" class="chat-list-pre-loader" />
        <p
          v-if="!chatListLoader && chatUsers.length == 0"
          class="pa-5 text-center"
        >
          No User Yet..
        </p>
        <div
          v-if="!chatListLoader && chatUsers.length > 0"
          v-for="(user, index) in filteredChatUsers"
          :key="index"
          @click="openChat"
        >
          <v-list-item
            class="chat-item"
            :value="user.userId"
            exact
            router
            :to="'/chat/' + user.userId"
          >
            <v-sheet class="py-2 d-flex">
              <v-avatar class="profile-avatar me-4">
                <img :src="user.imageUrl" />
              </v-avatar>

              <div class="inner-content">
                <div class="d-flex justify-space-between">
                  <b class="heading"
                    >{{ user.firstName }} {{ user.lastName }}</b
                  >
                  <p v-if="user.minutes && user.hours">
                    {{ hours(user.hours) }}:{{ minutes(user.minutes) }}
                    {{ period(user.hours) }}
                  </p>
                </div>
                <div class="text d-flex align-center">
                  <p>{{ lastMessage(user.lastMessage) }}</p>
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
import validationFreeInput from "./validationFreeInput.vue";
import PreLoader from "./PreLoader.vue";

import { hours, minutes, period } from "../functions";
import store from "../store/store";
import type { ChatUser } from "../types";
import { computed, ref } from "vue";

let searchText = ref("");


const filteredChatUsers = computed(() => {
  const searchQuery = searchText.value.toLowerCase().trim();
  let sortedUsers = chatUsers.value.slice();
  
  if (searchQuery) {
    sortedUsers = sortedUsers.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchQuery);
    });
  }

  sortedUsers.sort((a, b) => {
    const timeA = getTimeValue(a.hours, a.minutes);
    const timeB = getTimeValue(b.hours, b.minutes);
    return timeB - timeA;
  });

  return sortedUsers;
});

const getTimeValue = (hours: number, minutes: number) => {
  return hours * 60 + minutes;
};

const openChat = () => {
  store.state.chats = !store.state.chats;
};
let chatUsers = computed(() => {
  let data = store.state.chatUsers;
  let uniqueObjects: ChatUser[] = [];
  let ids: any[] = [];
  data.forEach((obj) => {
    if (!ids.includes(obj.userId)) {
      uniqueObjects.push(obj);
      ids.push(obj.userId);
    }
  });
  return uniqueObjects;
});

const chatListLoader = computed(() => {
  return store.state.chatListLoader;
});

const lastMessage = (message: string) => {
  if (message) {
    if (message.length > 20) return message.slice(0, 26) + "......";
    else return message;
  } else return "";
};
</script>

<style scoped lang="scss">
@import "../scss/_variables";

.chat-list-pre-loader {
  width: 200px;
}

.left {
  width: 500px;
  display: grid;
  grid-template-rows: 72px 1fr;

  .divider {
    opacity: 1;
    color: $divider-color;
  }
}

.search-bar-menu {
  padding: 0px 20px;
  width: 100%;

  .search-btn {
    margin-right: -48px;
  }
}

.list {
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: $white;
}

.list:hover{
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

.search-field-box {
  height: 48px;
  width: 100%;
  background: $input-background;
  border-radius: 40px;
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

  img {
    height: auto;
  }
}

.profile-avatar img {
  width: 100%;
}

.inner-content {
  width: 100%;
}

@media (max-width: 900px) {
  .search-field-box {
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
