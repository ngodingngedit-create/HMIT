<script setup>
import { ref } from 'vue'
import BaseButton from '../components/ui/BaseButton.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import NewsCard from '../components/news/NewsCard.vue'
import HeroSlider from '../components/ui/HeroSlider.vue'
import MarqueeStrip from '../components/ui/MarqueeStrip.vue'
import DepartmentStrip from '../components/ui/DepartmentStrip.vue'
import GalleryGrid from '../components/gallery/GalleryGrid.vue'
import newsData from '../data/news'
import { events } from '../data/events'
import { partners } from '../data/sponsors'

const marqueeText = 'Salam Satu Teknologi Pioneer Teknologi!'

// Mobile: logo berwarna saat di-tap; desktop: warna via :hover.
const activePartner = ref(null)
const togglePartner = (i) => {
  activePartner.value = activePartner.value === i ? null : i
}
</script>

<template>
  <div class="home-page">
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="hero-card">
        <div class="hero-bg">
          <HeroSlider />
        </div>

        <div class="hero-content">
          <h1 class="hero-title">
            Pengetahuan yang kuat.<br />
            Semangat yang tinggi.
          </h1>
          <p class="hero-sub">
            Himpunan Mahasiswa Teknologi Informasi Telkom University Jakarta.
            Wadah kolaborasi, inovasi, dan pengembangan potensi mahasiswa TI.
          </p>
          <BaseButton to="/open-recruitment" variant="light" class="hero-cta">
            Mulai perjalananmu
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- ===== DEPARTEMEN (di bawah image slider) ===== -->
    <DepartmentStrip />

    <!-- Pembatas looping: departemen → tentang -->
    <MarqueeStrip :text="marqueeText" :duration="28" />

    <div class="container">
      <!-- ===== TENTANG ===== -->
      <section class="section about-section">
        <SectionHeader
          title="Tentang HMIT"
          lead="Himpunan Mahasiswa Teknologi Informasi Telkom University Jakarta."
        />

        <div class="about-grid">
          <GlassCard class="about-card">
            <span class="card-badge">Sejarah</span>
            <p>
              HMIT didirikan sebagai organisasi kemahasiswaan yang menaungi seluruh mahasiswa Program Studi Teknologi Informasi Telkom University Jakarta.
              Berdiri atas semangat kebersamaan, profesionalisme, dan integritas untuk mendukung insan akademis yang berdaya saing global.
            </p>
          </GlassCard>

          <GlassCard class="about-card">
            <span class="card-badge">Visi</span>
            <p>
              Menjadi himpunan mahasiswa yang solutif, kolaboratif, dan berprestasi unggul dalam pengembangan potensi mahasiswa Teknologi Informasi secara berkelanjutan.
            </p>
          </GlassCard>

          <GlassCard class="about-card">
            <span class="card-badge">Misi</span>
            <ul class="mission-list">
              <li>Membangun iklim akademik dan non-akademik yang kondusif, kreatif, dan inovatif.</li>
              <li>Mempererat tali kekeluargaan antar mahasiswa TI serta kemitraan dengan pihak eksternal.</li>
              <li>Mengembangkan jiwa kepemimpinan, profesionalisme, dan integritas anggota.</li>
            </ul>
          </GlassCard>
        </div>

        <div class="philosophy-section">
          <h3 class="philo-title">Filosofi Logo</h3>
          <div class="philosophy-grid">
            <GlassCard class="phil-card">
              <div class="phil-icon">
                <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="20" cy="20" r="16" />
                </svg>
              </div>
              <h4>Lingkaran</h4>
              <p>Kesatuan dan harmoni, menyatukan mahasiswa TI dari berbagai latar belakang.</p>
            </GlassCard>

            <GlassCard class="phil-card">
              <div class="phil-icon">
                <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="20,4 25,15 37,15 27,22 31,34 20,26 9,34 13,22 3,15 15,15" />
                </svg>
              </div>
              <h4>Bintang</h4>
              <p>Harapan dan cita-cita tinggi seluruh civitas akademika HMIT.</p>
            </GlassCard>

            <GlassCard class="phil-card">
              <div class="phil-icon">
                <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 4L6 10v12c0 9 6 15 14 18 8-3 14-9 14-18V10L20 4z" />
                </svg>
              </div>
              <h4>Tameng</h4>
              <p>Kekuatan pengetahuan, ketahanan, kesatuan, dan keharmonisan.</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>

    <!-- Pembatas looping: tentang → berita -->
    <MarqueeStrip :text="marqueeText" :duration="30" />

    <div class="container">
      <!-- ===== BERITA ===== -->
      <section class="section news-highlight">
        <SectionHeader
          title="Kegiatan & Berita Terbaru"
          lead="Ikuti aktivitas terkini, rilis kegiatan, dan pengumuman resmi HMIT."
        />

        <div class="news-grid">
          <NewsCard v-for="item in newsData.slice(0, 3)" :key="item.slug" :article="item" />
        </div>

        <div class="center-action">
          <BaseButton to="/berita" variant="glass">Lihat semua berita</BaseButton>
        </div>
      </section>
    </div>

    <!-- Pembatas looping: berita → galeri -->
    <MarqueeStrip :text="marqueeText" :duration="24" />

    <div class="container">
      <!-- ===== GALERI ===== -->
      <section class="section gallery-section">
        <SectionHeader
          title="Galeri Kegiatan"
          lead="Dokumentasi kegiatan dan momen berharga HMIT."
        />

        <GalleryGrid :items="events" />

        <div class="center-action">
          <BaseButton to="/kegiatan" variant="glass">Lihat galeri lengkap</BaseButton>
        </div>
      </section>
    </div>

    <!-- Pembatas looping: galeri → sponsor -->
    <MarqueeStrip :text="marqueeText" :duration="26" />

    <div class="container">
      <!-- ===== SPONSOR ===== -->
      <section class="section sponsor-section">
        <SectionHeader
          title="Sponsor & Mitra"
          lead="Terima kasih kepada pihak yang telah mendukung kegiatan HMIT."
        />

        <div class="partner-grid">
          <div
            v-for="(p, i) in partners"
            :key="i"
            class="partner-item"
            :class="{ active: activePartner === i }"
            @click="togglePartner(i)"
          >
            <img v-if="p.logo" :src="p.logo" :alt="p.name" class="partner-logo" />
            <span v-else class="partner-name">{{ p.name }}</span>
          </div>
        </div>

        <div class="center-action">
          <BaseButton to="/kolaborasi" variant="glass">Jadi sponsor</BaseButton>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: min(1520px, 100% - 32px);
  margin: 0 auto;
}

/* ===== HERO ===== */
.hero {
  width: min(1520px, 100% - 32px);
  margin: var(--space-3) auto 0;
  padding: 0;
}

.hero-card {
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  min-height: clamp(340px, 46vw, 540px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-card);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(10, 26, 51, 0.18) 0%, rgba(10, 26, 51, 0.28) 55%, rgba(10, 26, 51, 0.45) 100%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: min(760px, 100% - 48px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-10) 0;
  color: var(--color-white);
}

.hero-title {
  color: var(--color-white);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.15;
  margin: 0;
  text-shadow: 0 2px 24px rgba(10, 26, 51, 0.35);
}

.hero-sub {
  color: rgba(255, 255, 255, 0.92);
  max-width: 56ch;
  margin: 0;
  font-size: clamp(0.9rem, 1.3vw, 1.02rem);
  text-shadow: 0 1px 12px rgba(10, 26, 51, 0.4);
}

.hero-cta {
  margin-top: var(--space-2);
}

/* ===== SECTIONS ===== */
.section {
  margin-top: var(--space-12);
}

.about-section {
  margin-top: var(--space-10);
  margin-bottom: var(--space-12);
}

.news-highlight,
.gallery-section,
.sponsor-section {
  margin-bottom: var(--space-12);
}

/* ===== TENTANG ===== */
.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  align-items: stretch;
}

.about-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-badge {
  align-self: flex-start;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--blue-600);
  background: var(--blue-100);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-3);
}

.about-card p {
  color: var(--ink-soft);
  margin: 0;
  line-height: 1.65;
  font-size: 0.92rem;
}

.mission-list {
  padding-left: 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--ink-soft);
  font-size: 0.92rem;
}

.mission-list li {
  line-height: 1.5;
}

/* Filosofi */
.philosophy-section {
  margin-top: var(--space-10);
}

.philo-title {
  font-size: 1.1rem;
  color: var(--ink);
  margin: 0 0 var(--space-5) 0;
  text-align: center;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  align-items: stretch;
}

.phil-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.phil-icon {
  color: var(--blue-600);
  margin-bottom: var(--space-3);
}

.phil-card h4 {
  margin: 0 0 var(--space-2) 0;
  color: var(--ink);
  font-size: 1rem;
}

.phil-card p {
  color: var(--ink-soft);
  font-size: 0.88rem;
  margin: 0;
  line-height: 1.55;
}

/* ===== NEWS ===== */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

.center-action {
  margin-top: var(--space-6);
  text-align: center;
}

/* ===== SPONSOR ===== */
.partner-grid {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: var(--space-3);
}

.partner-item {
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  padding: var(--space-2) var(--space-3);
}

.partner-logo {
  max-width: 100%;
  max-height: 104px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.6;
  transition: filter 0.25s var(--ease-out), opacity 0.25s var(--ease-out);
}

/* Desktop: warna asli saat hover */
@media (hover: hover) {
  .partner-item:hover .partner-logo {
    filter: grayscale(0);
    opacity: 1;
  }
}

/* Mobile: warna asli saat di-tap */
.partner-item.active .partner-logo {
  filter: grayscale(0);
  opacity: 1;
}

.partner-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink-soft);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .hero {
    width: min(1520px, 100% - 24px);
  }

  .hero-card {
    min-height: clamp(300px, 55vh, 460px);
    border-radius: 8px;
  }

  .about-grid,
  .philosophy-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section {
    margin-top: var(--space-10);
  }
}

@media (max-width: 560px) {
  .container,
  .hero {
    width: min(1520px, 100% - 24px);
  }

  .hero-card {
    min-height: 52vh;
  }

  .hero-content {
    width: min(760px, 100% - 32px);
    gap: var(--space-3);
  }

  .about-grid,
  .philosophy-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }

  .section {
    margin-top: var(--space-8);
  }
}
</style>