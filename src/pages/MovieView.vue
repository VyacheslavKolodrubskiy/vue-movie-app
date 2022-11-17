<template>
  <div
    v-if="movie"
    :key="movie.id"
    class="space-y-10"
  >
    <div
      class="w-full max-w-[560px] rounded-3xl bg-[#20283e]/80 p-10 backdrop-blur-xl xxs:p-7"
    >
      <div class="flex items-center text-[#beb7fb]">
        <RouterLink
          class="cursor-pointer transition duration-300 hover:text-[#beb7fb]/80"
          :to="{ name: Pages.Home }"
        >
          Home
        </RouterLink>

        <span class="px-2 text-secondary">/</span>
        <div class="">
          {{ type }}
        </div>
      </div>

      <p class="text-2xl font-semibold text-primary xxs:text-base">
        {{ title }}
      </p>
    </div>

    <BaseImage
      :alt="`${movie.name} picture`"
      class="rounded-[40px]"
      height="480"
      image-size="original"
      :src="movie.backdrop_path"
      width="1200"
    >
      <template #skeleton>
        <div class="aspect-video animate-pulse rounded-[40px] bg-gray-500" />
      </template>
    </BaseImage>

    <div class="flex lg:flex-col lg:space-y-10 lg:space-x-0">
      <BaseImage
        :alt="`${title} picture`"
        class="h-[720px] rounded-3xl lg:hidden mr-20"
        height="720"
        :src="movie.poster_path"
        width="480"
      >
        <template #skeleton>
          <div
            class="h-[720px] w-full max-w-[480px] mr-20 animate-pulse rounded-3xl bg-gray-500 lg:hidden"
          />
        </template>
      </BaseImage>

      <div class="max-w-[480px] space-y-6 lg:max-w-full">
        <h2 class="text-2xl font-bold text-primary">
          {{ tagline }}
        </h2>
        <p class="text-xl leading-8 text-secondary">
          {{ movie.overview }}
        </p>

        <TheRating :count="movie.vote_average" />

        <div class="grid grid-cols-2 gap-6">
          <MovieCharacteristic
            v-for="{ title, description } in characteristics"
            :key="title"
            :class="{
              'col-span-2': title.includes('Genres'),
            }"
            :description="description"
            :title="title"
          />
        </div>
      </div>
    </div>

    <YoutubeVideo
      :movie="movie"
      :title="title"
    />

    <h4 class="text-primary font-bold text-4xl">
      Similar {{ type }}
    </h4>
    <div
      class="grid grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1"
    >
      <template v-if="movies.length">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </template>

      <MovieCardSkeleton
        v-else
        :quantity="20"
      />
    </div>

    <template v-if="actors.length">
      <h4 class="text-primary font-bold text-4xl">
        Actors
      </h4>
      <div
        class="grid grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1"
      >
        <ActorCard
          v-for="(actor, index) in actors"
          :key="index"
          :actor="actor"
        />
      </div>
    </template>
  </div>

  <MovieViewSkeleton v-else />
</template>

<script setup lang="ts">
import { useAxios } from '~/composables'
import { MEDIA_TYPES } from '~/constants'
import { Pages } from '~/enums'
import type { Actor, Movie } from '~/interfaces'

const route = useRoute()
const movie = ref<Movie | null>(null)
const movies = ref<Movie[]>([])
const actors = ref<Actor[]>([])

const genres = computed(() => {
  return (
    movie.value?.genres
      .map(({ name }) => {
        return name
      })
      .join(', ') || ''
  )
})

const type = computed(() => {
  return Object.fromEntries(
    Object.entries(MEDIA_TYPES).map(type => type.reverse()),
  )[route.params.type as string]
})

const runtime = computed(() => {
  return movie.value?.runtime ? `${movie.value?.runtime} min` : null
})

const isInProduction = computed(() => {
  return movie.value?.in_production ? 'Yes' : 'No'
})

const title = computed(() => {
  return movie.value?.title || movie.value?.name
})

const tagline = computed(() => {
  return movie.value?.tagline || title.value
})

const characteristics = computed<Readonly<Record<string, any>[]>>(() => {
  return [
    {
      title: 'Type',
      description: type.value,
    },
    {
      title: 'Runtime',
      description: runtime.value,
    },
    {
      title: 'Status',
      description: movie.value?.status,
    },

    {
      title: 'Release Date',
      description: movie.value?.release_date,
    },
    {
      title: 'Episodes',
      description: movie.value?.number_of_episodes,
    },
    {
      title: 'First Air Date',
      description: movie.value?.first_air_date,
    },
    {
      title: 'Last Air Date',
      description: movie.value?.last_air_date,
    },

    {
      title: 'Seasons',
      description: movie.value?.number_of_seasons,
    },
    {
      title: 'In Production',
      description: isInProduction.value,
    },
    {
      title: 'Genres',
      description: genres.value,
    },
  ]
})

async function fetchMovie() {
  const data = await useAxios(`/${route.params.type}/${route.params.id}`)
  movie.value = data
}

async function fetchCast() {
  const data = await useAxios(
    `/${route.params.type}/${route.params.id}/credits`,
  )
  actors.value = data.cast
}
async function fetchCollection() {
  const data = await useAxios(
    `/${route.params.type}/${route.params.id}/similar`,
  )
  movies.value = data.results
}

watch(
  () => route.params.id,
  () => {
    fetchMovie()
    fetchCast()
    fetchCollection()
  },
  { immediate: true },
)
</script>
