import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import "vuetify/styles";
import { createVuetify } from 'vuetify/lib/framework.mjs';
// import * as components from "vuetify/components";
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
    directives
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
