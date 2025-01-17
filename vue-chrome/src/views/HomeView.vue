<script setup lang="ts">
import { useWebsitesStore } from '@/stores/websites.store';
import { ref } from 'vue';
import { InputCreateWebsite } from '@/types/Website';

const websitesStore = useWebsitesStore();

async function createContainer() {
  const input: InputCreateContainer = {
    "room_uuid": selectedRoomId.value,
    "name": containerName.value,
    "description": containerDescription.value
  }
  const res = await containersStore.dispatchCreateContainer(input);
}

</script>

<template>
  <button>Hej</button>
</template>