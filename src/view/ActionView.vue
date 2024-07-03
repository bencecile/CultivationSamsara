<script setup lang="ts">
import State from '@/state';
import JobItem from "./action_components/JobItem.vue";

const jobs = [
    State.action.jobs.farmer,
];
</script>

<template>
    <div id="actionView">
        <div id="actionHeader">{{ State.lang.actions }}</div>
        <div id="jobHeader">{{ State.lang.jobs }}</div>
        <div id="jobList">
            <JobItem :job="job" v-for="job in jobs" />
        </div>
    </div>
</template>

<style scoped>
#actionView {
    grid-area: main;
}

#actionHeader {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}

#jobHeader {
    font-size: 1.2em;
    font-weight: bold;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {}
</style>
