<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
})

// Dua salinan identik agar loop mulus (track bergeser -50%).
const loopItems = computed(() => [...props.items, ...props.items])

// Lightbox: gerak sebagai respons aksi (design.md bagian 12)
const active = ref(null)
const open = (item) => {
  active.value = item
}
const close = () => {
  active.value = null
}
</script>

<template>
  <div>
    <div class="gallery-marquee">
      <div class="gallery-track">
        <button
          v-for="(item, i) in loopItems"
          :key="i"
          class="gallery-item"
          @click="open(item)"
        >
          <img
            v-if="item.photo"
            :src="item.photo"
            :alt="item.title"
            loading="lazy"
            class="gallery-img"
          />
          <span v-else class="gallery-placeholder">{{ item.title }}</span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="active" class="lightbox" @click.self="close" @keydown.esc="close">
        <div class="lightbox-inner">
          <button class="lightbox-close" aria-label="Tutup" @click="close">×</button>
          <div class="lightbox-body glass">
            <p class="lightbox-title">{{ active.title }}</p>
            <p class="lightbox-date">{{ active.date }} · [REAL DATA] Foto belum tersedia</p>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery-marquee {
  overflow: hidden;
  width: 100%;
  padding: 4px 0;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

.gallery-track {
  display: flex;
  gap: var(--space-4);
  width: max-content;
  animation: gallery-scroll 40s linear infinite;
}

.gallery-marquee:hover .gallery-track {
  animation-play-state: paused;
}

.gallery-item {
  position: relative;
  flex: 0 0 auto;
  width: clamp(220px, 24vw, 320px);
  height: 200px;
  border: none;
  padding: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  background: var(--blue-100);
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

@keyframes gallery-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - var(--space-4) / 2)); }
}

/* Hormati preferensi pengurangan gerak: hentikan animasi */
@media (prefers-reduced-motion: reduce) {
  .gallery-track {
    animation: none;
  }
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: 100%;
  color: var(--blue-600);
  font-weight: 600;
  text-align: center;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(10, 26, 51, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.lightbox-inner {
  position: relative;
  width: min(720px, 100%);
}

.lightbox-body {
  padding: var(--space-8);
  text-align: center;
}

.lightbox-title {
  color: var(--ink);
  font-weight: 600;
  font-size: 1.1rem;
  max-width: 100%;
}

.lightbox-date {
  color: var(--ink-soft);
  font-size: 0.85rem;
  max-width: 100%;
}

.lightbox-close {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--color-white);
  color: var(--ink);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--shadow-card);
}

@media (max-width: 560px) {
  .gallery-item {
    width: 74vw;
    height: 170px;
  }
}
</style>

