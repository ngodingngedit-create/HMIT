<script setup>
import { ref } from 'vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import TabSwitch from '../components/ui/TabSwitch.vue'
import ProkerCard from '../components/program/ProkerCard.vue'
import { tabs, programs } from '../data/programs'

const currentTab = ref(tabs[0])
</script>

<template>
  <div class="page program-page">
    <SectionHeader
      title="Program Kerja"
      lead="Inisiatif dan kegiatan rutin pengurus HMIT Telkom University Jakarta."
    />

    <div class="tab-wrapper">
      <TabSwitch :tabs="tabs" v-model="currentTab" />
    </div>

    <div class="program-grid">
      <ProkerCard
        v-for="(p, i) in programs[currentTab]"
        :key="i"
        :program="p"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  width: min(1520px, 100% - 32px);
  margin: var(--space-8) auto 0;
}

.tab-wrapper {
  margin-bottom: var(--space-8);
  display: flex;
  justify-content: flex-start;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 900px) {
  .program-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .program-grid {
    grid-template-columns: 1fr;
  }
}
</style>


