<script setup>
import { ref } from 'vue';
import { useWebsitesStore } from '@/stores/websites.store';
import getCurrentTabUrl from '@/plugins/browserUrl';
const websitesStore = useWebsitesStore();

const url = ref(null);

async function getUrl() {
  try {
    url.value = await getCurrentTabUrl();
    console.log(url.value);
  } catch (error) {
    console.error('Error getting URL:', error);
  }
}
</script>

<template>
  <v-container fluid ma-0 pa-0>
    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        This is the homepage.
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-btn @click="getUrl" :style="{ minWidth: 'auto' }" >Get current URL</v-btn>
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h4 v-if="url">Current url: {{ url }}</h4>
        <p>Debug: {{ url }}</p> <!-- This line is for debugging -->
      </v-col>
    </v-row>
  </v-container>
</template>