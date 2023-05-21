<template>
  <div class="button-box">
    <BaseButton
      :disabled="employee.userId == store.state.currentUserDetails.userId"
      @click="shortlistEmployees"
      :loader="employee.loading"
      v-if="!isNull"
      :disable="disable"
      title="Add Shortlit"
      variant="outlined"
    />
    <BaseButton
      @click="contactEmployees"
      :loader="employee.loading"
      v-if="isShortlisted && isNull"
      title="Contact"
      variant="flat"
    />
    <BaseButton
      @click="interviewEmployees"
      :loader="employee.loading"
      v-if="isContacted && !isShortlisted"
      title="Interview"
      variant="flat"
    />
    <BaseButton
      @click="hireEmployees"
      :loader="employee.loading"
      v-if="isInterviewwing && !isContacted"
      title="Hire"
      variant="flat"
    />
    <BaseButton
      @click="terminateEmployee('hired')"
      :loader="employee.loading"
      v-if="isHired && !isInterviewwing"
      title="Terminate"
      variant="flat"
    />
  </div>
</template>

<script setup lang="ts">
import store from "@/store/store";
import BaseButton from "./BaseButton.vue";
import type { EmployeesInfoTypes } from "@/types";
import { computed } from "vue";

const props = defineProps<{
  employee: EmployeesInfoTypes;
}>();

const disable = computed(() => {
  if (props.employee.userId === store.state.currentUserDetails.userId) {
    return true;
  } else return false;
});

const cardButtonLoader = computed(() => {
  return store.state.cardButtonLoader;
});

const isNull = computed((e) => {
  return (
    store.state.shortListedEmployees.some(
      (obj) => obj.docId === props.employee.docId
    ) ||
    store.state.contactedEmployees.some(
      (obj) => obj.docId === props.employee.docId
    ) ||
    store.state.interviewingEmployees.some(
      (obj) => obj.docId === props.employee.docId
    ) ||
    store.state.hiredEmployees.some((obj) => obj.docId === props.employee.docId)
  );
});

let isShortlisted = computed(() => {
  return store.state.shortListedEmployees.some(
    (obj) => obj.docId === props.employee.docId
  );
});

const isContacted = computed((e) => {
  return store.state.contactedEmployees.some(
    (obj) => obj.docId === props.employee.docId
  );
});

const isInterviewwing = computed((e) => {
  return store.state.interviewingEmployees.some(
    (obj) => obj.docId === props.employee.docId
  );
});

const isHired = computed((e) => {
  return store.state.hiredEmployees.some(
    (obj) => obj.docId === props.employee.docId
  );
});

// ----------------------------------------------------------
const shortlistEmployees = () => {
  store.dispatch("shortlistEmployee", props.employee);
};

const contactEmployees = () => {
  store.dispatch("contactEmployees", props.employee);
};

const interviewEmployees = () => {
  store.dispatch("interviewEmployees", props.employee);
};

const hireEmployees = () => {
  store.dispatch("hireEmployees", props.employee);
};

const terminateEmployee = (name: string) => {
    store.state.confirmTermination = true
    store.commit('setEmployeeToTerminate', props.employee)
};
</script>

<style scoped lang="scss">
.button-box {
  width: 100%;
}
</style>
