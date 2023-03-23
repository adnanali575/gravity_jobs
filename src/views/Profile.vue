<template>
  <div class="profile">
    <div
      class="buttons py-7 d-flex align-center justify-space-between px-10 px-md-14"
    >
      <h1>Profile</h1>
      <span class="d-flex align-center">
          <base-button class="add-btn me-8 me-md-6" text="Add Shortlist" />
        <v-btn
          width="152px"
          height="48px"
          flat
          rounded
          class="bg-primary text-capitalize"
          >Contact</v-btn
        >
      </span>
    </div>

    <div class="profile-content px-4 px-sm-8 px-md-12">
      <v-row>
        <v-col cols="12" md="5" class="">
          <employee-card class="ma-n2 ma-md-n3"></employee-card>
        </v-col>

        <v-col class="mt-n3 mt-md-0" cols="12" md="7">
          <EmployeeInfo />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import employeeCard from "@/components/EmployeeCard.vue";
import EmployeeInfo from "@/components/EmployeeInfo.vue";
</script>

<style>

.add-btn{
    width: 185px
}
.profile {
  margin-top: 40px;
}

.profile-content {
  max-width: 1800px;
}
</style>
