<template>
  <div
    class="flex items-center justify-between space-x-4 xxs:flex-col xxs:items-start xxs:space-y-4 xxs:space-x-0"
  >
    <div class="relative w-full">
      <input
        class="w-full rounded-[12px] border border-[#323B54] bg-transparent py-4 pl-14 pr-4 text-white outline-none placeholder:text-[#475069] focus:ring-2 focus:ring-accent/60"
        :type="type"
        :value="modelValue"
        v-bind="$attrs"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      >

      <BaseIcon
        class="absolute top-4 left-5"
        name="search"
      />
    </div>
    <BaseButton type="submit">
      Search
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    type?: InputHTMLAttributes['type']
  }>(),
  {
    modelValue: '',
    type: 'text',
  },
)

const emit = defineEmits(['update:modelValue'])
</script>

<!-- https://forum.vuejs.org/t/vue3-no-inheritattrs-false-in-script-setup/122812 -->
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
