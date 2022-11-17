<template>
  <div
    v-for="q in quantity"
    :key="q"
    class="animate-pulse space-y-4 rounded-lg bg-[#20283e]/80 px-2 pt-2 pb-4 backdrop-blur-[80px]"
  >
    <div
      class="h-[400px] rounded-lg bg-gray-500 lg:h-[250px] md:h-[400px]"
    />
    <div class="h-5 rounded-lg bg-gray-500" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  quantity: number
}>()
</script>
