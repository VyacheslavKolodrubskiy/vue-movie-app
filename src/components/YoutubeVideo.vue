<template>
  <iframe
    v-if="video?.key"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="aspect-video w-full rounded-3xl"
    frameborder="0"
    :src="`https://www.youtube-nocookie.com/embed/${video.key}`"
    :title="`${title} ${video.name}`"
  />
</template>

<script setup lang="ts">
import type { Movie } from '~/interfaces'

const props = defineProps<{
  movie: Movie
  title?: string
}>()

const video = computed(() => {
  return (
    props.movie.videos.results.find(({ name, type }) => {
      return name.includes('Official Trailer') || type.includes('Trailer')
    }) || props.movie.videos.results[0]
  )
})
</script>
