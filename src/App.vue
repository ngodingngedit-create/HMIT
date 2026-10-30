<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import MarqueeStrip from './components/ui/MarqueeStrip.vue'

const marqueeText = 'Salam Satu Teknologi Pioneer Teknologi!'
</script>

<template>
  <AppNavbar />
  <main>
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </main>

  <!-- Teks looping di atas footer -->
  <MarqueeStrip :text="marqueeText" :duration="26" />

  <AppFooter />
</template>

<style scoped>
main {
  min-height: 60vh;
  /* navbar fixed: beri ruang agar konten tidak tertutup */
  padding-top: var(--navbar-h);
}

/* design.md bagian 12: pindah halaman fade singkat 0.25s */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s var(--ease-out);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
