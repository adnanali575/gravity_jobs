<template>
  <div class="short-listed">
    <div class="container">
      <router-view class="child-view" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.short-listed {
  margin-top: 115px;
  padding: 60px 0px 33px 0px;
}

.child-view {
  animation: animate 0.3s linear;
}

@keyframes animate {
  0% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.layout {
  position: fixed;
  height: 100vh;
}

@media (max-width: 1279px) {
  .short-listed {
    padding: 60px 10px 70px 10px;
  }
}
</style>
