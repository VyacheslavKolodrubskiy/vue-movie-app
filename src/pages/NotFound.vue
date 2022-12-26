<template>
  <div class="mx-auto max-w-[588px] text-center">
    <picture>
      <source
        srcset="../assets/images/not-found.webp"
        type="image/webp"
      >
      <img
        alt="Not Found"
        class="mx-auto mb-10"
        height="320"
        src="../assets/images/not-found.png"
        width="400"
      >
    </picture>

    <h2 class="mb-4 text-5xl font-semibold text-primary xxs:text-3xl">
      Lost your way?
    </h2>
    <p class="mb-6 text-secondary">
      Oops! This is awkward. You are looking for something that doesn't actually
      exist.
    </p>

    <BaseButton @click="$router.push({ name: Pages.Home })">
      Go Home
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { Pages } from '~/shared'
</script>

