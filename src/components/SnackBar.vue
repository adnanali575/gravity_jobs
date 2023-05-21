<template>

    <v-snackbar
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn color="primary" variant="text" @click="close"> Close </v-btn>
      </template>
    </v-snackbar>

</template>

<script setup lang="ts">
import store from '@/store/store';

const props = defineProps<{
  text: string;
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const close = () => {
  store.state.formSubmitted = false
};
</script>
