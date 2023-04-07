<template>
  <div class="reset-confirm">
    <SignInForm>
      <template #form>
        <p class="instructions">
          Confirmation of your email is required to access your account
          services. A confirmation request has been sent to you at: xxx@gmail.
        </p>
        <div class="form-content">
          <v-sheet>
            <p class="instructions mt-16">You have not received anything?</p>
            <BaseButton
              class="controls my-3"
              title="Resend a validation e-mail"
              vari="flat"
            />
            <p class="text-center">OR</p>
            <BaseButton
              class="controls my-3"
              title="Sign in"
              vari="flat"
              router
              to="/sign-in"
            />
          </v-sheet>
        </div>
      </template>
    </SignInForm>
  </div>
</template>

<script setup lang="ts">
import SignInForm from "@/components/SignInForm.vue";
import BaseButton from "@/components/BaseButton.vue";
</script>

<style scoped lang="scss">
@import '@/scss/variables';
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

@media(max-width: 400px){
  .instructions{
    width: 90%;
  }
}
</style>
