<template>
  <div>
    <v-row no-gutters class="d-flex justify-space-between">
      <v-col cols="12" sm="5">
        <BaseInput class="input" v-model="firstName" label="First name" />
      </v-col>
      <v-col cols="12" sm="5">
        <BaseInput class="input" v-model="lastName" label="Last name" />
      </v-col>
      <v-col cols="12">
        <BaseInput class="input" v-model="companyName" label="Company Name" />
      </v-col>
      <v-col cols="12">
        <BaseInput class="input" v-model="role" label="Role" />
      </v-col>
      <v-col cols="12">
        <BaseInput
          class="input"
          v-model="noOfRecrutement"
          label="Number of recrutements"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput class="input" v-model="email" type="email" label="Email" />
      </v-col>
      <v-col cols="12">
        <BaseInput class="input" v-model="phone" type="number" label="Number" />
      </v-col>
      <v-col cols="12">
        <BaseInput
          class="input"
          v-model="password"
          type="password"
          label="Password"
        />
      </v-col>
      <v-col class="mt-3" cols="12">
        <slot name="userDetails" v-bind="userDetails"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import type { UserDetails } from "@/types";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import store from "@/store/store";

const props = defineProps<{
  accountInfo?: UserDetails;
  formStatus?: boolean;
}>();

let firstName = ref(props.accountInfo?.firstName || "");
let lastName = ref(props.accountInfo?.lastName || "");
let companyName = ref(props.accountInfo?.companyName || "");
let role = ref(props.accountInfo?.role || "");
let noOfRecrutement = ref(props.accountInfo?.noOfRecrutement || "");
let email = ref(props.accountInfo?.email || "");
let phone = ref(props.accountInfo?.phone || "");
let password = ref(props.accountInfo?.password || "");
let shortlisted = Array<string>();
let contacted = Array<string>();
let interviewing = Array<string>();
let hired = Array<string>();

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
    shortlisted: shortlisted,
    contacted: contacted,
    interviewing: interviewing,
    hired: hired,
    userId: store.state.currentUserDetails.userId,
  };
});
</script>

<style scoped lang="scss">
.input {
  margin: 8px 0px;
}
</style>
