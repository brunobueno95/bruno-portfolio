<script setup lang="ts">
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-32 bg-black text-white">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
      <div class="md:col-span-2">
        <div class="font-semibold tracking-tight">Bruno Bueno</div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-neutral-300">
          Offshore deck, rigger and crane-operator candidate. Norwegian
          shelf — ready for rotation.
        </p>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Site
        </h4>
        <ul class="mt-4 space-y-2 text-sm text-neutral-200">
          <li><NuxtLink :to="localePath('/about')" class="hover:text-white hover:underline underline-offset-4">About</NuxtLink></li>
          <li><NuxtLink :to="localePath('/projects')" class="hover:text-white hover:underline underline-offset-4">Tools</NuxtLink></li>
          <li><NuxtLink :to="localePath('/contact')" class="hover:text-white hover:underline underline-offset-4">Contact</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Direct
        </h4>
        <ul class="mt-4 space-y-2 text-sm text-neutral-200">
          <li><a href="mailto:brunobernardobueno@gmail.com" class="hover:text-white hover:underline underline-offset-4">brunobernardobueno@gmail.com</a></li>
          <li><a href="tel:+4741324823" class="hover:text-white hover:underline underline-offset-4">+47 413 24 823</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-neutral-900">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-neutral-400">
        <span>© {{ year }} Bruno Bueno</span>
        <span>Stavern · Norway</span>
      </div>
    </div>
  </footer>
</template>
