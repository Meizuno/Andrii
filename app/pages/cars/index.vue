<template>
  <div class="h-full">
    <div
      v-if="cars && cars.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <template v-for="car in cars" :key="car.id">
        <NuxtLink :to="car.stem">
          <UCard variant="subtle">
            <template #header>
              <NuxtImg :src="car.sources[0]" class="rounded object-cover" />
            </template>

            <div class="text-xl font-bold text-justify">{{ car.title }}</div>
          </UCard>
        </NuxtLink>
      </template>
    </div>
    <div v-else class="h-full flex justify-center items-center text-muted">
      Zatím žádné
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Auta` : "Auta";
  },
});

const { data: cars } = await useAsyncData("cars", () => {
  return queryCollection("cars").all();
});
</script>
