<template>
  <div
    class="flex cursor-pointer items-center space-x-2 opacity-50 transition duration-300 hover:opacity-100"
    @click="handleClick"
  >
    <img
      alt="Logout"
      height="24"
      src="../assets/images/icons/logout.svg"
      width="24"
    >
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
