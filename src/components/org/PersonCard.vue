<script setup>
defineProps({
  person: { type: Object, required: true }, // { name, role, photo }
  size: { type: String, default: 'small' }, // 'small', 'large'
})

const initial = (name) => {
  if (!name || name.startsWith('[')) return 'H'
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>

<template>
  <div class="person-card glass-card glass" :class="`size-${size}`">
    <div class="avatar">
      <img v-if="person.photo" :src="person.photo" :alt="`Foto ${person.name}`" class="avatar-img" />
      <span v-else class="avatar-initial">{{ initial(person.name) }}</span>
    </div>
    <h3 class="person-name">{{ person.name }}</h3>
    <p class="person-role">{{ person.role }}</p>
  </div>
</template>

<style scoped>
.person-card {
  text-align: center;
  padding: var(--space-6) var(--space-4);
}

.size-large .avatar {
  width: 120px;
  height: 120px;
}

.size-small .avatar {
  width: 84px;
  height: 84px;
}

.avatar {
  margin: 0 auto var(--space-4);
  border-radius: 50%;
  overflow: hidden;
  /* design.md 10.3: inisial di atas gradasi biru/merah */
  background: var(--grad-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-initial {
  font-weight: 700;
  font-size: 2rem;
}

.person-name {
  margin-bottom: 4px;
  font-size: 1.05rem;
}

.person-role {
  color: var(--ink-soft);
  font-size: 0.85rem;
  margin: 0;
}
</style>

