<template>
  <div class="search-view">
    <p class="px-3 px-sm-11 px-md-11">{{ employeesInfo.length }} Results</p>
    <main v-if="employeesInfo.length > 0">
      <div class="search-content">

        <v-row class="card-box" flat no-gutters>
          <v-col
            class="pb-4"
            v-for="(employee, index) in employeesInfo"
            :key="index"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            xl="3"
          >
            <EmployeeCard :employee="employee" />
          </v-col>
        </v-row>
      </div>
    </main>
    <!-- Useable in future -->
    <div
      class="search-not-found d-flex justify-center align-center"
      v-if="employeesInfo.length == 0"
    >
      <div class="img-box d-flex flex-column">
        <img src="@/assets/images/search_not found.png" alt="" />
        <p>Sorry, try an other search</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from "@/components/EmployeeCard.vue";
import store from "@/store/store";
import { computed } from "vue";

let employeesInfo = computed(() => {
  return store.state.employeesInfo;
});

</script>

<style scoped lang="scss">
@import '@/scss/variables';
.search-view {
  height: fit-content;
  padding: 138px 33px 0px 33px;
  min-height: 100vh;
}

.search-not-found {
  height: 65vh;

  p {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.75px;
    color: $label-secondary;
  }

  img {
    width: 346px;
  }
}

@media (max-width: 1279px) {
  .search-view {
    padding: 130px 10px 70px 10px;
  }
}

@media (max-width: 350px) {
  .search-not-found {
    img{
      width: 80%;
      margin: auto;
    }
  }
}
</style>
