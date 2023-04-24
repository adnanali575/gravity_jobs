<template>
  <div>
    <v-card flat class="card pa-6 mt-4 mt-md-0">
      <p class="font-weight-black mb-4">Experiences</p>

      <v-list>
        <v-list-item>
          <div class="d-flex pa-0 pa-md-4">
            <v-avatar>
              <img src="@/assets/icons/experience_icon.svg" />
            </v-avatar>
            <v-sheet width="100%" class="ms-4">
              <!-- <p class="font-weight-black">{{ employee.seniority[0] }}</p> -->
              <p>{{ employee.expertInSkill }}</p>

              <div class="skill-info">
                <span class="d-flex">
                  <span class="d-flex"
                    ><img
                      class="mr-2"
                      src="@/assets/icons/small_calender_icon.svg"
                    />
                    <p class="small-text">
                      {{ employee.skillStartingYear }} - Today . 4 years
                    </p>
                  </span>
                </span>
                <span class="location d-flex">
                  <img
                    class="mr-2"
                    src="@/assets/icons/small_location_icon.svg"
                  />
                  <p class="small-text">{{ employee.experienceInSkillFrom }}</p>
                </span>
              </div>
            </v-sheet>
          </div>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>

      <p class="font-weight-black my-4">Education</p>

      <v-list>
        <v-list-item>
          <div class="d-flex pa-4">
            <v-avatar>
              <img src="@/assets/images/education_profile logo.png" />
            </v-avatar>

            <v-sheet width="100%" class="ms-4">
              <p class="font-weight-black">
                {{ employee.institution }}
              </p>
              <p>Protecter & Gamble . Full time</p>

              <div class="skill-info">
                <span class="d-flex"
                  ><img
                    class="mr-2"
                    src="@/assets/icons/small_calender_icon.svg"
                  />
                  <p>{{ employee.passingYear }} - Today . 4 years</p>
                </span>
                <span class="location d-flex"
                  ><img
                    class="mr-2"
                    src="@/assets/icons/small_location_icon.svg"
                  />
                  <p>{{ employee.educatedFrom }}</p>
                </span>
              </div>
            </v-sheet>
          </div>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { EmployeesInfoTypes } from "@/types";

const props = defineProps<{
  employee: EmployeesInfoTypes;
}>();
</script>

<style scoped lang="scss">
@import "@/scss/variables";
.small-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.card {
  box-shadow: $shadow;
}

.skill-info {
  display: flex;
}

.location {
  margin-left: 20px;
  align-items: center;
}

@media (max-width: 530px) {
  .location {
    margin-left: 0px;
  }
  .skill-info {
    flex-wrap: wrap;
  }
}
</style>
