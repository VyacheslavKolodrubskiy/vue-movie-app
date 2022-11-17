<template>
  <TransitionGroup
    class="fixed top-24 right-5 z-20 space-y-2 text-center"
    :class="{ invisible: !messages.length }"
    name="list"
    tag="ul"
  >
    <li
      v-for="(toast, index) in messages"
      :key="index"
      class="rounded-xl border border-[#20283e] bg-[#121829]/80 p-4 backdrop-blur-2xl"
    >
      <div class="font-bold text-primary">
        {{ toast }}
      </div>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useNotification } from '~/composables'

const { messages } = useNotification()
</script>
