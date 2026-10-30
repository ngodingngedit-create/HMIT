<script setup>
defineProps({
  partners: { type: Array, required: true }, // [{ name, logo }]
})
</script>

<template>
  <section class="partner-strip" aria-label="Daftar partner">
    <p class="strip-title">Dipercaya oleh partner kami</p>

    <div class="strip-scroll">
      <div class="strip-logos">
        <div v-for="p in partners" :key="p.name" class="partner-logo">
          <img v-if="p.logo" :src="p.logo" :alt="p.name" class="logo-img" />
          <span v-else class="logo-name">{{ p.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Panel abu terang dengan kartu logo putih */
.partner-strip {
  background: #f4f6f9;
  border-radius: var(--radius-lg);
  padding: var(--space-8) var(--space-4) var(--space-6);
}

.strip-title {
  margin: 0 0 var(--space-6);
  text-align: center;
  font-weight: 700;
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
  color: var(--ink);
}

/* Satu baris; dapat digeser horizontal bila melebihi lebar layar */
.strip-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.strip-logos {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  margin: 0 auto;
  gap: 8px;
}

.partner-logo {
  flex: 0 0 200px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-5);
  background: var(--color-white);
  border: 1px solid rgba(3, 75, 147, 0.06);
  border-top: 2px solid transparent;
  transition: border-top-color 0.2s var(--ease-out);
}

.partner-logo:hover {
  border-top-color: var(--blue-600);
}

.logo-img {
  max-width: 100%;
  max-height: 64px;
  width: auto;
  object-fit: contain;
}

.logo-name {
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 1.1rem;
}

@media (max-width: 560px) {
  .partner-logo {
    flex-basis: 160px;
    height: 96px;
  }

  .logo-img {
    max-height: 52px;
  }
}
</style>