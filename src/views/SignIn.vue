<template>
  <div class="sign-in">
    <SignInForm>
      <template #form>
        <div class="form-content bg-red">
          <v-sheet>
            <BaseInput
              v-model="email"
              class="controls mt-4"
              type="email"
              label="Email"
            />
            <BaseInput
              v-model="password"
              class="controls mt-4"
              type="password"
              label="Password"
            />
            <BaseButton
              @action="SignIn"
              class="controls mt-6"
              title="Sign in"
              variant="flat"
            />
            <span class="d-flex justify-end">
              <v-btn
                class="mt-2 text-capitalize"
                variant="text"
                color="primary"
                router
                to="/forgot-password"
                >Forgot Password</v-btn
              >
            </span>
          </v-sheet>
        </div>
      </template>

      <template #optionalNavigation>
        <v-sheet
          class="d-flex flex-wrap align-center justify-center align-self-end"
        >
          <p class="text-center">Don’t have any account?</p>
          <v-btn
            class="text-capitalize"
            variant="text"
            color="primary"
            router
            to="/sign-up"
            >Join Gravity</v-btn
          >
        </v-sheet>
      </template>
    </SignInForm>
  </div>
</template>

<script setup lang="ts">
import SignInForm from "@/components/SignInForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import store from "@/store/store";
import { ref } from "vue";

let email = ref('');
let password = ref('');

let SignIn = () => {
  store.dispatch("SignIn", { email: email.value, password: password.value });
};
</script>
