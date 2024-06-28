<script setup lang="ts">
import State from '@/state';
import Gold from '@/state/currency/Gold';
defineProps<{
    gold: Gold,
}>();
</script>

<template>
    <div class="goldDisplay">
        <!-- TODO Replace spans of coloured text with images -->
        <div v-if="gold.gold > 0">{{ gold.gold }}<span style="color: gold">g</span></div>
        <div v-if="gold.silver > 0">{{ gold.silver }}<span style="color: silver">s</span></div>
        <div>{{ gold.copper }}<span style="color: #B87333">c</span></div>
    </div>
</template>

<style scoped>
.goldDisplay {
    display: inline;
}

.goldDisplay>span {
    font-weight: bold;
    text-shadow: black 1px 1px 2px;
}
</style>
