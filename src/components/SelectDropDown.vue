<template>
  <div :class="{ 'select-list-validation-style': validate }">
    <v-select
      height="48px"
      class="select"
      :value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :label="label"
      :items="dropDownItems"
      :multiple="multiple"
    >
      <template v-slot:append-item>
        <div v-if="multiple">
          <v-divider class="mb-2"></v-divider>

          <v-list-item>
            <slot name="controls"></slot>
          </v-list-item>
        </div>
      </template>
    </v-select>
  </div>
  <p v-if="empty" class="field-empty ml-6">{{ label }} can't be empty</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps<{
  dropDownItems: Array<string>;
  label: string;
  multiple?: boolean | undefined;
  modelValue: any;
  empty?: boolean;
}>();

let validate = ref(false)

if(route.path == '/post-job') validate.value = true
else validate.value = false


</script>

<style lang="scss">
.select-list-validation-style {
  height: 48px;
  border-radius: 40px;
  overflow: hidden;
}

.field-empty {
  color: #db0000;
  animation: error 0.3s linear;
  font-size: 13px;
  line-height: 15px;
}

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
