<template>
  <div class="chat">
    <ChatList class="list" :class="{ 'translate-list': store.state.chats }">
      <template #close-list>
        <div>
          <v-btn
            icon="mdi-close"
            class="toggle-btn ms-3"
            flat
            density="comfortable"
            @click="toggleList"
          ></v-btn>
        </div>
      </template>
    </ChatList>
    <v-divider vertical></v-divider>
    <div v-if="noUser" class="no-user">
      <div class="show-list-btn">
        <v-btn
          class="mx-3"
          icon="mdi-format-list-bulleted"
          density="comfortable"
          flat
          @click="toggleList"
        ></v-btn>
        <v-divider class="divider"></v-divider>
      </div>
      <div class="greeting">
        <img src="../assets/images/chatting.jpg" alt="" />
        <p>Select user for Conversations</p>
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import ChatList from "@/components/ChatList.vue";
import store from "@/store/store";
import { computed } from "@vue/reactivity";
import { onUnmounted } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let noUser = computed(() => {
  if (!route.params.id) return true;
  else return false;
});

store.dispatch('getChatUsers')

let toggleList = () => {
  store.state.chats = !store.state.chats;
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.chat {
  height: 100vh;
  width: 100%;
  padding-top: 105px;
  display: flex;
}

.toggle-btn {
  display: none;
}

.no-user {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: $white;
  grid-template-rows: 60px 1fr;

  .show-list-btn {
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    .divider {
      width: 100%;
      margin-top: 8px;
    }
  }

  .greeting {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 200px;
    }

    p {
      width: 100%;
      padding: 20px 0px;
      text-align: center;
      font-size: 20px;
      color: $label-secondary;
    }
  }
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

  .chat{
    padding-top: 67px;
  }

  .show-list-btn{
    visibility: unset !important;
  }

  .toggle-btn {
    display: block;
  }

  .translate-list {
    transform: translateX(0%) !important;
  }
}
</style>
