<template>
  <div class="search-bar-container">
    <div id="search-bar" class="search-bar">
      <slot name="heading"></slot>
      <div class="inputs-box">
        <VRow no-gutters>
          <VCol cols="12" md="4">
            <SelectDropDown
              label="Stacks Used"
              :multiple="true"
              :dropDownItems="stacksList"
            >
              <template #controls>
                <BaseButton title="Clear" variant="text" />
              </template>
            </SelectDropDown>
          </VCol>

          <VDivider vertical></VDivider>

          <VCol cols="12" md="4">
            <SelectDropDown
              label="Location"
              :multiple="false"
              :dropDownItems="locationsList"
            />
          </VCol>

          <VDivider vertical></VDivider>
          <VCol cols="12" md="4">
            <SelectDropDown
              label="Seniority"
              :multiple="true"
              :dropDownItems="seniorityList"
            >
              <template #controls="test">
                <BaseButton title="Clear" variant="text" />
              </template>
            </SelectDropDown>
          </VCol>
        </VRow>
      </div>

      <v-btn class="bg-primary mx-1" @click="search" flat icon="">
        <img src="@/assets/icons/Search.svg" alt="" />
        <p class="search-btn-text text-capitalize ml-3">Search</p>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from "@/store/store";
import SelectDropDown from "./SelectDropDown.vue";
import BaseButton from "./BaseButton.vue";
import { ref } from "vue";

let stacksList = ref<string[]>(["Vue js", "React", "Angular", "jQuery"]);
let locationsList = ref<string[]>([
  "Full-Remote",
  "Pakistan",
  "Iran",
  "United States",
]);
let seniorityList = ref<string[]>(["Junior", "Senior", "Lead", "CTO"]);

let stacks = ref([]);
let location = ref([]);
let seniority = ref([]);

const clear = () => {};

const search = () => {
  store.dispatch("getData", {
    stacks: ["Vue js", "Angular"],
    location: "United States",
    seniority: ["CTO"],
  });
};
</script>

<style lang="scss">
@import "@/scss/variables";
.search-bar {
  width: 832px;
  height: 56px;
  height: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e9e9e9;
  border-radius: 40px;

  .search-btn-text {
    display: none;
  }
}

.inputs-box {
  height: 53px;
  display: flex;
  width: 100%;
}

@media (max-width: 1400px) {
  .search-bar {
    width: 750px;
    margin: auto;
  }
}

@media (max-width: 959px) {
  .search-bar-container {
    width: 90%;
    background: $white;
    border-radius: 40px;
    overflow: auto;
  }
  .search-bar {
    padding: 20px;
    height: auto;
    overflow: unset;
    flex-direction: column;
    background: none;
    width: 100%;

    .search-btn-text {
      display: block;
    }

    .v-field--variant-filled .v-field__overlay {
      opacity: 1;
      background: $input-background;
      border-radius: 40px;
    }

    .v-divider {
      display: none;
    }

    .v-select {
      margin-top: 20px;
      margin: 14px 0px;
    }

    .inputs-box {
      height: auto;
    }

    .v-input {
      border-radius: 40px;
    }

    .v-input__details {
      display: none;
    }

    .v-btn--icon.v-btn--density-default {
      border-radius: 40px;
      width: 100%;
      height: 58px !important;
      margin: 24px 0px;
    }
  }
}

@media (max-width: 765px) {
  .search-bar-container {
    width: 100%;
  }

  .search-bar {
    width: 100%;
  }
}
</style>
