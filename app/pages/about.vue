<script setup lang="ts">
const experience = [
  {
    period: '2024 – present',
    role: 'Offshore certification pipeline',
    org: 'Self-directed. Norwegian offshore credentials (GSK incl. HUET, G4, G11, NOG 113, Truck T1–T4). Rigger course and offshore medical scheduled.',
    location: 'Stavern, NO'
  },
  {
    period: '2019 – 2024',
    role: 'Independent software development',
    org: 'Project-based client work, remote. Solo and small-team builds across multiple jurisdictions.',
    location: 'Remote'
  },
  {
    period: '2012 – 2020',
    role: 'PADI & CMAS dive instructor',
    org: 'Teaching, guiding and safety briefings. 1,000+ logged dives. Gear checks, buddy protocols and dive-plan management.',
    location: 'Five countries'
  }
]

const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Norwegian', level: 'Working — in progress' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-20 pb-16">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">About</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        Born in Brazil,
        <span class="block text-slate-500">based in Stavern.</span>
      </h1>
    </section>

    <!-- Portrait + bio -->
    <section class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5">
      <div class="md:col-span-2">
        <ImagePlaceholder ratio="portrait" label="Portrait" />
      </div>
      <div class="space-y-6 leading-relaxed text-slate-700 md:col-span-3">
        <p>
          The path into Norwegian offshore work came the long way round —
          through diving, then software, now deck training. Each detour
          taught me something I still use: the diving gave me safety at the
          level of habit, the software taught me how to break thick
          material into something usable.
        </p>
        <p>
          Over a thousand logged dives and PADI / CMAS instructor work
          across five countries built the foundation. Diving teaches safety
          as muscle memory — gear checks before every dive, buddy
          protocols, slow decisions at depth. It maps directly onto
          offshore: same respect for procedure, same habit of checking
          twice before acting.
        </p>
        <p>
          The move to deck work is deliberate. Physical work, clear rules,
          real stakes and a rotation I can plan around. The certifications
          are in place or actively scheduled — the last pieces fall into
          place over the coming weeks, and I'm ready to mobilise as soon
          as the medical clears.
        </p>
      </div>
    </section>

    <!-- Experience -->
    <section class="mx-auto max-w-6xl px-6 py-24">
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

    <!-- Languages -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        Languages
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        What I speak.
      </h2>
      <dl class="mt-8 grid gap-4 md:grid-cols-3">
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
          href="/cv/"
          class="bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
        >
          Download CV
        </a>
      </div>
    </section>
  </div>
</template>
