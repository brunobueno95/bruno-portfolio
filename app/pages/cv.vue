<script setup lang="ts">
const { locale } = useI18n()
const cvHref = computed(() =>
  locale.value === 'no' ? '/cv/norwegian-cv.pdf' : '/cv/english-cv.pdf'
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-10">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('cv.kicker') }}
          </p>
          <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            {{ $t('cv.title') }}
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-slate-700">
            {{ $t('cv.body') }}
          </p>
        </div>
        <a
          :href="cvHref"
          :download="`bruno-bueno-cv-${locale}.pdf`"
          class="bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          {{ $t('cv.download') }}
        </a>
      </div>
    </section>

    <!-- PDF viewer -->
    <section class="mx-auto max-w-6xl px-6 pb-16">
      <div class="overflow-hidden rounded-sm border border-slate-300 bg-slate-100">
        <!-- A4 portrait aspect on desktop; fixed tall height on small screens for readability -->
        <iframe
          :key="cvHref"
          :src="cvHref"
          :title="$t('cv.title')"
          class="block h-[85vh] w-full md:h-[calc(100vh-12rem)]"
          loading="lazy"
        />
      </div>
      <p class="mt-4 text-xs text-slate-500">
        {{ $t('cv.fallback') }}
        <a
          :href="cvHref"
          target="_blank"
          rel="noopener"
          class="underline underline-offset-4 hover:text-slate-900"
        >
          {{ $t('cv.openInNewTab') }}
        </a>
      </p>
    </section>
  </div>
</template>
