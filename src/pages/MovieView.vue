<template>
  <div
    v-if="state.movie"
    :key="state.movie.id"
    class="space-y-10"
  >
    <div
      class="w-full max-w-[560px] rounded-3xl bg-[#20283e]/80 p-10 backdrop-blur-xl xxs:p-7"
    >
      <div class="flex items-center text-[#beb7fb]">
        <RouterLink
          class="cursor-pointer duration-300 hover:text-[#beb7fb]/80"
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

    <ImageWithSkeleton
      :alt="`${state.movie.name} cover`"
      class="rounded-[40px]"
      height="480"
      image-size="original"
      :src="state.movie.backdrop_path"
      width="1200"
    >
      <template #skeleton>
        <div class="aspect-video animate-pulse rounded-[40px] bg-gray-500" />
      </template>
    </ImageWithSkeleton>

    <div class="flex lg:flex-col lg:space-y-10">
      <ImageWithSkeleton
        :alt="`${title} cover`"
        class="rounded-3xl max-h-[720px] lg:hidden mr-20"
        height="720"
        :src="state.movie.poster_path"
        width="480"
      >
        <template #skeleton>
          <div class="mr-20 lg:hidden max-w-[480px] w-full">
            <ImageSkeleton
              class="rounded-3xl"
              height="720"
              width="480"
            />
          </div>
        </template>
      </ImageWithSkeleton>

      <div class="max-w-[480px] space-y-6 lg:max-w-full">
        <h2 class="text-2xl font-bold text-primary">
          {{ tagline }}
        </h2>
        <p class="text-xl leading-8 text-secondary">
          {{ state.movie.overview }}
        </p>

        <TheRating :count="state.movie.vote_average" />

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
      :movie="state.movie"
      :title="title"
    />

    <template v-if="state.actors.length">
      <AppTitle>
        Actors
      </AppTitle>
      <div
        class="grid grid-cols-6 gap-3 md:grid-cols-2 lg:grid-cols-4"
      >
        <ActorCard
          v-for="(actor, index) in state.actors"
          :key="index"
          :actor="actor"
        />
      </div>
    </template>

    <AppTitle>
      Similar {{ type }}
    </AppTitle>

    <div
      class="grid grid-cols-4 gap-3 md:grid-cols-2 lg:grid-cols-3"
    >
      <template v-if="state.movies.length">
        <MovieCard
          v-for="movie in state.movies"
          :key="movie.id"
          :movie="movie"
        />
      </template>

      <MovieCardSkeleton
        v-else
        :quantity="20"
      />
    </div>
  </div>

  <MovieViewSkeleton v-else />
</template>

<script setup lang="ts">
import { useAxios } from '~/composables'
import { MEDIA_TYPES } from '~/constants'
import { Pages } from '~/enums'
import type { Actor } from '~/interface.actor'
import type { Movie } from '~/interface.movie'

interface State {
  movie: Movie | null
  movies: Movie[]
  actors: Actor[]
}

const route = useRoute()
const state = reactive<State>({
  movie: null,
  movies: [],
  actors: [],

})

const genres = computed(() => {
  return (
    state.movie?.genres
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
  return state.movie?.runtime ? `${state.movie?.runtime} min` : null
})

const isInProduction = computed(() => {
  return state.movie?.in_production ? 'Yes' : 'No'
})

const title = computed(() => {
  return state.movie?.title || state.movie?.name
})

const tagline = computed(() => {
  return state.movie?.tagline || title.value
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
      description: state.movie?.status,
    },

    {
      title: 'Release Date',
      description: state.movie?.release_date,
    },
    {
      title: 'Episodes',
      description: state.movie?.number_of_episodes,
    },
    {
      title: 'First Air Date',
      description: state.movie?.first_air_date,
    },
    {
      title: 'Last Air Date',
      description: state.movie?.last_air_date,
    },

    {
      title: 'Seasons',
      description: state.movie?.number_of_seasons,
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
  state.movie = data
}

async function fetchCast() {
  const data = await useAxios(
    `/${route.params.type}/${route.params.id}/credits`,
  )
  state.actors = data.cast
}
async function fetchCollection() {
  const data = await useAxios(
    `/${route.params.type}/${route.params.id}/similar`,
  )
  state.movies = data.results
}

watch(
  () => route.params.id,
  () => {
    if (route.params.type && route.params.id) {
      fetchMovie()
      fetchCast()
      fetchCollection()
    }
  },
  { immediate: true },
)
</script>
