<template>
  <div>
    <v-app-bar height="116" flat>
      <v-sheet width="100%" class="d-flex flex-column justify-space-between">
        <v-sheet width="100%" class="d-flex px-11 pt-10">
          <h1 class="header-title">Shortlist</h1>
          <v-spacer></v-spacer>
          <RightMenu />
        </v-sheet>

        <v-list class="px-4 d-flex">
          <v-list-item
            class="d-flex"
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
            exact
            color="primary"
          >
            <v-list-item-title
              >{{ item.title }}
              <v-chip class="chip" size="small" color="primary">{{
                item.quantity
              }}</v-chip></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import RightMenu from "../components/RightMenu.vue";
import store from "../store/store";
import { computed } from "@vue/reactivity";

let shortlisted = computed(() => {
  return store.state.shortListedEmployees.length;
});

let contacted = computed(() => {
  return store.state.contactedEmployees.length;
});

let interviewing = computed(() => {
  return store.state.interviewingEmployees.length;
});

let hired = computed(() => {
  return store.state.hiredEmployees.length;
});

let items = [
  { title: "Shortlist", quantity: shortlisted, route: "/shortlist" },
  { title: "Contacted", quantity: contacted, route: "/shortlist/contacted" },
  {
    title: "Interviewing",
    quantity: interviewing,
    route: "/shortlist/interviewing",
  },
  { title: "Hired", quantity: hired, route: "/shortlist/hired" },
];
</script>

<style scoped lang="scss">
@import "../scss/variables";
.v-app-bar {
  height: 138px;
  box-shadow: $shadow;
}

.chip{
  cursor: pointer;
}

.header-title {
  height: 72px;
}

.v-list {
  overflow-x: auto;
}

.v-list::-webkit-scrollbar {
  height: 0px;
}

.v-list-item--active {
  border-bottom: 4px solid #6367e7;
}
</style>
