<script setup>
import navData from '../../data/navigation'
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <router-link to="/" class="brand-link">
          <img :src="navData.logo" alt="Logo HMIT" class="footer-logo" width="40" height="40" />
          <span class="brand-title">Himpunan Mahasiswa Teknologi Informasi</span>
        </router-link>
      
        <ul class="footer-social">
          <li v-for="s in navData.social" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <p class="footer-copy">© 2026 HMIT Telkom University Jakarta. Seluruh hak cipta dilindungi.</p>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: var(--space-16);
  padding: var(--space-10) var(--space-6) var(--space-5);
  background: var(--bg);
}

.footer-container {
  width: min(1520px, 100% - 32px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-bottom: 10px;
}

.footer-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.brand-title {
  font-weight: 700;
  color: var(--blue-600);
}

.brand-desc {
  color: var(--ink-soft);
  font-size: 0.88rem;
  margin: 0 0 var(--space-4) 0;
  max-width: 100%;
}

.footer-social {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: var(--space-5);
  flex-wrap: wrap;
  justify-content: center;
}

.footer-social a {
  color: var(--ink-soft);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-social a:hover {
  color: var(--blue-600);
}

.footer-copy {
  text-align: center;
  color: var(--ink-soft);
  font-size: 0.8rem;
  margin: var(--space-6) auto 0;
}
</style>
