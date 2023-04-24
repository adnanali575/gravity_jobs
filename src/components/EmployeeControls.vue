<template>
  <div class="button-box">
    <BaseButton
      @click="updateEmployeeStatus('shortlisted', '')"
      v-if="!isNull"
      title="Add Shortlit"
      variant="outlined"
    />
    <BaseButton
      @click="updateEmployeeStatus('contacted', 'shortlisted')"
      v-if="isShortlisted && isNull"
      title="Contact"
      variant="flat"
    />
    <BaseButton
      @click="updateEmployeeStatus('interviewing', 'contacted')"
      v-if="isContacted && !isShortlisted"
      title="Interview"
      variant="flat"
    />
    <BaseButton
      @click="updateEmployeeStatus('hired', 'interviewing')"
      v-if="isInterviewwing && !isContacted"
      title="Hire"
      variant="flat"
    />
    <BaseButton
      @click="
        terminateEmployee('hired', `${employee.firstName} ${employee.lastName}`)
      "
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

let shortlisted = computed(() => {
  return store.state.currentUserDetails.shortlisted;
});

let contacted = computed(() => {
  return store.state.currentUserDetails.contacted;
});

let interviewing = computed(() => {
  return store.state.currentUserDetails.interviewing;
});

let hired = computed(() => {
  return store.state.currentUserDetails.hired;
});

const isNull = computed((e) => {
  return (
    shortlisted.value.includes(props.employee.docId) ||
    contacted.value.includes(props.employee.docId) ||
    interviewing.value.includes(props.employee.docId) ||
    hired.value.includes(props.employee.docId)
  );
});

const isShortlisted = computed((e) => {
  return store.state.currentUserDetails.shortlisted.includes(
    props.employee.docId
  );
});

const isContacted = computed((e) => {
  return store.state.currentUserDetails.contacted.includes(
    props.employee.docId
  );
});

const isInterviewwing = computed((e) => {
  return store.state.currentUserDetails.interviewing.includes(
    props.employee.docId
  );
});

const isHired = computed((e) => {
  return store.state.currentUserDetails.hired.includes(props.employee.docId);
});

const updateEmployeeStatus = (status: string, arrayToRemove: string) => {
  store.dispatch("updateEmployeeStatus", {
    docId: props.employee.docId,
    userId: store.state.currentUserDetails.userId,
    fieldRef: status,
    arrayToRemove: arrayToRemove,
  });
};

const terminateEmployee = (terminateFrom: string, name: string) => {
  let confirmTermination = confirm(
    "Are you sure you want to terminate: " + name
  );
  if (confirmTermination) {
    store.dispatch("terminateEmployee", {
      docId: props.employee.docId,
      userId: store.state.currentUserDetails.userId,
      arrayToRemove: terminateFrom,
    });
  }
};
</script>

<style scoped lang="scss">
.button-box {
  width: 100%;
}
</style>
