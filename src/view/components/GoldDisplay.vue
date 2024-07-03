<script setup lang="ts">
import State from '@/state';
import Gold from '@/state/types/Gold';
defineProps<{
    gold: Gold,
}>();
</script>

<template>
    <div class="goldDisplay">
        <!-- TODO Replace spans of coloured text with images -->
        <div v-if="gold.gold > 0">
            {{ gold.gold }}<span class="goldUnit" style="color: gold">{{ State.lang.goldUnitGold }}</span>
        </div>
        <div v-if="gold.silver > 0">
            {{ gold.silver }}<span class="goldUnit" style="color: silver">{{ State.lang.goldUnitSilver }}</span>
        </div>
        <div>
            {{ gold.copper }}<span class="goldUnit" style="color: #B87333">{{ State.lang.goldUnitCopper }}</span>
        </div>
    </div>
</template>

<style scoped>
.goldDisplay {
    display: inline;
    width: fit-content;
}

.goldUnit {
    text-shadow: black 1px 1px 1px;
}
</style>
