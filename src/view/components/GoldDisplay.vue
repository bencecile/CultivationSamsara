<script setup lang="ts">
import State from '@/state';
import Gold from '@/state/types/Gold';
defineProps<{
    gold: Gold,
}>();
</script>

<template>
    <span class="goldDisplay">
        <!-- TODO Replace spans of coloured text with images -->
        <span v-if="gold.gold > 0">
            {{ gold.gold }}<span class="goldUnit" style="color: gold">{{ State.lang.units.gold.gold }}</span>
        </span>
        <span v-if="gold.silver > 0">
            {{ gold.silver }}<span class="goldUnit" style="color: silver">{{ State.lang.units.gold.silver }}</span>
        </span>
        <span>
            {{ gold.copper }}<span class="goldUnit" style="color: #B87333">{{ State.lang.units.gold.copper }}</span>
        </span>
    </span>
</template>

<style scoped>
.goldDisplay {
    display: flex;
    gap: 0.5em;
}

.goldUnit {
    text-shadow: black 1px 1px 1px;
}
</style>
