<script setup>
// Teks berjalan (looping) sebagai pembatas antar section.
defineProps({
  text: { type: String, default: 'Salam Satu Teknologi Pioneer Teknologi!' },
  // Kecepatan dalam detik untuk satu putaran penuh
  duration: { type: Number, default: 26 },
})

// Duplikasi teks agar loop mulus tanpa jeda.
const repeat = 6
</script>

<template>
  <div class="marquee" role="marquee" aria-label="Pembatas section">
    <div class="marquee-track" :style="{ '--duration': `${duration}s` }">
      <!-- Dua grup identik: saat grup pertama keluar, grup kedua mengisi celah -->
      <div v-for="g in 2" :key="g" class="marquee-group" :aria-hidden="g === 2 ? 'true' : undefined">
        <span v-for="n in repeat" :key="n" class="marquee-item">
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  width: 100%;
  padding: 12px 0;
  background: var(--blue-600);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll var(--duration) linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  padding: 0 28px;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  letter-spacing: 0.02em;
  color: #ffffff;
  white-space: nowrap;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Hormati preferensi pengurangan gerak: hentikan animasi */
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>

