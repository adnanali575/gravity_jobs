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
      <v-sheet class="chat-info my-4 d-flex" v-for="i in 1" :key="i">
        <v-avatar class="profile-avatar me-4">
          <img
            src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
          />
        </v-avatar>
        <div>
          <span class="d-flex my-1">
            <p class="name">Jean Durand</p>
            <p class="ms-5">12:45</p>
          </span>
          <p class="decscription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </v-sheet>

      <v-sheet class="my-2">
        <v-divider></v-divider>
        <div class="date-text d-flex justify-center">
          <p class="px-5 bg-white text-center">11 Jan</p>
        </div>
      </v-sheet>

      <v-sheet class="chat-info my-4 d-flex" v-for="i in 12" :key="i">
        <v-avatar class="profile-avatar me-4">
          <img
            src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
          />
        </v-avatar>
        <div>
          <span class="d-flex my-1">
            <p class="name">Jean Durand</p>
            <p class="ms-5">12:45</p>
          </span>
          <p class="decscription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </v-sheet>

      <v-sheet class="my-2">
        <v-divider></v-divider>
        <div class="date-text d-flex justify-center">
          <p class="px-5 bg-white text-center">12 Jan</p>
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
          />
        </v-sheet>
        <v-btn flat icon="mdi-send" class="send-btn" color="primary"></v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import WriteMessagePopUp from "./WriteMessagePopUp.vue";
import { ref } from "vue";

let messageText = ref("");
</script>

<style scoped lang="scss">
@import '@/scss/variables';
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

  .decscription {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    background-color: $background;
    padding: 10px;
    border-radius: 15px;
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
