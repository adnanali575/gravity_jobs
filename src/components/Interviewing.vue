<template>
  <div class="px-0 pb-4 px-sm-4 px-md-8">
    <v-row class="card-box" flat no-gutters>
      <v-col
        class=""
        v-for="(employee, index) in interviewingEmployees"
        :key="index"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
      >
        <EmployeeCard :employee="employee" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from "./EmployeeCard.vue";
import { onMounted } from "vue";
import store from "@/store/store";
import { computed } from "@vue/reactivity";


let interviewingEmployees = computed(() => {
  return store.state.interviewingEmployees;
});
</script>
