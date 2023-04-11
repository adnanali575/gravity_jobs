<template>
  <v-btn
    @click="$emit('action')"
    height="48px"
    color="primary"
    class="base-btn text-capitalize"
    flat
    rounded
    :variant="variant"
  >
    {{ title }}
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
}>();
</script>

<style scoped lang="scss">
.base-btn{
  width: 100%;
}
</style>
