<template>
  <div>
    <SignInForm>
      <template #form>
        <div class="form-content">
          <SignUpForm></SignUpForm>
        </div>
      </template>

      <template #optionalNavigation>
        <v-sheet class="d-flex align-center justify-center align-self-end">
          <p>Don’t have any account?</p>
          <v-btn
            class="text-capitalize"
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
</script>

<style scoped lang="scss">
.form-control {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
}
</style>
