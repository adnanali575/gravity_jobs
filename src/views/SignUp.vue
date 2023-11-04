<template>
  <div class="sign-up">
    <ErrorMessage></ErrorMessage>
    <SignInForm>
      <template #form>
        <div class="form-content">
          <SignUpForm/>
        </div>
      </template>

      <template #optionalNavigation>
        <v-sheet
          class="option d-flex flex-wrap align-center justify-center align-self-end"
        >
          <p class="text-center">Don’t have any account?</p>
          <v-btn
            class="text-capitalize optional-signin"
            variant="text"
            color="primary"
            router
            to="/sign-in"
            >Sign in</v-btn
          >
        </v-sheet>
      </template>
    </SignInForm>
  </div>
</template>

<script setup lang="ts">
import SignUpForm from "@/components/SignUpForm.vue";
import SignInForm from "@/components/SignInForm.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
</script>

<style scoped lang="scss">
.sign-up{
  .option{
    height: 100%;
  }
  .optional-signin {
  width: 99px;
  margin: 0px 10px;
  height: 26px;
}
}
</style>
