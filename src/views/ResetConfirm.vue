<template>
  <div>
    <SignInForm>
      <template #form>
        <p class="instructions">
          Confirmation of your email is required to access your account
          services. A confirmation request has been sent to you at:
          xxx@gmail.
        </p>
        <div class="form-content">
          <v-sheet>
            <p class="instructions mt-16">You have not received anything?</p>
            <BaseButton class="controls mt-6" title="Resend a validation e-mail" vari="flat" />
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

<style scoped>
.instructions {
  width: 332px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.75px;
  color: #4e4b66;
}
</style>
