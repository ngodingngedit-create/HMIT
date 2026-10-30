// [REAL DATA] Ganti dengan daftar partner dan paket sponsorship asli.
export const partners = [
  { name: 'Telkom', logo: '/sponsor/telkom.webp' },
  { name: 'Mandiri', logo: '/sponsor/mandiri.webp' },
  { name: 'DANA', logo: '/sponsor/dana.webp' },
  { name: 'BNI', logo: '/sponsor/bni.webp' },
  { name: 'BCA', logo: '/sponsor/bca.webp' },
]

export const tiers = [
  {
    name: 'Silver',
    price: 'Rp [REAL DATA]',
    popular: false,
    benefits: ['Logo di banner kegiatan', 'Sebut nama di MC', 'Sertifikat apresiasi'],
  },
  {
    name: 'Gold',
    price: 'Rp [REAL DATA]',
    popular: true, // Diberi penekanan sesuai design.md bagian 10.10
    benefits: ['Semua benefit Silver', 'Stand promosi di acara', 'Unggahan khusus Instagram HMIT', 'Logo ukuran sedang di website'],
  },
  {
    name: 'Platinum',
    price: 'Rp [REAL DATA]',
    popular: false,
    benefits: ['Semua benefit Gold', 'Hak penamaan kegiatan (Co-branding)', 'Presentasi produk 15 menit', 'Logo ukuran besar di website & backdrop'],
  },
]
