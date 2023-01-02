<template>
  <RouterLink
    v-if="movie.poster_path"
    class="group"
    :to="{
      name: Pages.MovieView,
      params: { id: movie.id, type },
    }"
  >
    <BaseCard>
      <div class="overflow-hidden rounded-lg">
        <ImageWithSkeleton
          :alt="`${title} cover`"
          class="w-full duration-300 group-hover:scale-105"
          height="400"
          :src="movie.poster_path"
          width="266"
        />
      </div>

      <template #title>
        {{ title }}
      </template>
    </BaseCard>
  </RouterLink>
</template>

<script setup lang="ts">
import { useMovieFilters } from '~/stores'
import type { Movie } from '~/shared'
import { MEDIA_TYPES, Pages } from '~/shared'

const props = defineProps<{
  movie: Movie
}>()

const route = useRoute()
const store = useMovieFilters()

const type = computed(() => {
  return props.movie.media_type || route.params.type || MEDIA_TYPES[store.currentCategory]
})

const title = computed(() => {
  return props.movie.title || props.movie.name
})
</script>
