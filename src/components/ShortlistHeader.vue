<template>
  <div>
    <v-app-bar flat class="">
      <v-sheet width="100%" class="d-flex flex-column justify-space-between">
        <v-sheet width="100%" class="d-flex px-11 pt-10">
          <h1>Shortlist</h1>
          <v-spacer></v-spacer>
          <RightMenu />
        </v-sheet>

        <v-list class="px-4 d-flex">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
            exact
            :title="item.title"
            color="primary"
          ></v-list-item>
        </v-list>
      </v-sheet>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import RightMenu from "@/components/RightMenu.vue";

let items = [
  { title: "Shortlist", quantity: 2, route: "/shortlist" },
  { title: "Contacted", quantity: 12, route: "/shortlist/contacted" },
  { title: "Interviewing", quantity: 8, route: "/shortlist/interviewing" },
  { title: "Hired", quantity: 0, route: "/shortlist/hired" },
];

let print = () => {};
</script>

<style scoped>
.v-app-bar {
  height: 177px;
  box-shadow: 0px 4px 6px rgba(217, 219, 233, 0.3);
}

.v-app-bar .v-toolbar__content{
    height: 100%;
}

.v-list-item--active{
  border-bottom: 4px solid #6367E7;
}
</style>
