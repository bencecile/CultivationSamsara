<script setup lang="ts">
import State from '@/state';
import { TimeUnit } from "@/state/types/TimeUnit";
import TimeController from "@/controller/TimeController";
import AgeDisplay from "./components/AgeDisplay.vue";
import GoldDisplay from "./components/GoldDisplay.vue";
import PerTimeDisplay from "./components/PerTimeDisplay.vue";
import { computed } from 'vue';

const timeFlowingString = computed(() => {
    if (State.time.isFlowing)
        return State.lang.messages.flowTime.pause;
    return State.lang.messages.flowTime.continue;
});
</script>

<template>
    <div id="charStateView">
        <div class="charStateViewTitle">{{ State.lang.gameName }}</div>
        <div class="timeFlowButton" @click="TimeController.toggleFlowOfTime" :class="{ running: State.time.isFlowing }">
            {{ timeFlowingString }}
        </div>
        <div class="rows">
            <div class="row">
                <div class="rowHeader">{{ State.lang.titles.age }}</div>
                <div class="rowValue">
                    <AgeDisplay :age="State.character.age" />
                    <PerTimeDisplay :timeUnit="TimeUnit.Second">
                        <AgeDisplay :age="State.time.agePerSecond" />
                    </PerTimeDisplay>
                </div>
            </div>
            <div class="row">
                <div class="rowHeader">{{ State.lang.titles.location }}</div>
                <div class="rowValue">
                    {{ State.lang.enums[State.character.location] }}
                </div>
            </div>
            <div class="row">
                <div class="rowHeader">{{ State.lang.titles.gold }}</div>
                <div class="rowValue">
                    <GoldDisplay :gold="State.character.gold" />
                    <PerTimeDisplay :timeUnit="TimeUnit.Day">
                        <GoldDisplay :gold="State.action.activeJobPayPerDay" />
                    </PerTimeDisplay>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#charStateView {
    grid-area: charStateView;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.charStateViewTitle {
    text-align: center;
}

.timeFlowButton {
    width: 100%;
    text-align: center;
    font-weight: bold;
    align-self: center;
    cursor: pointer;
    background: linear-gradient(0.25turn, transparent, #3f87a6, transparent) !important;
    text-shadow: white 1px 1px 0.1em;
}

.timeFlowButton.running {
    background: linear-gradient(0.25turn, transparent, #f69d3c, transparent) !important;
}

.rows {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
}

.rows>:nth-child(even) {
    background: rgba(255, 255, 255, 0.3);
}

.row {
    display: flex;
    width: 100%;
}

.rowHeader {
    width: 30%;
    font-weight: bold;
    padding-left: 0.25em;
}

.rowValue {
    width: 70%;
    display: flex;
    gap: 0.25em;
    justify-content: center;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {}
</style>
