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
        <img src="@/assets/icons/logo.svg" alt="" />
      </div>

      <v-spacer></v-spacer>

      <RightMenu />
      <span class="search-btn-icon">
      <PostBtn color="black" variant="outlined" class="post-btn mx-2"/>
        <v-btn icon="" @click="searchBarToggle">
          <img src="@/assets/icons/search_black.svg" alt="" />
        </v-btn>
      </span>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import RightMenu from "./RightMenu.vue";
import SearchBar from "./SearchBar.vue";
import PostBtn from "./PostBtn.vue";
import { ref } from "vue";

let searchBarTranslation = ref(false);

const searchBarToggle = () => {
  searchBarTranslation.value = !searchBarTranslation.value
};
</script>

<style scoped lang="scss">
@import '@/scss/variables';
.v-app-bar {
  height: 104px;
  box-shadow: $shadow;
  
  .header-logo {
    display: none;
}

.src-bar {
  border-radius: 40px;
}

.src-bar-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.search-heading {
  padding: 0px 20px;
  width: 100%;
  display: none;
}

.search-btn-icon {
  display: none;
  
  .post-btn{
    width: 35px;
    height: 35px !important;
  }
}
}

@media (max-width: 959px) {
  .v-app-bar {
    overflow: unset;
  }
  .header-logo {
    display: block !important;
  }

  .search-heading {
    display: flex;
  }

  .src-bar-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 110px;
    left: 0px;
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;
  }
  .search-btn-icon {
    display: block;
  }

  .src-bar--translate {
    transform: translateX(0);
  }
}
</style>
