<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 260ms ease, transform 260ms ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
