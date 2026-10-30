// [REAL DATA] Ganti dengan foto dan tanggal kegiatan asli. null = placeholder inisial.
const photos = ['/home/home.webp', '/home/home2.webp', '/home/home3.webp']

export const events = Array.from({ length: 6 }, (_, i) => ({
  date: '[Tanggal]',
  title: '[Nama kegiatan]',
  photo: photos[i % photos.length],
  type: 'foto',
}))

export const timeline = [
  { date: '[Tanggal]', name: '[Nama acara]' },
  { date: '[Tanggal]', name: '[Nama acara]' },
  { date: '[Tanggal]', name: '[Nama acara]' },
  { date: '[Tanggal]', name: '[Nama acara]' },
]