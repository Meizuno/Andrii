<template>
  <div class="flex flex-col gap-2">
    <h2 v-if="title" class="text-lg font-semibold">
      {{ title }}
    </h2>
    <div class="flex flex-col gap-1">
      <div
        v-for="(row, rowIndex) in items"
        :key="rowIndex"
        class="flex items-center gap-2"
      >
        <div
          class="w-full p-1 grid border-b border-(--ui-border-accented) grid-cols-[1fr_auto]"
          :class="`grid-cols-${columns}`"
        >
          <div
            v-for="(item, colIndex) in row"
            :key="`${rowIndex}-${colIndex}`"
            class="flex items-center gap-2"
          >
            <span class="text-toned">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  items: {
    type: Array as () => Array<Array<string>>,
    default: () => [],
  },
});

const columns = Math.max(...props.items.map((row) => row.length));
</script>
