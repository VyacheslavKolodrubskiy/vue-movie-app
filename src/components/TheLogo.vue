<template>
  <RouterLink :to="{ name: Pages.Home }">
    <img
      alt="Logo"
      height="40"
      src="../assets/images/icons/logo.svg"
      width="40"
    >
  </RouterLink>
</template>

<script setup lang="ts">
import { Pages } from '~/enums'
</script>

