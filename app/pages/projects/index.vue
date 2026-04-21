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
            <div class="overflow-hidden rounded-sm border border-slate-200 bg-slate-100">
              <NuxtImg
                :src="t.image"
                :alt="t.title"
                class="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
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
