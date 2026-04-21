<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const cvHref = computed(() =>
  locale.value === 'no' ? '/cv/norwegian-cv.pdf' : '/cv/english-cv.pdf'
)

const certifications = [
  {
    short: 'GSK',
    name: 'GSK — Basic Safety Course Offshore',
    description: 'RSS-20756. Norwegian offshore basic safety — sea survival, fire, first aid and HUET. Valid 03/2030.',
    status: null as string | null,
    file: '/certifications/gsk-diplom.pdf' as string | null
  },
  {
    short: 'Helseattest',
    name: 'Offshore Medical Certificate',
    description: 'Norwegian offshore medical certificate (Helseattest). Valid 03/2028.',
    status: null,
    file: null
  },
  {
    short: 'G11',
    name: 'G11 — Lifting Equipment (Løfteredskap)',
    description: 'Rigging and signalling for lifting operations — slings, shackles and lifting gear.',
    status: null,
    file: '/certifications/g11-diplom.pdf'
  },
  {
    short: 'NOG 113',
    name: 'NOG 113 / NS 9610 — Fall Protection Offshore',
    description: 'Norwegian Oil & Gas standard for working at height, harness use and rescue.',
    status: null,
    file: '/certifications/nog-113-fall-protection.pdf'
  },
  {
    short: 'Rigger',
    name: 'Rigger Course (P-2.4 / P-4.4)',
    description: 'Specialist rigger training covering lift planning, load handling and signalling.',
    status: null,
    file: '/certifications/rigger-diplom.pdf'
  },
  {
    short: 'G4',
    name: 'G4 — Bridge and Overhead Crane',
    description: 'Operator certificate for bridge and overhead (travers) cranes.',
    status: null,
    file: '/certifications/g4-diplom.pdf'
  },
  {
    short: 'G20',
    name: 'G20 — Hydraulic Crane',
    description: 'Hydraulic crane operator certificate. Course scheduled 15.05.2026.',
    status: 'Scheduled',
    file: null
  },
  {
    short: 'T1–T4',
    name: 'Truck Operator T1 / T2 / T3 / T4',
    description: 'Certified forklift operator across classes T1 through T4.',
    status: null,
    file: '/certifications/truck-t1-t4-diplom.pdf'
  }
]

const additionalTraining = [
  { short: 'IWCF L1', title: 'IWCF Level 1 — Drilling Fundamentals' },
  { short: 'WOCRM', title: 'WOCRM — Well Operations Crew Resource Management' },
  { short: 'Rig Pass', title: 'Rig Pass — IADC' },
  { short: 'WCAT', title: 'Well Control Awareness Training — IADC' }
]

const toolPreviews = [
  {
    year: '2025',
    title: 'Overhead-crane rig simulator',
    image: '/projects/overhead-crane.jpg',
    blurb: 'Training simulator for overhead and travelling cranes — lift planning, signalling and load-handling drills built for my own G4 preparation.'
  },
  {
    year: '2025',
    title: 'Drilling operations trainer',
    image: '/projects/drilling-tool.jpg',
    blurb: 'Scenario-based trainer covering well-control fundamentals and drilling-floor procedures. Built to reinforce IWCF and WOCRM material.'
  },
  {
    year: '2025',
    title: 'Rigging route planner',
    image: '/projects/rigging-planner.jpg',
    blurb: 'Lay out the rigging path for a lift: anchor points, sling geometry, exclusion zones and load path — checked against the rules I was drilling on.'
  },
  {
    year: '2025',
    title: 'Offshore knowledge pipeline',
    image: '/projects/offshore-knowledge-pipeline.jpg',
    blurb: 'Autonomous AI pipeline that curates NORSOK, IWCF and IADC material into a structured vault, then generates study guides, quizzes and exams.'
  }
]

const background = [
  {
    label: 'Diving',
    line: '1,000+ hours in open-water operations. PADI instructor work across Norway, Philippines, Mexico, Brazil and Honduras — gear checks, briefings and calm decisions under pressure.'
  },
  {
    label: 'Languages',
    line: 'Portuguese (native), English (fluent), Norwegian (B2), Spanish.'
  },
  {
    label: 'International',
    line: 'Lived and worked across five countries. Used to mixed-nationality crews, strict safety procedures, and long working days in remote locations.'
  }
]
</script>

<template>
  <div>
    <!-- Hero: oil-rig backdrop + positioning + photo -->
    <section class="relative isolate overflow-hidden bg-black">
      <!-- Background: oil rig (grayscale via CSS) -->
      <NuxtImg
        src="/images/hero-rig.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        class="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <!-- Horizontal gradient: black on left (behind text), fading out to reveal the rig -->
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <!-- Vertical fade to black at bottom for a soft handoff to the next section -->
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
            <NuxtImg
              src="/images/bruno.jpg"
              alt="Bruno Bueno"
              class="aspect-[3/4] w-full object-cover rounded-sm  shadow-2xl"
              loading="eager"
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
              Certifications
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Offshore credentials.
            </h2>
          </div>
          <p class="max-w-sm text-sm text-slate-600">
            Course certificates and cert cards shown in full below each entry.
          </p>
        </div>

        <div class="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
          <article
            v-for="cert in certifications"
            :key="cert.short"
            class="flex flex-col border-t border-slate-200 pt-6"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-lg font-medium leading-snug">{{ cert.name }}</h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {{ cert.description }}
                </p>
              </div>
              <span
                v-if="cert.status"
                class="shrink-0 border border-slate-900 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-900"
              >
                {{ cert.status }}
              </span>
            </div>
            <div class="mt-auto pt-6">
              <a
                v-if="cert.file"
                :href="cert.file"
                target="_blank"
                rel="noopener"
                :aria-label="`Open ${cert.short} certificate (PDF)`"
                class="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm border border-slate-200 bg-white"
              >
                <iframe
                  :src="`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`"
                  class="pointer-events-none absolute inset-0 h-full w-full"
                  loading="lazy"
                  :title="`${cert.short} certificate preview`"
                />
                <div class="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-slate-900/85 px-3 py-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <span class="text-[10px] font-medium uppercase tracking-[0.2em]">
                    {{ cert.short }} — open PDF
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
                :label="`Certificate — ${cert.short}`"
              />
            </div>
          </article>
        </div>

        <!-- Additional training -->
        <div class="mt-20 border-t border-slate-200 pt-10">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Additional training
          </p>
          <ul class="mt-6 grid gap-3 md:grid-cols-2">
            <li
              v-for="a in additionalTraining"
              :key="a.short"
              class="flex items-baseline gap-3 text-sm text-slate-700"
            >
              <span class="shrink-0 border border-slate-300 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                {{ a.short }}
              </span>
              <span>{{ a.title }}</span>
            </li>
          </ul>
          <p class="mt-6 text-xs text-slate-500">
            Certificates available on request.
          </p>
        </div>
      </div>
    </section>

    <!-- Secondary: software / tools -->
    <section class="border-t border-slate-200">
      <div class="mx-auto max-w-6xl px-6 py-16">
        <div class="grid gap-10 md:grid-cols-5">
          <div class="md:col-span-2">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Also
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Building the tools
              <span class="block text-slate-500">I train with.</span>
            </h2>
          </div>
          <div class="space-y-5 leading-relaxed text-slate-700 md:col-span-3">
            <p>
              Software developer at Proweb AS before transitioning into
              offshore work — still building, just for a different set of
              problems now. The tools below support my own offshore
              preparation: a simulator for overhead-crane lifts, a drilling
              operations trainer, a rigger calculator planning, and an AI pipeline that turns NORSOK,
              IWCF and IADC material into structured study content.
            </p>
            <p>
              On deck that translates to fast learning, comfort with written
              procedures, and the habit of turning thick technical material
              into something a crew can actually use. An asset that comes
              with, not instead of.
            </p>
          </div>
        </div>

        <!-- Tool previews -->
        <div class="mt-14 grid gap-10 md:grid-cols-2">
          <NuxtLink
            v-for="t in toolPreviews"
            :key="t.title"
            :to="localePath('/projects')"
            class="group block"
          >
            <div class="overflow-hidden rounded-sm border border-slate-200 bg-slate-100">
              <NuxtImg
                :src="t.image"
                :alt="t.title"
                class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <p class="mt-4 text-[11px] uppercase tracking-[0.25em] text-slate-500">
              {{ t.year }}
            </p>
            <h3 class="mt-2 text-lg font-medium underline-offset-4 group-hover:underline">
              {{ t.title }}
            </h3>
            <p class="mt-2 text-sm text-slate-600">{{ t.blurb }}</p>
          </NuxtLink>
        </div>

        <div class="mt-12">
          <NuxtLink
            :to="localePath('/projects')"
            class="text-sm font-medium underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900"
          >
            See all tools →
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
              Background
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Transferable experience.
            </h2>
          </div>
          <NuxtLink
            :to="localePath('/about')"
            class="text-sm text-slate-600 hover:text-slate-900"
          >
            Full history →
          </NuxtLink>
        </div>

        <dl class="mt-10 grid gap-8 md:grid-cols-3">
          <div
            v-for="item in background"
            :key="item.label"
            class="border-t border-slate-200 pt-4"
          >
            <dt class="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500">
              {{ item.label }}
            </dt>
            <dd class="mt-2 text-sm leading-relaxed text-slate-700">
              {{ item.line }}
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
            About
          </p>
          <h3 class="mt-2 text-xl font-medium underline-offset-4 group-hover:underline">
            Background and experience →
          </h3>
        </NuxtLink>
        <NuxtLink
          :to="localePath('/contact')"
          class="group block border-l-2 border-slate-900 py-4 pl-6"
        >
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Contact
          </p>
          <h3 class="mt-2 text-xl font-medium underline-offset-4 group-hover:underline">
            Availability and reach →
          </h3>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
