<script setup lang="ts">
const localePath = useLocalePath()
const tools = [
  {
    year: '2025',
    title: 'Overhead-crane rig simulator',
    image: '/projects/overhead-crane.jpg',
    what: 'Training simulator for bridge and overhead (travers) cranes. Lift planning, signalling and load-handling drills run against a virtual rig — built to reinforce G4 material with scenario repetition.',
    taught: 'Building the physics and signalling logic forced me to understand the failure modes, not just the procedure steps. Mistakes in the sim are cheap — that is exactly what makes them useful.'
  },
  {
    year: '2025',
    title: 'Drilling operations trainer',
    image: '/projects/drilling-tool.jpg',
    what: 'Scenario-based trainer covering drilling-floor procedures and well-control fundamentals. Built to reinforce IWCF Level 1, WOCRM and IADC Rig Pass / Well Control Awareness material with repetition.',
    taught: 'Turning passive reading into active decision-making under time pressure changed how the material landed. I remember the scenarios; the definitions followed.'
  },
  {
    year: '2025',
    title: 'Rigging route planner',
    image: '/projects/rigging-planner.jpg',
    what: 'Plan a lift end-to-end: anchor points, sling geometry, load path and exclusion zones — checked against the rigging rules I was drilling on. Sits alongside the crane simulator as the "plan it" step before the "do it" step.',
    taught: 'The planner made me argue every choice out loud before the lift. By the time you press go the justification is already in your head — which is where it needs to be when a supervisor asks.'
  },
  {
    year: '2025',
    title: 'Offshore knowledge pipeline',
    image: '/projects/offshore-knowledge-pipeline.jpg',
    what: 'Autonomous AI pipeline that curates offshore domain knowledge (NORSOK, IWCF, IADC) into a structured vault, then generates study guides, quizzes and exams from it.',
    taught: 'Shaping raw standards into tight, exam-shaped questions forced me to internalise the material far more than reading ever did. Also a lesson in keeping the source of truth auditable.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">Tools</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        Tools I built for
        <span class="block text-slate-500">my offshore transition.</span>
      </h1>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-slate-700">
        Four tools built during the move from software into offshore work.
        Not portfolio pieces — they're the scaffolding I used to study,
        drill and keep the certification timeline honest. Each one solved a
        real problem in preparation and stuck around because it kept
        solving it.
      </p>
    </section>

    <!-- Tools list -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <div class="grid gap-16">
        <article
          v-for="(t, idx) in tools"
          :key="t.title"
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
                What it taught me
              </p>
              <p class="mt-2 text-sm text-slate-700">{{ t.taught }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Back to certs -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <div class="border-t border-slate-200 pt-6 text-sm text-slate-500">
        The primary offer is offshore work.
        <NuxtLink
          :to="localePath('/')"
          class="underline underline-offset-4 hover:text-slate-900"
        >
          See the certifications →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
