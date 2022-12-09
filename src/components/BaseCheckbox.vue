<template>
  <input
    :id="label"
    class=""
    v-bind="$attrs"
    name=""
    type="radio"
    :value="modelValue"
    @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  >
  <label
    class="text-[#ebe9fe] font-semibold"
    :for="label"
  >{{ label }}</label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

