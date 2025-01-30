<script setup>
import { mdiMapMarker, mdiTooltipPlus, mdiPercent } from '@mdi/js';
</script>

<template>
  <v-bottom-navigation grow>
    <v-btn :to="{name: 'home'}" value="recent">
      <v-icon :icon="mdiPercent" />
      <span>Promo codes</span>
    </v-btn>

    <v-btn :to="{name: 'submit'}" value="favorites">
      <v-icon :icon="mdiTooltipPlus" />
      <span>Submit coupon</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>

</style>
