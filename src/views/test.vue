<template>
  <v-row style="width: 70%" class="mx-auto mt-16">
    <v-col cols="12">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="state.name"
            :rules="[() => !!state.name || 'This field is required']"
            label="Full Name"
            required
          ></v-text-field>
          <v-autocomplete
            ref="country"
            v-model="state.country"
            :rules="[() => !!state.country || 'This field is required']"
            :items="['Uzbekistan', 'Venezuela', 'Vietnam']"
            label="Country"
            required
          ></v-autocomplete>
        </v-card-text>
        <BaseInput label="Name"></BaseInput>

        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="submitForm">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { ref, watch, computed, reactive } from "vue";
import BaseInput from "@/components/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
  setup() {
    const state = reactive({
      name: "",
      country: "",
    });

    const form = computed(() => ({
      name: state.name,
      country: state.country,
    }));

    const formRefs = ref({
      name: null,
      country: null,
    });

    const submitForm = () => {
      Object.keys(form.value).forEach((f) => {
        formRefs.value[f].validate(true);
      });
    };

    return {
      state,
      form,
      submitForm,
      formRefs,
    };
  },
  mounted() {
    Object.keys(this.$refs).forEach((refName) => {
      this.formRefs[refName] = this.$refs[refName];
    });
  },
};
</script>
