<template>
  <div class="animate-pulse space-y-10">
    <div class="flex space-x-20 lg:flex-col lg:space-x-0">
      <div
        class="mb-10 h-[720px] w-[480px] shrink-0 rounded-3xl bg-gray-500 xs:w-full xs:h-[450px]"
      />

      <div class="w-full max-w-[480px] space-y-6 lg:max-w-full">
        <div class="h-10 rounded-lg bg-gray-500" />
        <div class="h-80 rounded-lg bg-gray-500" />
        <div class="h-8 w-[59px] rounded-lg bg-gray-500" />

        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="i in 3"
            :key="i"
            class="space-y-2"
          >
            <div class="h-3 w-10 rounded-lg bg-gray-500" />
            <div class="h-3 w-20 rounded-lg bg-gray-500" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ImageSkeleton
        v-for="i in 4"
        :key="i"
        class="rounded-lg animate-none"
        :class="{ 'lg:hidden': i === 4, 'md:hidden': i === 3 }"
        height="400"
        width="267"
      />
    </div>

    <div class="flex space-x-2">
      <div
        v-for="i in 2"
        :key="i"
        class="bg-gray-500 w-14 h-10 rounded-lg"
      />
    </div>

    <div class="bg-gray-500 w-40 rounded-lg h-5" />

    <div class="grid grid-cols-4 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <MovieCardSkeleton :quantity="20" />
    </div>
  </div>
</template>

