<template>
  <form @submit.prevent="emit('submit')">
    <BaseSearchInput
      v-model="searchQuery"
      class="xxs:placeholder:text-sm"
      placeholder="Search Movies or TV Series"
      type="search"
    />
  </form>
</template>

<script setup lang="ts">
import { useMovieFilters } from '~/stores'

const emit = defineEmits(['submit'])
const store = useMovieFilters()
const searchQuery = computed({
  get() {
    return store.searchQuery
  },
  set(newValue) {
    store.setSearchQuery(newValue)
  },
})
</script>
