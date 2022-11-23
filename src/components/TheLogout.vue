<template>
  <div
    class="flex cursor-pointer items-center space-x-2 opacity-50 duration-300 hover:opacity-100"
    @click="handleClick"
  >
    <BaseIcon name="logout" />

    <span class="font-semibold text-white"> Logout </span>
  </div>
</template>

<script setup lang="ts">
import { useMovieFilters } from "~/stores/useMovieFilters";
import { Pages } from "~/enums";
import { auth } from "~/firebase";

const router = useRouter();
const movieFiltersStore = useMovieFilters();

function handleClick() {
  auth.signOut();
  movieFiltersStore.resetAllFilters();
  router.push({ name: Pages.Auth });
}
</script>
