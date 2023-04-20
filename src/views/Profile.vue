<template>
  <div class="profile">
    <div
      class="buttons py-7 d-flex align-center justify-space-between px-10 px-md-14"
    >
      <h1>Profile</h1>
      <span class="btn-box d-flex align-center">
        <!-- <EmployeeControls/> -->
      </span>
    </div>

    <div class="profile-content px-4 px-sm-8 px-md-12">
      <v-row>
        <v-col cols="12" md="5" class="">
          <EmployeeCard :employee="employeeInfo" class="ma-n2 ma-md-n3"></EmployeeCard>
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
import EmployeeControls from "@/components/EmployeeControls.vue";
import store from "@/store/store";
import { computed } from "@vue/reactivity";
import { useRoute } from 'vue-router'
import { onMounted } from "vue";

const route = useRoute()

onMounted(()=>{
  store.dispatch('showProfile', route.params.id)
})

const employeeInfo = computed(()=>{
  return store.state.employeeInfo
})

</script>

<style scoped lang="scss">
.profile {
  margin-top: 105px;
}
.add-btn {
  width: 185px;
}

.profile-content {
  max-width: 1800px;
}

.btn-box{
  width: 200px;
}

@media (max-width: 1279px) {
  .profile {
    padding-bottom: 80px;
  }
}
</style>
