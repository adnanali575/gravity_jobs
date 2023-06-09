<template>
  <div class="form-container">
    <v-sheet flat class="login-form">
      <div class="d-flex flex-column align-center justify-center">
        <img class="logo my-6" src="../assets/icons/logo.svg" alt="" />
        <v-sheet class="form-control">
          <slot name="form"></slot>
        </v-sheet>
      </div>

      <v-sheet class="optional-navigation d-flex align-center justify-center">
        <slot name="optionalNavigation"></slot>
      </v-sheet>
    </v-sheet>

    <div class="img-section">
      <div class="inner-box d-flex">
        <img class="mobile-banner" src="../assets/images/mobile_banner.png" />
        <img
          class="desktop-banner"
          src="../assets/images/desktop_banner.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../scss/variables";
.form-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 600px 1fr;
}

.logo {
  width: 160px;
}

.login-form {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr 40px;
}

.form-control {
  width: 400px;
}

.img-section {
  background: url("../assets/images/stars.png") center center fixed;
  background-color: #140d33;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-banner {
  height: fit-content;
  width: 180px;
  margin-top: 200px;
  margin-right: -90px;
  z-index: 1000;
}

.desktop-banner {
  height: fit-content;
}

@media (min-width: 1700px) {
  .form-container {
    grid-template-columns: 800px 1fr;
  }

  .form-control {
    width: 500px;
  }
}

@media (max-width: 1340px) {
  .form-container {
    grid-template-columns: 1fr;
  }

  .form-control {
    width: 450px;
  }

  .img-section {
    display: none;
  }
}

@media (max-width: 500px) {
  .form-control {
    width: 85%;
  }
}
</style>
