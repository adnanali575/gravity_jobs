<template>
  <div class="top-bar">
    <v-app-bar flat class="bg-white d-flex justify-center px-5">
      <h1>{{ headerTitle }}</h1>

      <v-spacer></v-spacer>

      <RightMenu />
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import RightMenu from "./RightMenu.vue";

const props = defineProps<{
  headerTitle?: string;
}>();
</script>

<style scoped lang="scss">
@import '@/scss/variables';
.v-app-bar {
  display: grid;
  height: 104px;
  box-shadow: $shadow;
}

@media (max-width: 900px){
  .v-app-bar {
    height: 67px;
}
}
</style>
