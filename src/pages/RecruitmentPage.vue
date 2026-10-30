<script setup>
import { ref } from 'vue'
import BaseButton from '../components/ui/BaseButton.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'

const activeFaq = ref(null)
const faqs = [
  {
    q: 'Siapa yang boleh mendaftar Open Recruitment HMIT?',
    a: 'Seluruh mahasiswa aktif Program Studi Teknologi Informasi Telkom University Jakarta yang memenuhi syarat akademis dan administrasi.'
  },
  {
    q: 'Apa saja alur seleksinya?',
    a: 'Alur seleksi meliputi pendaftaran berkas online, wawancara, dan pengumuman hasil seleksi.'
  },
  {
    q: 'Dimana saya bisa mengakses formulir pendaftaran?',
    a: 'Formulir pendaftaran dapat diakses langsung melalui tombol "Isi formulir pendaftaran" di atas.'
  }
]

const toggleFaq = (i) => {
  activeFaq.value = activeFaq.value === i ? null : i
}
</script>

<template>
  <div class="page recruitment-page">
    <!-- Panel Besar Gradasi Biru-Merah (design.md 10.8) -->
    <div class="recruitment-hero">
      <div class="hero-card">
        <span class="badge">Open Recruitment</span>
        <h1>Bergabung Menjadi Pengurus HMIT</h1>
        <p class="hero-lead">
          Ambil peran, kembangkan potensi kepemimpinan, dan bangun jaringan bersama mahasiswa Teknologi Informasi Telkom University Jakarta.
        </p>

        <div class="hero-meta">
          <div class="meta-item">
            <strong>Periode Pendaftaran</strong>
            <span>[REAL DATA] Isi tanggal pendaftaran</span>
          </div>
          <div class="meta-item">
            <strong>Sasaran</strong>
            <span>Mahasiswa Aktif Teknologi Informasi</span>
          </div>
        </div>

        <div class="hero-cta">
          <!-- Link form eksternal (design.md 10.8) -->
          <BaseButton href="https://forms.google.com" target="_blank" variant="light">
            Isi formulir pendaftaran
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- FAQ Akordeon -->
    <section class="faq-section">
      <SectionHeader title="Pertanyaan Umum (FAQ)" lead="Hal-hal yang sering ditanyakan seputar pendaftaran." />

      <div class="faq-list">
        <GlassCard
          v-for="(faq, i) in faqs"
          :key="i"
          class="faq-item"
          @click="toggleFaq(i)"
        >
          <div class="faq-head">
            <h3>{{ faq.q }}</h3>
            <span class="faq-toggle">{{ activeFaq === i ? '−' : '+' }}</span>
          </div>
          <p v-if="activeFaq === i" class="faq-answer">{{ faq.a }}</p>
        </GlassCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.recruitment-hero {
  border-radius: var(--radius-lg);
  background: var(--grad-brand);
  color: var(--color-white);
  padding: var(--space-12) var(--space-8);
  box-shadow: var(--shadow-cta);
  margin-bottom: var(--space-21);
}

.hero-card h1 {
  font-size: 2.8rem;
  margin: var(--space-4) 0;
}

.hero-lead {
  font-size: 1.1rem;
  max-width: 65ch;
  opacity: 0.95;
  margin-bottom: var(--space-8);
}

.hero-meta {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.meta-item strong {
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.meta-item span {
  font-size: 1.1rem;
  font-weight: 600;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 600;
}

.faq-section {
  margin-top: var(--space-21);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.faq-item {
  cursor: pointer;
  user-select: none;
}

.faq-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-head h3 {
  font-size: 1.05rem;
  color: var(--ink);
  margin: 0;
}

.faq-toggle {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--blue-600);
}

.faq-answer {
  margin-top: var(--space-3);
  color: var(--ink-soft);
  font-size: 0.95rem;
  max-width: 100%;
}
</style>


