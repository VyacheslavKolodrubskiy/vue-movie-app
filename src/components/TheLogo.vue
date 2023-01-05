<template>
  <RouterLink :to="{ name: Pages.Home }">
    <BaseIcon
      height="40"
      name="logo"
      width="40"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { Pages } from '~/shared'
</script>
