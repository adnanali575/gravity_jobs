<template>
  <ul>
    <!-- <li v-for="item in items"> -->
      <slot name="item" v-bind="items"/>
    <!-- </li> -->
  </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  body: string
  username: string
  likes: number
}

// mock remote data fetching
  let items = [
    { body: 'Scoped Slots Guide', username: 'Vue js', likes: 20 },
    { body: 'Vue Tutorial', username: 'React', likes: 10 }
  ]

</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
  }
  li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
  }
</style>