<script setup lang="ts">
import type { MuseumResult } from '@/types/museumTypes';

const props = defineProps<{
  objects: MuseumResult[];
}>();
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <div
      class="flex flex-row bg-gray-200 hover:bg-gray-100 p-2 rounded-lg min-w-[25%] overflow-hidden mb-3 mr-3 last:mr-0 relative group"
      v-for="(result, index) in props.objects"
      :key="index"
      :data-test="`element${index}`"
    >
      <div class="w-full" data-test="image">
        <img class="max-h-60 max-w-full m-auto" :src="result.image" :alt="result.title" />
      </div>
      <div
        class="absolute w-full bottom-0 bg-white opacity-60 p-2 pb-4 hidden group-hover:block transition"
      >
        <p class="bold text-[0.7rem]" data-test="title">{{ result.title }}</p>
        <p class="text-[0.6rem] italic" data-test="author">by {{ result.author }}</p>
        <span class="text-[0.5rem] italic" data-test="year"
          >{{ result.year }}, {{ result.culture }}</span
        >
      </div>
    </div>
  </div>
</template>
