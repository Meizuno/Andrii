<template>
  <header class="text-muted text-xs md:text-md gap-2 bg-elevated">
    <UContainer class="flex justify-between items-center">
      <ULink to="/">
        <AppLogo />
      </ULink>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="bg-elevated"
      />
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const items = [
  [
    {
      label: "Hlavní stránka",
      icon: "material-symbols:home-outline-rounded",
      to: "/",
    },
  ],
  [
    {
      label: "Pronajem kol",
      icon: "i-material-symbols:pedal-bike-outline-rounded",
      to: "/bicycles",
    },
  ],
  [
    {
      label: "Pronajem aut",
      icon: "i-bi:car-front-fill",
      to: "/cars",
    },
  ],
];
</script>
