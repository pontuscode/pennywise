import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import "vuetify/styles";
import { VApp, VBottomNavigation, VBtn, VCol, VContainer, VIcon, VRow } from 'vuetify/lib/components/index.mjs';

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
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
