<template>
  <div
    class="inline-flex items-center space-x-1 rounded-lg bg-black/[0.65] px-2 py-1 backdrop-blur-sm"
  >
    <img
      alt="Star"
      height="16"
      :src="getImageDynamically('icons/star.svg')"
      width="16"
    >
    <p class="text-[#ffad49]">
      {{ count && count.toFixed(1) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { getImageDynamically } from '~/utils'

const props = defineProps<{
  count: number
}>()
</script>
