<template>
  <div
    class="inline-flex items-center space-x-1 rounded-lg bg-black/[0.65] px-2 py-1 backdrop-blur-sm"
  >
    <BaseIcon
      height="16"
      name="star"
      width="16"
    />

    <p class="text-[#ffad49]">
      {{ count && count.toFixed(1) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  count: number
}>()
</script>
