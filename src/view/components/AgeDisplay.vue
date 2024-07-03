<script setup lang="ts">
import State from '@/state';
import Age from '@/state/types/Age';
defineProps<{
    age: Age,
}>();
</script>

<template>
    <div class="ageDisplay">
        <div v-if="age.years > 0">
            {{ age.years }}{{ State.lang.ageYears }}
        </div>
        <div>
            {{ age.days }}{{ State.lang.ageDays }}
        </div>
    </div>
</template>

<style scoped>
.ageDisplay {
    display: inline;
}
</style>
