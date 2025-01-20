<script setup>
import { useWebsitesStore } from '@/stores/websites.store';
const websitesStore = useWebsitesStore();
</script>

<template>
  <v-container fluid ma-0 pa-0>
    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        This is the homepage.
      </v-col>
    </v-row>
  </v-container>
</template>