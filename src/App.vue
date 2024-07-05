<script setup lang="ts">
import State from "@/state";
import ActionView from "@/view/ActionView.vue";
import CharStateView from "@/view/CharStateView.vue";
import OptionView from "@/view/OptionView.vue";
import { ref } from "vue";
import ShortcutController from "./controller/ShortcutController";

let isOptionsVisible = ref(false);
function toggleOptions() {
    isOptionsVisible.value = !isOptionsVisible.value;
}

ShortcutController.addKeyFn("o", toggleOptions);
</script>

<template>
    <div id="appView">
        <CharStateView />
        <ActionView />
        <div id="menuButtons">
            <div class="button menuButton" @click="toggleOptions">{{ State.lang.titles.options }}</div>
        </div>
    </div>
    <OptionView v-if="isOptionsVisible" @close-clicked="toggleOptions" />
</template>

<style scoped>
#appView {
    display: grid;
    height: calc(100% - 1em);
    padding: 0.5em;
}

#menuButtons {
    grid-area: menuButtons;
    display: flex;
    justify-content: center;
}

.menuButton {
    width: 7.5em;
    height: 2em;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {
    #appView {
        grid-template:
            "charStateView" 4fr
            "main" 6fr
            "menuButtons" auto;
    }
}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {
    #appView {
        grid-template:
            "charStateView main" 1fr
            "menuButtons menuButtons" auto
            / 1fr 2fr;
    }
}
</style>
