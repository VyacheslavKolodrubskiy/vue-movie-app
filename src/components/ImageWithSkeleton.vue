<template>
  <img
    v-show="imageUploaded"
    v-bind="$attrs"
    :alt="alt"
    class="object-cover"
    :src="`${IMAGE_URL[imageSize]}${src}`"
    @load="imageUploaded = true"
  >

  <img
    v-if="!imageUploaded"
    v-bind="$attrs"
    alt="Image Skeleton"
    class="w-full animate-pulse"
    src="../assets/images/image-skeleton.png"
  >
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
