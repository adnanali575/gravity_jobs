<template>
  <div class="base-input">
    <v-btn
      width="100%"
      height="48px"
      color="primary"
      class="text-capitalize"
      flat
      rounded
      :variant="vari"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  vari: string;
}>();
</script>
