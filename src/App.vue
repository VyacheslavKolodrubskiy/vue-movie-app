<template>
  <div class="h-full overflow-x-hidden">
    <BaseNotification />

    <button
      v-if="isArrowUpShown"
      class="group fixed bottom-10 right-5 z-50 cursor-pointer rounded-lg bg-[#20283e]/80 p-2"
      type="button"
      @click="handleClick"
    >
      <img
        alt="Arrow up"
        class="transition duration-300 group-hover:opacity-50"
        height="24"
        :src="getImageDynamically('icons/arrow-up.svg')"
        width="24"
      >
    </button>

    <TheHeader v-if="isLoggedIn" />
    <main>
      <section class="py-40">
        <div class="container">
          <RouterView />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/index'
import { getImageDynamically } from './utils'

const isLoggedIn = ref(false)
const isArrowUpShown = ref(false)

onAuthStateChanged(auth, (user) => {
  isLoggedIn.value = !!user
})

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
