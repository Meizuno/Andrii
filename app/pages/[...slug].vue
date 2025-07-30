<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  navigateTo("/");
}

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
