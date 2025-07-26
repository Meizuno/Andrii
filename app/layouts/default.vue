<template>
  <div class="h-dvh grid grid-rows-[auto_1fr] gap-4">
    <AppHeader />
    <div class="flex flex-col gap-4 overflow-auto">
      <UContainer as="main">
        <slot />
      </UContainer>
      <AppFooter />
    </div>
  </div>
</template>
