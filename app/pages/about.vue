<script setup lang="ts">
const { locale } = useI18n()
const cvHref = computed(() =>
  locale.value === 'no' ? '/cv/norwegian-cv.pdf' : '/cv/english-cv.pdf'
)

const experience = ['proweb', 'sastech', 'dive']
const education = ['getAcademy', 'padi', 'highSchool']
const languages = ['portuguese', 'english', 'norwegian', 'spanish']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-16">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {{ $t('about.kicker') }}
      </p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        {{ $t('about.title1') }}
        <span class="block text-slate-500">{{ $t('about.title2') }}</span>
      </h1>
    </section>

    <!-- Portrait + bio -->
    <section class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5">
      <div class="md:col-span-2">
        <NuxtImg
          src="/images/about-bruno.jpg"
          alt="Bruno Bueno"
          class="aspect-[3/4] w-full object-cover rounded-sm border border-slate-200"
        />
      </div>
      <div class="space-y-6 leading-relaxed text-slate-700 md:col-span-3">
        <i18n-t
          v-for="n in 4"
          :key="n"
          :keypath="`about.bio${n}.text`"
          tag="p"
          scope="global"
        >
          <template #strong>
            <strong>{{ $t(`about.bio${n}.strong`) }}</strong>
          </template>
        </i18n-t>
      </div>
    </section>

    <!-- Experience -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-6">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {{ $t('about.experienceKicker') }}
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {{ $t('about.experienceTitle') }}
      </h2>
      <ol class="mt-10 divide-y divide-slate-200">
        <li
          v-for="key in experience"
          :key="key"
          class="grid items-baseline gap-4 py-6 md:grid-cols-[160px_1fr_auto]"
        >
          <span class="text-sm text-slate-500">{{ $t(`experience.${key}.period`) }}</span>
          <div>
            <h3 class="font-medium">{{ $t(`experience.${key}.role`) }}</h3>
            <p class="mt-1 text-sm text-slate-600">{{ $t(`experience.${key}.org`) }}</p>
          </div>
          <span class="text-xs text-slate-500">{{ $t(`experience.${key}.location`) }}</span>
        </li>
      </ol>
    </section>

    <!-- Education -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {{ $t('about.educationKicker') }}
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {{ $t('about.educationTitle') }}
      </h2>
      <ol class="mt-10 divide-y divide-slate-200">
        <li
          v-for="key in education"
          :key="key"
          class="grid items-baseline gap-4 py-6 md:grid-cols-[160px_1fr]"
        >
          <span class="text-sm text-slate-500">{{ $t(`education.${key}.period`) }}</span>
          <div>
            <h3 class="font-medium">{{ $t(`education.${key}.title`) }}</h3>
            <p class="mt-1 text-sm text-slate-600">{{ $t(`education.${key}.org`) }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Languages -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {{ $t('about.languagesKicker') }}
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {{ $t('about.languagesTitle') }}
      </h2>
      <dl class="mt-8 grid gap-4 md:grid-cols-4">
        <div
          v-for="key in languages"
          :key="key"
          class="border-t border-slate-200 pt-4"
        >
          <dt class="font-medium">{{ $t(`languages.${key}.name`) }}</dt>
          <dd class="text-sm text-slate-600">{{ $t(`languages.${key}.level`) }}</dd>
        </div>
      </dl>
    </section>

    <!-- CV download -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <div class="flex flex-wrap items-center justify-between gap-6 border border-slate-300 p-10 md:p-14">
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('about.cvBox.kicker') }}
          </p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight">
            {{ $t('about.cvBox.title') }}
          </h3>
          <p class="mt-1 text-sm text-slate-500">
            {{ $t('about.cvBox.lede') }}
          </p>
        </div>
        <a
          :href="cvHref"
          :download="`bruno-bueno-cv-${locale}.pdf`"
          class="bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          {{ $t('about.cvBox.button') }}
        </a>
      </div>
    </section>
  </div>
</template>
