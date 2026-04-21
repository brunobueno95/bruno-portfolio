<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  alt?: string
  loading?: 'lazy' | 'eager'
  innerClass?: string | string[]
  skeletonClass?: string
  // How long to wait before revealing the skeleton. Fast-loading images never show it.
  skeletonDelayMs?: number
}>(), {
  skeletonDelayMs: 220
})

const wrapperRef = ref<HTMLElement | null>(null)
const loaded = ref(false)
const error = ref(false)
const showSkeleton = ref(false)

let timer: ReturnType<typeof setTimeout> | null = null

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

const armTimer = () => {
  clearTimer()
  if (loaded.value || error.value) return
  timer = setTimeout(() => {
    if (!loaded.value && !error.value) showSkeleton.value = true
  }, props.skeletonDelayMs)
}

const onLoaded = () => {
  loaded.value = true
  showSkeleton.value = false
  clearTimer()
}

const onError = () => {
  error.value = true
  showSkeleton.value = false
  clearTimer()
}

// Catches images that finished downloading before Vue attached @load (cached,
// SSR-preloaded, eager fetch that raced hydration).
const syncFromDom = () => {
  const img = wrapperRef.value?.querySelector('img')
  if (!img) return
  if (img.complete) {
    if (img.naturalWidth > 0) onLoaded()
    else onError()
  }
}

onMounted(() => {
  syncFromDom()
  armTimer()
})

onBeforeUnmount(clearTimer)

watch(() => props.src, () => {
  loaded.value = false
  error.value = false
  showSkeleton.value = false
  clearTimer()
  nextTick(() => {
    syncFromDom()
    armTimer()
  })
})
</script>

<template>
  <div ref="wrapperRef" class="relative overflow-hidden">
    <div
      v-show="showSkeleton"
      :class="[
        'absolute inset-0 animate-pulse',
        skeletonClass ?? 'bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200'
      ]"
      aria-hidden="true"
    />
    <NuxtImg
      :src="src"
      :alt="alt ?? ''"
      :loading="loading ?? 'lazy'"
      :class="[
        'h-full w-full object-cover transition-opacity duration-300',
        loaded ? 'opacity-100' : 'opacity-0',
        innerClass
      ]"
      @load="onLoaded"
      @error="onError"
    />
  </div>
</template>
