<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // 'primary', 'glass', 'crimson', 'light'
  to: { type: String, default: '' },
  href: { type: String, default: '' },
})
</script>

<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to || undefined"
    :href="href || undefined"
    class="base-button"
    :class="`btn-${variant}`"
  >
    <slot />
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  /* emil-design-eng: tombol responsif terhadap tekan */
  transition: transform 160ms var(--ease-out), background-color 200ms var(--ease-out), box-shadow 200ms var(--ease-out);
}

.base-button:active {
  transform: scale(0.97);
}

/* design.md bagian 8: varian tombol */
.btn-primary {
  background: var(--blue-600);
  color: var(--color-white);
  box-shadow: var(--shadow-cta);
}

.btn-primary:hover {
  background: #023870;
  text-decoration: none;
}

.btn-glass {
  background: rgba(255, 255, 255, 0.75);
  color: var(--ink);
  border-color: var(--line);
  backdrop-filter: blur(12px);
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.95);
  text-decoration: none;
}

.btn-crimson {
  background: var(--crimson-600);
  color: var(--color-white);
}

.btn-crimson:hover {
  background: #a30023;
  text-decoration: none;
}

.btn-light {
  background: var(--color-white);
  color: var(--blue-600);
}

.btn-light:hover {
  background: var(--blue-100);
  text-decoration: none;
}
</style>

