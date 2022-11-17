<template>
  <form @submit.prevent="emit('submit')">
    <div
      class="flex items-center justify-between space-x-4 xxs:flex-col xxs:items-start xxs:space-y-4 xxs:space-x-0"
    >
      <div class="relative w-full">
        <BaseInput
          v-model="searchQuery"
          class="xxs:placeholder:text-sm"
          placeholder="Search Movies or TV Series"
          type="search"
        />

        <img
          alt="Search"
          class="absolute top-4 left-5"
          height="24"
          :src="getImageDynamically('icons/search.svg')"
          width="24"
        >
      </div>

      <BaseButton type="submit">
        Search
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useMovieFilters } from '~/stores'
import { getImageDynamically } from '~/utils'

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
