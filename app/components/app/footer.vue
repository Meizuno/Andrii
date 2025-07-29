<template>
  <footer class="text-muted text-sm md:text-md gap-2 bg-elevated py-4">
    <UContainer
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:justify-items-center"
    >
      <div class="flex items-center gap-2">
        <UIcon name="wpf:name" class="w-3 h-3" />
        <span>Andrii Hlushchenko</span>
      </div>
      <ULink to="mailto:andre1980@seznam.cz" class="flex items-center gap-2">
        <UIcon name="material-symbols:mail-rounded" class="w-3 h-3" />
        <span>andre1980@seznam.cz</span>
      </ULink>
      <div class="flex items-center gap-2">
        <UIcon name="ic:round-phone" class="w-3 h-3" />
        <a href="tel:+420 775 641 963"> +420 775 641 963 </a>
      </div>
      <div class="flex items-center gap-2">
        <UIcon name="mdi:location" class="w-3 h-3" />
        <a
          target="_blank"
          href="https://www.google.com/maps/place/%D0%91%D1%80%D0%BD%D0%BE/@49.202153,16.4955613,12z/data=!3m1!4b1!4m6!3m5!1s0x4712943ac03f5111:0x400af0f6614b1b0!8m2!3d49.1950602!4d16.6068371!16zL20vMGZzX3M?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
        >
          602 00 Brno
        </a>
      </div>
      <div class="flex items-center gap-2">
        <UIcon
          name="i-material-symbols:license-outline"
          class="w-3 h-3"
        />Copyright © 2025
      </div>
    </UContainer>
  </footer>
</template>
