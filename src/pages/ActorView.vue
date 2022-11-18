<template>
  <button
    class="mb-5 flex items-center space-x-2 transition duration-300 hover:opacity-50"
    @click="$router.back()"
  >
    <img
      alt="Arrow left"
      height="24"
      src="../assets/images/icons/arrow-left.svg"
      width="24"
    >
    <span class="text-white">Back</span>
  </button>

  <div
    v-if="actor"
    class="flex lg:flex-col lg:space-y-10 lg:space-x-0"
  >
    <BaseImage
      :alt="`${actor.name} picture`"
      class="mr-20 h-[720px] rounded-3xl lg:h-auto"
      height="720"
      :src="actor.profile_path"
      width="480"
    >
      <template #skeleton>
        <div
          class="mr-20 h-[720px] w-[480px] shrink-0 animate-pulse rounded-[40px] bg-gray-500 xs:h-[450px] xs:w-full"
        />
      </template>
    </BaseImage>

    <div class="max-w-[480px] space-y-6 lg:max-w-full">
      <h2 class="text-2xl font-bold text-primary">
        {{ actor.name }}
      </h2>
      <p
        v-if="actor.biography"
        class="space-x-2 text-xl leading-8 text-secondary"
      >
        <span>{{ biography }}</span>
        <button
          v-if="isReadMoreShown"
          class="text-white transition duration-300 hover:text-primary/80"
          type="button"
          @click="readMoreActivated = !readMoreActivated"
        >
          {{ readMoreText }}
        </button>
      </p>

      <TheRating :count="actor.popularity" />

      <div class="grid grid-cols-2 gap-6">
        <div
          v-if="age"
          class="space-y-2"
        >
          <p class="text-secondary">
            Age:
          </p>
          <p class="text-xl text-primary">
            {{ age }}
          </p>
        </div>
        <div
          v-if="actor.birthday"
          class="space-y-2"
        >
          <p class="text-secondary">
            Birthday:
          </p>
          <p class="text-xl text-primary">
            {{ actor.birthday }}
          </p>
        </div>
        <div
          v-if="actor.deathday"
          class="space-y-2"
        >
          <p class="text-secondary">
            Death day:
          </p>
          <p class="text-xl text-primary">
            {{ actor.deathday }}
          </p>
        </div>
        <div
          v-if="actor.place_of_birth"
          class="col-span-2 space-y-2"
        >
          <p class="text-secondary">
            Place of birth:
          </p>
          <p class="text-xl text-primary">
            {{ actor.place_of_birth }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <ActorViewSkeleton v-else />
</template>

<script setup lang="ts">
import { useAxios } from '~/composables'
import type { Person } from '~/interfaces'

const { params } = useRoute()
const actor = ref<Person | null>(null)
const readMoreActivated = ref(false)

const readMoreText = computed(() => {
  return readMoreActivated.value ? 'hide' : 'read more'
})

const isReadMoreShown = computed(() => {
  return actor.value && actor.value?.biography.length >= 500
})

const biography = computed(() => {
  return actor.value
    && actor.value?.biography.length >= 500
    && !readMoreActivated.value
    ? `${actor.value?.biography.slice(0, 500)}...`
    : actor.value?.biography
})

const age = computed(() => {
  return (
    actor.value && new Date().getFullYear() - +actor.value.birthday.slice(0, 4)
  )
});

(async function fetchActor() {
  const data = await useAxios(`/person/${params.id}`)
  actor.value = data
})()
</script>
