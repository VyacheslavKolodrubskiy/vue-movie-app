<template>
  <div v-if="slides.length">
    <Carousel
      v-bind="$attrs"
      :breakpoints="state.breakpoints"
      :settings="state.settings"
    >
      <Slide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <slot :slide="slide" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'

type CarouselType = InstanceType<typeof Carousel>

const props = defineProps<{
  slides: any[]
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
</script>

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

.carousel__icon{
 fill: #fff;
}
</style>
