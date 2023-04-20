<template>
  <div class="right">
    <div class="profile-bar">
      <v-sheet height="100%" class="d-flex align-center">
        <v-btn icon="" flat router class="mx-4" to="/profile">
          <v-avatar class="profile-avatar mx-4">
            <img
              src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
            />
          </v-avatar>
        </v-btn>
        <p class="name-heading">Jean Besson-Perrier</p>
        <v-spacer></v-spacer>
        <slot name="show-list"></slot>
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
        class="chat-info my-4 d-flex"
        v-for="(message, index) in messages"
        :key="index"
      >
        <v-avatar class="profile-avatar me-4">
          <img :src="message.userProfile" />
        </v-avatar>
        <div>
          <span class="d-flex my-1">
            <p class="name">{{ message.userName }}</p>
            <p class="ms-5">
              {{ message.hours.toString().padStart(2, "0") }}:{{
                message.minutes.toString().padStart(2, "0")
              }}
              {{ period(message.hours) }}
            </p>
          </span>
          <p class="desccription">
            {{ message.text }}
          </p>
        </div>
      </v-sheet>
    </div>

    <div class="chat-bar px-8">
      <div class="chat-box d-flex justify-space-between align-center">
        <WriteMessagePopUp />
        <v-sheet width="100%">
          <BaseInput
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
import BaseInput from "@/components/BaseInput.vue";
import WriteMessagePopUp from "./WriteMessagePopUp.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import store from "@/store/store";
import { computed } from "@vue/reactivity";

let messageText = ref("");
onMounted(() => {
  // store.dispatch("getMessages", store.state.userId);
});

const sendMessage = () => {
  store.dispatch("sendMessage", messageText.value);
  messageText.value = "";
};

const messages = computed(() => {
  return store.state.messages;
});

const period = (hours: number) => {
  if (hours > 12) return "PM";
  else return "AM";
};
</script>

<style scoped lang="scss">
@import "@/scss/variables";
.right {
  overflow: hidden;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-rows: 80px 1fr 80px;

  .profile-bar {
    width: 100%;
    height: 80px;
  }

  .name-heading {
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
  }

  .chat-section {
    background-color: $white;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px 20px;
    display: flex;
    flex-direction: column-reverse;
  }

  .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  .desccription {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 10px 6px);
    font-weight: 400;
    font-size: 14px;
    display: inline;
    min-width: 100px;
    line-height: 24px;
    // background-color: #e9e9e9;
    background-color: $primary;
    color: $white;
    padding: 7px 10px 7px 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .profile-avatar img {
    height: 100%;
  }

  .date-text {
    margin-top: -13px;
    p {
      width: fit-content;
      z-index: 1000;
    }
  }

  .chat-box {
    width: 100%;
  }

  .chat-bar {
    background-color: $white;
    box-shadow: $shadow;
    display: flex;
    justify-content: center;
    align-items: center;

    .send-btn {
      margin-left: -53px;
      margin-top: -3px;
    }
  }
}
</style>
