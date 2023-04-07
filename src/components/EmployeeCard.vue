<template>
  <div class="card-container">
    <v-sheet class="bg-background mx-2 ma-md-3">
      <v-card height="fit-content" variant="flat" class="pa-4 employee-card">
        <v-sheet class="d-flex">
          <div @click="showProfile">
            <v-avatar class="profile-avatar">
              <img
                src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
              />
            </v-avatar>
          </div>

          <v-sheet
            class="d-flex flex-column align-start justify-space-evenly px-4"
          >
            <b>{{ employee.firstName }} {{ employee.lastName }}</b>
            <v-chip :class="`bg-${employee.seniority[0]} text-${employee.seniority[0]}-text font-weight-bold px-4`">{{
              employee.seniority[0]
            }}</v-chip>
          </v-sheet>
        </v-sheet>

        <v-sheet class="mt-5">
          <v-row no-gutters class="">
            <v-col cols="6">
              <v-sheet class="">
                <p class="font-weight-medium">Localisation</p>
                <p>{{ employee.location }}</p>
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
            <v-chip
              v-for="(stack, index) in employee.stacks"
              :key="index"
              class="ma-2"
              color="primary"
              label
              text-color="white"
              >{{ stack }}</v-chip
            >
          </v-sheet>
        </v-sheet>

        <div class="mt-5">
          <BaseButton
            v-if="nullStatus"
            @click="updateStatus"
            title="Add Shortlit"
            vari="outlined"
          />
          <BaseButton
            v-if="contacted"
            @click="updateStatus"
            title="Contact"
            vari="flat"
          />
          <BaseButton
            v-if="interview"
            @click="updateStatus"
            title="Interview"
            vari="flat"
          />
          <BaseButton
            v-if="hire"
            @click="updateStatus"
            title="Hire"
            vari="flat"
          />
        </div>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import store from "@/store/store";
import BaseButton from "./BaseButton.vue";
import type { employeesInfoTypes } from "@/types";
import { computed } from "@vue/reactivity";

const props = defineProps<{
  employee: employeesInfoTypes;
}>();

const showProfile = () => {
  store.dispatch("showProfile", props.employee);
};

const nullStatus = computed(() => {
  return props.employee.status === "";
});

const contacted = computed(() => {
  return props.employee.status === "shortlisted";
});

const interview = computed(() => {
  return props.employee.status === "contacted";
});

const hire = computed(() => {
  return props.employee.status === "interview";
});

const updateStatus = () => {};
</script>

<style scoped lang="scss">
@import '@/scss/variables';
.employee-card {
  filter: drop-shadow($shadow);
  width: 100%;
  border-radius: 8px;
}

.profile-avatar {
  width: 88px !important;
  height: 88px !important;
}

.profile-avatar img {
  height: 100%;
}
</style>
