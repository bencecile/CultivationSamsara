import './assets/main.css';

import { createApp } from 'vue';

import App from '@/App.vue';
import MetaController from '@/controller/MetaController';
import ActionController from './controller/ActionController';
import LangController from './controller/LangController';
import SaveController from './controller/SaveController';
import GameController from './controller/GameController';
import AutoSaveProcessor from './controller/processor/AutoSaveProcessor';
import ShortcutController from './controller/ShortcutController';
import TimeController from './controller/TimeController';

MetaController.setWindowResize();

if (!SaveController.loadSaveData()) {
    // Only in the case of no save data
    LangController.chooseLangOfUser();
    ActionController.unlockFarmer();
}

const app = createApp(App);
app.mount('#app');

GameController.hookGameLoop();

GameController.addProcessor(AutoSaveProcessor);

ShortcutController.hookGlobalKeyPresses();
ShortcutController.addKeyFn(" ", () => TimeController.toggleFlowOfTime());
