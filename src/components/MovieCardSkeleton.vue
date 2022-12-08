<template>
  <img
    v-for="q in quantity"
    :key="q"
    alt="Card skeleton"
    src="../assets/images/card-skeleton.svg"
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  quantity: number
}>()
</script>
