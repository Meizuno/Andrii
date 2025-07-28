<template>
  <div class="flex flex-col gap-2">
    <h2 v-if="title" class="text-lg font-semibold">
      {{ title }}
    </h2>
    <div class="space-y-1">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-2"
      >
        <UIcon :name="iconName" class="w-5 h-5 min-w-5 min-h-5 text-primary" />
        <span class="text-toned">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  iconName: {
    type: String,
    required: false,
    default: "i-icon-park-outline:dot",
  },
  items: {
    type: Array as () => Array<string>,
    default: () => [],
  },
});
</script>
