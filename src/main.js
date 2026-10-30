import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'
import './assets/styles/tokens.css'
import './assets/styles/base.css'
import './assets/styles/glass.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'HMIT'
  const title = to.meta?.title
  document.title = title ? `${title} | ${base}` : 'HMIT Telkom University Jakarta'
})

createApp(App).use(router).mount('#app')
