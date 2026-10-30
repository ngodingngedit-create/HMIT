<script setup>
import SectionHeader from '../components/ui/SectionHeader.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import TierCard from '../components/sponsor/TierCard.vue'
import PartnerStrip from '../components/sponsor/PartnerStrip.vue'
import { partners, tiers } from '../data/sponsors'
</script>

<template>
  <div class="page sponsor-page">
    <SectionHeader
      title="Sponsor & Kolaborasi"
      lead="Bermitra bersama HMIT Telkom University Jakarta untuk menjangkau potensi mahasiswa Teknologi Informasi."
    />

    <!-- Strip Logo Partner -->
    <PartnerStrip :partners="partners" class="strip-wrapper" />

    <!-- Tier Card -->
    <section class="tier-section">
      <SectionHeader title="Paket Sponsorship" lead="Pilihan kemitraan sesuai kebutuhan kolaborasi Anda." />

      <div class="tier-grid">
        <TierCard v-for="t in tiers" :key="t.name" :tier="t" />
      </div>

      <div class="proposal-cta">
        <BaseButton href="#" variant="crimson">Unduh proposal kerja sama</BaseButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.strip-wrapper {
  margin-bottom: var(--space-16);
}

.tier-section {
  margin-top: 0;
}

.tier-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  align-items: stretch;
}

.proposal-cta {
  margin-top: var(--space-12);
  text-align: center;
}

@media (max-width: 900px) {
  .tier-grid {
    grid-template-columns: 1fr;
  }
}
</style>


