<template>
  <div
    class="rounded-xl h-full bg-[#20283e]/80 px-2 pt-2 pb-4 backdrop-blur-[80px] duration-300 hover:shadow-xl hover:shadow-accent"
  >
    <slot />

    <div class="space-y-1  mt-6 font-semibold">
      <p
        v-if="$slots.title"
        class="text-primary truncate"
      >
        <slot name="title" />
      </p>

      <p
        v-if="$slots.subtitle"
        class="text-secondary truncate"
      >
        <slot name="subtitle" />
      </p>
    </div>
  </div>
</template>
