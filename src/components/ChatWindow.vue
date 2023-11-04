<template>
  <div class="right">
    <div class="profile-bar">
      <v-sheet height="100%" class="d-flex align-center">
        <v-avatar class="profile-avatar mx-4">
          <img :src="chatUser.imageUrl" />
        </v-avatar>
        <p class="name-heading">
          {{ chatUser.firstName }} {{ chatUser.lastName }}
        </p>
        <v-spacer></v-spacer>
        <v-btn
          class="chat-list-toggle mx-3"
          icon="mdi-format-list-bulleted"
          density="comfortable"
          flat
          @click="toggleList"
        ></v-btn>
      </v-sheet>
      <v-divider></v-divider>
    </div>

    <div class="chat-section">
      <v-sheet class="my-2" v-if="false">
        <v-divider></v-divider>
        <div class="date-text d-flex justify-center">
          <p class="px-5 bg-white text-center">11 Jan</p>
        </div>
      </v-sheet>

      <v-sheet
        class="chat-info mx-auto my-4 d-flex"
        v-for="(message, index) in messages"
        :key="index"
      >
        <v-avatar class="profile-avatar me-4">
          <img :src="message.imageUrl" />
        </v-avatar>
        <div>
          <span class="d-flex my-1">
            <p class="name">{{ userName(message.userName) }}</p>
            <p class="date ms-5">
              {{ hours(message.hours) }}:{{ minutes(message.minutes) }}
              {{ period(message.hours) }}
            </p>
          </span>
          <p class="desccription" :class="{ sender: sender(message.senderId) }">
            {{ message.text }}
          </p>
        </div>
      </v-sheet>
    </div>

    <div class="chat-bar px-8">
      <div class="chat-box d-flex justify-space-between align-center">
        <WriteMessagePopUp />
        <v-sheet class="bg-background" width="100%">
          <validationFreeInput
            class="pe-13"
            v-model="messageText"
            placeholder="Write your message...."
            @keypress.enter="sendMessage"
          />
        </v-sheet>
        <v-btn
          flat
          icon="mdi-send"
          @click="sendMessage"
          class="send-btn"
          color="primary"
        ></v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import validationFreeInput from "../components/validationFreeInput.vue";
import WriteMessagePopUp from "./WriteMessagePopUp.vue";
import { hours, minutes, period } from "../functions";
import { ref } from "vue";
import store from "../store/store";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

const route = useRoute();

let messageText = ref("");

let toggleList = () => {
  store.state.chats = !store.state.chats;
};

const sendMessage = () => {
  if (messageText.value) {
    let recieverId = ref<string | string[]>();
    recieverId.value = route.params.id;
    store.dispatch("sendMessage", {
      text: messageText.value,
      recieverId: recieverId.value,
    });
    messageText.value = "";
  }
};

onMounted(() => {
  let recieverId = route.params.id;
  store.dispatch("getMessages", recieverId);
});

watch(
  () => route.params.id,
  (id) => {
    store.dispatch("getMessages", id);
  }
);

const chatUser = computed(() => {
  return store.state.chatUser;
});

const messages = computed(() => {
  return store.state.messages;
});

const userName = (name: string) => {
  let userName = `${store.state.currentUserDetails.firstName} ${store.state.currentUserDetails.lastName}`;

  if (name === userName) return "You";
  else return name;
};

const sender = (senderId: string) => {
  if (senderId === store.state.currentUserDetails.userId) return true;
  else return false;
};
</script>

<style scoped lang="scss">
@import "../scss/variables";

.sender {
  background-color: $primary !important;
  color: $white !important;
}

.right {
  overflow: hidden;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-rows: 72px 1fr 80px;

  .profile-bar {
    width: 100%;
  }

  .chat-list-toggle {
    display: none;
  }

  .name-heading {
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
  }

  .chat-section {
    background-color: $white;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 20px 20px;
    display: flex;
    flex-direction: column-reverse;
  }

  .chat-section:hover{
    overflow-y: auto;
  }

  .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  .desccription {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 7px 100%, 7px 7px);
    font-weight: 400;
    font-size: 14px;
    width: fit-content;
    line-height: 24px;
    background-color: $input-background;
    color: $label-primary;
    padding: 7px 10px 7px 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .profile-avatar img {
    width: 100%;
  }

  .date {
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .date-text {
    margin-top: -13px;
    p {
      width: fit-content;
      z-index: 1000;
    }
  }

  .chat-info {
    width: 100%;
    max-width: 1000px;
  }

  .chat-box {
    background-color: $background ;
    width: 100%;
    max-width: 1000px;
  }

  .chat-bar {
    background-color: $background;
    box-shadow: $shadow;
    display: flex;
    justify-content: center;
    align-items: center;

    .send-btn {
      margin-left: -46px;
      height: 40px !important;
      width: 40px;
    }
  }
}

@media (max-width: 900px) {
  .chat-list-toggle {
    display: flex !important;
  }

  .right {
    grid-template-rows: 65px 1fr 80px;
  }
}
</style>
