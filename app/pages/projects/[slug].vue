<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
const { getProject } = useProjects()

const slug = computed(() => String(route.params.slug))
const project = computed(() => getProject(slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

useHead(() => ({
  title: project.value ? `${project.value.title} · Bruno Bueno` : 'Project'
}))

const goBack = () => {
  // Prefer real history if they navigated in-app; otherwise fall back to the tools index.
  if (typeof window !== 'undefined' && window.history.length > 1 && document.referrer.includes(window.location.host)) {
    router.back()
  } else {
    router.push(localePath('/projects'))
  }
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') goBack()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div v-if="project">
    <!-- Frictionless back: sticky bar, click to go back, Esc key also bound -->
    <div class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <button
          type="button"
          class="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-black"
          @click="goBack"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-4 w-4 transition-transform group-hover:-translate-x-0.5">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ $t('projects.back') }}
        </button>
        <span class="hidden text-[10px] uppercase tracking-[0.2em] text-slate-400 md:block">
          {{ $t('projects.backHint') }}
        </span>
      </div>
    </div>

    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-10">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {{ project.year }} · {{ $t('nav.tools') }}
      </p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        {{ project.title }}
      </h1>
      <p class="mt-8 max-w-2xl text-base leading-relaxed text-slate-700">
        {{ project.blurb }}
      </p>

      <div class="mt-8 flex flex-wrap gap-3 text-sm">
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 bg-black px-6 py-3 font-medium text-white hover:bg-neutral-800"
        >
          {{ $t('projects.viewLive') }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-4 w-4">
            <path d="M7 17L17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <span
          v-else
          class="inline-flex cursor-not-allowed items-center gap-2 border border-slate-300 px-6 py-3 font-medium text-slate-500"
          :title="$t('projects.liveComingSoon')"
        >
          {{ $t('projects.liveComingSoon') }}
        </span>
      </div>
      <p
        v-if="project.live"
        class="mt-4 inline-flex max-w-xl items-start gap-2 border-l-2 border-amber-500 bg-amber-50 px-3 py-2 text-sm text-amber-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="mt-0.5 h-4 w-4 shrink-0">
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>{{ $t('projects.desktopOnlyNotice') }}</span>
      </p>
    </section>

    <!-- Image -->
    <section class="mx-auto max-w-6xl px-6 pb-12">
      <SmartImage
        :src="project.image"
        :alt="project.title"
        loading="eager"
        class="aspect-[16/9] w-full rounded-sm border border-slate-200"
      />
    </section>

    <!-- Body: overview + highlights -->
    <section class="mx-auto max-w-6xl px-6 pb-16">
      <div class="grid gap-12 md:grid-cols-5">
        <div class="space-y-5 leading-relaxed text-slate-700 md:col-span-3">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('projects.overview') }}
          </p>
          <p v-for="(para, i) in project.overview" :key="i">
            {{ para }}
          </p>
          <div class="mt-10 border-t border-slate-200 pt-6">
            <p class="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              {{ $t('projects.whatItTaught') }}
            </p>
            <p class="mt-3 text-sm text-slate-700">{{ project.taught }}</p>
          </div>
        </div>
        <aside class="md:col-span-2">
          <div class="border border-slate-200 p-6">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              {{ $t('projects.keyDetails') }}
            </p>
            <ul class="mt-5 space-y-3 text-sm text-slate-700">
              <li v-for="h in project.highlights" :key="h" class="flex gap-3">
                <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-900" />
                <span>{{ h }}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <!-- Back to index -->
    <section class="mx-auto max-w-6xl px-6 pb-16">
      <div class="border-t border-slate-200 pt-6">
        <NuxtLink
          :to="localePath('/projects')"
          class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-4 w-4">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ $t('projects.back') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
