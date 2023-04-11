<template>
  <div class="introduction bg-background-menu">
    <div class="background">
      <img class="logo ma-8" src="@/assets/icons/logo.svg" alt="" />
      <div class="inner-content">
        <p class="heading">
          Let’s begin, tell us what type of profile you are interested in!
        </p>
        <div class="search-control">
          <SearchBar class="search-bar" >
            <template>
            </template>
            <PostBtn class="post-btn" />
          </SearchBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import PostBtn from "@/components/PostBtn.vue";
</script>

<style scoped lang="scss">
@import '@/scss/variables';
.introduction {
  height: 100vh;
}

.logo {
  width: 146px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.background {
  height: 100%;
  background: url("@/assets/images/stars.png") center center fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  width: 832px;
  font-weight: 700;
  line-height: 52px;
  text-align: center;
  font-size: 48px;
  letter-spacing: 0.2px;
  color: $white;
}

.search-control {
  display: flex;
  align-items: center;
  .post-btn {
    margin-left: 10px;
  }
}

.search-bar {
  margin: 46px 0px;
}

@media (max-width: 959px) {
  .search-bar {
    margin: 0px;
    padding: 0px;
  }

  .background {
    flex-direction: column;
    overflow: auto;
  }

  .logo {
    position: relative;
  }

  .inner-content {
    justify-content: flex-end;
  }

  .search-control {
    width: 80%;
    flex-direction: column;
  }

  .heading {
    width: 85%;
    font-size: 30px;
  }
  .post-btn {
    margin-bottom: 50px;
    margin-top: 20px;
    margin-left: 0px !important;
    width: 90%;
    height: 55px !important;
    border-radius: 40px;
  }
}

@media (max-width: 650px) {
  .search-control {
    width: 90% !important;
  }
}
</style>
