<template>
  <input
    class="w-full rounded-[12px] border border-[#323B54] bg-transparent py-4 pl-14 pr-4 text-white outline-none placeholder:text-[#475069] focus:ring-2 focus:ring-accent/60"
    :type="type"
    :value="modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
</template>

<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    type?: InputHTMLAttributes['type']
  }>(),
  {
    type: 'text',
  },
)

const emit = defineEmits(['update:modelValue'])
</script>
