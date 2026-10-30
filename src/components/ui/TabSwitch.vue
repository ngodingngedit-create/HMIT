<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="tab-switch glass" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab"
      role="tab"
      :aria-selected="modelValue === tab"
      class="tab-btn"
      :class="{ active: modelValue === tab }"
      @click="$emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style scoped>
.tab-switch {
  display: inline-flex;
  padding: 4px;
  border-radius: var(--radius-pill);
  gap: 4px;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tab-btn {
  flex: 0 0 auto;
  padding: 8px 20px;
  border-radius: var(--radius-pill);
  border: none;
  background: transparent;
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
}

.tab-btn:hover {
  color: var(--ink);
}

.tab-btn.active {
  background: var(--blue-600);
  color: var(--color-white);
  box-shadow: 0 4px 12px rgba(3, 75, 147, 0.2);
}
</style>

