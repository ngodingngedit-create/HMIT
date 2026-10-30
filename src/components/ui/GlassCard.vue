<script setup>
defineProps({
  variant: { type: String, default: 'default' }, // 'default', 'tint', 'sm'
  as: { type: String, default: 'div' },
})
</script>

<template>
  <component
    :is="as"
    class="glass-card glass"
    :class="{
      'glass-tint': variant === 'tint',
      'glass-sm': variant === 'sm',
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
.glass-card {
  padding: var(--space-6);
  transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
}
</style>

