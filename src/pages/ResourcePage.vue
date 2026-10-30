<script setup>
import { ref, computed } from 'vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import resources from '../data/resources'

const query = ref('')
const filtered = computed(() => {
  if (!query.value.trim()) return resources
  const q = query.value.toLowerCase()
  return resources.filter(
    (r) => r.title.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)
  )
})
</script>

<template>
  <div class="page resource-page">
    <SectionHeader
      title="Layanan & Resource"
      lead="Arsip dokumen, template surat, dan materi belajar mahasiswa Teknologi Informasi."
    />

    <div class="search-bar">
      <input
        v-model="query"
        type="search"
        placeholder="Cari dokumen, template, atau materi..."
        aria-label="Cari resource"
      />
    </div>

    <div class="resource-grid">
      <GlassCard v-for="(item, i) in filtered" :key="i" class="resource-card">
        <span class="category">{{ item.category }}</span>
        <h3>{{ item.title }}</h3>
        <p class="note">{{ item.note }}</p>
        <a :href="item.url" target="_blank" rel="noopener" class="res-link">Buka resource →</a>
      </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.search-bar {
  margin-bottom: var(--space-8);
}

.search-bar input {
  width: 100%;
  padding: 14px 20px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  font-size: 1rem;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.resource-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.category {
  background: var(--blue-100);
  color: var(--blue-600);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: var(--radius-pill);
  align-self: flex-start;
}

.resource-card h3 {
  color: var(--ink);
  margin: 0;
}

.note {
  color: var(--ink-soft);
  font-size: 0.85rem;
  margin: 0;
}

.res-link {
  margin-top: auto;
  color: var(--blue-600);
  font-weight: 600;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .resource-grid {
    grid-template-columns: 1fr;
  }
}
</style>


