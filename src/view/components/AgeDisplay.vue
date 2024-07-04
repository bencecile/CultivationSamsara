<script setup lang="ts">
import State from '@/state';
import Age from '@/state/types/Age';
defineProps<{
    age: Age,
}>();
</script>

<template>
    <span class="ageDisplay">
        <span v-if="age.years > 0">
            {{ age.years }}{{ State.lang.units.time.year }}
        </span>
        <span>
            {{ age.days }}{{ State.lang.units.time.day }}
        </span>
    </span>
</template>

<style scoped>
.ageDisplay {
    display: flex;
    gap: 0.5em;
}
</style>
