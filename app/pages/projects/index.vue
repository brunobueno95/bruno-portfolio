<script setup lang="ts">
const localePath = useLocalePath()
const { projects: tools } = useProjects()
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">{{ $t('tools.kicker') }}</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        {{ $t('tools.title1') }}
        <span class="block text-slate-500">{{ $t('tools.title2') }}</span>
      </h1>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-slate-700">
        {{ $t('tools.lede') }}
      </p>
      <p class="mt-6 inline-flex max-w-xl items-start gap-2 border-l-2 border-amber-500 bg-amber-50 px-3 py-2 text-sm text-amber-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="mt-0.5 h-4 w-4 shrink-0">
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>{{ $t('projects.desktopOnlyNotice') }}</span>
      </p>
    </section>

    <!-- Tools list -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <div class="grid gap-16">
        <article
          v-for="(t, idx) in tools"
          :key="t.slug"
          class="grid items-start gap-10 border-t border-slate-200 pt-10 md:grid-cols-5"
        >
          <div :class="idx % 2 === 0 ? 'md:col-span-3' : 'md:col-span-3 md:order-2'">
            <SmartImage
              :src="t.image"
              :alt="t.title"
              loading="lazy"
              class="aspect-[4/3] w-full rounded-sm border border-slate-200"
            />
          </div>
          <div :class="idx % 2 === 0 ? 'md:col-span-2' : 'md:col-span-2 md:order-1'">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              {{ t.year }}
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {{ t.title }}
            </h2>
            <p class="mt-4 leading-relaxed text-slate-700">{{ t.what }}</p>
            <div class="mt-6 border-t border-slate-200 pt-4">
              <p class="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                {{ $t('projects.whatItTaught') }}
              </p>
              <p class="mt-2 text-sm text-slate-700">{{ t.taught }}</p>
            </div>
            <NuxtLink
              :to="localePath(`/projects/${t.slug}`)"
              class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black underline underline-offset-4 decoration-slate-400 hover:decoration-black"
            >
              {{ $t('projects.learnMore') }}
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <!-- Back to certs -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <div class="border-t border-slate-200 pt-6 text-sm text-slate-500">
        {{ $t('tools.backPrefix') }}
        <NuxtLink
          :to="localePath('/')"
          class="underline underline-offset-4 hover:text-slate-900"
        >
          {{ $t('tools.backLink') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
