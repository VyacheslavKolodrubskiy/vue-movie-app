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
        :tabs="CATEGORIES"
        @click="handleCategoryClick"
      />
    </div>

    <div
      class="grid grid-cols-4 gap-3 md:grid-cols-2 lg:grid-cols-3"
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
import { CATEGORIES } from '~/shared/constants'
import { useMovieFilters, useMovies } from '~/stores'
import type { Categories } from '~/shared/types'

const moviesStore = useMovies()
const movieFiltersStore = useMovieFilters()
const isSearchFormSubmitted = ref(false)

const searchQuery = computed(() => movieFiltersStore.searchQuery)

function scrollToFirstCardsRow() {
  window.scrollTo({ top: 450 })
}

function handlePrevClick() {
  if (movieFiltersStore.page === 1)
    return

  movieFiltersStore.decreasePage()
  moviesStore.fetchCollection()
  scrollToFirstCardsRow()
}

function handleNextClick() {
  if (movieFiltersStore.page === movieFiltersStore.totalPages)
    return

  movieFiltersStore.increasePage()
  moviesStore.fetchCollection()
  scrollToFirstCardsRow()
}

function handleCategoryClick(category: Categories) {
  movieFiltersStore.setPage(1)
  movieFiltersStore.setCurrentCategory(category)
  moviesStore.fetchCollection()
}

function handleSubmit() {
  isSearchFormSubmitted.value = true
  movieFiltersStore.setPage(1)
  moviesStore.fetchCollection()
}

watch(
  () => searchQuery.value,
  (value) => {
    if (!value) {
      moviesStore.fetchCollection()
      movieFiltersStore.setPage(1)
      isSearchFormSubmitted.value = false
    }
  },
)

moviesStore.fetchCollection()
</script>
