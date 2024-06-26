<script setup lang="ts">
import { State } from '@/state/state';
</script>

<template>
  <div class="wrapper">
    <div>{{ State.count }} ({{ State.doubleCount }})</div>
    <button @click="State.increment">Increment</button>
  </div>
</template>

<style scoped></style>
