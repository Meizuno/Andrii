<template>
  <div class="h-dvh grid grid-rows-[auto_1fr] gap-4 min-w-sm">
    <AppHeader />
    <div class="h-full flex flex-col gap-4 overflow-auto justify-between">
      <UContainer as="main" class="h-full">
        <slot />
      </UContainer>
    </div>
    <AppFooter />
  </div>
</template>
