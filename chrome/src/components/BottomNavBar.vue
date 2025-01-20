<script setup>

</script>

<template>
  <v-bottom-navigation grow>
    <v-btn :to="{name: 'home'}" value="recent">
      <v-icon icon="mdiHistory">mdi-history</v-icon>

      <span>Recent</span>
    </v-btn>

    <v-btn :to="{name: 'submit'}" value="favorites">
      <v-icon>mdi-heart</v-icon>

      <span>Favorites</span>
    </v-btn>

    <v-btn :to="{name: 'about'}" value="nearby">
      <v-icon>mdi-map-marker</v-icon>

      <span>Nearby</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>

</style>
