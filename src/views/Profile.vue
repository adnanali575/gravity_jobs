<template>
  <div class="profile">
    <div class="profile-heading">
      <h1>Application</h1>
    </div>

    <PreLoader v-if="profileLoader"></PreLoader>

    <div v-if="employeeInfo && !profileLoader" class="profile-content px-4 px-sm-8 px-md-12">
      <v-row>
        <v-col cols="12" md="5" class="">
          <EmployeeCard
            :employee="employeeInfo"
            class="ma-n2 ma-md-n3"
          ></EmployeeCard>
        </v-col>

        <v-col class="mt-n3 mt-md-0" cols="12" md="7">
          <EmployeeInfo :employee="employeeInfo" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmployeeCard from "@/components/EmployeeCard.vue";
import EmployeeInfo from "@/components/EmployeeInfo.vue";
import PreLoader from "@/components/PreLoader.vue";
import store from "@/store/store";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";

const route = useRoute();

onMounted(() => {
  store.dispatch("showProfile", route.params.id);
});

const profileLoader = computed(() => {
  return store.state.profileLoader;
});

const employeeInfo = computed(() => {
  return store.state.employeeInfo;
});
</script>

<style scoped lang="scss">
.profile-heading {
  margin: 20px 0px 10px 50px;
}
.profile {
  padding-top: 105px;
}
.add-btn {
  width: 185px;
}

.profile-content {
  max-width: 1800px;
}

@media (max-width: 1279px) {
  .profile {
    padding-bottom: 80px;
  }
}

@media (max-width: 959px) {
  .profile-heading{
    margin-left: 30px;
  }
  .profile {
    padding-top: 50px;
  }
}
</style>
