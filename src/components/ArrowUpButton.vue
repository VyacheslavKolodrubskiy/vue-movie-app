<template>
  <button
    class="group fixed bottom-10 right-5 z-50 cursor-pointer rounded-lg bg-[#20283e]/80 p-2 duration-300"
    :class="{ 'invisible opacity-0 translate-y-10': !isArrowUpShown }"
    type="button"
    @click="handleClick"
  >
    <BaseIcon
      class="duration-300 group-hover:opacity-50"
      name="arrow-up"
    />
  </button>
</template>

<script setup lang="ts">
const isArrowUpShown = ref(false)

function handleScroll() {
  isArrowUpShown.value = window.scrollY > 1000
}

function handleClick() {
  window.scrollTo({ top: 0 })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
