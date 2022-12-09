<template>
  <div class="h-full overflow-x-hidden">
    <BaseNotification />

    <ArrowUpButton />

    <TheHeader v-if="isLoggedIn" />

    <main>
      <section class="py-40">
        <div class="container">
          <RouterView v-slot="{ Component, route }">
            <Transition
              mode="out-in"
              name="slide-fade"
            >
              <div :key="route.path">
                <component
                  :is="Component"
                />
              </div>
            </Transition>
          </RouterView>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const isLoggedIn = ref(false)

onAuthStateChanged(auth, (user) => {
  isLoggedIn.value = !!user
})
</script>
