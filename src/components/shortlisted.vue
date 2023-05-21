<template>
  <div class="px-0 pb-4 px-sm-4 px-md-8">
    <div v-if="shortlistedEmployees.length==0 && !shortlistLoader" class="empty">
      <p>Not yet shortlisted</p>
    </div>
    <PreLoader v-if="shortlistLoader"></PreLoader>
    <v-row v-if="shortlistedEmployees.length > 0" class="card-box" flat no-gutters>
      <v-col
        v-for="(employee, index) in shortlistedEmployees"
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
import PreLoader from "./PreLoader.vue";
import store from "@/store/store";
import { computed} from "@vue/reactivity";

const shortlistedEmployees = computed(() => {
  return store.state.shortListedEmployees;
});

const shortlistLoader = computed(()=>{
  return store.state.shortListLoader
})
</script>
