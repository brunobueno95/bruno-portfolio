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
      <div class="grid gap-10 md:grid-cols-3">
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
        <div class="border-t border-slate-200 pt-6">
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {{ $t('contact.linkedinLabel') }}
          </p>
          <a
            href="https://www.linkedin.com/in/bruno-bueno-b00945263/"
            target="_blank"
            rel="noopener"
            class="mt-3 inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin.com/in/bruno-bueno
          </a>
          <p class="mt-3 text-sm text-slate-600">
            {{ $t('contact.linkedinLede') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
