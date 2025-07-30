<script lang="ts" setup>
const route = useRoute();
const { data: page, status } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

watch(
  status,
  () => {
    if (status.value === "success" && page.value === null) {
      navigateTo("/");
    }
  },
  {
    immediate: true,
  }
);

useHead({
  titleTemplate: (titleChunk) => {
    let title = "";
    if (titleChunk) {
      title = titleChunk;
    }

    if (page.value && page.value.title) {
      title += ` | ${page.value.title}`;
    }
    return title;
  },
});
</script>

<template>
  <div v-if="page" class="h-full">
    <ContentRenderer :value="page" />
  </div>
</template>
