<script setup lang="ts">
import State from '@/state';
import { TimeUnit } from '@/state/types/TimeUnit';

withDefaults(defineProps<{
    timeUnit: TimeUnit,
    includeBrackets?: boolean,
    isPositive?: boolean,
}>(), {
    includeBrackets: true,
    isPositive: true,
});
</script>

<template>
    <span class="perSecondDisplay" :class="{ wide: State.lang.isWide, negative: !isPositive }">
        <span v-if="includeBrackets">(</span>
        <slot></slot>
        <span class="slash">/</span>
        <span>{{ State.lang.units.time[timeUnit] }}</span>
        <span v-if="includeBrackets">)</span>
    </span>
</template>

<style scoped>
.perSecondDisplay {
    display: flex;
    padding: 0 0.1em;
    font-weight: bold;
}

.perSecondDisplay.negative {
    transform: skewX(-20deg);
}

.perSecondDisplay>.slash {
    padding: 0 0.3em;
}
</style>
