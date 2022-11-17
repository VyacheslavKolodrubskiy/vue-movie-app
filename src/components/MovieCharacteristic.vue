<template>
  <div
    v-if="description"
    class="space-y-2"
  >
    <p class="text-secondary">
      {{ title }}:
    </p>
    <p class="text-xl text-primary">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: any
}>()
</script>
