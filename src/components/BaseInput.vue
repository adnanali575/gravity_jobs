<template>
  <div class="base-input-box">
    <v-text-field
      density="comfortable"
      class="text-field bg-input-background"
      :type="type"
      :label="label"
      :placeholder="placeholder"
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    ></v-text-field>
    <p v-if="empty || check" class="field-empty ml-6">
      {{ label }} can't be empty
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  placeholder?: string;
  type?: string;
  label?: string;
  empty?: boolean;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

let check = ref(false);

watch(
  () => props.modelValue,
  (id) => {
    if (id) check.value = false;
    else check.value = true;
  }
);
</script>

<style scoped lang="scss">
@import "../scss/variables";

.base-input-box {
  width: 100%;
  height: 48px;
  overflow: unset;
}

.text-field {
  border-radius: 40px;
  height: fit-content;
  overflow: hidden;

  .v-field--active input {
    background-color: $input-background;
  }
}

.field-empty {
  color: #db0000;
  animation: error 0.3s linear;
  font-size: 13px;
  line-height: 15px;
}

@keyframes error {
  0% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0px);
  }
}

.v-input--density-default {
  height: 56px !important;
}

.base-input .v-text-field label {
  color: $label-placeholder;
}

.base-input .v-field__overlay {
  background: none;
}

.v-input {
  height: 48px;
}

.base-input .v-field__outline {
  opacity: 0;
}

.base-input .v-text-field input {
  border-radius: 40px;
  height: 48px;
  opacity: 1;
  background: $input-background;
}
</style>
