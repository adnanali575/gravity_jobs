<template>
  <div class="card-container">
    <v-sheet class="bg-background mx-2 ma-md-3">
      <v-card height="fit-content" variant="flat" class="pa-4 employee-card">
        <v-sheet class="d-flex">
          <router-link to="/profile">
            <v-avatar class="profile-avatar">
              <img
                src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
              />
            </v-avatar>
          </router-link>

          <v-sheet
            class="d-flex flex-column align-start justify-space-evenly px-4"
          >
            <b>Marc Dupond</b>
            <v-chip class="bg-cto font-weight-bold text-purple px-4"
              >CTO</v-chip
            >
          </v-sheet>
        </v-sheet>

        <v-sheet class="mt-5">
          <v-row no-gutters class="">
            <v-col cols="6">
              <v-sheet class="">
                <p class="font-weight-medium">Localisation</p>
                <p>Full-remote</p>
              </v-sheet>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="6" class="px-2">
              <v-sheet class="">
                <p class="font-weight-medium">Last Activity</p>
                <span class="d-flex justify-start align-center">
                  <span><img src="@/assets/icons/github_2.svg" /></span>
                  <p class="ms-2">6 hours ago</p>
                </span>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet class="mt-5">
          <p class="font-weight-medium">Stacks used</p>
          <v-sheet>
            <v-chip class="ma-2" color="primary" label text-color="white"
              >Vue js</v-chip
            >
            <v-chip class="ma-2" color="primary" label text-color="white"
              >Vuetify</v-chip
            >
            <v-chip class="ma-2" color="primary" label text-color="white"
              >Vuex</v-chip
            >
          </v-sheet>
        </v-sheet>

        <slot class="mt-2"></slot>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.employee-card {
  filter: drop-shadow(0px 6px 18px #d9dbe9);
  width: 100%;
}

.profile-avatar {
  width: 88px !important;
  height: 88px !important;
}

.profile-avatar img{
  height: 100%;
}
</style>
