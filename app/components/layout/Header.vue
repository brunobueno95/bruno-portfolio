<script setup lang="ts">
const route = useRoute()
const isActive = (path: string) => route.path === path || route.path.startsWith(path + '/')

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Tools' },
  { to: '/contact', label: 'Contact' }
]
</script>

<template>
  <header class="border-b border-slate-900 bg-white">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <NuxtLink to="/" class="font-semibold tracking-tight">
        Bruno Bueno
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="isActive(link.to) ? 'font-medium text-slate-900' : 'text-slate-600 hover:text-slate-900'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-500">
        <button class="font-semibold text-slate-900">EN</button>
        <span class="h-3 w-px bg-slate-300"></span>
        <button class="hover:text-slate-900">NO</button>
      </div>
    </div>
  </header>
</template>
