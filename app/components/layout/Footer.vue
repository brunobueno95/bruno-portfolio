<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-32 bg-slate-900 text-white">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
      <div class="md:col-span-2">
        <div class="font-semibold tracking-tight">Bruno Bueno</div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
          Offshore deck, rigger and crane-operator candidate. Norwegian
          shelf — ready for rotation.
        </p>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Site
        </h4>
        <ul class="mt-4 space-y-2 text-sm text-slate-200">
          <li><NuxtLink to="/about" class="hover:text-white hover:underline underline-offset-4">About</NuxtLink></li>
          <li><NuxtLink to="/projects" class="hover:text-white hover:underline underline-offset-4">Tools</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white hover:underline underline-offset-4">Contact</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Direct
        </h4>
        <ul class="mt-4 space-y-2 text-sm text-slate-200">
          <li><a href="mailto:hello@example.com" class="hover:text-white hover:underline underline-offset-4">Email</a></li>
          <li><a href="#" class="hover:text-white hover:underline underline-offset-4">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-800">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-slate-400">
        <span>© {{ year }} Bruno Bueno</span>
        <span>Stavern · Norway</span>
      </div>
    </div>
  </footer>
</template>
