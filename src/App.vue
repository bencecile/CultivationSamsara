<script setup lang="ts">
import State from "@/state";
import ActionView from "@/view/ActionView.vue";
import OptionView from "@/view/OptionView.vue";
import { ref } from "vue";

let isOptionsVisible = ref(false);
function toggleOptions() {
    isOptionsVisible.value = !isOptionsVisible.value;
}
</script>

<template>
    <ActionView />
    <button @click="toggleOptions">{{ State.lang.options }}</button>
    <OptionView v-if="isOptionsVisible" @close-clicked="toggleOptions" />
</template>

<style scoped></style>
