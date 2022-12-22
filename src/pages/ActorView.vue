<template>
  <div
    v-if="state.actor"
    class="space-y-10"
  >
    <BackButton />

    <div class="flex lg:flex-col lg:space-y-10">
      <ImageWithSkeleton
        :alt="`${state.actor.name} photography`"
        class="mr-20 max-h-[720px] rounded-3xl"
        height="720"
        :src="state.actor.profile_path"
        width="480"
      >
        <template #skeleton>
          <div class="max-w-[480px] w-full mr-20">
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
          {{ state.actor.name }}
        </h2>
        <p
          v-if="state.actor.biography"
          class="space-x-2 text-xl leading-8 text-secondary"
        >
          <span>{{ biography }}</span>

          <button
            v-if="isReadMoreShown"
            class="text-white duration-300 hover:text-primary/80"
            type="button"
            @click="state.readMoreActivated = !state.readMoreActivated"
          >
            {{ readMoreText }}
          </button>
        </p>

        <TheRating :count="state.actor.popularity" />

        <div class="grid grid-cols-2 gap-6">
          <div
            v-if="age"
            class="space-y-2"
          >
            <p class="text-secondary">
              Age:
            </p>
            <p class="text-xl text-primary">
              {{ age }}
            </p>
          </div>
          <div
            v-if="state.actor.birthday"
            class="space-y-2"
          >
            <p class="text-secondary">
              Birthday:
            </p>
            <p class="text-xl text-primary">
              {{ state.actor.birthday }}
            </p>
          </div>
          <div
            v-if="state.actor.deathday"
            class="space-y-2"
          >
            <p class="text-secondary">
              Death day:
            </p>
            <p class="text-xl text-primary">
              {{ state.actor.deathday }}
            </p>
          </div>
          <div
            v-if="state.actor.place_of_birth"
            class="col-span-2 space-y-2"
          >
            <p class="text-secondary">
              Place of birth:
            </p>
            <p class="text-xl text-primary">
              {{ state.actor.place_of_birth }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <BaseCarousel :slides="state.profiles" />

    <AppTitle>
      Other films with {{ state.actor.name }}
    </AppTitle>

    <div class="grid grid-cols-4 gap-3 md:grid-cols-2 lg:grid-cols-3">
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

  <ActorViewSkeleton v-else />
</template>

<script setup lang="ts">
import BaseCarousel from '../components/BaseCarousel.vue'
import { useAxios } from '~/composables'
import type { Movie } from '~/interface.movie'
import type { Actor, Profile } from '~/interface.actor'

const { params } = useRoute()

interface State {
  readMoreActivated: boolean
  movies: Movie[]
  profiles: Profile[]
  actor: Actor | null
}

const state = reactive<State>({
  readMoreActivated: false,
  movies: [],
  profiles: [],
  actor: null,
})

const readMoreText = computed(() => {
  return state.readMoreActivated ? 'hide' : 'read more'
})

const isReadMoreShown = computed(() => {
  return state.actor && state.actor?.biography?.length >= 500
})

const biography = computed(() => {
  return state.actor
    && state.actor?.biography?.length >= 500
    && !state.readMoreActivated
    ? `${state.actor?.biography?.slice(0, 500)}...`
    : state.actor?.biography
})

const age = computed(() => {
  return (
    state.actor && new Date().getFullYear() - +state.actor?.birthday?.slice(0, 4)
  )
});

(async function fetchActor() {
  const data = await useAxios(`/person/${params.id}`)
  state.actor = data
})();

(async function fetchMovies() {
  const data = await useAxios(`/person/${params.id}/combined_credits`)
  state.movies = data.cast
})();

(async function fetchActorImages() {
  const data = await useAxios(`/person/${params.id}/images`)
  state.profiles = data.profiles
})()
</script>
