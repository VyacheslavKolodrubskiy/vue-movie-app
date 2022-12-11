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
        <BaseImage
          :alt="`${title} cover`"
          class="w-full duration-300 group-hover:scale-105"
          height="400"
          :src="movie.poster_path"
          width="266"
        >
          <template #skeleton>
            <ImageSkeleton
              height="400"
              width="266"
            />
          </template>
        </BaseImage>
      </div>

      <template #title>
        {{ title }}
      </template>
    </BaseCard>
  </RouterLink>
</template>

<script setup lang="ts">
import ImageSkeleton from './ImageSkeleton.vue'
import { MEDIA_TYPES } from '~/constants'
import { Pages } from '~/enums'
import { useMovieFilters } from '~/stores'
import type { Movie } from '~/interface.movie'

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
