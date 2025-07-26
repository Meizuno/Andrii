<template>
  <div class="h-dvh grid grid-rows-[auto_1fr_auto] gap-4">
    <AppHeader />
    <UContainer class="flex flex-col gap-4 overflow-auto">
      <slot />
    </UContainer>
    <AppFooter />
  </div>
</template>
