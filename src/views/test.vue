<template>
  <div
    style="height: 100vh"
    class="d-flex justify-center align-center bg-background-menu"
  >
    <div class="search-bar-container">
      <div id="search-bar" class="search-bar">
        <div class="inputs-box">
          <v-row no-gutters>
            <v-col cols="12" md="4">
              <v-select
                label="Favorite Fruits"
                :items="['Vue js', 'React', 'Angular', 'jQuery']"
                multiple
              >
                <template v-slot:append-item>
                  <v-divider class="mb-2"></v-divider>

                  <v-list-item>
                    <div class="d-flex justify-space-between">
                      <v-btn rounded variant="text" color="primary"
                        >Clear</v-btn
                      >
                      <v-btn rounded flat color="primary">Save</v-btn>
                    </div>
                  </v-list-item>
                </template>
              </v-select>
            </v-col>

            <v-divider vertical></v-divider>

            <v-col cols="12" md="4">
              <v-select
                label="Location"
                :items="['Pakistan', 'Australlia', 'Iran', 'United States']"
              ></v-select>
            </v-col>

            <v-divider vertical></v-divider>
            <v-col cols="12" md="4">
              <v-select
                label="Seniority"
                :items="['Junior', 'Senior', 'Lead', 'CTO']"
                multiple
              >
                <template v-slot:append-item>
                  <v-divider class="mb-2"></v-divider>

                  <v-list-item>
                    <div class="d-flex justify-space-between">
                      <v-btn rounded variant="text" color="primary"
                        >Clear</v-btn
                      >
                      <v-btn class="search-btn" flat color="primary">Save</v-btn>
                    </div>
                  </v-list-item>
                </template>
              </v-select>
            </v-col>
          </v-row>
        </div>

        <v-btn class="bg-primary mx-1" flat icon="">
          <img src="@/assets/icons/Search.svg" alt="" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
</script>

<style lang="scss" scoped>
.search-bar {
  width: 832px;
  height: 56px;
  height: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 40px;

  .v-field__outline {
    opacity: 0;
  }

  .v-field--variant-filled .v-field__overlay {
    opacity: 0;
  }

  .v-btn--icon.v-btn--density-default{
    width: 48px;
    height: 48px !important;
  }

  .v-select .v-field .v-text-field__prefix,
    .v-select .v-field .v-text-field__suffix,
    .v-select .v-field .v-field__input,
    .v-select .v-field.v-field .v-label {
      color: #000;
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
  }
}

@media (max-width: 959px) {
  .search-bar {
    padding: 20px;
    height: auto;
    overflow: unset;
    flex-direction: column;
    background: none;

    .v-field--variant-filled .v-field__overlay {
      opacity: 1;
      background: #eff0f6;
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

    .v-btn--icon.v-btn--density-default{
      border-radius: 40px;
      width: 100%;
      height: 58px !important;
      margin: 24px 0px;
    }
  }
}

@media(max-width: 765px){

  .search-bar-container{
    width: 100%;
  }

  .search-bar{
    width: 100%;
  }
}
</style>

<!-- <template>
  <TestChild>
    <template #item="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        <p>{{ item.body }}</p>
        <p class="meta">by {{ item.username }} | {{ item.likes }} likes</p>
      </div>
      <v-btn @click="test(items)">Print</v-btn>
    </template>
  </TestChild>

  <div width="100%" height="50%" class="d-flex justify-center align-center bg-background-menu">
    <SearchBar/>
  </div>
</template>

<script setup lang="ts">
import TestChild from "@/components/testChild.vue";
import SearchBar from "@/components/SearchBar.vue";

let test = (items: any)=>{
    console.log(items)
}

// console.log(body)
</script>

<style scoped lang="scss">
.meta {
  font-size: 0.8em;
  color: #42b883;
}

.item{
    border: 1px solid #fff;
    padding: 20px;
    cursor: pointer;

    :nth-child(1){
        color: #fff;
    }

    :nth-child(2){
        color: #000000;
    }
}
</style> -->
