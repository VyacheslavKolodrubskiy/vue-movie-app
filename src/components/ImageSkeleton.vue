<template>
  <picture>
    <source
      srcset="../assets/images/image-skeleton.webp"
      type="image/webp"
    >
    <img
      v-bind="$attrs"
      alt="Image Skeleton"
      class="w-full animate-pulse"
      src="../assets/images/image-skeleton.png"
    >
  </picture>
</template>

<!-- https://forum.vuejs.org/t/vue3-no-inheritattrs-false-in-script-setup/122812 -->
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
