import './assets/main.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import MetaController from '@/controller/MetaController';

const app = createApp(App);
app.mount('#app');

MetaController.setWindowResize();
