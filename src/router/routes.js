const pages = import.meta.glob('../pages/*.vue')

// design.md bagian 9.4: rute, judul tab, satu file per halaman, lazy load.
const meta = {
  home: { path: '/', title: 'Beranda' },
  organization: { path: '/struktur', title: 'Struktur organisasi' },
  program: { path: '/program-kerja', title: 'Program kerja' },
  gallery: { path: '/kegiatan', title: 'Kegiatan dan galeri' },
  news: { path: '/berita', title: 'Berita' },
  newsDetail: { path: '/berita/:slug', title: 'Detail berita' },
  achievement: { path: '/prestasi', title: 'Prestasi' },
  recruitment: { path: '/open-recruitment', title: 'Open recruitment' },
  resource: { path: '/layanan', title: 'Layanan dan resource' },
  sponsor: { path: '/kolaborasi', title: 'Sponsor dan kolaborasi' },
  contact: { path: '/kontak', title: 'Kontak' },
  notFound: { path: '/:pathMatch(.*)*', title: 'Halaman tidak ditemukan' },
}

export default Object.entries(meta).map(([name, m]) => {
  const key = `../pages/${name.replace(/^./, (c) => c.toUpperCase())}Page.vue`
  if (!pages[key]) throw new Error(`Halaman tidak ditemukan: ${key}`)
  return {
    path: m.path,
    name,
    component: pages[key],
    meta: { title: m.title },
  }
})
