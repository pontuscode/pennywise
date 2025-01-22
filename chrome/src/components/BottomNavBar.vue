<script setup>
import { mdiMapMarker, mdiHistory, mdiHeart } from '@mdi/js';
</script>

<template>
  <v-bottom-navigation grow>
    <v-btn :to="{name: 'home'}" value="recent">
      <v-icon :icon="mdiHistory" />
      <span>Recent</span>
    </v-btn>

    <v-btn :to="{name: 'submit'}" value="favorites">
      <v-icon :icon="mdiHeart" />
      <span>Favorites</span>
    </v-btn>

    <v-btn :to="{name: 'about'}" value="nearby">
      <v-icon :icon="mdiMapMarker" />
      <span>Nearby</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>

</style>
