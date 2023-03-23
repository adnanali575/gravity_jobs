<template>
  <div class="chat">

    <v-sheet>
      <v-row no-gutters>
        <v-col cols="12" class="bg-white" md="4">

          <div id="chat-list" class="" style="width: 100%; height: 100%">
            <ChatList></ChatList>
          </div>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col class="bg-white chat-window" cols="12" md="8">
          <ChatWindow/>
        </v-col>
      </v-row>
    </v-sheet>

  </div>
</template>

<script setup lang="ts">
import ChatList from "@/components/ChatList.vue";
import ChatWindow from "@/components/ChatWindow.vue";

</script>

<style>
.chat {
    margin-top: -64px;
}

.list-icon {
  display: none;
}
</style>
