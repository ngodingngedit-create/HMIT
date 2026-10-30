<script setup>
import SectionHeader from '../components/ui/SectionHeader.vue'
import GalleryGrid from '../components/gallery/GalleryGrid.vue'
import EventTimeline from '../components/gallery/EventTimeline.vue'
import { events, timeline } from '../data/events'
</script>

<template>
  <div class="page gallery-page">
    <SectionHeader
      title="Kegiatan & Galeri"
      lead="Dokumentasi aktivitas dan linimasa acara HMIT Telkom University Jakarta."
    />

    <section class="gallery-section">
      <h2 class="sub-title">Galeri Foto & Video</h2>
      <GalleryGrid :items="events" />
    </section>

    <section class="timeline-section">
      <SectionHeader title="Linimasa Acara" lead="Daftar tanggal penting dan agenda mendatang." />
      <EventTimeline :events="timeline" />
    </section>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.gallery-section {
  margin-bottom: var(--space-21);
}

.sub-title {
  font-size: 1.4rem;
  color: var(--blue-600);
  margin-bottom: var(--space-6);
}

.timeline-section {
  margin-top: var(--space-21);
}
</style>


