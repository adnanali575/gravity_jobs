<template v-slot:actions>
  <v-btn
    :loading="loader"
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
import { ref } from "vue";

const props = defineProps<{
  title: string;
  loader?: boolean;
  variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
}>();

let loading = ref(false);

let load = () => {
  loading.value = true;
};
</script>

<style scoped lang="scss">
.base-btn {
  width: 100%;
}
</style>
