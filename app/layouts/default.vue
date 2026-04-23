<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const isHome = computed(() => route.path === localePath('/'))
// Project detail pages have their own back-to-projects control, so suppress the home link there.
const isProjectDetail = computed(() => {
  const base = localePath('/projects')
  return route.path.startsWith(base + '/')
})
const showBackHome = computed(() => !isHome.value && !isProjectDetail.value)
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 antialiased">
    <LayoutHeader />
    <main>
      <div v-if="showBackHome" class="mx-auto max-w-6xl px-6 pt-6">
        <NuxtLink
          :to="localePath('/')"
          class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-500 hover:text-slate-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-3 w-3">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ $t('nav.backHome') }}
        </NuxtLink>
      </div>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
