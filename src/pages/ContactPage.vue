<script setup>
import SectionHeader from '../components/ui/SectionHeader.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import ContactForm from '../components/contact/ContactForm.vue'
import contactData from '../data/contact'

function onFormSubmit(data) {
  // Demo handling / fallback mailto
  window.location.href = `mailto:${contactData.email}?subject=Pesan dari ${data.name}&body=${data.message}`
}
</script>

<template>
  <div class="page contact-page">
    <SectionHeader
      title="Hubungi Kami"
      lead="Pertanyaan, penawaran kolaborasi, atau informasi seputar HMIT."
    />

    <div class="contact-grid">
      <!-- Form Kontak -->
      <GlassCard class="form-card">
        <h3>Kirim Pesan</h3>
        <ContactForm @submit="onFormSubmit" />
      </GlassCard>

      <!-- Kartu Info Kontak -->
      <div class="info-stack">
        <GlassCard class="info-card">
          <h3>Sekretariat</h3>
          <p>{{ contactData.address }}</p>
          <BaseButton :href="contactData.mapsUrl" target="_blank" variant="glass" class="btn-sm">
            Buka di Google Maps
          </BaseButton>
        </GlassCard>

        <GlassCard class="info-card">
          <h3>Kontak Resmi</h3>
          <p>Email: {{ contactData.email }}</p>
          <p>Instagram: {{ contactData.instagram }}</p>
        </GlassCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-8);
}

.form-card h3,
.info-card h3 {
  color: var(--blue-600);
  margin-bottom: var(--space-4);
}

.info-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.info-card p {
  color: var(--ink-soft);
  font-size: 0.95rem;
  margin-bottom: var(--space-3);
}

.btn-sm {
  padding: 6px 16px;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>


