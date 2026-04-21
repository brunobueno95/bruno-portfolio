<script setup lang="ts">
const { locale } = useI18n()
const cvHref = computed(() =>
  locale.value === 'no' ? '/cv/norwegian-cv.pdf' : '/cv/english-cv.pdf'
)

const experience = [
  {
    period: 'Nov 2023 – May 2026',
    role: 'Software Developer',
    org: 'Proweb AS (Webson), Larvik. Full-time. Structured problem-solving, disciplined with procedures and written documentation. Strong computer literacy — adapt quickly to new control systems and digital tools.',
    location: 'Stokke, NO'
  },
  {
    period: 'Feb 2023 – Sep 2023',
    role: 'Software Developer — Internship',
    org: 'SASTECH AS, Larvik.',
    location: 'Larvik, NO'
  },
  {
    period: 'Jan 2017 – Jul 2023',
    role: 'Dive Operations — Instructor & Team Lead',
    org: '1,000+ hours in open-water operations across multiple dive centres. Team leadership under pressure — briefings, risk assessments, pre-operation checks, buddy-check protocols. Emergency first response instructor and oxygen provider.',
    location: 'Norway · Philippines · Mexico · Brazil · Honduras'
  }
]

const education = [
  {
    period: 'May 2022 – Feb 2023',
    title: 'Full Stack Web Developer Course',
    org: 'GET Academy, Larvik'
  },
  {
    period: 'Jan 2017 – Apr 2017',
    title: 'PADI Open Water Scuba Instructor Course and Internship',
    org: 'Roatan Dive Center, Honduras'
  },
  {
    period: '2012',
    title: 'High School',
    org: 'Colégio pH, Rio de Janeiro, Brazil'
  }
]

const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Norwegian', level: 'B2' },
  { name: 'Spanish', level: 'Conversational' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-16">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">About</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        Born in Brazil,
        <span class="block text-slate-500">based in Stavern.</span>
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
        <p>
        
Diving gave me the foundation: <strong> 1,000+ dives as a PADI and CMAS instructor</strong> across Norway, the Philippines, Mexico, Brazil and Honduras. Safety and situation awareness became an instict — gear checks, buddy protocols, decisions that matters. That translates directly to deck work. </p>
<p>Three years in software taught me problem-solving under pressure, how to read documentation and learn fast new systems. <strong>Computer literacy is only going to matter more offshore, not less,</strong> as rigs get more instrumented and data-driven.</p>
<p>Offshore is where I want to be.<strong> Physical work with real stakes. Mental challenges that build strength. A team you depend on and who depends on you.</strong> Norwegian oil and gas built a lot of what makes this country great, and I want to contribute to it directly.</p>
<p>Certifications in hand: <strong>GSK, G11, NOG 113 Fallsikring, Riggerkurs, G4 Traverskran, Truck T1–T2–T3–T4. G20 Hydraulisk Kran</strong> scheduled for 15 May 2026. Available to mobilise.
        </p>
     
      </div>
    </section>

    <!-- Experience -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-6">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        Experience
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        Work history.
      </h2>
      <ol class="mt-10 divide-y divide-slate-200">
        <li
          v-for="e in experience"
          :key="e.period"
          class="grid items-baseline gap-4 py-6 md:grid-cols-[160px_1fr_auto]"
        >
          <span class="text-sm text-slate-500">{{ e.period }}</span>
          <div>
            <h3 class="font-medium">{{ e.role }}</h3>
            <p class="mt-1 text-sm text-slate-600">{{ e.org }}</p>
          </div>
          <span class="text-xs text-slate-500">{{ e.location }}</span>
        </li>
      </ol>
    </section>

    <!-- Education -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        Education
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        Studies.
      </h2>
      <ol class="mt-10 divide-y divide-slate-200">
        <li
          v-for="ed in education"
          :key="ed.title"
          class="grid items-baseline gap-4 py-6 md:grid-cols-[160px_1fr]"
        >
          <span class="text-sm text-slate-500">{{ ed.period }}</span>
          <div>
            <h3 class="font-medium">{{ ed.title }}</h3>
            <p class="mt-1 text-sm text-slate-600">{{ ed.org }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Languages -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        Languages
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        What I speak.
      </h2>
      <dl class="mt-8 grid gap-4 md:grid-cols-4">
        <div
          v-for="l in languages"
          :key="l.name"
          class="border-t border-slate-200 pt-4"
        >
          <dt class="font-medium">{{ l.name }}</dt>
          <dd class="text-sm text-slate-600">{{ l.level }}</dd>
        </div>
      </dl>
    </section>

    <!-- CV download -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <div class="flex flex-wrap items-center justify-between gap-6 border border-slate-300 p-10 md:p-14">
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Full résumé
          </p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight">
            Download the CV (PDF).
          </h3>
          <p class="mt-1 text-sm text-slate-500">
            The long-form record — certifications, dates, organisations.
          </p>
        </div>
        <a
          :href="cvHref"
          :download="`bruno-bueno-cv-${locale}.pdf`"
          class="bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
        >
          Download CV
        </a>
      </div>
    </section>
  </div>
</template>
