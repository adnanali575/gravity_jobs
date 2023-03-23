<template>
  <div class="">
    <v-dialog transition="dialog-top-transition" width="auto">
      <template v-slot:activator="{ props }">
        <span>
          <img
            v-bind="props"
            class="rocket-image mx-auto my-5"
            src="../assets/images/rocket_banner.png"
            alt=""
          />
        </span>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card class="popup me-2 me-sm-0">
          <v-card-actions class="justify-end">
            <v-btn
              class=""
              variant="text"
              @click="isActive.value = false"
              icon
              color="label-secondary"
            >
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-text class="">
            <p class="text-h3 text-center font-weight-bold">Pricing plans</p>
          </v-card-text>

          <v-sheet class="d-flex justify-center flex-wrap mt-8 px-9 pb-9">
            <v-card
              width="239px"
              class="px-2 pb-3 mx-2 my-3 my-md-0 pt-3 pt-sm-16 d-flex flex-column align-center"
            >
              <p><b class="text-h4 font-weight-black">100€</b>/month</p>
              <p class="my-4">Sans engagement</p>
              <v-btn
                flat
                rounded
                width="207"
                height="48px"
                color="primary"
                class="text-capitalize"
                >Get started</v-btn
              >
            </v-card>

            <v-card
              width="239px"
              class="px-2 pb-3 mx-2 my-3 my-md-0 pt-3 pt-sm-16 d-flex flex-column align-center"
            >
              <p><b class="text-h4 font-weight-black">84,99€</b>/month</p>
              <p class="my-4">Soit -15%</p>
              <v-btn
                flat
                rounded
                width="207"
                height="48px"
                color="primary"
                class="text-capitalize"
                >Get started</v-btn
              >
            </v-card>
          </v-sheet>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<style scoped>
.rocket-image {
  cursor: pointer;
}
.popup {
  width: 589px;
}

@media (max-width: 700px) {
  .popup {
    width: 100%;
  }
}
</style>
