import { defineStore } from 'pinia'
import { useMovieFilters } from './useMovieFilters'
import { useAxios } from '~/composables'
import { MEDIA_TYPES } from '~/constants'
import type { Movie } from '~/interfaces'

const movieFiltersStore = useMovieFilters()

interface State {
  movies: Movie[]
}

export const useMovie = defineStore('movies', {
  state: (): State => ({
    movies: [],
  }),
  actions: {
    async fetchCollection() {
      const searchType = movieFiltersStore.currentCategory === 'All'
        ? 'multi'
        : MEDIA_TYPES[movieFiltersStore.currentCategory]

      const url = movieFiltersStore.searchQuery
        ? `/search/${searchType}?query=${movieFiltersStore.searchQuery}`
        : `/trending/${MEDIA_TYPES[movieFiltersStore.currentCategory]}/day`

      const data = await useAxios(url, { page: movieFiltersStore.page })

      movieFiltersStore.setTotalPages(data.total_pages)

      this.movies = data.results
    },
  },
})
