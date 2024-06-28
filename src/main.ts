import './assets/main.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import State from "@/state";
import MetaController from '@/controller/MetaController';
import ActionController from './controller/ActionController';
import LangController from './controller/LangController';
import SaveController from './controller/SaveController';
import GameController from './controller/GameController';

MetaController.setWindowResize();
ActionController.unlockFarmer();

if (!SaveController.loadSaveData(State)) {
    // Only in the case of no save data
    LangController.chooseLangOfUser();
}

const app = createApp(App);
app.mount('#app');

GameController.hookGameLoop();
