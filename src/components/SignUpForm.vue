<template>
  <div>
    <v-row no-gutters class="d-flex justify-space-between">
      <v-col cols="5">
        <BaseInput type="text" label="First name" placeholder="" />
      </v-col>
      <v-col cols="5">
        <BaseInput type="text" label="Last name" placeholder="" />
      </v-col>
      <v-col cols="12">
        <BaseInput type="text" label="Nom de l’entreprise" placeholder="" />
      </v-col>
      <v-col cols="12">
        <BaseInput type="text" label="Role dans l’entreprise" placeholder="" />
      </v-col>
      <v-col cols="12">
        <BaseInput type="text" label="Nombre de recrutement" placeholder="" />
      </v-col>
      <v-col cols="12">
        <BaseInput type="email" label="Email" placeholder="" />
      </v-col>
      <v-col cols="12">
        <BaseInput type="number" label="Number" placeholder="" />
      </v-col>
      <v-col cols="12">
        <BaseInput type="password" label="Password" placeholder="" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
</script>

<style scoped lang="scss">
.form-control {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
}
</style>
