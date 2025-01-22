<script setup>
import { ref } from 'vue';
import { useWebsitesStore } from '@/stores/websites.store';
import getCurrentTabUrl from '@/plugins/browserUrl';
import findCouponField from '@/plugins/findCouponField';
const websitesStore = useWebsitesStore();

const url = ref(null);
const couponField = ref(null);

async function getUrl() {
  try {
    url.value = await getCurrentTabUrl();
    console.log(url.value);
  } catch (error) {
    console.error('Error getting URL:', error);
  }
}

async function tryFindCouponField() {
  try {
    couponField.value = await findCouponField();
    console.log(couponField.value);
    if(couponField.value === null) {
      couponField.value = "Found nothing :(";
    }
  } catch (error) {
    console.error("Error finding coupon field: ", error);
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
        <v-btn @click="getUrl">Get current URL</v-btn>
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h4 v-if="url">Current url: {{ url }}</h4>
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-btn @click="tryFindCouponField">Find coupon field</v-btn>
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h4 v-if="couponField">Coupon field: {{ couponField.value }}</h4>
      </v-col>
    </v-row>
  </v-container>
</template>