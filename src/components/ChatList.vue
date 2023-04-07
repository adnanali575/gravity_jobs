<template>
  <div class="left" id="list">
    <div class="search-bar-menu bg-white">
      <div class="search-field d-flex align-center justify-space-between">
        <span class="text-field-box">
          <v-text-field
            class="bg-input-background rounded-pill"
            variant="outlined"
            placeholder="Search inbox"
            append-inner-icon="mdi-magnify"
            @click:append-inner="OnClick"
          ></v-text-field>
        </span>
        <slot name="close-list"></slot>
      </div>
    </div>

    <v-divider class="divider"></v-divider>

    <div class="list">
      <v-list>
        <div v-for="(i, index) in 20" :key="index">
          <v-list-item @click="" class="chat-item" :value="i">
            <v-sheet class="py-2 d-flex">
              <v-avatar class="profile-avatar me-4">
                <img
                  src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                />
              </v-avatar>

              <div class="inner-content">
                <div class="d-flex justify-space-between">
                  <b class="heading">Jean Besson-Perrier</b>
                  <p>12:45</p>
                </div>
                <div class="text d-flex align-center">
                  <p>
                    Hello Jean Besson-Perrier, I’m looking for a CTO...
                  </p>
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
import { ref } from "vue";

let searchText = ref<string>("");

let OnClick = () => {};
</script>

<style scoped lang="scss">
@import '@/scss/_variables';

.left {
  width: 500px;
  display: grid;
  grid-template-rows: 80px 1fr;

  .divider{
    opacity: 1;
    color: $divider-color;
  }
}

.search-bar-menu {
  padding: 0px 20px;
  width: 100%;
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
