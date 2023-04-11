<template>
  <div class="base-input">
    <v-card width="100%" class="mx-auto" variant="flat">
      <v-text-field
        :type="type"
        :label="label"
        :placeholder="placeholder"
        class="my-2"
        :model-value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ></v-text-field>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  placeholder?: string;
  type?: string;
  label?: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss">
@import "@/scss/variables";

.base-input .v-text-field label {
  color: $label-placeholder;
}

.base-input .v-field__overlay {
  background: none;
}

.v-input {
  height: 59px;
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
