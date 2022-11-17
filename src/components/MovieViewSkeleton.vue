<template>
  <div class="animate-pulse space-y-10">
    <div
      class="h-[144px] max-w-[560px] rounded-3xl bg-gray-500 xxs:h-[104px]"
    />
    <div class="aspect-video rounded-[40px] bg-gray-500" />

    <div class="flex space-x-20 lg:flex-col lg:space-x-0">
      <div
        class="h-[720px] w-full max-w-[480px] rounded-3xl bg-gray-500 lg:hidden"
      />

      <div class="w-full max-w-[480px] space-y-6 lg:max-w-full">
        <div class="h-10 rounded-lg bg-gray-500" />
        <div class="h-40 rounded-lg bg-gray-500" />
        <div class="h-8 w-[59px] rounded-lg bg-gray-500" />

        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="i in 6"
            :key="i"
            class="space-y-2"
          >
            <div class="h-3 w-10 rounded-lg bg-gray-500" />
            <div class="h-3 w-20 rounded-lg bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
    <div class="aspect-video w-full rounded-[40px] bg-gray-500" />

    <div class="bg-gray-500 w-40 rounded-lg h-5" />
    <div class="grid grid-cols-4 gap-6 md:grid-cols-2 xs:grid-cols-1">
      <div
        v-for="q in 8"
        :key="q"
        class="space-y-4 rounded-lg bg-[#20283e]/80 px-2 pt-2 pb-4 backdrop-blur-[80px]"
      >
        <div
          class="h-[400px] rounded-lg bg-gray-500 lg:h-[250px] md:h-[400px]"
        />
        <div class="h-5 rounded-lg bg-gray-500" />
        <div class="h-5 w-32 rounded-lg bg-gray-500" />
      </div>
    </div>

    <div class="bg-gray-500 w-40 rounded-lg h-5" />
    <div class="grid grid-cols-4 gap-6 md:grid-cols-2 xs:grid-cols-1">
      <div
        v-for="q in 8"
        :key="q"
        class="space-y-4 rounded-lg bg-[#20283e]/80 px-2 pt-2 pb-4 backdrop-blur-[80px]"
      >
        <div
          class="h-[400px] rounded-lg bg-gray-500 lg:h-[250px] md:h-[400px]"
        />
        <div class="h-5 rounded-lg bg-gray-500" />
        <div class="h-5 w-32 rounded-lg bg-gray-500" />
      </div>
    </div>
  </div>
</template>
