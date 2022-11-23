<template>
  <div
    class="inline-flex shrink-0 space-x-1 rounded-xl bg-black/20 p-2 backdrop-blur-[80px]"
  >
    <div
      v-for="tab in tabs"
      :key="tab"
      class="shrink-0 cursor-pointer rounded-lg py-2 px-8 font-semibold text-[#ebe9fe] duration-300 hover:bg-accent"
      :class="{ 'bg-accent': currentTab === tab }"
      @click="emit('click', tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tabs: string[];
  currentTab: string;
}>();

const emit = defineEmits(["click"]);
</script>
