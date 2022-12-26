import { defineStore } from 'pinia'
import type { Categories } from '~/shared'

interface State {
  searchQuery: string
  currentCategory: Categories
  page: number
  totalPages: number
}

export const useMovieFilters = defineStore('filters', {
  state: (): State => ({
    searchQuery: '',
    currentCategory: 'All',
    page: 1,
    totalPages: 0,
  }),
  actions: {
    setPage(payload: number) {
      this.page = payload
    },
    resetAllFilters() {
      this.searchQuery = ''
      this.currentCategory = 'All'
      this.page = 1
      this.totalPages = 0
    },
    increasePage() {
      this.page += 1
    },
    decreasePage() {
      this.page -= 1
    },
    setTotalPages(payload: number) {
      this.totalPages = payload
    },
    setSearchQuery(payload: string) {
      this.searchQuery = payload
    },
    setCurrentCategory(payload: Categories) {
      this.currentCategory = payload
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
