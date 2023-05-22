<template>
  <div class="forgot-password">
    <SignInForm>
      <template #form>
        <p class="instructions">
          Please enter your e-mail and we’ll send a link to reset your password
        </p>
        <div class="form-content bg-red">
          <v-sheet>
            <BaseInput
              @keyup="validation"
              v-model="email"
              :empty="emailVal"
              class="controls mt-4"
              type="email"
              label="Email"
            />
            <BaseButton
              :loader="store.state.forgotPasswordLoader"
              @click="resetPassword"
              class="controls mt-6"
              title="Submit"
              variant="flat"
            />
          </v-sheet>
        </div>
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

let email = ref("");

let emailVal = ref(false);

let resetPassword = () => {
  if (!email.value) {
    emailVal.value = true;
  } else {
    store.dispatch("resetPassword", email.value);
  }
};

const validation = () => {
  if (email.value) emailVal.value = false;
};
</script>

<style scoped lang="scss">
@import "@/scss/variables";

.instructions {
  margin: auto;
  width: 332px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.75px;
  color: $label-secondary;
}

@media (max-width: 400px) {
  .instructions {
    width: 90%;
  }
}
</style>
