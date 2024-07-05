<script setup lang="ts">
import State from '@/state';
import { LangName } from "@/i18n/Language";
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    chBeforeContent?: boolean,
    enBeforeContent?: boolean,
    jaBeforeContent?: boolean,
    langString: string,
}>(), {
    chBeforeContent: true,
    enBeforeContent: false,
    jaBeforeContent: true,
});

let isBeforeContent = computed(() => {
    switch (State.lang.currentLang) {
        case LangName.ZhS:
        case LangName.ZhT:
            return props.chBeforeContent;
        case LangName.En:
            return props.enBeforeContent;
        case LangName.Ja:
            return props.jaBeforeContent;
    }
});
</script>

<template>
    <div v-if="isBeforeContent" class="langStringDisplay">
        {{ langString }}
        <slot></slot>
    </div>
    <div v-else class="langStringDisplay">
        <slot></slot>
        {{ langString }}
    </div>
</template>

<style scoped>
.langStringDisplay {
    display: flex;
    width: fit-content;
    column-gap: 0.25em;
}
</style>
