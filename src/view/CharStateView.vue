<script setup lang="ts">
import State from '@/state';
import AgeDisplay from "./components/AgeDisplay.vue";
import GoldDisplay from "./components/GoldDisplay.vue";
</script>

<template>
    <div id="charStateView">
        <div class="charStateViewTitle">{{ State.lang.gameName }}</div>
        <div class="charStateViewRow">
            <div class="charStateViewHeader">{{ State.lang.age }}</div>
            <div class="charStateViewValue">
                <AgeDisplay :age="State.character.age" />
            </div>
        </div>
        <div class="charStateViewRow">
            <div class="charStateViewHeader">{{ State.lang.location }}</div>
            <div class="charStateViewValue">
                {{ State.lang[State.character.location] }}
            </div>
        </div>
        <div class="charStateViewRow">
            <div class="charStateViewHeader">{{ State.lang.gold }}</div>
            <div class="charStateViewValue">
                <GoldDisplay :gold="State.character.gold" />
            </div>
        </div>
    </div>
</template>

<style scoped>
#charStateView {
    grid-area: charStateView;
}

#charStateView>:nth-child(even) {
    background: rgba(255, 255, 255, 0.3);
}

.charStateViewTitle {
    text-align: center;
}

.charStateViewRow {
    display: flex;
}

.charStateViewHeader {
    flex: 0 0 auto;
    font-weight: bold;
}

.charStateViewValue {
    flex: 1 1 auto;
    text-align: center;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {}
</style>
