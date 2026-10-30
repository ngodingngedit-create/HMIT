<script setup>
defineProps({
  article: { type: Object, required: true }, // { slug, date, category, title, summary }
})
</script>

<template>
  <router-link :to="`/berita/${article.slug}`" class="news-card glass">
    <div class="news-meta">
      <span class="news-date">{{ article.date }}</span>
      <span class="news-category">{{ article.category }}</span>
    </div>
    <h3>{{ article.title }}</h3>
    <p>{{ article.summary }}</p>
    <span class="news-link">Baca selengkapnya</span>
  </router-link>
</template>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-6);
  text-decoration: none;
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.news-meta {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  font-size: 0.8rem;
}

.news-date {
  color: var(--ink-soft);
}

.news-category {
  color: var(--blue-600);
  background: var(--blue-100);
  padding: 2px 10px;
  border-radius: var(--radius-pill);
  font-weight: 600;
}

.news-card h3 {
  color: var(--ink);
  margin: 0;
}

.news-card p {
  color: var(--ink-soft);
  font-size: 0.92rem;
  margin: 0;
}

.news-link {
  margin-top: auto;
  color: var(--blue-600);
  font-weight: 600;
  font-size: 0.88rem;
}
</style>

