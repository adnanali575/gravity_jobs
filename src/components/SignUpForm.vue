<template>
  <div>
    <v-row no-gutters class="d-flex justify-space-between">
      <v-col cols="12" sm="5">
        <BaseInput
          @keyup="validation"
          :empty="firstNameVal"
          class="input"
          v-model="firstName"
          label="First name"
        />
      </v-col>
      <v-col cols="12" sm="5">
        <BaseInput
          @keyup="validation"
          :empty="lastNameVal"
          class="input"
          v-model="lastName"
          label="Last name"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="companyNameVal"
          class="input"
          v-model="companyName"
          label="Company Name"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="roleVal"
          class="input"
          v-model="role"
          label="Role"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="noOfRecrutementVal"
          class="input"
          v-model="noOfRecrutement"
          label="Number of recrutements"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="emailVal"
          class="input"
          v-model="email"
          type="email"
          label="Email"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="phoneVal"
          class="input"
          v-model="phone"
          type="number"
          label="Number"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="passwordVal"
          class="input"
          v-model="password"
          type="password"
          label="Password"
        />
      </v-col>
      <v-col class="mt-3" cols="12">
        <BaseButton
          v-if="updateBtn"
          :loader="signUpLoader"
          @click="signUp"
          title="Sign up"
          variant="flat"
        />
        <slot name="userDetails" v-bind="userDetails"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import type { UserDetails } from "@/types";
import { ref, computed } from "vue";
import store from "@/store/store";
import type { SignUpObject } from "@/types";
import BaseButton from "./BaseButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps<{
  accountInfo?: UserDetails;
  formStatus?: boolean;
}>();

const updateBtn = computed(() => {
  if (route.path == "/sign-up") return true;
  else return false;
});

let firstName = ref(props.accountInfo?.firstName || "");
let lastName = ref(props.accountInfo?.lastName || "");
let companyName = ref(props.accountInfo?.companyName || "");
let role = ref(props.accountInfo?.role || "");
let noOfRecrutement = ref(props.accountInfo?.noOfRecrutement || "");
let email = ref(props.accountInfo?.email || "");
let phone = ref(props.accountInfo?.phone || "");
let password = ref(props.accountInfo?.password || "");

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
    userId: store.state.currentUserDetails.userId,
  };
});

let firstNameVal = ref(false);
let lastNameVal = ref(false);
let companyNameVal = ref(false);
let roleVal = ref(false);
let noOfRecrutementVal = ref(false);
let emailVal = ref(false);
let phoneVal = ref(false);
let passwordVal = ref(false);

const signUpLoader = computed(() => {
  return store.state.signUpLoader;
});

let signUp = (userDetails: SignUpObject) => {
  if (
    !firstName.value ||
    !lastName.value ||
    !companyName.value ||
    !role.value ||
    !noOfRecrutement.value ||
    !email.value ||
    !phone.value ||
    !password.value
  ) {
    if (!firstName.value) firstNameVal.value = true;
    if (!lastName.value) lastNameVal.value = true;
    if (!companyName.value) companyNameVal.value = true;
    if (!role.value) roleVal.value = true;
    if (!noOfRecrutement.value) noOfRecrutementVal.value = true;
    if (!email.value) emailVal.value = true;
    if (!phone.value) phoneVal.value = true;
    if (!password.value) passwordVal.value = true;
  } else {
    store.dispatch("signUp", userDetails);
  }
};

const validation = () => {
  if (firstName.value) firstNameVal.value = false;
  if (lastName.value) lastNameVal.value = false;
  if (companyName.value) companyNameVal.value = false;
  if (role.value) roleVal.value = false;
  if (noOfRecrutement.value) noOfRecrutementVal.value = false;
  if (email.value) emailVal.value = false;
  if (phone.value) phoneVal.value = false;
  if (password.value) passwordVal.value = false;
};
</script>

<style scoped lang="scss">
.input {
  margin: 12px 0px;
}
</style>
