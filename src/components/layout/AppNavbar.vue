<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import navData from '../../data/navigation'
import BaseButton from '../ui/BaseButton.vue'

const isDrawerOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  isDrawerOpen.value = false
})

const closeDrawer = () => {
  isDrawerOpen.value = false
}

// Navbar transparan di atas hero saat di puncak halaman.
// Beri latar blur setelah digulir agar teks tetap terbaca.
const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="navbar-wrapper" :class="{ scrolled }">
    <nav class="navbar" aria-label="Navigasi utama">
      <router-link to="/" class="nav-brand" @click="closeDrawer">
        <img :src="navData.logo" alt="Logo HMIT" class="brand-logo" width="34" height="34" />
      
      </router-link>

      <div class="nav-links desktop-only">
        <router-link
          v-for="link in navData.links"
          :key="link.to"
          :to="link.to"
          class="nav-item"
        >
          {{ link.label }}
        </router-link>
      </div>

      <div class="nav-actions desktop-only">
        <BaseButton to="/open-recruitment" variant="primary">Open Recruitment</BaseButton>
      </div>

      <button
        class="menu-toggle mobile-only"
        :class="{ active: isDrawerOpen }"
        :aria-expanded="isDrawerOpen"
        aria-label="Buka menu navigasi"
        @click="isDrawerOpen = !isDrawerOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>

    <!-- Sidebar Overlay -->
    <Transition name="fade">
      <div v-if="isDrawerOpen" class="sidebar-overlay" @click="closeDrawer"></div>
    </Transition>

    <!-- Sidebar Drawer -->
    <Transition name="slide">
      <div v-if="isDrawerOpen" class="sidebar-drawer">
        <div class="sidebar-header">
          <router-link to="/" class="sidebar-brand" @click="closeDrawer">
            <img :src="navData.logo" alt="Logo HMIT" class="brand-logo" width="32" height="32" />
       
          </router-link>
          <button class="close-btn" aria-label="Tutup menu" @click="closeDrawer">×</button>
        </div>

        <div class="sidebar-links">
          <router-link
            v-for="link in navData.links"
            :key="link.to"
            :to="link.to"
            class="sidebar-item"
            @click="closeDrawer"
          >
            {{ link.label }}
          </router-link>
        </div>

        <div class="sidebar-cta">
          <BaseButton to="/open-recruitment" variant="primary" @click="closeDrawer">
            Open Recruitment
          </BaseButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: background 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out);
}

.navbar-wrapper.scrolled {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px);
  box-shadow: 0 1px 0 rgba(3, 75, 147, 0.08);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1520px, 100% - 32px);
  margin: 0 auto;
  padding: 14px 0;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 4px;
}

.brand-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
}



/* nav-links di center */
.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  gap: 4px;
}

.nav-item {
  position: relative;
  padding: 8px 14px;
  color: var(--ink-soft);
  font-weight: 500;
  font-size: 0.92rem;
  text-decoration: none;
  transition: color 0.2s var(--ease-out);
}

/* Garis bawah biru sebagai penanda tautan aktif */
.nav-item::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: var(--blue-600);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease-out);
}

.nav-item:hover {
  color: var(--blue-600);
  text-decoration: none;
}

.nav-item:hover::after {
  transform: scaleX(0.6);
}

.nav-item.router-link-active {
  color: var(--blue-600);
  font-weight: 600;
}

.nav-item.router-link-active::after {
  transform: scaleX(1);
}

/* Tombol Open Recruitment di paling kanan */
.nav-actions {
  margin-left: auto;
  align-items: center;
}

.desktop-only {
  display: flex;
}

/* Disembunyikan di desktop; ditampilkan hanya di mobile lewat media query */
.mobile-only {
  display: none;
}

.menu-toggle {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  width: 44px;
  height: 44px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.menu-toggle:hover {
  background: var(--blue-100);
}

.menu-toggle.active .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.bar {
  width: 22px;
  height: 2px;
  background: var(--ink);
  transition: all 0.3s ease;
}

/* Sidebar */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 26, 51, 0.5);
  z-index: 999;
}

.sidebar-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: var(--bg);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--line);
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}



.close-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  font-size: 1.8rem;
  color: var(--ink);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.close-btn:hover {
  background: var(--blue-100);
}

.sidebar-links {
  flex: 1;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
}

.sidebar-item {
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  color: var(--ink);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.sidebar-item:hover {
  background: var(--blue-100);
  color: var(--blue-600);
}

.sidebar-cta {
  padding: 20px;
  border-top: 1px solid var(--line);
}

.sidebar-cta :deep(.base-button) {
  width: 100%;
  justify-content: center;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s var(--ease-out);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Responsive */
@media (max-width: 900px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: flex;
  }
  .navbar {
    width: min(1520px, 100% - 24px);
    padding: 10px 0;
  }
}
</style>

