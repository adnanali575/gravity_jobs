<template>
  <div class="form-submitted">
    <v-card class="submitted-card">
      <h1 class="text-primary text-center py-3">Form Submitted successfully</h1>
      <div class="button-box">
        <BaseButton
          @click="push('search')"
          class="button"
          variant="flat"
          title="Back To Home"
        >
        </BaseButton>
        <BaseButton
          @click="push('post-job')"
          class="button"
          variant="flat"
          title="Submitted another form"
        >
        </BaseButton>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import router from "@/router/router";
import BaseButton from "./BaseButton.vue";

const push = (path: string) => {
  router.push("/" + path);
};
</script>

<style scoped lang="scss">
.form-submitted {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .submitted-card {
    width: 80%;
    padding: 30px;
  }

  .button-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .button {
      margin: 10px auto;
      width: 230px;
    }
  }
}
</style>
