<script setup lang="ts">
const props = defineProps<{
  label?: string
  ratio?: 'square' | 'portrait' | 'landscape' | 'wide' | 'video' | 'tall'
}>()

const aspectClass = computed(() => {
  switch (props.ratio) {
    case 'square': return 'aspect-square'
    case 'portrait': return 'aspect-[3/4]'
    case 'landscape': return 'aspect-[4/3]'
    case 'wide': return 'aspect-[16/9]'
    case 'video': return 'aspect-video'
    case 'tall': return 'aspect-[2/3]'
    default: return 'aspect-[4/3]'
  }
})
</script>

<template>
  <div
    class="relative flex items-center justify-center overflow-hidden rounded-sm bg-slate-100 border border-slate-200"
    :class="aspectClass"
  >
    <div
      class="absolute inset-0 opacity-50"
      style="background-image: repeating-linear-gradient(45deg, transparent 0 14px, rgba(0,0,0,0.035) 14px 15px)"
    />
    <div class="relative flex flex-col items-center gap-2 text-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" class="h-6 w-6">
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="M21 16l-5-5-9 9" />
      </svg>
      <span class="text-[10px] uppercase tracking-[0.25em]">{{ label || 'Image' }}</span>
    </div>
  </div>
</template>
