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
    <span class="perSecondDisplay" :class="{ wide: State.lang.isWide, positive: isPositive }">
        <span v-if="includeBrackets">{{ State.lang.punctuation.leftParentheses }}</span>
        <slot></slot>
        <span class="slash">{{ State.lang.punctuation.slash }}</span>
        <span>{{ State.lang.units.time[timeUnit] }}</span>
        <span v-if="includeBrackets">{{ State.lang.punctuation.rightParentheses }}</span>
    </span>
</template>

<style scoped>
.perSecondDisplay {
    display: flex;
    padding: 0 0.1em;
    transform: skewX(-20deg);
}

.perSecondDisplay.positive {
    transform: skewX(0);
    font-weight: bold;
}

.perSecondDisplay>.slash {
    padding: 0 0.3em;
}

.perSecondDisplay.wide,
.perSecondDisplay.wide>.slash {
    padding: 0;
}
</style>
