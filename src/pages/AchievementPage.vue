<script setup>
import { ref, computed } from 'vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import achievements from '../data/achievements'

const selectedYear = ref('Semua')
const years = computed(() => {
  const set = new Set(achievements.map((a) => a.year))
  return ['Semua', ...Array.from(set)]
})

const filtered = computed(() => {
  if (selectedYear.value === 'Semua') return achievements
  return achievements.filter((a) => a.year === selectedYear.value)
})
</script>

<template>
  <div class="page achievement-page">
    <SectionHeader
      title="Prestasi HMIT"
      lead="Capaian dan penghargaan mahasiswa Teknologi Informasi Telkom University Jakarta."
    />

    <div class="filter-bar">
      <button
        v-for="y in years"
        :key="y"
        class="filter-chip"
        :class="{ active: selectedYear === y }"
        @click="selectedYear = y"
      >
        {{ y }}
      </button>
    </div>

    <div class="achievement-grid">
      <GlassCard v-for="(item, i) in filtered" :key="i" class="achieve-card">
        <span class="placement">{{ item.placement }}</span>
        <h3>{{ item.title }}</h3>
        <p class="team">{{ item.team }}</p>
        <span class="year">{{ item.year }}</span>
      </GlassCard>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.filter-bar {
  display: flex;
  gap: 8px;
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.filter-chip {
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-chip.active,
.filter-chip:hover {
  background: var(--blue-600);
  color: var(--color-white);
  border-color: var(--blue-600);
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.achieve-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.placement {
  color: var(--crimson-600);
  font-weight: 700;
  font-size: 0.9rem;
}

.achieve-card h3 {
  color: var(--ink);
  margin: 0;
}

.team {
  color: var(--ink-soft);
  font-size: 0.9rem;
  margin: 0;
}

.year {
  margin-top: auto;
  color: var(--blue-600);
  font-weight: 600;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .achievement-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .achievement-grid {
    grid-template-columns: 1fr;
  }
}
</style>


