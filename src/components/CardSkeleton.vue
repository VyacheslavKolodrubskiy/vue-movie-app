<template>
  <div
    v-for="q in quantity"
    :key="q"
    class="animate-pulse space-y-4 rounded-lg bg-[#20283e]/80 px-2 pt-2 pb-4 backdrop-blur-[80px]"
  >
    <img
      alt="Image Skeleton"
      class="w-full rounded-lg"
      height="400"
      src="../assets/images/image-skeleton.png"
      width="267"
    >

    <div class="h-5 rounded-lg bg-gray-500" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  quantity: number
}>()
</script>
