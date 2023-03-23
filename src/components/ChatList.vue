<template>
  <div class="chat-list">
    <v-list>
      <div class="px-7 search-field d-flex align-center">
        <span class="text-field-box">
          <v-text-field
            variant="outlined"
            label="Search inbox"
            append-inner-icon="mdi-magnify"
            @click:append-inner="OnClick"
          ></v-text-field>
        </span>
      </div>
      <v-divider></v-divider>

      <div v-for="(i, index) in 8" :key="index">
        <v-list-item class="chat-item" :value="i">
          <v-sheet class="py-2 d-flex">
            <v-avatar class="profile-avatar me-4">
              <img
                src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
              />
            </v-avatar>

            <div>
              <div class="d-flex justify-space-between">
                <b class="heading">Jean Besson-Perrier</b>
                <p>12:45</p>
              </div>
              <div class="text d-flex align-center">
                <p>
                  Hello Jean Besson-Perrier, I’m looking for a CTO for a miss...
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
</template>

<script setup lang="ts">

let OnClick = ()=>{

}

</script>

<style scoped>
.chat-list {
  padding-top: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  height: 100vh;
}

.v-avatar {
  width: 64px;
  height: 64px;
}

.heading {
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
}

.search-field {
  height: 72px;
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
    border-left: 8px solid #6367e7;
  }

  .profile-avatar {
  width: 64px;
  height: 64px;
}

.profile-avatar img{
  height: 100%;
}
</style>
