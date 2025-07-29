<template>
  <div class="flex flex-col gap-8">
    <UCarousel
      ref="carousel"
      v-slot="{ item }"
      :items="sources"
      :prev="{ onClick: onClickPrev }"
      :next="{ onClick: onClickNext }"
      class="w-full max-w-2xl"
      @select="onSelect"
    >
      <NuxtImg
        format="webp"
        :src="item"
        class="w-full rounded-lg"
        draggable="false"
      />
    </UCarousel>
    <div class="flex gap-2 justify-center">
      <div
        v-for="(item, index) in sources"
        :key="index"
        class="opacity-25 hover:opacity-100 transition-opacity cursor-pointer"
        :class="{ 'opacity-100': activeIndex === index }"
        @click="select(index)"
      >
        <NuxtImg
          format="webp"
          :src="item"
          width="100"
          height="70"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  sources: {
    type: Array as () => string[],
    required: true,
  },
});

const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

const onClickPrev = () => {
  activeIndex.value--;
};
const onClickNext = () => {
  activeIndex.value++;
};
const onSelect = (index: number) => {
  activeIndex.value = index;
};

const select = (index: number) => {
  activeIndex.value = index;
  carousel.value?.emblaApi?.scrollTo(index);
};
</script>
