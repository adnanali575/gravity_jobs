<template>
  <div class="card-container">
    <v-sheet class="bg-background mx-2 ma-md-3">
      <v-card height="fit-content" variant="flat" class="pa-4 employee-card">
        <v-sheet class="d-flex">
          <div>
            <v-btn
              class="card-btn"
              icon=""
              flat
              router
              :to="'/search/' + employee.docId"
            >
              <img :src="employee.imageUrl" />
            </v-btn>
          </div>

          <v-sheet
            class="d-flex flex-column align-start justify-space-evenly px-4"
          >
            <p class="employee-name">
              {{ employee.firstName }} {{ employee.lastName }}
            </p>
            <span class="d-flex flex-wrap">
              <v-chip
                v-if="seniorityArray"
                class="mx-1"
                v-for="(emplo, index) in employee.seniority"
                :key="index"
                :class="`bg-${emplo} text-${emplo}-text font-weight-bold px-4`"
                >{{ emplo }}</v-chip
                >
                <v-chip
                v-if="!seniorityArray"
                class="mx-1"
              :class="`bg-${employee.seniority} text-${employee.seniority}-text font-weight-bold px-4`"
              >{{ employee.seniority }}</v-chip
              >
            </span>
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

        <div class="mt-5" v-if="profilePage">
          <EmployeeControls :employee="employee" />
        </div>
      </v-card>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import EmployeeControls from "./EmployeeControls.vue";
import type { EmployeesInfoTypes } from "@/types";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps<{
  employee: EmployeesInfoTypes;
}>();

let seniorityArray = computed(()=>{
  if(route.name === 'Profile') return true
  else return false
})


const profilePage = computed(() => {
  if (route.name === "Profile") return false;
  else return true;
});
</script>

<style scoped lang="scss">
@import "@/scss/variables";
.employee-card {
  filter: drop-shadow($shadow);
  width: 100%;
  border-radius: 8px;

  .employee-name {
    // font-family: "itc-fonts";
    font-weight: 900;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.75px;
  }

  .card-btn {
    width: 88px !important;
    height: 88px !important;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}

.profile-avatar {
  width: 88px !important;
  height: 88px !important;
}

.profile-avatar img {
  height: 100%;
}
</style>
