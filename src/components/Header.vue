<template>
    <div class="top-bar">

        <v-app-bar flat class=" bg-white d-flex justify-center px-5">

            <slot></slot>

            <v-spacer></v-spacer>

            <RightMenu/>

        </v-app-bar>

    </div>
</template>


<script setup lang="ts">

import RightMenu from './RightMenu.vue'

</script>



<style scoped>
.v-app-bar {
    height: 104px;
    box-shadow: 0px 4px 6px rgba(217, 219, 233, 0.3);
}
</style>