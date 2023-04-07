<template>
  <div class="search-bar-container">
    <div id="search-bar" class="search-bar">
      <slot name="heading"></slot>
      <div class="inputs-box">
        <v-row no-gutters>
          <v-col cols="12" md="4">
            <SelectDropDown
              label="Stacks Used"
              :multiple="true"
              :dropDownItems="['Vue js', 'React', 'Angular', 'jQuery']"
            >
              <template #control>
                <v-divider class="mb-2"></v-divider>

                <v-list-item>
                  <div class="d-flex justify-space-between">
                    <v-btn rounded variant="text" color="primary">Clear</v-btn>
                    <v-btn rounded flat color="primary">Save</v-btn>
                  </div>
                </v-list-item>
              </template>
            </SelectDropDown>
          </v-col>

          <v-divider vertical></v-divider>

          <v-col cols="12" md="4">
            <SelectDropDown
              label="Location"
              :multiple="false"
              :dropDownItems="[
                'Full-Remote',
                'Pakistan',
                'Iran',
                'United States',
              ]"
            />
          </v-col>

          <v-divider vertical></v-divider>
          <v-col cols="12" md="4">
            <SelectDropDown
              label="Seniority"
              :multiple="true"
              :dropDownItems="['Junior', 'Senior', 'Lead', 'CTO']"
            >
              <template #control>
                <v-divider class="mb-2"></v-divider>

                <v-list-item>
                  <div class="d-flex justify-space-between">
                    <v-btn rounded variant="text" color="primary">Clear</v-btn>
                    <v-btn rounded flat color="primary">Save</v-btn>
                  </div>
                </v-list-item>
              </template>
            </SelectDropDown>
          </v-col>
        </v-row>
      </div>

      <v-btn class="bg-primary mx-1" flat icon="">
        <img src="@/assets/icons/Search.svg" alt="" />
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from "@/store/store";
import SelectDropDown from "./SelectDropDown.vue";
import { computed } from "@vue/reactivity";

store.dispatch("getData");
</script>

<style lang="scss">
@import '@/scss/variables';
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
