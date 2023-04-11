<template>
  <v-select
    :label="label"
    :items="dropDownItems"
    :multiple="multiple"
    v-model="modelValue"
  >
    <template v-slot:append-item>
      <div v-if="multiple">
        <v-divider class="mb-2"></v-divider>

        <v-list-item>
          <div class="d-flex justify-space-between">
            <slot name="controls" v-bind="modelValue"></slot>
          </div>
        </v-list-item>
      </div>
    </template>
  </v-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  dropDownItems: Array<string>;
  label: string;
  multiple: boolean;
}>();

let modelValue = ref<string[]>([]);
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
