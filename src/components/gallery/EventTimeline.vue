<script setup>
defineProps({
  events: { type: Array, required: true },
})
</script>

<template>
  <ol class="event-timeline">
    <li v-for="(event, i) in events" :key="i" class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-content glass">
        <p class="timeline-date">{{ event.date }}</p>
        <h3 class="timeline-name">{{ event.name }}</h3>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.event-timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 32px;
  position: relative;
}

.event-timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  /* design.md 10.5: garis vertikal bergradasi */
  background: var(--grad-brand);
  opacity: 0.35;
}

.timeline-item {
  position: relative;
  padding-bottom: var(--space-6);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--blue-600);
}

.timeline-content {
  padding: var(--space-4) var(--space-6);
}

.timeline-date {
  color: var(--crimson-600);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-name {
  color: var(--ink);
  font-size: 1.05rem;
  margin: 0;
}
</style>

