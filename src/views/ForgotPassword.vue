<template>
  <div>
    <SignInForm>
      <template #form>
        <p class="instructions">
          Please enter your e-mail and we’ll send a link to reset your password
        </p>
        <div class="form-content bg-red">
          <v-sheet>
            <BaseInput
              class="controls mt-4"
              type="text"
              placeholder=""
              label="Email"
            />
            <BaseButton class="controls mt-6" title="Submit" vari="flat" />
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
</script>

<style scoped>
.instructions{
width: 332px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
text-align: center;
letter-spacing: 0.75px;
color: #4E4B66;
}

</style>
