<template>
  <v-select
    v-model="controls"
    :label="label"
    :items="dropDownItems"
    :multiple="multiple"
  >
    <template v-slot:append-item>
      <slot v-bind="controls" name="control" />
    </template>
  </v-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  dropDownItems: any;
  label: string;
  multiple: boolean;
}>();

let controls = ref<string[]>([]);
</script>

<style lang="scss">
.v-field__outline {
  opacity: 0;
}

.v-field--variant-filled .v-field__overlay {
  opacity: 0;
}

.v-btn--icon.v-btn--density-default {
  width: 48px;
  height: 48px !important;
}

.v-select .v-field .v-text-field__prefix,
.v-select .v-field .v-text-field__suffix,
.v-select .v-field .v-field__input,
.v-select .v-field.v-field .v-label {
  color: #000;
}
</style>
