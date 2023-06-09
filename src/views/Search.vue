<template>
  <div class="search-view">
    <p class="px-3 px-sm-11 px-md-11">{{ employeesInfo.length }} Results</p>
    <main v-if="employeesInfo.length > 0 && !searchLoader">
      <div class="search-content">
        <v-row class="card-box" flat no-gutters>
          <ConfirmationAlert :show="true">
            <template #confirmBtn>
              <BaseButton
                height="39px"
                @click="terminateEmployee"
                variant="flat"
                title="Confirm"
              />
            </template>
          </ConfirmationAlert>
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

    <div v-if="searchLoader" class="search-loading">
      <PreLoader />
    </div>

    <div
      v-if="employeesInfo.length == 0 && !searchLoader"
      class="search-not-found d-flex justify-center align-center"
    >
      <div class="img-box d-flex flex-column">
        <img src="../assets/images/search_not_found.png" alt="" />
        <p>Sorry, try an other search</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from "../components/EmployeeCard.vue";
import PreLoader from "../components/PreLoader.vue";
import ConfirmationAlert from "../components/ConfirmationAlert.vue";
import BaseButton from "../components/BaseButton.vue";
import store from "../store/store";
import { computed } from "vue";

store.dispatch("getCandidatesData");

const searchLoader = computed(() => {
  return store.state.searchLoader;
});

let employeesInfo = computed(() => {
  return store.state.employeesInfo;
});

const terminateEmployee = () => {
  store.state.confirmTermination = false;
  store.dispatch("terminateEmployees", store.state.employeeToTerminate);
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
.search-view {
  height: fit-content;
  padding: 138px 33px 0px 33px;
  min-height: 100vh;
}

.search-not-found {
  height: 65vh;

  .img-box {
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

  .spinner {
    width: 100px;
  }
}

@media (max-width: 1279px) {
  .search-view {
    padding: 130px 10px 70px 10px;
  }
}

@media (max-width: 959px) {
  .search-view {
    padding-top: 90px;
  }
}

@media (max-width: 350px) {
  .search-not-found {
    img {
      width: 80%;
      margin: auto;
    }
  }
}
</style>
