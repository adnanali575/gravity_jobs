<template>
  <div>
    <v-row no-gutters class="d-flex justify-space-between">
      <v-col cols="12" sm="5">
        <BaseInput v-model="firstName" label="First name" />
      </v-col>
      <v-col cols="12" sm="5">
        <BaseInput v-model="lastName" label="Last name" />
      </v-col>
      <v-col cols="12">
        <BaseInput v-model="companyName" label="Company Name" />
      </v-col>
      <v-col cols="12">
        <BaseInput v-model="role" label="Role" />
      </v-col>
      <v-col cols="12">
        <BaseInput v-model="noOfRecrutement" label="Number of recrutements" />
      </v-col>
      <v-col cols="12">
        <BaseInput v-model="email" type="email" label="Email" />
      </v-col>
      <v-col cols="12">
        <BaseInput v-model="phone" type="number" label="Number" />
      </v-col>
      <v-col cols="12">
        <BaseInput v-model="password" type="password" label="Password" />
      </v-col>
      <v-col class="mt-3" cols="12">
        <slot name="userDetails" v-bind="userDetails"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import { ref } from "vue";
import { computed } from "@vue/reactivity";

const props = defineProps<{
  accountInfo?: any;
  formStatus?: boolean;
}>();


let firstName = ref("");
let lastName = ref("");
let companyName = ref("");
let role = ref("");
let noOfRecrutement = ref("");
let email = ref("");
let phone = ref("");
let password = ref("");

let userDetails = computed(() => {
  return {
    firstName: firstName.value,
    lastName: lastName.value,
    companyName: companyName.value,
    role: role.value,
    noOfRecrutement: noOfRecrutement.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };
});
</script>

<style scoped lang="scss">
.form-control {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
}
</style>
