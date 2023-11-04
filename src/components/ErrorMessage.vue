<template>
  <div v-if="error" class="error-alert">
    <v-card class="error-message">
      <div class="content">
        <v-icon class="alert-icon">mdi-alert-circle-outline</v-icon>
        <p class="error-text">{{ store.state.errorMessage }}</p>
      </div>
      <v-btn
        class="close-btn"
        @click="closeAlert"
        density="comfortable"
        flat
        icon="mdi-close"
      ></v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import store from "../store/store";
import { watch } from "vue";
import { computed } from "vue";

const error = computed(() => {
  return store.state.error;
});

const closeAlert = () => {
  store.state.error = false;
};

watch(
  () => error.value,
  (val) => {
    setTimeout(() => {
      if (val) store.state.error = false;
    }, 3000);
  }
);
</script>

<style scoped lang="scss">
@import "../scss/variables";

.error-alert {
  display: flex;
  justify-content: center;
  left: 0px;
  width: 100%;
  position: absolute;
  top: 20px;
  z-index: 30000;
}

.error-message {
  width: 400px;
  max-width: 800px;
  height: fit-content;
  position: fixed;
  padding: 10px 20px;
  background-color: #c30045;
  color: $white;
  display: grid;
  grid-template-columns: 1fr 40px;
  animation: slide 0.3s linear;
  transition: all 0.3s ease-in-out;

  .content {
    display: flex;
    align-items: center;

    .error-text {
      margin: 0px 10px;
    }

    .alert-icon {
      font-size: 30px;
    }
  }

  .close-btn {
    margin-left: 10px;
    background-color: #c30045;
  }
}

@keyframes slide {
  0% {
    transform: translateY(-130%);
  }
  90% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
