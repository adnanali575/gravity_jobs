<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-list-item color="white" height="" v-bind="props" value="notifications">
        <v-badge class="pe-1 pt-1" color="purple" dot>
          <img class="bell-icon" src="@/assets/icons/notification_icon.svg" />
        </v-badge>
      </v-list-item>
    </template>

    <v-list width="200px">
      <v-list-item value="item1" title="Item 1"></v-list-item>
      <v-list-item value="item2" title="Item 2"></v-list-item>
      <v-list-item value="item3" title="Item 3"></v-list-item>
      <v-list-item value="item4" title="Item 4"></v-list-item>
    </v-list>
  </v-menu>
</template>

<style>
.bell-icon {
  width: 24px;
}
</style>
