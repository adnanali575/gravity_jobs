<template>
  <v-btn
    class="post-btn"
    flat
    icon=""
    color="primary"
    roter
    to="/post-job"
  >
  <v-icon :color="color">mdi-clipboard-check-multiple-outline</v-icon></v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>
