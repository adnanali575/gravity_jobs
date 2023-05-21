<template>
  <div class="px-0 pb-4 px-sm-4 px-md-8">
    <div v-if="interviewingEmployees.length==0 && !interviewLoader" class="empty">
      <p>Not yet selected for interview</p>
    </div>
    <PreLoader v-if="interviewLoader"></PreLoader>
    <v-row v-if="interviewingEmployees.length > 0" class="card-box" flat no-gutters>
      <v-col
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
import store from "@/store/store";
import PreLoader from "./PreLoader.vue";
import { computed } from "@vue/reactivity";


let interviewingEmployees = computed(() => {
  return store.state.interviewingEmployees;
});

const interviewLoader = computed(()=>{
  return store.state.interviewLoader
})
</script>
