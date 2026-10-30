// [REAL DATA] Ganti semua nama, jabatan, dan foto dengan data pengurus asli.
export const period = 'Periode [REAL DATA]' // contoh: "Periode 2026/2027"

// Badan Pengurus Harian (BPH)
export const leaders = [
  { name: '[Nama Presiden]', role: 'Presiden', photo: null },
  { name: '[Nama Wakil]', role: 'Wakil Presiden', photo: null },
  { name: '[Nama Sekretaris]', role: 'Sekretaris', photo: null },
  { name: '[Nama Bendahara]', role: 'Bendahara', photo: null },
  { name: '[Nama Menteri Eksternal]', role: 'Menteri Eksternal', photo: null },
  { name: '[Nama Menteri Internal]', role: 'Menteri Internal', photo: null },
]

// Departemen yang ada saat ini + anggotanya (7 orang per departemen)
const member = (role) => ({ name: '[Nama]', role, photo: null })
const members = () => [member('Kepala Departemen'), ...Array.from({ length: 6 }, () => member('Anggota'))]

export const departments = [
  { name: 'Departemen Kominfo', members: members() },
  { name: 'Departemen Kreatif', members: members() },
  { name: 'Departemen Komunikasi', members: members() },
  { name: 'Departemen Kewirausahaan', members: members() },
  { name: 'Departemen Akademik', members: members() },
  { name: 'Departemen Minat & Bakat', members: members() },
  { name: 'Departemen Kaderisasi', members: members() },
  { name: 'Departemen Advokesma', members: members() },
]