<template>
  <div class="floating-message">
    <router-link to="/chat">
      <img src="@/assets/icons/messenger_2.svg" />
    </router-link>
  </div>
</template>

<style scoped>
.floating-message {
  position: fixed;
  right: 40px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  z-index: 1000;
}

@media (max-width: 1270px) {
  .floating-message {
    bottom: 60px;
  }
}
</style>
