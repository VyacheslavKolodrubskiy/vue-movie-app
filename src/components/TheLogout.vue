<template>
  <div
    class="flex cursor-pointer group items-center space-x-2 duration-300 hover:opacity-50"
    @click="handleClick"
  >
    <BaseIcon
      class="group-hover:translate-x-1 duration-300"
      name="logout"
    />

    <span class="font-semibold text-white"> Logout </span>
  </div>
</template>

<script setup lang="ts">
import { useMovieFilters } from '~/stores/useMovieFilters'
import { Pages } from '~/enums'
import { auth } from '~/firebase'

const router = useRouter()
const movieFiltersStore = useMovieFilters()

function handleClick() {
  auth.signOut()
  movieFiltersStore.resetAllFilters()
  router.push({ name: Pages.Auth })
}
</script>
