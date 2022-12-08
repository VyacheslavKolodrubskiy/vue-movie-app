<template>
  <button
    class="flex items-center space-x-1 duration-300 hover:opacity-50"
    @click="$router.back()"
  >
    <BaseIcon
      name="arrow-left"
    />
    <span class="text-white">Back</span>
  </button>
</template>
