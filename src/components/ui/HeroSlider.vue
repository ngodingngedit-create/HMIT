<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  { src: '/home/home.webp', alt: 'Dokumentasi kegiatan HMIT 1' },
  { src: '/home/home2.webp', alt: 'Dokumentasi kegiatan HMIT 2' },
  { src: '/home/home3.webp', alt: 'Dokumentasi kegiatan HMIT 3' },
]

const active = ref(0)
const go = (i) => {
  active.value = i
}
const prev = () => go((active.value - 1 + slides.length) % slides.length)
const next = () => go((active.value + 1) % slides.length)

let timer = null
const reduce = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const start = () => {
  if (reduce) return
  stop()
  timer = setInterval(next, 6000)
}
const stop = () => {
  if (timer) clearInterval(timer)
  timer = null
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <div
    class="hero-slider"
    role="region"
    aria-label="Sorotan kegiatan HMIT"
    @mouseenter="stop"
    @mouseleave="start"
    @keydown.left="prev"
    @keydown.right="next"
    tabindex="0"
  >
    <div class="slides">
      <div
        v-for="(slide, i) in slides"
        :key="slide.src"
        class="slide"
        :class="{ active: active === i }"
        :aria-hidden="active !== i"
      >
        <!-- Gambar penuh menggunakan cover, tanpa lapisan blur di samping -->
        <img :src="slide.src" :alt="slide.alt" class="slide-img" :loading="i === 0 ? 'eager' : 'lazy'" />
      </div>
    </div>

    <nav class="dots" aria-label="Navigasi sorotan">
      <button
        v-for="(slide, i) in slides"
        :key="slide.src"
        class="dot"
        :class="{ active: active === i }"
        :aria-label="`Tampilkan gambar ${i + 1}`"
        :aria-current="active === i"
        @click="go(i)"
      ></button>
    </nav>
  </div>
</template>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline-offset: -4px;
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.6s var(--ease-out);
}

.slide.active {
  opacity: 1;
  visibility: visible;
}

/* Gambar penuh memenuhi seluruh frame tanpa area blur di samping */
.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.dots {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  padding: 5px 10px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  z-index: 2;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: rgba(3, 75, 147, 0.35);
  cursor: pointer;
  transition: all 0.25s var(--ease-out);
}

.dot:hover {
  background: rgba(3, 75, 147, 0.65);
}

.dot.active {
  width: 16px;
  border-radius: var(--radius-pill);
  background: var(--blue-600);
}

@media (max-width: 900px) {
  .dots {
    bottom: 10px;
    padding: 4px 8px;
    gap: 5px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide {
    transition: none;
  }
}
</style>

