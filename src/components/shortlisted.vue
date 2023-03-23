<template>
  <div class="px-0 pb-4 px-sm-4 px-md-8">
    <v-row class="card-box" flat no-gutters>
      <v-col
        class=""
        v-for="n in 2"
        :key="n"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
      >
        <EmployeeCard :loop="12">
          <BaseButton class="mt-2" title="Contact" vari="flat" />
        </EmployeeCard>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from './EmployeeCard.vue'
import BaseButton from './BaseButton.vue'

</script>
