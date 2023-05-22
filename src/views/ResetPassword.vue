<template>
  <div class="reset-password">
    <SignInForm>
      <template #form>
        <p class="instructions">
          Please enter your e-mail and we’ll send a link to reset your password
        </p>
        <div class="form-content bg-red">
          <v-sheet>
            <BaseInput
              v-model="password"
              class="controls mt-4"
              type="password"
              label="New password"
            />
            <BaseInput
              v-model="confirmPassword"
              class="controls mt-4"
              type="password"
              label="Confirm new password"
            />
            <BaseButton class="controls mt-6" title="Sign in" variant="flat" />
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

let password: string = "";
let confirmPassword: string = "";
</script>

<style scoped lang="scss">
@import "@/scss/variables";
.instructions {
  width: 332px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.75px;
  color: $label-secondary;
}
</style>
