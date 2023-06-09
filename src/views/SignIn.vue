<template>
  <div class="sign-in">
    <ErrorMessage></ErrorMessage>
    <SignInForm>
      <template #form>
        <div class="form-content bg-red">
          <v-sheet>
            <BaseInput
              @keyup="validation"
              v-model="email"
              :empty="emailVal"
              class="controls my-6"
              type="email"
              label="Email"
            />
            <BaseInput
              @keyup="validation"
              v-model="password"
              :empty="passwordVal"
              class="controls mt-6"
              type="password"
              label="Password"
            />
            <BaseButton
              @click="SignIn"
              :loader="signInLoader"
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
          class="option d-flex flex-wrap align-center justify-center align-self-end"
        >
          <p class="text-center">Don’t have any account?</p>
          <v-btn
            class="optional-signup text-capitalize"
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
import ErrorMessage from "@/components/ErrorMessage.vue";
import store from "@/store/store";
import { computed, ref } from "vue";

const signInLoader = computed(() => {
  return store.state.signInLoader;
});

let email = ref("");
let password = ref("");

let emailVal = ref(false);
let passwordVal = ref(false);

let SignIn = () => {
  if (!email.value || !password.value) {
    if (!email.value) emailVal.value = true;
    if (!password.value) passwordVal.value = true;
  } else {
    store.dispatch("SignIn", { email: email.value, password: password.value });
  }
};

const validation = () => {
  if (email.value) emailVal.value = false;
  if (password.value) passwordVal.value = false;
};
</script>

<style scoped lang="scss">
.sign-in {
  .option {
    height: 100%;
  }
  .optional-signup {
    width: 99px;
    margin: 0px 10px;
    height: 26px;
  }
}
</style>
