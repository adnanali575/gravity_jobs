<template>
  <div>
    <v-card flat class="card pa-6">
      <p class="font-weight-black mb-4">Experiences</p>

      <v-list v-for="i in 3" :key="i">
        <v-list-item>
          <div class="d-flex pa-0 pa-md-4">
            <v-avatar>
              <img src="@/assets/icons/experience_icon.svg"/>
            </v-avatar>
            <v-sheet width="100%" class="ms-4">
              <p class="font-weight-black">CTO</p>
              <p>Protecter & Gamble . Full time</p>

              <div class="d-flex align-center flex-wrap">
                <span class="d-flex">
                  <span
                    ><img
                      class="ms-3"
                      src="@/assets/icons/small_calender_icon.svg"
                  /></span>
                  <p class="small-text">Jan. 2017 - Today . 4 years</p>
                </span>
                <span class="d-flex">
                  <span
                    ><img
                      class="ms-3"
                      src="@/assets/icons/small_location_icon.svg"
                  /></span>
                  <p class="small-text">United-Kingdom</p>
                </span>
              </div>
            </v-sheet>
          </div>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>

      <p class="font-weight-black my-4">Education</p>

      <v-list v-for="i in 3" :key="i">
        <v-list-item>
          <div class="d-flex pa-4">
            <v-avatar>
              <img src="@/assets/images/education_profile logo.png" />
            </v-avatar>

            <v-sheet width="100%" class="ms-4">
              <p class="font-weight-black">
                Massachusetts Institute of Technology
              </p>
              <p>Protecter & Gamble . Full time</p>

              <div class="d-flex align-center">
                <span
                  ><img
                    class="ms-3"
                    src="@/assets/icons/small_calender_icon.svg"
                /></span>
                <p>Jan. 2017 - Today . 4 years</p>
                <span
                  ><img
                    class="ms-3"
                    src="@/assets/icons/small_location_icon.svg"
                /></span>
                <p>United-Kingdom</p>
              </div>
            </v-sheet>
          </div>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<style scoped>
.small-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.card {
  box-shadow: 0px 4px 6px rgba(217, 219, 233, 0.3);
}
</style>
