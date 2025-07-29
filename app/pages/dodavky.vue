<template>
  <div class="h-full flex flex-col gap-8">
    <template v-for="(car, carIndex) in cars" :key="car.id">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="flex flex-col gap-4 items-center">
          <UCarousel
            v-slot="{ item }"
            dots
            :items="car.sources"
            class="w-full max-w-2xl"
          >
            <NuxtImg
              format="webp"
              :src="item"
              class="w-full rounded-lg"
              draggable="false"
              :alt="car.title"
            />
          </UCarousel>
        </div>
        <ContentRenderer
          v-if="carsInfo[carIndex]"
          :value="carsInfo[carIndex]"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { CarsInfoCollectionItem } from "@nuxt/content";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Pronájem dodávky` : "Pronájem dodávky";
  },
});

const { data: cars } = await useAsyncData("cars", () => {
  return queryCollection("cars").all();
});

const carsInfo = ref<CarsInfoCollectionItem[]>([]);
cars.value?.forEach(async (car) => {
  const carInfo = await queryCollection("carsInfo")
    .path(car.meta.path as string)
    .first();

  if (carInfo) {
    carsInfo.value.push(carInfo);
  }
});
</script>
