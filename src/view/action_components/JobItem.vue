<script setup lang="ts">
import State from '@/state';
import { Job } from '@/state/ActionState';
import GoldDisplay from "@/view/components/GoldDisplay.vue";

defineProps<{
    job: Job,
}>();
</script>

<template>
    <div class="jobItem">
        <div>{{ State.lang.enums[job.name] }}</div>
        <GoldDisplay :gold="job.basePay" />
    </div>
</template>

<style scoped>
.jobItem {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
}
</style>
