<script setup lang="ts">
const { locale } = useI18n()
const cvHref = computed(() =>
  locale.value === 'no' ? '/cv/norwegian-cv.pdf' : '/cv/english-cv.pdf'
)

const iframeRef = ref<HTMLIFrameElement | null>(null)

const printCv = () => {
  const frame = iframeRef.value
  if (!frame) return
  try {
    frame.focus()
    frame.contentWindow?.print()
  } catch {
    window.open(cvHref.value, '_blank', 'noopener')
  }
}
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
        <div class="flex flex-wrap items-center gap-3">
          <a
            :href="cvHref"
            :download="`bruno-bueno-cv-${locale}.pdf`"
            class="bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            {{ $t('cv.download') }}
          </a>
          <button
            type="button"
            class="inline-flex items-center gap-2 border border-slate-900 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-900 hover:text-white"
            @click="printCv"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="h-4 w-4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9V3h12v6" />
              <rect x="6" y="14" width="12" height="7" />
              <path d="M6 18H3v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6h-3" />
            </svg>
            {{ $t('cv.print') }}
          </button>
        </div>
      </div>
    </section>

    <!-- PDF viewer: aspect-ratio sized for two stacked A4 pages so nothing gets clipped -->
    <section class="mx-auto max-w-6xl px-6 pb-16">
      <div class="">
        <iframe
          ref="iframeRef"
          :key="cvHref"
          :src="`${cvHref}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`"
          :title="$t('cv.title')"
          class="block aspect-[250/300] "
        />
      </div>
    </section>
  </div>
</template>
