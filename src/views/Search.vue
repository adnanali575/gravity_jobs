<template>
  <div class="search-view">
    <main>

      <div full-height class="search-content">
        <p class="px-3 px-sm-11 px-md-11">5 Results</p>

        <v-row class="card-box" flat no-gutters>
          <v-col
            class="pb-4"
            v-for="n in 8"
            :key="n"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="3"
          >
            <EmployeeCard>
              <BaseButton class="mt-2" title="Add Shortlist" vari="outlined" />
            </EmployeeCard>
          </v-col>
        </v-row>

        <!-- Useable in future -->
        <!-- <div class="search-not-found">
            </div> -->
      </div>

      <FloatingMessage />
    </main>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from "@/components/EmployeeCard.vue";
import FloatingMessage from "@/components/FloatinMessage.vue";
import BaseButton from "@/components/BaseButton.vue";
</script>

<style scoped>
.search-view {
  height: fit-content;
  padding: 85px 33px 0px 33px;
}

@media (max-width: 830px) {
  .search-view {
    padding: 60px 10px 0px 10px;
  }
}
</style>
