<script setup lang="ts">
const tools = [
  {
    year: '2025',
    title: 'Standards flashcards',
    what: 'Spaced-repetition deck covering NOG 113 fall protection, basic sea survival content and lifting-standard fundamentals. Handles image cards for sling configurations and rigging diagrams — the parts text-only systems handle poorly.',
    taught: 'Rewriting the standards into question form forced me to internalise rescue and harness procedures. Slower going than reading, but it actually stuck.'
  },
  {
    year: '2025',
    title: 'Lift-scenario drills',
    what: 'Random lift setups: a load, a rig, a set of constraints. You pick the sling type, call the signals, and justify the rigging plan against time. Scenarios pulled from real cases.',
    taught: 'Working decisions out loud under pressure is a different muscle from reciting theory. The drills killed the mid-scenario freeze.'
  },
  {
    year: '2024',
    title: 'Certification tracker',
    what: 'One dashboard for every course booked, cert earned and expiry coming up. GSK validity, offshore medical, truck renewals, rigger course — all on one timeline.',
    taught: 'Certifications time out quietly. Putting them on one view made obvious which ones needed scheduling and kept the pipeline moving.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-20 pb-12">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">Tools</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        Tools I built for
        <span class="block text-slate-500">my offshore transition.</span>
      </h1>
      <p class="mt-8 max-w-xl text-base leading-relaxed text-slate-700">
        Three tools built during the move from software into offshore work.
        Not portfolio pieces — they're the scaffolding I used to study,
        drill and keep the certification timeline honest. Each one solved a
        real problem in preparation and stuck around because it kept
        solving it.
      </p>
    </section>

    <!-- Tools list -->
    <section class="mx-auto max-w-6xl px-6 py-12">
      <div class="grid gap-20">
        <article
          v-for="(t, idx) in tools"
          :key="t.title"
          class="grid items-start gap-10 border-t border-slate-200 pt-10 md:grid-cols-5"
        >
          <div :class="idx % 2 === 0 ? 'md:col-span-3' : 'md:col-span-3 md:order-2'">
            <ImagePlaceholder ratio="landscape" :label="t.title" />
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
          to="/"
          class="underline underline-offset-4 hover:text-slate-900"
        >
          See the certifications →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
