<template>
  <div v-if="slides.length">
    <Carousel
      v-bind="$attrs"
      ref="carouselRef"
      :breakpoints="state.breakpoints"
      :settings="state.settings"
    >
      <Slide
        v-for="{ file_path } in slides"
        :key="file_path"
      >
        <ImageWithSkeleton
          alt="Photography"
          class="rounded-lg object-cover"
          height="400"
          :src="`${IMAGE_URL.original}${file_path}`"
          width="268"
        >
          <template #skeleton>
            <ImageSkeleton class="rounded-lg" />
          </template>
        </ImageWithSkeleton>
      </Slide>
    </Carousel>

    <div class="space-x-2">
      <CarouselButton @click="moveSlide('prev')">
        <BaseIcon
          class="group-hover:opacity-50 duration-300 w-4 h-4"
          name="chevron-left"
        />
      </CarouselButton>

      <CarouselButton @click="moveSlide('next')">
        <BaseIcon
          class="group-hover:opacity-50 duration-300 w-4 h-4"
          name="chevron-right"
        />
      </CarouselButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import ImageWithSkeleton from './ImageWithSkeleton.vue'
import type { Profile } from '~/interface.actor'
import { IMAGE_URL } from '~/constants'

type CarouselType = InstanceType<typeof Carousel>

const props = defineProps<{
  slides: Profile[]
  settings?: CarouselType['settings']
  breakpoints?: CarouselType['breakpoints']
}>()

const state = reactive({
  settings: {
    ...props.settings,
    itemsToShow: 4,
    wrapAround: true,
    autoplay: 2000,
    transition: 1000,
    snapAlign: 'start',
  },
  breakpoints: {
    ...props.breakpoints,
    0: {
      itemsToShow: 1,
    },
    420: {
      itemsToShow: 2,
    },
    700: {
      itemsToShow: 3,
    },
    900: {
      itemsToShow: 4,
    },

  },
})

const carouselRef = ref<any | null>(null)

function moveSlide(method: 'prev' | 'next') {
  carouselRef.value?.[method]()
}
</script>

<!-- https://forum.vuejs.org/t/vue3-no-inheritattrs-false-in-script-setup/122812 -->
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style>
@import 'vue3-carousel/dist/carousel.css';
.carousel__slide {
  padding: 10px;
}
</style>
