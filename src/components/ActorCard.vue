<template>
  <RouterLink
    v-if="actor.profile_path"
    :to="{
      name: Pages.ActorView,
      params: { id: actor.id },
    }"
  >
    <BaseCard>
      <BaseImage
        :alt="`${actor.name} picture`"
        class="w-full rounded-lg"
        height="400"
        :src="`${IMAGE_URL.w500}${actor.profile_path}`"
        width="266"
      >
        <template #skeleton>
          <div
            class="h-[396px] animate-pulse rounded-lg bg-gray-500 lg:h-[250px] md:h-[396px]"
          />
        </template>
      </BaseImage>

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
import type { Actor } from '~/interfaces'
import { Pages } from '~/enums'

const props = defineProps<{
  actor: Actor
}>()
</script>
