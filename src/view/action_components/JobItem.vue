<script setup lang="ts">
import State from '@/state';
import { Job } from '@/state/ActionState';
import GoldDisplay from "@/view/components/GoldDisplay.vue";
import LangStringDisplay from "@/view/components/LangStringDisplay.vue";

defineProps<{
    job: Job,
}>();
</script>

<template>
    <div class="jobItem">
        <div>{{ State.lang[job.name] }}</div>
        <LangStringDisplay :langString="State.lang.perDay">
            <GoldDisplay :gold="job.basePay" />
        </LangStringDisplay>
    </div>
</template>

<style scoped>
.jobItem {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
}
</style>
