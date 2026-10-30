<script setup>
defineProps({
  tier: { type: Object, required: true }, // { name, price, popular, benefits }
})
</script>

<template>
  <div class="tier-card glass" :class="{ featured: tier.popular }">
    <span v-if="tier.popular" class="tier-badge">Paling Populer</span>
    <h3>{{ tier.name }}</h3>
    <p class="tier-price">{{ tier.price }}</p>
    <ul class="tier-benefits">
      <li v-for="(b, i) in tier.benefits" :key="i">{{ b }}</li>
    </ul>
  </div>
</template>

<style scoped>
.tier-card {
  position: relative;
  padding: var(--space-8) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
}

.tier-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--blue-600);
  color: var(--color-white);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

/* design.md 10.10: paket tengah diberi penekanan */
.tier-card.featured {
  border: 2px solid var(--blue-600);
  box-shadow: 0 14px 48px rgba(3, 75, 147, 0.18);
  transform: translateY(-8px);
}

.tier-card h3 {
  color: var(--blue-600);
  margin: 0;
}

.tier-price {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
}

.tier-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  color: var(--ink-soft);
  font-size: 0.92rem;
}

.tier-benefits li::before {
  content: '✓';
  color: var(--crimson-600);
  margin-right: 8px;
  font-weight: 700;
}
</style>

