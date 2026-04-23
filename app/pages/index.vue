<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()
const cvHref = computed(() =>
  locale.value === 'no' ? '/cv/norwegian-cv.pdf' : '/cv/english-cv.pdf'
)

type CertStatus = 'scheduled' | null
type CertMeta = { key: string; short: string; status: CertStatus; file: string | null }

const certifications: CertMeta[] = [
  { key: 'GSK', short: 'GSK', status: null, file: '/certifications/gsk-diplom.pdf' },
  { key: 'Helseattest', short: 'Helseattest', status: null, file: null },
  { key: 'G11', short: 'G11', status: null, file: '/certifications/g11-diplom.pdf' },
  { key: 'NOG113', short: 'NOG 113', status: null, file: '/certifications/nog-113-fall-protection.pdf' },
  { key: 'Rigger', short: 'Rigger', status: null, file: '/certifications/rigger-diplom.pdf' },
  { key: 'G4', short: 'G4', status: null, file: '/certifications/g4-diplom.pdf' },
  { key: 'G20', short: 'G20', status: 'scheduled', file: null },
  { key: 'Truck', short: 'T1–T4', status: null, file: '/certifications/truck-t1-t4-diplom.pdf' }
]

const additionalTraining = [
  { short: 'IWCF L1', key: 'iwcf' },
  { short: 'WOCRM', key: 'wocrm' },
  { short: 'Rig Pass', key: 'rigPass' },
  { short: 'WCAT', key: 'wcat' }
]

const { projects: toolPreviews } = useProjects()

// Duplicate the list so the translateX(-50%) marquee loops seamlessly.
const marqueeItems = computed(() => [...toolPreviews.value, ...toolPreviews.value])

const background = [
  { labelKey: 'home.background.divingLabel', lineKey: 'home.background.divingLine' },
  { labelKey: 'home.background.languagesLabel', lineKey: 'home.background.languagesLine' },
  { labelKey: 'home.background.internationalLabel', lineKey: 'home.background.internationalLine' }
]

const statusLabel = (status: CertStatus) =>
  status === 'scheduled' ? t('home.certs.scheduled') : ''
</script>

<template>
  <div>
    <!-- Hero: oil-rig backdrop + positioning + photo -->
    <section class="relative isolate overflow-hidden bg-black">
      <NuxtImg
        src="/images/hero-rig.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        class="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

      <div class="relative mx-auto max-w-6xl px-6 pt-24 pb-24 md:pt-32 md:pb-32">
        <div class="grid items-center gap-12 md:grid-cols-5">
          <div class="md:col-span-3">
            <p class="text-[11px] uppercase tracking-[0.25em] text-neutral-300">
              {{ $t('home.hero.location') }}
            </p>
            <h1 class="mt-6 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
              {{ $t('home.hero.titleLead') }}
              <span class="block text-neutral-400">{{ $t('home.hero.titleMid') }}</span>
              <span class="mt-5 block text-lg font-light italic tracking-wide text-neutral-300 md:text-2xl">
                {{ $t('home.hero.titleEnd') }}
              </span>
            </h1>
            <p class="mt-8 max-w-xl text-base leading-relaxed text-neutral-100">
              {{ $t('home.hero.body') }}
            </p>
            <div class="mt-10 flex flex-wrap gap-3 text-sm">
              <a
                :href="cvHref"
                :download="`bruno-bueno-cv-${locale}.pdf`"
                class="bg-white px-6 py-3 font-medium text-black hover:bg-neutral-200"
              >
                {{ $t('home.hero.ctaCv') }}
              </a>
              <NuxtLink
                :to="localePath('/contact')"
                class="border border-white/70 px-6 py-3 font-medium text-white hover:bg-white hover:text-black"
              >
                {{ $t('home.hero.ctaContact') }}
              </NuxtLink>
            </div>
            <NuxtLink
              :to="localePath('/cv')"
              class="mt-4 inline-block text-xs text-neutral-300 underline underline-offset-4 hover:text-white"
            >
              {{ $t('home.hero.ctaCvView') }}
            </NuxtLink>
          </div>
          <div class="md:col-span-2">
            <SmartImage
              src="/images/bruno.jpg"
              alt="Bruno Bueno"
              loading="eager"
              class="aspect-[3/4] w-full rounded-sm shadow-2xl"
              skeleton-class="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications: primary -->
    <section class="border-t border-slate-900 bg-slate-50">
      <div class="mx-auto max-w-6xl px-6 py-16">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              {{ $t('home.certs.kicker') }}
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              {{ $t('home.certs.title') }}
            </h2>
          </div>
          <p class="max-w-sm text-sm text-slate-600">
            {{ $t('home.certs.lede') }}
          </p>
        </div>

        <div class="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
          <article
            v-for="cert in certifications"
            :key="cert.key"
            class="flex flex-col border-t border-slate-200 pt-6"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-lg font-medium leading-snug">
                  {{ $t(`certifications.${cert.key}.name`) }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ $t(`certifications.${cert.key}.description`) }}
                </p>
              </div>
              <span
                v-if="cert.status"
                class="shrink-0 border border-slate-900 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-900"
              >
                {{ statusLabel(cert.status) }}
              </span>
            </div>
            <div class="mt-auto pt-6">
              <a
                v-if="cert.file"
                :href="cert.file"
                target="_blank"
                rel="noopener"
                :aria-label="$t('home.certs.openPdf', { short: cert.short })"
                class="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm border border-slate-200 bg-white"
              >
                <iframe
                  :src="`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`"
                  class="pointer-events-none absolute inset-0 h-full w-full"
                  loading="lazy"
                  :title="$t('home.certs.openPdf', { short: cert.short })"
                />
                <div class="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-slate-900/85 px-3 py-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <span class="text-[10px] font-medium uppercase tracking-[0.2em]">
                    {{ $t('home.certs.openPdf', { short: cert.short }) }}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </div>
              </a>
              <ImagePlaceholder
                v-else
                ratio="landscape"
                :label="$t('home.certs.placeholderLabel', { short: cert.short })"
              />
            </div>
          </article>
        </div>

        <!-- Additional training -->
        <div class="mt-20 border-t border-slate-200 pt-10">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('home.certs.additionalTraining') }}
          </p>
          <ul class="mt-6 grid gap-3 md:grid-cols-2">
            <li
              v-for="a in additionalTraining"
              :key="a.key"
              class="flex items-baseline gap-3 text-sm text-slate-700"
            >
              <span class="shrink-0 border border-slate-300 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                {{ a.short }}
              </span>
              <span>{{ $t(`additionalTraining.${a.key}`) }}</span>
            </li>
          </ul>
          <p class="mt-6 text-xs text-slate-500">
            {{ $t('home.certs.additionalNote') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Secondary: software / tools -->
    <section class="border-t border-slate-200">
      <div class="mx-auto max-w-6xl px-6 py-10">
        <div class="grid gap-6 md:grid-cols-5">
          <div class="md:col-span-2">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              {{ $t('home.also.kicker') }}
            </p>
            <h2 class="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
              {{ $t('home.also.title1') }}
              <span class="block text-slate-500">{{ $t('home.also.title2') }}</span>
            </h2>
          </div>
          <div class="space-y-3 text-sm leading-relaxed text-slate-700 md:col-span-3">
            <p>{{ $t('home.also.body1') }}</p>
            <p>{{ $t('home.also.body2') }}</p>
          </div>
        </div>

        <!-- Tool previews marquee -->
        <div v-if="toolPreviews.length" class="marquee mt-8 -mx-6">
          <div class="marquee-track">
            <NuxtLink
              v-for="(tool, i) in marqueeItems"
              :key="`${tool.slug}-${i}`"
              :to="localePath('/projects')"
              class="marquee-item group relative block aspect-[4/3] overflow-hidden rounded-sm border border-slate-200 bg-slate-100"
              :aria-hidden="i >= toolPreviews.length ? 'true' : undefined"
            >
              <SmartImage
                :src="tool.image"
                :alt="tool.title"
                loading="lazy"
                class="absolute inset-0 h-full w-full"
                inner-class="group-hover:scale-[1.02]"
              />
              <div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 pt-8 pb-3">
                <p class="text-[10px] uppercase tracking-[0.25em] text-neutral-300">
                  {{ tool.year }}
                </p>
                <h3 class="mt-1 text-sm font-medium text-white underline-offset-4 group-hover:underline">
                  {{ tool.title }}
                </h3>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-8 text-center">
          <NuxtLink
            :to="localePath('/projects')"
            class="text-sm font-medium underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900"
          >
            {{ $t('home.also.seeAll') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Background: compact transferable skills -->
    <section class="border-t border-slate-200">
      <div class="mx-auto max-w-6xl px-6 py-12">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              {{ $t('home.background.kicker') }}
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {{ $t('home.background.title') }}
            </h2>
          </div>
          <NuxtLink
            :to="localePath('/about')"
            class="text-sm text-slate-600 hover:text-slate-900"
          >
            {{ $t('home.background.fullHistory') }}
          </NuxtLink>
        </div>

        <dl class="mt-10 grid gap-8 md:grid-cols-3">
          <div
            v-for="item in background"
            :key="item.labelKey"
            class="border-t border-slate-200 pt-4"
          >
            <dt class="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500">
              {{ $t(item.labelKey) }}
            </dt>
            <dd class="mt-2 text-sm leading-relaxed text-slate-700">
              {{ $t(item.lineKey) }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Tertiary: About + Contact -->
    <section class="border-t border-slate-200">
      <div class="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
        <NuxtLink
          :to="localePath('/about')"
          class="group block border-l-2 border-slate-900 py-4 pl-6"
        >
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('home.tertiary.aboutKicker') }}
          </p>
          <h3 class="mt-2 text-xl font-medium underline-offset-4 group-hover:underline">
            {{ $t('home.tertiary.aboutLink') }}
          </h3>
        </NuxtLink>
        <NuxtLink
          :to="localePath('/contact')"
          class="group block border-l-2 border-slate-900 py-4 pl-6"
        >
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('home.tertiary.contactKicker') }}
          </p>
          <h3 class="mt-2 text-xl font-medium underline-offset-4 group-hover:underline">
            {{ $t('home.tertiary.contactLink') }}
          </h3>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 1.25rem;
  padding: 0 0.625rem;
  animation: marquee-scroll 40s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  flex: 0 0 auto;
  width: 18rem;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    /* Track contains two copies of the list; shift by half + half the gap so it loops seamlessly. */
    transform: translateX(calc(-50% - 0.625rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
