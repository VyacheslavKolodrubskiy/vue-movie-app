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
  </div>
</template>
