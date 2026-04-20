<script setup lang="ts">
const certifications = [
  {
    short: 'GSK',
    name: 'GSK — Grunnleggende Sikkerhetskurs (incl. HUET)',
    description: 'Norwegian offshore basic safety course. Includes Helicopter Underwater Escape Training.',
    status: null as string | null
  },
  {
    short: 'G4',
    name: 'G4 — Overhead & travelling crane',
    description: 'Operator certificate for overhead and travelling (travers) cranes.',
    status: null
  },
  {
    short: 'G11',
    name: 'G11 — Slinger / rigger, løfteredskap',
    description: 'Rigging and signalling for lifting operations — slings, shackles and lifting gear.',
    status: null
  },
  {
    short: 'NOG 113',
    name: 'NOG 113 — Fall protection',
    description: 'Norwegian Oil & Gas standard for working at height, harness use and rescue.',
    status: null
  },
  {
    short: 'T1–T4',
    name: 'Truck T1–T4',
    description: 'Certified forklift operator across classes T1 through T4.',
    status: null
  },
  {
    short: 'Rigger',
    name: 'Rigger course — Kompetansebedriften',
    description: 'Specialist rigger training. Course dates March 2026.',
    status: 'Scheduled'
  },
  {
    short: 'Helseattest',
    name: 'Offshore Helseattest',
    description: 'Norwegian offshore medical certificate.',
    status: 'Scheduled'
  },
  {
    short: 'PADI / CMAS',
    name: 'PADI & CMAS Dive Instructor',
    description: '1,000+ logged dives. Instructor experience across five countries.',
    status: null
  }
]

const toolPreviews = [
  {
    year: '2025',
    title: 'Standards flashcards',
    blurb: 'Spaced-repetition deck built around NOG 113 and lifting-standard content. Tuned to how the exam actually tests.'
  },
  {
    year: '2025',
    title: 'Lift-scenario drills',
    blurb: 'Random lift setups with constraints — pick the sling, call the signals, justify the plan under time pressure.'
  },
  {
    year: '2024',
    title: 'Certification tracker',
    blurb: 'One timeline for every course, cert and expiry — catches silent expiries before they bite.'
  }
]

const background = [
  {
    label: 'Diving',
    line: '1,000+ logged dives. PADI & CMAS instructor work across five countries — gear checks, briefings and calm decisions under pressure.'
  },
  {
    label: 'Languages',
    line: 'Portuguese (native), English (fluent), Norwegian (working, in progress).'
  },
  {
    label: 'International',
    line: 'Lived and worked across five countries. Used to mixed-nationality crews, regulated procedures and long time zones.'
  }
]
</script>

<template>
  <div>
    <!-- Hero: positioning + photo -->
    <section class="mx-auto max-w-6xl px-6 pt-20 pb-20">
      <div class="grid items-start gap-12 md:grid-cols-5">
        <div class="md:col-span-3">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Stavern · Norway
          </p>
          <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Offshore-certified deck worker.
          </h1>
          <p class="mt-8 max-w-xl text-base leading-relaxed text-slate-700">
            Available for rotation on the Norwegian shelf. Based in Stavern
            and able to mobilise on short notice. Looking for deck,
            roustabout, rigger or crane-operator positions where safety
            habits and work discipline weigh more than years on the rig.
          </p>
          <div class="mt-10 flex flex-wrap gap-3 text-sm">
            <a
              href="/cv/"
              class="bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-700"
            >
              Download CV (PDF)
            </a>
            <NuxtLink
              to="/contact"
              class="border border-slate-900 px-6 py-3 font-medium hover:bg-slate-900 hover:text-white"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
        <div class="md:col-span-2">
          <ImagePlaceholder ratio="portrait" label="Professional photo" />
        </div>
      </div>
    </section>

    <!-- Certifications: primary -->
    <section class="border-t border-slate-900 bg-slate-50">
      <div class="mx-auto max-w-6xl px-6 py-20">
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
            class="border-t border-slate-200 pt-6"
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
            <div class="mt-6">
              <ImagePlaceholder
                ratio="landscape"
                :label="`Certificate — ${cert.short}`"
              />
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Secondary: software / tools -->
    <section class="border-t border-slate-200">
      <div class="mx-auto max-w-6xl px-6 py-20">
        <div class="grid gap-10 md:grid-cols-5">
          <div class="md:col-span-2">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Also
            </p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Builds the tools
              <span class="block text-slate-500">he trains with.</span>
            </h2>
          </div>
          <div class="space-y-5 leading-relaxed text-slate-700 md:col-span-3">
            <p>
              Software developer before the offshore move — still building,
              just for a different set of problems now. The tools below are
              ones I made for myself: flashcards for the standards I have to
              know cold, drills for lifting scenarios, and a tracker for the
              certification pipeline.
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
        <div class="mt-14 grid gap-10 md:grid-cols-3">
          <NuxtLink
            v-for="t in toolPreviews"
            :key="t.title"
            to="/projects"
            class="group block"
          >
            <ImagePlaceholder ratio="landscape" :label="t.title" />
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
            to="/projects"
            class="text-sm font-medium underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900"
          >
            See all tools →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Background: compact transferable skills -->
    <section class="border-t border-slate-200">
      <div class="mx-auto max-w-6xl px-6 py-16">
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
            to="/about"
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
      <div class="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
        <NuxtLink
          to="/about"
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
          to="/contact"
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
