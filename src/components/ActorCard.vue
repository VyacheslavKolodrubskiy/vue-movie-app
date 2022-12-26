<template>
  <RouterLink
    v-if="actor.profile_path"
    class="group"
    :to="{
      name: Pages.ActorView,
      params: { id: actor.id },
    }"
  >
    <BaseCard>
      <div class="overflow-hidden rounded-lg">
        <ImageWithSkeleton
          :alt="`${actor.name} photography`"
          class="w-full h-full duration-300 group-hover:scale-105"
          height="253"
          :src="`${IMAGE_URL.w500}${actor.profile_path}`"
          width="168"
        >
          <template #skeleton>
            <ImageSkeleton
              height="253"
              width="168"
            />
          </template>
        </ImageWithSkeleton>
      </div>

      <template #title>
        {{ actor.name }}
      </template>
      <template #subtitle>
        {{ actor.character }}
      </template>
    </BaseCard>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Actor } from '~/shared'
import { IMAGE_URL, Pages } from '~/shared'

const props = defineProps<{
  actor: Actor
}>()
</script>
