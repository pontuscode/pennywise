<template>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="code.value.value"
        :error-messages="code.errorMessage.value"
        label="Coupon/promo code"
      ></v-text-field>

      <v-text-field
        v-model="url.value.value"
        :error-messages="url.errorMessage.value"
        label="URL (current tab)"
        disabled
      ></v-text-field>

      <v-btn
        class="me-4"
        type="submit"
      >
        submit
      </v-btn>

      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useField, useForm } from 'vee-validate'
  import getCurrentTabUrl from '@/plugins/browserUrl';
  import { useCouponsStore } from "@/stores/coupons.store";

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      code (value) {
        if (value?.length >= 1) return true

        return 'Code must not be empty.'
      },
      url (value) {
        if (/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}([\/\w.-]*)*\/?$/.test(value)) return true

        return "Failed to verify URL."
      },
    },
  })
  const code = useField('code')
  const url = useField("url")
  const currentUrl = ref("");
  const couponsStore = useCouponsStore();

  onMounted(async () => {
    // Set the default URL to the current tab's URL.
    currentUrl.value = await getCurrentTabUrl();
    url.value.value = currentUrl.value;
  });

  const submit = handleSubmit(async (values) => {
    alert(JSON.stringify(values, null, 2))
    const input = {
        code: code.value.value,
        url: url.value.value
    }
    try {
        const res = await couponsStore.dispatchCreateCoupon(input);
    } catch(error) {
        console.error(error);
    }
  })
</script>