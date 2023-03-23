<template>
  <div>
    <SignInForm>
      <template #form>
        <div class="form-content bg-red">
          <v-sheet>
            <BaseInput
              class="controls mt-4"
              type="email"
              placeholder=""
              label="Email"
            />
            <BaseInput
              class="controls mt-4"
              type="password"
              placeholder=""
              label="Password"
            />
            <BaseButton class="controls mt-6" title="Sign in" vari="flat" />
            <span class="d-flex justify-end">
              <v-btn class="mt-2 text-capitalize" variant="text" color="primary"
                >Forgot Password</v-btn
              >
            </span>
          </v-sheet>
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
</script>

<style scoped lang="scss">
.form-control {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
}
</style>
