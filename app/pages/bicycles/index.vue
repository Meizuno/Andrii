<template>
  <div class="h-full">
    <div
      v-if="bicycles && bicycles.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <template v-for="bicycle in bicycles" :key="bicycle.id">
        <NuxtLink :to="bicycle.stem">
          <UCard variant="subtle">
            <template #header>
              <NuxtImg :src="bicycle.sources[0]" class="rounded object-cover" />
            </template>

            <div class="text-xl font-bold text-justify">
              {{ bicycle.title }}
            </div>
          </UCard>
        </NuxtLink>
      </template>
    </div>
    <div v-else class="h-full flex justify-center items-center text-muted">
      Zatím žádné
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Kola` : "Kola";
  },
});

const { data: bicycles } = await useAsyncData("bicycles", () => {
  return queryCollection("bicycles").all();
});

console.log(bicycles.value);
</script>
