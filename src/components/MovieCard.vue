<template>
  <RouterLink
    v-if="movie.poster_path"
    :to="{
      name: Pages.MovieView,
      params: { id: movie.id, type },
    }"
  >
    <BaseCard>
      <BaseImage
        :alt="`${title} picture`"
        class="w-full min-h-[400px] rounded-lg"
        height="400"
        :src="movie.poster_path"
        width="266"
      >
        <template #skeleton>
          <div
            class="h-[387px] animate-pulse rounded-lg bg-gray-500 lg:h-[250px] md:h-[387px]"
          />
        </template>
      </BaseImage>

      <template #title>
        {{ title }}
      </template>
    </BaseCard>
  </RouterLink>
</template>

<script setup lang="ts">
import { MEDIA_TYPES } from '~/constants'
import { Pages } from '~/enums'
import { useMovieFilters } from '~/stores'
import type { Movie } from '~/interfaces'

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
