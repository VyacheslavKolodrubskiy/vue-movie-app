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
    v-if="!imageUploaded || !src && $slots.skeleton"
    name="skeleton"
  />
</template>

<script setup lang="ts">
import type { ImageSizes } from '~/shared'
import { IMAGE_URL } from '~/shared'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  imageSize?: ImageSizes
}>(), {
  imageSize: 'w500',
})

const imageUploaded = ref(false)
</script>
