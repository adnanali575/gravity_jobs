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
              v-model="email"
              class="controls mt-4"
              type="email"
              label="Email"
            />
            <BaseButton
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
import router from "@/router/router";
import { auth } from "@/firebaseInit";
import { sendPasswordResetEmail } from "@firebase/auth";

let email: string = "";

let resetPassword = () => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent successfully");
    })
    .catch((error) => {
      console.error(error);
    });
};

const submit = () => {
  router.push({ name: "ResetConfirm" });
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
