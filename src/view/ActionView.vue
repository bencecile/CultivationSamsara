<script setup lang="ts">
import State from '@/state';
import ActionController from "@/controller/ActionController";
import JobItem from "./components/JobItem.vue";
import { JobName } from '@/state/ActionState';

const jobs = [
    State.action.jobs[JobName.Farmer],
];
</script>

<template>
    <div id="actionView">
        <div id="actionHeader">{{ State.lang.titles.actions }}</div>
        <div id="jobHeader">
            <div>{{ State.lang.titles.jobs }}</div>
        </div>
        <div id="jobList">
            <JobItem :job="job" v-for="job in jobs" @click="ActionController.toggleSelectedJob(job.name)" />
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
    width: 100%;
    font-size: 1.2em;
    font-weight: bold;
}

/* Portrait */
@media only screen and (max-aspect-ratio: 1/1) {}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {}
</style>
