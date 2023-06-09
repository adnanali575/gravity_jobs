<template>
  <div class="px-0 pb-4 px-sm-4 px-md-8">
    <ConfirmationAlert :show="true">
      <template #confirmBtn>
        <BaseButton height="39px" @click="terminateEmployee" variant="flat" title="Confirm" />
      </template>
    </ConfirmationAlert>
    <div v-if="hiredEmployees.length==0 && !hireLoader" class="empty">
      <p>Not yet hired</p>
    </div>
    <PreLoader v-if="hireLoader"></PreLoader>
    <v-row v-if="hiredEmployees.length > 0" class="card-box" flat no-gutters>
      <v-col
        v-for="(employee, index) in hiredEmployees"
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
import ConfirmationAlert from "./ConfirmationAlert.vue";
import BaseButton from "./BaseButton.vue";
import PreLoader from "./PreLoader.vue";
import store from "../store/store";
import { computed } from "@vue/reactivity";

let hiredEmployees = computed(() => {
  return store.state.hiredEmployees;
});

const terminateEmployee = ()=>{
  store.state.confirmTermination = false
  store.dispatch("terminateEmployees", store.state.employeeToTerminate);
}

const hireLoader = computed(()=>{
  return store.state.hireLoader
})
</script>
