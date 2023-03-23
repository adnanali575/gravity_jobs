<template>
  <div class="chat-window">

    <v-sheet height="80px" class="d-flex align-center">
        <v-btn icon="" flat router class="mx-4" to="/profile">
          <v-avatar class="profile-avatar mx-4">
              <img
              src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
              />
            </v-avatar>
          </v-btn>
            <p class="name-heading">Jean Besson-Perrier</p>
      </v-sheet>
    <v-divider></v-divider>

    <v-sheet class="content-window pa-4 pa-sm-8">
      <v-sheet class="admin my-4 d-flex">
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </v-sheet>

      <v-sheet class="admin my-4 d-flex">
        <v-avatar class="card-profile-avatar me-4">
          <img
            src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
          />
        </v-avatar>
        <div>
          <span class="d-flex my-1">
            <p class="name">Jean Besson-Perrier</p>
            <p class="ms-5">12:59</p>
          </span>
          <p class="decscription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. :)
          </p>
        </div>
      </v-sheet>

      <v-sheet class="my-12">
        <v-divider></v-divider>
        <div class="date-text d-flex justify-center">
          <p class="px-5 bg-white text-center">12 Jan.</p>
        </div>
      </v-sheet>

      <div class="chat-box d-flex justify-space-between align-center">
        <v-btn flat icon="">
          <img src="@/assets/icons/pencil_signature.svg" />
        </v-btn>
        <v-sheet width="100%">
          <BaseInput type="text" label="" placeholder="Write your message...." />
        </v-sheet>
        <v-btn flat icon="mdi-send" class="send-btn" color="primary"></v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
</script>

<style scoped>
.chat-window {
  padding-top: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.name-heading {
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
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
}

.card-profile-avatar {
  width: 40px;
  height: 40px;
}

.profile-avatar img {
  height: 100%;
}

.date-text{
  transform: translateY(-50%);
}

.date-text p{
  width: fit-content;
}

.chat-box {
  width: 100%;
}

.send-btn {
  margin-left: -53px;
  margin-top: -3px;
}
</style>
