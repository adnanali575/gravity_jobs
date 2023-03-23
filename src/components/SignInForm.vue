<template>
  <div class="form-container">
    <v-sheet
      flat
      height="100%"
      class="login-form"
    >
      <div class="pa-3 d-flex flex-column align-center justify-center">
        <img class="logo my-10" src="@/assets/icons/logo.svg" alt="" />
        <v-sheet class="form-control">
          <slot name="form"></slot>
        </v-sheet>
      </div>

      <v-sheet class="optional-navigation">
        <slot name="optionalNavigation"></slot>
      </v-sheet>
    </v-sheet>

    <div class="img-section d-flex justify-center align-center">
      <div class="inner-box d-flex flex-column">
        <img
          class="desktop-banner"
          src="@/assets/images/desktop_banner.png"
          alt=""
        />
        <img class="mobile-banner" src="@/assets/images/mobile_banner.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 600px 1fr;
}

.logo {
  width: 160px;
}

.login-form {
  display: grid;
  grid-template-rows: 1fr 50px;
}

.form-control {
  width: 350px;
}

.img-section {
  background: url("@/assets/images/stars.png") center center fixed;
  background-color: #140d33;
}

.inner-box {
  margin-left: 85px;
}

.mobile-banner {
  height: fit-content;
  width: 180px;
  margin-top: -226px;
  margin-left: -71px;
}

@media (max-width: 1340px) {
  .form-box {
    grid-template-rows: 1fr;
  }

  .img-section {
    display: none;
    /* background-color: #2f00ff; */
  }
}
</style>
