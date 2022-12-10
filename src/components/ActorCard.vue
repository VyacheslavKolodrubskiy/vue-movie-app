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
        <BaseImage
          :alt="`${actor.name} picture`"
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
        </BaseImage>
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
import { IMAGE_URL } from '~/constants'
import { Pages } from '~/enums'
import type { Actor } from '~/interface.actor'

const props = defineProps<{
  actor: Actor
}>()
</script>
