<template>
  <div
    class="flex items-center justify-between space-x-4 xxs:flex-col xxs:items-start xxs:space-y-4 xxs:space-x-0"
  >
    <div class="relative w-full">
      <BaseInput
        :model-value="modelValue"
        v-bind="$attrs"
        :type="type"
        @update:model-value="emit('update:modelValue', $event)"
      />

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
    type: 'search',
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
