<template>
  <v-select
    :hide-selected="check"
    :label="label"
    :items="dropDownItems"
    :multiple="multiple"
    :model-value="modelValue"
    @input="$emit('update:modelValue')"
  >
    <template v-slot:append-item>
      <div v-if="multiple">
        <v-divider class="mb-2"></v-divider>

        <v-list-item>
          <div class="d-flex justify-space-between">
            <v-btn @click="clear" rounded variant="text" color="primary"
              >Clear</v-btn
            >
            <v-btn @click="save" rounded flat color="primary">Save</v-btn>
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
  modelValue: Array<string>;
}>();

const emit = defineEmits(["update:modelValue"]);

let check = ref(false);

const clear = () => {};

const save = () => {
  check.value = !check.value;
};
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
