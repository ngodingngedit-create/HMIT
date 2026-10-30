<script setup>
import SectionHeader from '../components/ui/SectionHeader.vue'
import NewsCard from '../components/news/NewsCard.vue'
import newsData from '../data/news'
</script>

<template>
  <div class="page news-page">
    <SectionHeader
      title="Berita & Pengumuman"
      lead="Kabar terbaru, pengumuman resmi, dan rilis kegiatan HMIT."
    />

    <div class="news-grid">
      <NewsCard v-for="item in newsData" :key="item.slug" :article="item" />
    </div>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>


