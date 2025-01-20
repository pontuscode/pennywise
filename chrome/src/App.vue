<script setup>
import { RouterView } from 'vue-router'
import BottomNavBar from './components/BottomNavBar.vue';
</script>

<template>

  <div id="app">
    <v-app>
      <v-container fluid ma-0 pa-0 fill-height>
        <RouterView />
        <bottom-nav-bar></bottom-nav-bar>
      </v-container>
    </v-app>
  </div>
</template>

<style>
/* Hide scrollbars for all elements */
* {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}

/* Hide scrollbars for all webkit-based browsers (Chrome, Safari) */
*::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
</style>
