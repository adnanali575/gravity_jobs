<template>
  <div class="px-0 pb-4 px-sm-4 px-md-8">
    <div v-if="contactedEmployees.length==0 && !contactLoader" class="empty">
      <p>Not yet contacted</p>
    </div>
    <PreLoader v-if="contactLoader"></PreLoader>
    <v-row v-if="contactedEmployees.length > 0" class="card-box" flat no-gutters>
      <v-col
        v-for="(employee, index) in contactedEmployees"
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


const contactedEmployees = computed(() => {
  return store.state.contactedEmployees;
});

const contactLoader = computed(()=>{
  return store.state.contactLoader
})
</script>
