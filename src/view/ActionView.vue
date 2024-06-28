<script setup lang="ts">
import State from '@/state';
import JobItem from "./action_components/JobItem.vue";
</script>

<template>
    <div id="actionView">
        <div id="actionHeader">{{ State.lang.actions }}</div>
        <div id="jobList">
            <div id="jobHeader">{{ State.lang.jobs }}</div>
            <JobItem :name="State.lang.farmer" :job="State.action.jobs.farmer" />
        </div>
    </div>
</template>

<style scoped>
#actionView {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
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
@media only screen and (max-aspect-ratio: 1/1) {
    #actionView {
        width: 90%;
    }
}

/* Landscape */
@media only screen and (min-aspect-ratio: 1/1) {
    #actionView {
        width: 50%;
    }
}
</style>
