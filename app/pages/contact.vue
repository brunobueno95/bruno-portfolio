<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 pt-12 pb-16">
      <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {{ $t('contact.kicker') }}
      </p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        {{ $t('contact.title1') }}
        <span class="block text-slate-500">{{ $t('contact.title2') }}</span>
      </h1>
      <p class="mt-8 max-w-2xl text-base leading-relaxed text-slate-700">
        {{ $t('contact.body') }}
      </p>
    </section>

    <!-- Primary channels -->
    <section class="border-t border-slate-900">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-2">
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('contact.emailLabel') }}
          </p>
          <a
            href="mailto:brunobernardobueno@gmail.com"
            class="mt-3 block text-2xl font-semibold tracking-tight hover:underline underline-offset-4 md:text-3xl"
          >
            brunobernardobueno@gmail.com
          </a>
          <p class="mt-3 text-sm text-slate-600">
            {{ $t('contact.emailLede') }}
          </p>
        </div>
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('contact.phoneLabel') }}
          </p>
          <a
            href="tel:+4741324823"
            class="mt-3 block text-2xl font-semibold tracking-tight hover:underline underline-offset-4 md:text-3xl"
          >
            +47 413 24 823
          </a>
          <p class="mt-3 text-sm text-slate-600">
            {{ $t('contact.phoneLede') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Supporting info -->
    <section class="mx-auto max-w-6xl px-6 py-8">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="border-t border-slate-200 pt-6">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('contact.basedLabel') }}
          </p>
          <p class="mt-3 font-medium">{{ $t('contact.basedPlace') }}</p>
          <p class="mt-3 text-sm text-slate-600">
            {{ $t('contact.basedLede') }}
          </p>
        </div>
        <div class="border-t border-slate-200 pt-6">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('contact.availLabel') }}
          </p>
          <p class="mt-3 font-medium">{{ $t('contact.availState') }}</p>
          <p class="mt-3 text-sm text-slate-600">
            {{ $t('contact.availLede') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
