<template>
  <div v-show="store.state.confirmTermination">
    <div
      @click="store.state.confirmTermination = false"
      class="alert-background"
    ></div>
    <div class="alert-content" :class="{'animation-exit': !store.state.confirmTermination}">
      <div class="text-content">
        <v-icon class="icon">mdi-alert-circle-outline</v-icon>
        <p>Confirm employee Ternimation</p>
      </div>
      <div class="button-content">
        <span class="buttons">
          <BaseButton
            @click="store.state.confirmTermination = false"
            height="38px"
            class="button"
            variant="outlined"
            title="Cancel"
          />
          <span class="button">
            <slot name="confirmBtn"></slot>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from "@/store/store";
import BaseButton from "./BaseButton.vue";

const props = defineProps<{
  show: boolean;
}>();
</script>

<style scoped lang="scss">
.alert-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: animate2 0.3s linear;
  background-color: #00000061;
  z-index: 10000;
}

.alert-content {
  display: grid;
  grid-template-rows: 1fr 49px;
  padding: 20px;
  width: 480px;
  height: 180px;
  border-radius: 10px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  animation: animate 0.3s linear;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 11000;

  .text-content {
    display: flex;
    align-items: center;

    .icon {
      font-size: 50px;
    }

    p {
      font-size: 17px;
      margin: 0px 10px;
    }
  }

  .button-content {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    .buttons {
      display: flex;
      justify-content: space-between;
      width: 230px;

      .button {
        width: 110px;
      }
    }
  }

}

.animation-exit{
    animation: animate-exit 0.3s linear;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes animate-exit {
  0% {
      transform: translate(-50%, -50%) scale(1);
}
100% {
      transform: translate(-50%, -50%) scale(0);
  }
}

@keyframes animate2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
