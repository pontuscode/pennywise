import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import "@mdi/font/css/materialdesignicons.css" // Ensure you are using css-loader
import { createVuetify } from "vuetify"

import "vuetify/styles";
import { VApp, VBottomNavigation, VBtn, VCol, VContainer, VIcon, VRow } from 'vuetify/lib/components/index.mjs';
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components: {
        VBottomNavigation,
        VBtn,
        VIcon,
        VApp,
        VContainer,
        VRow,
        VCol
    },
    icons: {
        defaultSet: "mdi"
    },
    directives
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
