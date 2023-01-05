<template>
  <img
    :alt="`${name} icon`"
    :height="height"
    :src="icon"
    :width="width"
  >
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  width?: string
  height?: string
}>(), {
  width: '24',
  height: '24',
})

const icon = computed(() => {
  return new URL(`../assets/images/icons/${props.name}.svg`, import.meta.url).href
})
</script>
