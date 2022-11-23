<template>
  <button
    class="rounded-[12px] bg-accent py-4 px-8 text-white outline-none duration-300 hover:bg-accent/80 focus:ring-2 focus:ring-accent/60 disabled:cursor-progress disabled:opacity-50 disabled:hover:bg-accent"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    type?: ButtonHTMLAttributes["type"];
  }>(),
  {
    type: "button",
  }
);
</script>
