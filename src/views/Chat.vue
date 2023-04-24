<template>
  <div class="chat">
    <ChatList class="list" :class="{ 'translate-list': list }">
      <template #close-list>
        <div>
          <v-btn
            icon="mdi-format-list-checks"
            class="toggle-btn mx-3"
            flat
            @click="toggleList"
          ></v-btn>
        </div>
      </template>
    </ChatList>
    <v-divider vertical></v-divider>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import ChatList from "@/components/ChatList.vue";
import ChatWindow from "@/components/ChatWindow.vue"; 
import { ref } from "vue";

let list = ref(false);

let toggleList = () => {
  list.value = !list.value;
};
</script>

<style scoped lang="scss">
.chat {
  height: 100vh;
  width: 100%;
  padding-top: 105px;
  display: flex;
}

.toggle-btn {
  display: none;
}

@media (max-width: 1279px) {
  .chat {
    padding-bottom: 56px;
  }
}

@media (max-width: 900px) {
  .list {
    position: fixed;
    transform: translateX(-100%);
    height: 100%;
    width: 100%;
    padding-bottom: 160px;
    z-index: 100;
    transition: all 0.5s ease-in-out;
  }

  .toggle-btn {
    display: block;
  }

  .translate-list {
    transform: translateX(0%);
  }
}
</style>
