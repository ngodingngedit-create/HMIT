<script setup>
defineProps({
  program: { type: Object, required: true }, // { division, title, description }
})
</script>

<template>
  <article class="proker-card glass">
    <span class="division">{{ program.division }}</span>
    <h3>{{ program.title }}</h3>
    <p>{{ program.description }}</p>
  </article>
</template>

<style scoped>
.proker-card {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.division {
  align-self: flex-start;
  background: var(--blue-100);
  color: var(--blue-600);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
}

.proker-card h3 {
  color: var(--ink);
  margin: 0;
}

.proker-card p {
  color: var(--ink-soft);
  font-size: 0.95rem;
  margin: 0;
}
</style>

