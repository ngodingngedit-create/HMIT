<script setup>
const departments = [
  { name: 'Departemen Kominfo', icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' },
  { name: 'Departemen Kreatif', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { name: 'Departemen Komunikasi', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { name: 'Departemen Kewirausahaan', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { name: 'Departemen Akademik', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z' },
  { name: 'Departemen Minat & Bakat', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
  { name: 'Departemen Kaderisasi', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { name: 'Departemen Advokesma', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
]
</script>

<template>
  <section class="department-strip" aria-label="Departemen Kabinet HMIT">
 

    <!-- Loop tak berujung: dua grup identik agar gulir mulus tanpa jeda -->
    <div class="dept-marquee">
      <div class="dept-track">
        <div v-for="g in 2" :key="g" class="dept-group" :aria-hidden="g === 2 ? 'true' : undefined">
          <div v-for="dept in departments" :key="`${g}-${dept.name}`" class="dept-item">
            <div class="dept-logo">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="dept.icon" />
              </svg>
            </div>
            <span class="dept-name">{{ dept.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.department-strip {
  padding: var(--space-8) 0;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}

.strip-container {
  width: min(1520px, 100% - 32px);
  margin: 0 auto;
  text-align: center;
}

.strip-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink-soft);
  margin: 0 0 var(--space-6) 0;
  letter-spacing: 0.01em;
  text-align: center;
}

.dept-marquee {
  width: 100%;
  overflow: hidden;
}

.dept-track {
  display: flex;
  width: max-content;
  animation: dept-scroll 34s linear infinite;
}

.dept-group {
  display: flex;
  align-items: center;
}

/* Berhenti saat kursor di atasnya agar mudah dibaca */
.dept-marquee:hover .dept-track {
  animation-play-state: paused;
}

.dept-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px 32px;
  border-radius: var(--radius-sm);
  transition: all 0.2s var(--ease-out);
  flex-shrink: 0;
}

.dept-item:hover {
  background: var(--blue-100);
}

.dept-logo {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(3, 75, 147, 0.08);
  color: var(--blue-600);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;
}

.dept-item:hover .dept-logo {
  transform: translateY(-2px);
  background: var(--blue-600);
  color: #ffffff;
}

.dept-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
}

@keyframes dept-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Hormati preferensi pengurangan gerak */
@media (prefers-reduced-motion: reduce) {
  .dept-track {
    animation: none;
  }
}
</style>
