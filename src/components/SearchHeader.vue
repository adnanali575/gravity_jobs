<template>
  <div class="top-bar">
    <v-app-bar flat class="bg-white d-flex justify-center px-5">
      <div
        class="src-bar-box"
        :class="{ 'src-bar--translate': searchBarTranslation }"
      >
        <SearchBar class="src-bar">
          <template #heading>
            <h1 class="search-heading">Search</h1>
          </template>
        </SearchBar>
      </div>

      <div class="header-logo">
        <img src="../assets/icons/logo.svg" alt="" />
      </div>

      <v-spacer></v-spacer>

      <RightMenu />
      <span class="search-btn-icon">
        <PostBtn color="black" variant="text" class="post-btn mx-2" />
        <v-btn color="primary" class="search-toggle-btn" icon="" @click="searchBarToggle">
          <img src="../assets/icons/search_black.svg" alt="" />
        </v-btn>
      </span>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import RightMenu from "./RightMenu.vue";
import SearchBar from "./SearchBar.vue";
import PostBtn from "./PostBtn.vue";
import { computed, ref, watch } from "vue";
import store from "../store/store";

let searchBarTranslation = ref(false);

watch(
  () => store.state.employeesInfo,
  (value) => {
    searchBarTranslation.value = false;
  }
);

const searchBarToggle = () => {
  searchBarTranslation.value = !searchBarTranslation.value;
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
.v-app-bar {
  height: 104px;
  box-shadow: $shadow;

  .header-logo {
    display: none;

    img{
      height: 38px;
    }
  }

  .src-bar {
    border-radius: 40px;
  }

  .src-bar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-heading {
    padding: 0px 20px;
    width: 100%;
    display: none;
  }

  .search-btn-icon {
    display: flex;
    align-items: center;
    .post-btn {
      display: none;
    }

    .search-toggle-btn {
      display: none;
    }
  }
}

@media (max-width: 1280px) {
  .search-btn-icon {
    .post-btn {
      display: flex !important;
    }
  }
}

@media (max-width: 959px) {
  .v-app-bar {
    overflow: unset;
    height: 67px;
  }
  .header-logo {
    display: block !important;
  }

  .search-heading {
    display: flex;
  }

  .search-btn-icon {
    .search-toggle-btn {
      display: flex !important;
    }
  }

  .src-bar-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 72px;
    left: 0px;
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;
  }

  .src-bar--translate {
    transform: translateX(0);
  }
}
</style>
