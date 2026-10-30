<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '../components/ui/BaseButton.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import newsData from '../data/news'

const route = useRoute()
const article = computed(() => {
  return newsData.find((n) => n.slug === route.params.slug) || newsData[0]
})
</script>

<template>
  <div class="page news-detail-page">
    <BaseButton to="/berita" variant="glass" class="back-btn">← Kembali ke berita</BaseButton>

    <article v-if="article" class="detail-article">
      <GlassCard class="article-card">
        <div class="article-meta">
          <span class="category">{{ article.category }}</span>
          <span class="date">{{ article.date }}</span>
          <span class="author">Oleh {{ article.author }}</span>
        </div>

        <h1 class="article-title">{{ article.title }}</h1>

        <div class="article-body">
          <p v-for="(p, i) in article.body" :key="i">{{ p }}</p>
        </div>
      </GlassCard>
    </article>
  </div>
</template>

<style scoped>
.page {
  width: min(800px, 100% - 40px);
  margin: var(--space-8) auto 0;
}

.back-btn {
  margin-bottom: var(--space-6);
}

.article-card {
  padding: var(--space-8);
}

.article-meta {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 0.85rem;
  color: var(--ink-soft);
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
}

.category {
  background: var(--blue-100);
  color: var(--blue-600);
  padding: 2px 10px;
  border-radius: var(--radius-pill);
  font-weight: 600;
}

.article-title {
  font-size: 2.2rem;
  color: var(--ink);
  margin-bottom: var(--space-6);
}

.article-body p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--ink);
  margin-bottom: var(--space-4);
  max-width: 100%;
}
</style>


