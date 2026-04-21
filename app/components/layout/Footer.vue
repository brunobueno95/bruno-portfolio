<script setup lang="ts">
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-32 bg-black text-white">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
      <div class="md:col-span-2">
        <div class="font-semibold tracking-tight">Bruno Bueno</div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-neutral-300">
          {{ $t('footer.byline') }}
        </p>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {{ $t('footer.site') }}
        </h4>
        <ul class="mt-4 space-y-2 text-sm text-neutral-200">
          <li><NuxtLink :to="localePath('/about')" class="hover:text-white hover:underline underline-offset-4">{{ $t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/projects')" class="hover:text-white hover:underline underline-offset-4">{{ $t('nav.tools') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/cv')" class="hover:text-white hover:underline underline-offset-4">{{ $t('nav.cv') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/contact')" class="hover:text-white hover:underline underline-offset-4">{{ $t('nav.contact') }}</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {{ $t('footer.direct') }}
        </h4>
        <ul class="mt-4 space-y-2 text-sm text-neutral-200">
          <li><a href="mailto:brunobernardobueno@gmail.com" class="hover:text-white hover:underline underline-offset-4">brunobernardobueno@gmail.com</a></li>
          <li><a href="tel:+4741324823" class="hover:text-white hover:underline underline-offset-4">+47 413 24 823</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/bruno-bueno-b00945263/"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 hover:text-white hover:underline underline-offset-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-neutral-900">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-neutral-400">
        <span>© {{ year }} Bruno Bueno</span>
        <span>{{ $t('footer.location') }}</span>
      </div>
    </div>
  </footer>
</template>
