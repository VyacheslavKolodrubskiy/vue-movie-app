<template>
  <div class="text-primary text-right">
    <button
      class="bg-[#20283e]/80 hover:text-primary/80 disabled:hover:text-primary  disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-[80px] p-3 rounded-lg transition duration-300"
      :disabled="page === 1"
      type="button"
      @click="emit('prev')"
    >
      Prev
    </button>
    <span class="font-bold mx-3">{{ page }}</span>
    <button
      class="bg-[#20283e]/80 hover:text-primary/80 disabled:hover:text-primary backdrop-blur-[80px] p-3 rounded-lg transition duration-300"
      :disabled="page === totalPage"
      type="button"
      @click="emit('next')"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  page: number
  totalPage: number
}>()

const emit = defineEmits(['prev', 'next'])
</script>
