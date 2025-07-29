<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useHead({
  titleTemplate: (titleChunk) => {
    let title = ""
    if (titleChunk) {
      title = titleChunk;
    }

    if (page.value && page.value.title) {
      title += ` | ${page.value.title}`;
    }
    return title
  },
});
</script>

<template>
  <div v-if="page" class="h-full">
    <ContentRenderer :value="page" />
  </div>
  <div v-else>
    <div class="h-full">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
