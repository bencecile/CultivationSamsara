<script setup lang="ts">
import { Job } from '@/state/action/Jobs';
import GoldDisplay from "@/view/components/GoldDisplay.vue";

defineProps<{
    name: string,
    job: Job,
}>();
</script>

<template>
    <div class="jobItem">
        <div>{{ name }}</div>
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
