<script setup lang="ts">
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()

const isActive = (path: string) => {
  const resolved = localePath(path)
  return route.path === resolved || route.path.startsWith(resolved + '/')
}

const links = computed(() => [
  { to: '/about', label: t('nav.about') },
  { to: '/projects', label: t('nav.tools') },
  { to: '/cv', label: t('nav.cv') },
  { to: '/contact', label: t('nav.contact') }
])

const mobileOpen = ref(false)

watch(() => route.fullPath, () => {
  mobileOpen.value = false
})
</script>

<template>
  <header class="border-b border-slate-900 bg-white">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
      <NuxtLink :to="localePath('/')" class="font-semibold tracking-tight">
        Bruno Bueno
      </NuxtLink>

      <nav class="hidden items-center gap-8 text-sm md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="localePath(link.to)"
          :class="isActive(link.to) ? 'font-medium text-slate-900' : 'text-slate-600 hover:text-slate-900'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-500 md:flex">
        <NuxtLink
          :to="switchLocalePath('en')"
          :class="['inline-flex items-center gap-1.5', locale === 'en' ? 'font-semibold text-slate-900' : 'hover:text-slate-900']"
        >
          <svg viewBox="0 0 30 20" aria-hidden="true" class="h-3 w-[18px] shrink-0 rounded-[1px] shadow-sm">
            <rect width="30" height="20" fill="#012169" />
            <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4" />
            <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" stroke-width="1.5" />
            <rect x="12" width="6" height="20" fill="#fff" />
            <rect y="8" width="30" height="4" fill="#fff" />
            <rect x="13" width="4" height="20" fill="#C8102E" />
            <rect y="9" width="30" height="2" fill="#C8102E" />
          </svg>
          EN
        </NuxtLink>
        <span class="h-3 w-px bg-slate-300" />
        <NuxtLink
          :to="switchLocalePath('no')"
          :class="['inline-flex items-center gap-1.5', locale === 'no' ? 'font-semibold text-slate-900' : 'hover:text-slate-900']"
        >
          <svg viewBox="0 0 22 16" aria-hidden="true" class="h-3 w-[18px] shrink-0 rounded-[1px] shadow-sm">
            <rect width="22" height="16" fill="#ef2b2d" />
            <rect x="6" width="4" height="16" fill="#fff" />
            <rect y="6" width="22" height="4" fill="#fff" />
            <rect x="7" width="2" height="16" fill="#002868" />
            <rect y="7" width="22" height="2" fill="#002868" />
          </svg>
          NO
        </NuxtLink>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-300 text-slate-700 hover:bg-slate-100 md:hidden"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-5 w-5">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-5 w-5">
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div
      v-show="mobileOpen"
      id="mobile-nav"
      class="border-t border-slate-200 bg-white md:hidden"
    >
      <nav class="mx-auto flex max-w-6xl flex-col divide-y divide-slate-100 px-6">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="localePath(link.to)"
          :class="['py-4 text-sm', isActive(link.to) ? 'font-medium text-slate-900' : 'text-slate-600']"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="flex items-center gap-4 py-4 text-[11px] uppercase tracking-[0.2em] text-slate-500">
          <NuxtLink
            :to="switchLocalePath('en')"
            :class="['inline-flex items-center gap-1.5', locale === 'en' ? 'font-semibold text-slate-900' : 'hover:text-slate-900']"
          >
            <svg viewBox="0 0 30 20" aria-hidden="true" class="h-3 w-[18px] shrink-0 rounded-[1px] shadow-sm">
              <rect width="30" height="20" fill="#012169" />
              <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4" />
              <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" stroke-width="1.5" />
              <rect x="12" width="6" height="20" fill="#fff" />
              <rect y="8" width="30" height="4" fill="#fff" />
              <rect x="13" width="4" height="20" fill="#C8102E" />
              <rect y="9" width="30" height="2" fill="#C8102E" />
            </svg>
            EN
          </NuxtLink>
          <span class="h-3 w-px bg-slate-300" />
          <NuxtLink
            :to="switchLocalePath('no')"
            :class="['inline-flex items-center gap-1.5', locale === 'no' ? 'font-semibold text-slate-900' : 'hover:text-slate-900']"
          >
            <svg viewBox="0 0 22 16" aria-hidden="true" class="h-3 w-[18px] shrink-0 rounded-[1px] shadow-sm">
              <rect width="22" height="16" fill="#ef2b2d" />
              <rect x="6" width="4" height="16" fill="#fff" />
              <rect y="6" width="22" height="4" fill="#fff" />
              <rect x="7" width="2" height="16" fill="#002868" />
              <rect y="7" width="22" height="2" fill="#002868" />
            </svg>
            NO
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
