<script setup lang="ts">
import State from '@/state';
import { Job } from '@/state/ActionState';
import { TimeUnit } from "@/state/types/TimeUnit";
import GoldDisplay from "./GoldDisplay.vue";
import PerTimeDisplay from "./PerTimeDisplay.vue";
import { computed } from 'vue';

const props = defineProps<{
    job: Job,
}>();

const levelBackground = computed(() => {
    const percent = Math.floor(props.job.currentXp / props.job.xpToLevel * 100);
    return `linear-gradient(0.25turn, var(--highlight-blue) ${percent}%, transparent ${percent}% )`
})
</script>

<template>
    <div class="jobItem" :class="{ active: State.action.activeJob == job.name }">
        <div>{{ State.lang.enums[job.name] }}</div>
        <div class="levelColumn" :style="{ background: levelBackground }">
            <div class="levelDisplay">
                <span>{{ State.lang.titles.level }}</span>
                <span>{{ job.level }}</span>
            </div>
            <div class="levelXp">
                <span v-if="State.meta.isLandscape">{{ State.lang.titles.xp }}</span>
                <span>{{ job.currentXp }} / {{ job.xpToLevel }}</span>
                <PerTimeDisplay :timeUnit="TimeUnit.Day">
                    {{ job.xpGain }}
                </PerTimeDisplay>
            </div>
        </div>
        <PerTimeDisplay :timeUnit="TimeUnit.Day" :includeBrackets="false">
            <GoldDisplay :gold="job.payPerDay" />
        </PerTimeDisplay>
    </div>
</template>

<style scoped>
.jobItem {
    display: grid;
    width: 100%;
    height: 1.5em;
    grid-template-columns: 1fr 2fr 1fr;
    border: 2px solid black;
    border-radius: 0.75em;
    justify-items: center;
    align-items: center;
    cursor: pointer;
}

.jobItem.active {
    border-color: var(--highlight-blue);
    box-shadow: 0 0 4px 2px black;
}

.jobItem>.levelColumn {
    display: flex;
    width: calc(100% - 1em - 6px);
    padding: 0 0.5em;
    border-right: 3px solid black;
    border-left: 3px solid black;
    text-shadow: 1px 1px 2px white;
}

.jobItem>.levelColumn>.levelDisplay {
    flex: 0 0 auto;
    display: flex;
    gap: 0.5em;
}

.jobItem>.levelColumn>.levelXp {
    flex: 1 0 auto;
    display: flex;
    justify-content: right;
    gap: 0.5em;
}
</style>
