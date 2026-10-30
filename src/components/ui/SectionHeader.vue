<script setup>
defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<template>
  <div class="section-header">
    <h2>{{ title }}</h2>
    <p v-if="lead" class="lead">{{ lead }}</p>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: var(--space-8);
  text-align: center;
}

.section-header h2 {
  color: var(--ink);
}

.section-header .lead {
  color: var(--ink-soft);
  margin-bottom: 0;
  max-width: 68ch;
  margin-left: auto;
  margin-right: auto;
}
</style>
