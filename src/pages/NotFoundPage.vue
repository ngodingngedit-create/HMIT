<script setup>
import GlassCard from '../components/ui/GlassCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
</script>

<template>
  <div class="page not-found-page">
    <GlassCard class="nf-card">
      <span class="error-code">404</span>
      <h1>Halaman Tidak Ditemukan</h1>
      <p class="lead">Halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
      <BaseButton to="/" variant="primary">Kembali ke Beranda</BaseButton>
    </GlassCard>
  </div>
</template>

<style scoped>
.page {
  width: min(600px, 100% - 40px);
  margin: var(--space-21) auto;
}

.nf-card {
  text-align: center;
  padding: var(--space-12) var(--space-8);
}

.error-code {
  font-size: 4rem;
  font-weight: 700;
  color: var(--crimson-600);
  line-height: 1;
  display: block;
  margin-bottom: var(--space-4);
}

.nf-card h1 {
  font-size: 1.8rem;
  color: var(--ink);
  margin-bottom: var(--space-3);
}

.nf-card p {
  color: var(--ink-soft);
  margin: 0 auto var(--space-8);
}
</style>


