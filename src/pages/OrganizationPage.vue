<script setup>
import SectionHeader from '../components/ui/SectionHeader.vue'
import PersonCard from '../components/org/PersonCard.vue'
import { period, leaders, departments } from '../data/organization'
</script>

<template>
  <div class="page organization-page">
    <SectionHeader
      title="Struktur Organisasi"
      :lead="`Pengurus HMIT Telkom University Jakarta (${period}).`"
    />

    <!-- Baris Badan Pengurus Harian (PersonCard ukuran besar) -->
    <section class="org-section">
      <h2 class="org-subtitle">Badan Pengurus Harian</h2>
      <div class="leaders-grid">
        <PersonCard
          v-for="(p, i) in leaders"
          :key="i"
          :person="p"
          size="large"
        />
      </div>
    </section>

    <!-- Departemen: accordion struktur per departemen -->
    <section class="org-section">
      <h2 class="org-subtitle">Departemen</h2>
      <div class="dept-list">
        <details v-for="(dept, i) in departments" :key="i" class="dept-item">
          <summary class="dept-summary">
            <span class="dept-name">{{ dept.name }}</span>
            <span class="dept-count">{{ dept.members.length }} anggota</span>
            <svg class="dept-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div class="dept-members">
            <PersonCard
              v-for="(p, j) in dept.members"
              :key="j"
              :person="p"
              size="small"
            />
          </div>
        </details>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.org-section {
  margin-bottom: var(--space-21);
}

.org-subtitle {
  font-size: 1.4rem;
  color: var(--blue-600);
  margin-bottom: var(--space-6);
  border-bottom: 2px solid var(--line);
  padding-bottom: 8px;
}

.leaders-grid {
  display: flex;
  gap: var(--space-6);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: var(--space-2);
}

.leaders-grid > * {
  flex: 0 0 260px;
  scroll-snap-align: start;
}

/* ===== DEPARTEMEN (accordion) ===== */
.dept-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.dept-item {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  overflow: hidden;
}

.dept-summary {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  cursor: pointer;
  list-style: none;
  font-weight: 600;
  color: var(--ink);
}

.dept-summary::-webkit-details-marker {
  display: none;
}

.dept-name {
  flex: 1;
  font-size: 1.05rem;
}

.dept-count {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-soft);
}

.dept-chevron {
  color: var(--blue-600);
  transition: transform 0.25s var(--ease-out);
}

.dept-item[open] .dept-chevron {
  transform: rotate(180deg);
}

.dept-item[open] .dept-summary {
  border-bottom: 1px solid var(--line);
}

.dept-members {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6) var(--space-5);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.dept-members > * {
  flex: 0 0 220px;
  scroll-snap-align: start;
}

@media (max-width: 560px) {
  .dept-members > * {
    flex-basis: 180px;
  }

  .leaders-grid > * {
    flex-basis: 200px;
  }
}
</style>


