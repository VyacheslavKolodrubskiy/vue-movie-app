<template>
  <img
    v-show="imageUploaded && src"
    v-bind="$attrs"
    :alt="alt"
    class="object-cover"
    :src="`${IMAGE_URL[imageSize]}${src}`"
    @load="imageUploaded = true"
  >

  <slot
    v-if="!imageUploaded || !src"
    name="skeleton"
  />
</template>

<script setup lang="ts">
import { IMAGE_URL } from '~/constants'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  imageSize?: string
}>(), {
  imageSize: 'w500',
})

const imageUploaded = ref(false)
</script>
