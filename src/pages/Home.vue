<template>
  <div class="mb-[88px] max-w-[640px]">
    <h1
      class="mb-4 text-[64px] font-semibold leading-[80px] text-primary sm:text-5xl xxs:text-4xl"
    >
      Search and Explore Movies or TV Series
    </h1>

    <p class="mb-6 text-secondary">
      You can search for a movie by name and switch between categories,
      <span class="text-accent">don't forget to click the search button.</span>
    </p>
    <SearchForm @submit="handleSubmit" />
  </div>

  <div class="space-y-6">
    <div class="space-y-4 xxs:overflow-x-scroll">
      <BaseTabs
        :current-tab="movieFiltersStore.currentCategory"
        :tabs="state.categories"
        @click="handleCategoryClick"
      />
    </div>

    <div
      class="grid grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1"
    >
      <template v-if="moviesStore.movies.length">
        <MovieCard
          v-for="movie in moviesStore.movies"
          :key="movie.id"
          :movie="movie"
        />
      </template>

      <MovieCardSkeleton
        v-else
        :quantity="20"
      />
    </div>
    <AppPagination
      :page="movieFiltersStore.page"
      :total-page="movieFiltersStore.totalPages"
      @next="handleNextClick"
      @prev="handlePrevClick"
    />
  </div>
</template>

<script setup lang="ts">
import { useMovieFilters, useMovies } from '~/stores'

interface State {
  isSearchFormSubmitted: boolean
  categories: string[]
}

const moviesStore = useMovies()
const movieFiltersStore = useMovieFilters()

const state = reactive<State>({
  isSearchFormSubmitted: false,
  categories: ['All', 'Movies', 'TV Series'],
})

const searchQuery = computed(() => movieFiltersStore.searchQuery)

function handlePrevClick() {
  if (movieFiltersStore.page === 1)
    return

  movieFiltersStore.decreasePage()
  moviesStore.fetchCollection()
}

function handleNextClick() {
  if (movieFiltersStore.page === movieFiltersStore.totalPages)
    return

  movieFiltersStore.increasePage()
  moviesStore.fetchCollection()
}

function handleCategoryClick(category: string) {
  movieFiltersStore.setPage(1)
  movieFiltersStore.setCurrentCategory(category)
  moviesStore.fetchCollection()
}

function handleSubmit() {
  state.isSearchFormSubmitted = true
  movieFiltersStore.setPage(1)
  moviesStore.fetchCollection()
}

watch(
  () => searchQuery.value,
  (value) => {
    if (!value) {
      moviesStore.fetchCollection()
      movieFiltersStore.setPage(1)
      state.isSearchFormSubmitted = false
    }
  },
)

moviesStore.fetchCollection()
</script>
