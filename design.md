# design.md: Website HMIT Telkom University Jakarta

Dokumen acuan desain UI/UX dan arsitektur Vue.js untuk website Himpunan Mahasiswa Teknologi Informasi (HMIT) Telkom University Jakarta. Semua aturan visual berasal dari *brand guideline* HMIT. Bagian yang berupa keputusan desain tambahan ditandai **(keputusan)** agar mudah dibedakan.

---

## 1. Ringkasan

| Item | Keputusan |
|---|---|
| Subjek | Website organisasi kemahasiswaan HMIT Telkom University Jakarta |
| Audiens | Mahasiswa Teknologi Informasi, calon anggota, sponsor, dan mitra |
| Tugas utama | Memperkenalkan HMIT, menampilkan kegiatan, dan mengajak mahasiswa bergabung (*open recruitment*) |
| Gaya | Modern, simpel, sederhana, *glassmorphism* |
| Referensi | marklab-template.webflow.io, apple.com, strip logo partner |
| Latar utama | **Putih (#FFFFFF)** |
| Teknologi | Vue 3 + Vite + Vue Router, satu file per halaman |
| Bahasa | Indonesia |
| Mode warna | Hanya mode terang **(keputusan)**. Tidak ada mode gelap, agar latar tetap putih |

---

## 2. Prinsip desain

1. **Putih sebagai fondasi.** Latar halaman selalu #FFFFFF. Biru dan merah dipakai sebagai warna aksen dan identitas, bukan latar utama.
2. **Kaca di atas putih.** Panel kaca harus tetap terbaca di latar putih, jadi memakai tint biru tipis, garis tepi lembut, dan bayangan biru halus (lihat bagian 6).
3. **Satu momen yang diingat.** Hero dengan judul bergradasi biru ke merah dan logo HMIT besar. Bagian lain dibuat tenang dan disiplin.
4. **Ruang kosong lapang** seperti apple.com: judul besar, baris pendek, jarak antarbagian longgar.
5. **Struktur punya arti.** Penomoran hanya untuk urutan nyata (timeline). Tidak ada label huruf kapital di atas judul, tidak ada hiasan tanpa fungsi.
6. **Gerak seperlunya.** Satu animasi masuk di hero, lainnya hanya sebagai respons terhadap aksi pengguna (klik, buka, ganti tab).
7. **Aksesibel sejak awal.** Kontras cukup, fokus keyboard terlihat, `prefers-reduced-motion` dihormati, responsif sampai layar HP.

---

## 3. Aturan logo (dari brand guideline)

- Pakai logo utuh: lingkaran, bintang, dan tameng.
- *Clear space* minimal **2X** di keempat sisi (X = tinggi satu elemen referensi pada logo).
- **Jangan:** mengubah warna, memutar, menambah efek (bayangan, *glow*), menaruh teks di dalam area logo, membalik, atau menghapus elemen logo.
- Logo di navbar: 34 px. Logo di footer: 40 px. Logo di hero: 70 sampai 80% lebar lingkaran panggung.
- Karena *drop shadow* dilarang pada logo, jangan beri bayangan langsung pada gambar logo **(keputusan)**. Bayangan boleh pada panel kaca di belakangnya.
- Aset: `src/assets/logo-hmit.png` (PNG transparan, minimal 480×480).

---

## 4. Token warna

### 4.1 Palet inti (brand guideline)

| Token | Nama | HEX | RGB | CMYK |
|---|---|---|---|---|
| `--color-blue` | Vivid Blue | #034B93 | 3, 75, 147 | 98%, 49%, 0%, 42% |
| `--color-crimson` | Vivid Crimson | #C9002B | 201, 0, 43 | 0%, 100%, 79%, 21% |
| `--color-white` | White | #FFFFFF | 255, 255, 255 | 0%, 0%, 0%, 0% |
| `--color-black` | Black | #000000 | 0, 0, 0 | 0%, 0%, 0%, 100% |

Makna warna (dari guideline): biru = pengetahuan dan profesionalisme, merah = semangat dan keberanian, putih = ketulusan dan keterbukaan, hitam = keteguhan dan integritas.

### 4.2 Token turunan **(keputusan)**

| Token | HEX / nilai | Fungsi |
|---|---|---|
| `--bg` | #FFFFFF | Latar halaman (primer) |
| `--bg-tint` | #F3F8FE | Latar seksi selang-seling, sangat tipis |
| `--ink` | #0A1A33 | Teks utama |
| `--ink-soft` | #4A5A72 | Teks pendukung (kontras ≥ 4.5:1 di atas putih) |
| `--blue-600` | #034B93 | Tombol utama, tautan, judul aksen |
| `--blue-100` | #E3F2FF | Latar lembut, chip, thumbnail |
| `--crimson-600` | #C9002B | Aksen, tombol sekunder penting, penanda |
| `--line` | rgba(3, 75, 147, .14) | Garis tepi panel dan pemisah |

Hitam murni (#000000) hanya untuk teks judul bila dibutuhkan kontras maksimum. Teks isi memakai `--ink`.

### 4.3 Rasio warna

Guideline menyebut rasio **40, 30, 20, 10** tanpa memetakan ke warna. Pemetaan untuk website ini **(keputusan)**:

| Porsi | Warna | Wujud di website |
|---|---|---|
| 40% | Putih | Latar halaman dan ruang kosong |
| 30% | Biru | Tombol, judul aksen, ikon, panel *recruitment* |
| 20% | Merah | Aksen, penanda, gradasi, tombol penting |
| 10% | Hitam | Teks |

### 4.4 Gradasi

| Token | Nilai | Dipakai di |
|---|---|---|
| `--grad-brand` | `linear-gradient(100deg, #034B93 10%, #6A2D6E 55%, #C9002B 95%)` | Judul hero, penutup panel, garis timeline |

Gradasi ini meniru gaya kata "GUIDELINE" di cover guideline. Gunakan pada **seluruh baris judul**, bukan satu kata saja.

### 4.5 Palet Instagram (khusus konten media sosial)

#042E7B, #004EE0, #1883FF, #99CAFF, #E3F2FF. Palet ini milik template Instagram dan **tidak dipakai** di website, kecuali #E3F2FF yang sama dengan `--blue-100`.

---

## 5. Tipografi

Satu keluarga: **Poppins** (Google Fonts, bobot 300, 400, 600, 700). Fallback: `system-ui, sans-serif`.

| Peran | Bobot | Ukuran (desktop / HP) | Line-height | Letter-spacing |
|---|---|---|---|---|
| Heading 1 (hero) | 700 | `clamp(2.5rem, 6.2vw, 4.8rem)` | 1.1 | -0.02em |
| Heading 2 (judul seksi) | 700 | `clamp(2rem, 4.6vw, 3.2rem)` | 1.1 | -0.02em |
| Heading 3 (judul kartu) | 600 | 1.15rem | 1.3 | -0.01em |
| Subtitle / lead | 400 | 1.05 sampai 1.12rem | 1.7 | 0 |
| Body | 300 | 1rem | 1.7 | 0 |
| Caption / meta | 300 | 0.82 sampai 0.88rem | 1.5 | 0 |

Aturan:
- Panjang baris maksimal 80 karakter (`max-width: 56ch` untuk paragraf lead).
- Teks pendek di tombol memakai bobot 600.
- Hindari teks huruf kapital semua untuk label. Gunakan *sentence case*.
- Teks tipis (300) tidak dipakai di bawah 0.85rem agar tetap terbaca.

---

## 6. Glassmorphism di atas latar putih

Panel kaca tidak tampak di latar putih polos, jadi dua hal wajib ada: **bola warna lembut di belakang** dan **tint biru pada panel**.

### 6.1 Latar

- `body` berlatar `--bg` (#FFFFFF).
- Tiga bola warna blur (`position: fixed; z-index: -1; pointer-events: none`) dengan opasitas rendah:

| Bola | Warna | Opasitas | Blur |
|---|---|---|---|
| Kiri atas | #034B93 | 0.18 | 90px |
| Kanan tengah | #C9002B | 0.12 | 90px |
| Bawah | #1883FF | 0.14 | 90px |

Opasitas sengaja rendah agar halaman tetap terlihat putih.

### 6.2 Panel kaca (`.glass`)

```css
.glass {
  background: rgba(255, 255, 255, 0.62);
  -webkit-backdrop-filter: blur(22px) saturate(170%);
  backdrop-filter: blur(22px) saturate(170%);
  border: 1px solid rgba(3, 75, 147, 0.14);
  border-radius: 28px;
  box-shadow: 0 10px 40px rgba(3, 75, 147, 0.10),
              inset 0 1px 0 rgba(255, 255, 255, 0.9);
}
```

### 6.3 Radius dan bayangan

| Token | Nilai | Dipakai di |
|---|---|---|
| `--radius-lg` | 28px | Panel besar, hero, banner |
| `--radius-md` | 20px | Kartu, tile galeri |
| `--radius-sm` | 14px | Input, chip |
| `--radius-pill` | 999px | Tombol, navbar, tab |
| `--shadow-card` | `0 10px 40px rgba(3,75,147,.10)` | Kartu kaca |
| `--shadow-cta` | `0 8px 24px rgba(3,75,147,.35)` | Tombol utama |

Radius dan bayangan dibedakan menurut hierarki, jangan disamakan di semua elemen.

### 6.4 Fallback

Jika `backdrop-filter` tidak didukung, ganti latar panel menjadi `rgba(255, 255, 255, 0.92)`.

---

## 7. Layout dan spasi

- Lebar konten maksimal **1120px**, `width: min(1120px, 100% - 40px)`, rata tengah.
- Skala spasi (px): 4, 8, 12, 16, 24, 32, 48, 64, 84.
- Jarak antarseksi: 84px (desktop), 64px (HP).
- Grid kartu: 4 kolom (struktur), 3 kolom (kartu umum), 2 kolom (layanan, tentang). Turun menjadi 2 kolom di ≤ 900px dan 1 kolom di ≤ 560px.
- Perataan: judul dan teks **rata kiri**. Hanya teks pendek di dalam kartu orang dan strip sponsor yang rata tengah.

| Breakpoint | Lebar |
|---|---|
| Mobile | ≤ 560px |
| Tablet | ≤ 900px |
| Desktop | > 900px |

Safe area: `padding-top/bottom: env(safe-area-inset-*)`, `viewport-fit=cover`.

---

## 8. Komponen

| Komponen | File | Deskripsi |
|---|---|---|
| `AppNavbar` | `components/layout/AppNavbar.vue` | Kapsul kaca melayang, logo, tautan, tombol *Open Recruitment*, menu hamburger di HP |
| `AppFooter` | `components/layout/AppFooter.vue` | Logo, tautan cepat, sosmed, hak cipta |
| `GlassCard` | `components/ui/GlassCard.vue` | Panel kaca dasar (slot) |
| `BaseButton` | `components/ui/BaseButton.vue` | Varian `primary`, `glass`, `crimson`, `light` |
| `SectionHeader` | `components/ui/SectionHeader.vue` | Judul seksi (H2) + paragraf lead |
| `BackgroundOrbs` | `components/ui/BackgroundOrbs.vue` | Tiga bola warna latar |
| `PersonCard` | `components/org/PersonCard.vue` | Foto atau inisial, nama, jabatan |
| `TabSwitch` | `components/ui/TabSwitch.vue` | Tab kaca dengan `role="tablist"` |
| `ProkerCard` | `components/program/ProkerCard.vue` | Divisi, judul, deskripsi |
| `GalleryGrid` | `components/gallery/GalleryGrid.vue` | Mosaik foto dan video |
| `EventTimeline` | `components/gallery/EventTimeline.vue` | Timeline (penomoran waktu sah di sini) |
| `NewsCard` | `components/news/NewsCard.vue` | Thumbnail, tanggal, judul, ringkasan |
| `TierCard` | `components/sponsor/TierCard.vue` | Paket sponsorship |
| `PartnerStrip` | `components/sponsor/PartnerStrip.vue` | Strip logo partner (referensi gambar "Partners of world leading companies") |
| `ContactForm` | `components/contact/ContactForm.vue` | Formulir kontak dengan validasi |

### Tombol

| Varian | Latar | Teks | Dipakai di |
|---|---|---|---|
| `primary` | #034B93 | Putih | CTA utama |
| `glass` | Kaca putih | `--ink` | Aksi sekunder |
| `crimson` | #C9002B | Putih | Unduh proposal |
| `light` | Putih | #034B93 | Di atas panel biru |

Teks tombol berupa kata kerja yang jelas ("Gabung HMIT", "Kirim pesan"). Tidak memakai panah "→".

---

## 9. Arsitektur Vue.js

### 9.1 Stack

| Alat | Fungsi |
|---|---|
| Vue 3 (Composition API, `<script setup>`) | Framework |
| Vite | *Build tool* dan *dev server* |
| Vue Router 4 | Navigasi antarhalaman |
| CSS biasa + CSS variables | Gaya, token di `tokens.css` |
| @vueuse/core (opsional) | Utilitas (misal `useScroll`) |

Tidak memakai library UI tambahan agar tampilan khas HMIT dan ringan.

### 9.2 Struktur folder

```
hmit-website/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.js
    ├── App.vue
    ├── router/
    │   └── index.js
    ├── assets/
    │   ├── logo-hmit.png
    │   ├── images/
    │   └── styles/
    │       ├── tokens.css        # warna, radius, bayangan, spasi
    │       ├── base.css          # reset, tipografi, fokus
    │       └── glass.css         # kelas .glass dan varian
    ├── data/                     # konten terpisah dari tampilan
    │   ├── navigation.js
    │   ├── organization.js
    │   ├── programs.js
    │   ├── events.js
    │   ├── news.js
    │   ├── achievements.js
    │   ├── resources.js
    │   ├── sponsors.js
    │   └── contact.js
    ├── components/
    │   ├── layout/    (AppNavbar.vue, AppFooter.vue)
    │   ├── ui/        (GlassCard, BaseButton, SectionHeader, TabSwitch, BackgroundOrbs)
    │   ├── org/       (PersonCard.vue)
    │   ├── program/   (ProkerCard.vue)
    │   ├── gallery/   (GalleryGrid.vue, EventTimeline.vue)
    │   ├── news/      (NewsCard.vue)
    │   ├── sponsor/   (TierCard.vue, PartnerStrip.vue)
    │   └── contact/   (ContactForm.vue)
    ├── pages/                    # satu file per halaman
    │   ├── HomePage.vue
    │   ├── AboutPage.vue
    │   ├── OrganizationPage.vue
    │   ├── ProgramPage.vue
    │   ├── GalleryPage.vue
    │   ├── NewsPage.vue
    │   ├── NewsDetailPage.vue
    │   ├── AchievementPage.vue
    │   ├── RecruitmentPage.vue
    │   ├── ResourcePage.vue
    │   ├── SponsorPage.vue
    │   ├── ContactPage.vue
    │   └── NotFoundPage.vue
    └── composables/
        └── useMobileMenu.js
```

### 9.3 Aturan kode

1. **Satu halaman, satu file** di `src/pages/`. Halaman hanya menyusun komponen dan membaca data.
2. **Konten di `src/data/`**, bukan di dalam template. Mengganti nama pengurus atau berita cukup mengedit file data.
3. Komponen kecil, satu tugas. Komponen dipakai ulang lewat *props* dan *slot*.
4. Gaya memakai `<style scoped>`. Warna dan ukuran diambil dari CSS variables, tidak ditulis ulang.
5. Penamaan: komponen `PascalCase.vue`, composable `useXxx.js`, data `camelCase`.
6. Semua gambar punya `alt`. Gambar dekoratif memakai `alt=""`.
7. Halaman dimuat malas (*lazy loading*) lewat router.

### 9.4 Router

| Route | Nama | File | Seksi |
|---|---|---|---|
| `/` | `home` | `HomePage.vue` | Beranda |
| `/tentang` | `about` | `AboutPage.vue` | Tentang kami |
| `/struktur` | `organization` | `OrganizationPage.vue` | Struktur organisasi |
| `/program-kerja` | `program` | `ProgramPage.vue` | Program kerja |
| `/kegiatan` | `gallery` | `GalleryPage.vue` | Kegiatan dan galeri |
| `/berita` | `news` | `NewsPage.vue` | Daftar berita |
| `/berita/:slug` | `news-detail` | `NewsDetailPage.vue` | Detail berita |
| `/prestasi` | `achievement` | `AchievementPage.vue` | Prestasi (opsional) |
| `/open-recruitment` | `recruitment` | `RecruitmentPage.vue` | Open recruitment |
| `/layanan` | `resource` | `ResourcePage.vue` | Layanan dan resource (opsional) |
| `/kolaborasi` | `sponsor` | `SponsorPage.vue` | Sponsor dan kolaborasi |
| `/kontak` | `contact` | `ContactPage.vue` | Kontak |
| `/:pathMatch(.*)*` | `not-found` | `NotFoundPage.vue` | Halaman 404 |

Footer tampil di semua halaman lewat `App.vue`. Setelah pindah route, halaman kembali ke atas (`scrollBehavior`). Judul tab browser mengikuti halaman (misal "Struktur organisasi | HMIT").

---

## 10. Spesifikasi per halaman

### 10.1 Beranda (`HomePage.vue`)
- **Hero:** judul tiga baris bergradasi (*"Pengetahuan yang kuat. Semangat yang tinggi. Kerja sama yang harmonis."*), paragraf tagline, dua tombol (*Gabung HMIT*, *Lihat kegiatan*). Di kanan: lingkaran kaca berisi logo dan kartu melayang "Kegiatan terbaru".
- **Sambutan singkat:** panel kaca dengan foto atau inisial Presiden dan kutipan sambutan.
- **Highlight kegiatan terbaru:** tiga kartu kegiatan dengan tautan ke `/kegiatan`.
- **Ringkasan cepat:** tautan ke Tentang, Open Recruitment, dan Berita.
- **Animasi:** satu urutan muncul di hero saat halaman dibuka.

### 10.2 Tentang kami (`AboutPage.vue`)
- Sejarah (kartu kaca).
- Visi dan misi.
- **Filosofi logo:** tiga kartu (Lingkaran, Bintang, Tameng) dengan ilustrasi SVG sederhana. Teks makna diambil dari guideline:
  - Lingkaran: kesatuan dan harmoni, menyatukan mahasiswa Teknologi Informasi dari berbagai latar belakang.
  - Bintang: harapan dan cita-cita.
  - Tameng: kekuatan pengetahuan, ketahanan, kesatuan, dan keharmonisan.
- Makna nama dan slogan.
- Makna warna (biru, merah, putih, hitam) dalam empat chip.

### 10.3 Struktur organisasi (`OrganizationPage.vue`)
- Baris pimpinan: Presiden, Wakil, Sekretaris, Bendahara (`PersonCard` ukuran besar).
- Grid kepala divisi (`PersonCard` ukuran kecil).
- Foto bulat; bila belum ada foto, tampilkan inisial di atas gradasi biru atau merah.
- Pemilih periode kepengurusan (opsional).
- Data dari `organization.js`.

### 10.4 Program kerja (`ProgramPage.vue`)
- `TabSwitch` tiga tab: **Tahunan**, **Bulanan**, **Event besar**.
- Tiap kartu memuat nama divisi, judul proker, dan deskripsi singkat.
- Filter divisi (opsional).
- Data dari `programs.js`.

### 10.5 Kegiatan dan galeri (`GalleryPage.vue`)
- `GalleryGrid`: mosaik foto dan video. Klik membuka *lightbox* (gerak sebagai respons aksi).
- `EventTimeline`: garis vertikal bergradasi, tiap titik berisi tanggal dan nama acara.
- Data dari `events.js`.

### 10.6 Berita atau blog (`NewsPage.vue`, `NewsDetailPage.vue`)
- Daftar: grid tiga kartu dengan tanggal, judul, ringkasan.
- Detail: judul, tanggal, penulis, isi artikel, tombol kembali ke daftar.
- Kategori: pengumuman, artikel, rilis kegiatan.
- Data dari `news.js`.

### 10.7 Prestasi (`AchievementPage.vue`) *(opsional)*
- Kartu prestasi: nama lomba, juara, nama tim atau anggota, tahun.
- Filter tahun.
- Data dari `achievements.js`.

### 10.8 Open recruitment (`RecruitmentPage.vue`)
- Panel besar berlatar gradasi biru ke merah dengan teks putih.
- Ringkasan: tanggal pendaftaran, untuk siapa, alur seleksi.
- Tombol utama *Isi formulir pendaftaran* (tautan ke form eksternal).
- FAQ singkat dengan akordeon.
- Data kunci (tanggal, link) disimpan di satu tempat agar mudah diganti.

### 10.9 Layanan dan resource (`ResourcePage.vue`) *(opsional)*
- Daftar tautan berupa kartu kaca: arsip proposal dan LPJ, template surat, materi belajar, bank soal.
- Pencarian sederhana dan kategori.
- Data dari `resources.js`.

### 10.10 Sponsor dan kolaborasi (`SponsorPage.vue`)
- `PartnerStrip`: baris logo partner di panel kaca, judul kecil "Dipercaya oleh partner kami". Logo dibuat monokrom abu agar seragam.
- Tiga `TierCard` paket sponsorship (Silver, Gold, Platinum). Paket tengah diberi penekanan.
- Tombol *Unduh proposal kerja sama*.
- Data dari `sponsors.js`.

### 10.11 Kontak (`ContactPage.vue`)
- Kartu info: email, Instagram, alamat sekretariat.
- Peta lokasi (tombol ke Google Maps, atau *embed* bila diizinkan).
- `ContactForm`: nama, email, pesan. Validasi di sisi klien dengan pesan galat yang jelas ("Isi alamat email yang valid"). Setelah terkirim, tampilkan konfirmasi.
- Pengiriman memerlukan layanan form atau backend; tanpa itu gunakan `mailto:`.

### 10.12 Footer (`AppFooter.vue`)
- Logo dan deskripsi singkat, tautan cepat, tautan sosmed, hak cipta (© 2026 HMIT Telkom University Jakarta).
- Tampil di semua halaman.

### 10.13 Halaman 404 (`NotFoundPage.vue`)
- Pesan jelas: "Halaman tidak ditemukan", dengan tombol kembali ke Beranda.

---

## 11. Navigasi

- Navbar kapsul kaca melayang di atas. Tautan: Tentang, Struktur, Program, Kegiatan, Berita, Kolaborasi, Kontak, ditambah tombol *Open Recruitment*.
- Prestasi dan Layanan diakses lewat tautan di footer dan di Beranda agar navbar tidak penuh.
- Di HP: menu hamburger membuka panel kaca penuh lebar, menutup otomatis setelah pilih tautan.
- Tautan aktif ditandai dengan latar biru tipis dan `aria-current="page"`.

---

## 12. Gerak dan interaksi

| Momen | Perilaku | Durasi |
|---|---|---|
| Hero saat dibuka | Baris judul, paragraf, tombol, dan logo muncul berurutan (naik 22px + fade) | 0.9s, jeda 0.12s antar elemen |
| Ganti tab proker | Panel baru *fade* masuk | 0.5s |
| Hover tombol | Bayangan menguat | 0.2s |
| Tombol ditekan | `scale(.97)` | 0.2s |
| Buka menu HP | Panel muncul | 0.2s |
| Pindah halaman | *Fade* singkat | 0.25s |

Tidak ada animasi muncul-saat-*scroll* di setiap seksi. Dengan `prefers-reduced-motion: reduce`, semua animasi dimatikan dan konten langsung tampil.

---

## 13. Aksesibilitas dan kualitas

- Kontras teks minimal 4.5:1 (teks isi), 3:1 (teks besar).
- Fokus keyboard: *outline* 3px biru #1883FF dengan *offset* 3px.
- Target sentuh minimal 44×44px.
- Struktur heading berurutan: satu H1 per halaman.
- Navigasi memakai elemen `<nav>`, `<main>`, `<footer>`.
- Tab memakai `role="tablist"`, `role="tab"`, `role="tabpanel"`.
- Form: setiap input punya `<label>`.
- Gambar dioptimalkan (WebP) dan dimuat malas di bawah *fold*.

---

## 14. Gaya penulisan

- Bahasa Indonesia, nada ramah dan jelas, *sentence case*.
- Kata kerja langsung di tombol: "Gabung HMIT", "Kirim pesan", "Unduh proposal".
- Pesan galat menyebut masalah dan cara memperbaikinya.
- Tidak ada kalimat promosi berlebihan. Jelaskan apa adanya.
- Nama dan gelar penulisan konsisten: "Himpunan Mahasiswa Teknologi Informasi (HMIT)", "Telkom University Jakarta".

---

## 15. Konten yang harus disiapkan HMIT

| Konten | Dipakai di |
|---|---|
| Foto pengurus (rasio 1:1) dan jabatan | Struktur |
| Sejarah, visi, misi, slogan | Tentang |
| Daftar proker per divisi | Program kerja |
| Foto dan video kegiatan, tanggal acara | Kegiatan, Beranda |
| Artikel dan pengumuman | Berita |
| Data prestasi | Prestasi |
| Tanggal dan link form recruitment | Open recruitment |
| Link arsip proposal, LPJ, template, materi | Layanan |
| Logo partner (resmi, dengan izin) dan paket sponsorship | Sponsor |
| Email, akun sosmed, alamat sekretariat | Kontak, Footer |

---

## 16. Urutan pengerjaan yang disarankan

1. Inisialisasi proyek Vite + Vue 3, pasang Vue Router.
2. Buat `tokens.css`, `base.css`, `glass.css` dan muat font Poppins.
3. Buat komponen dasar: `GlassCard`, `BaseButton`, `SectionHeader`, `BackgroundOrbs`.
4. Buat `AppNavbar`, `AppFooter`, dan `App.vue`.
5. Buat `HomePage.vue`, lalu `AboutPage.vue`.
6. Buat halaman data-driven: Struktur, Program, Kegiatan, Berita.
7. Buat Recruitment, Sponsor, Kontak, lalu halaman opsional (Prestasi, Layanan) dan 404.
8. Uji responsif, keyboard, dan kontras; optimalkan gambar.

---

## 17. Checklist akhir

- [ ] Latar halaman putih #FFFFFF, bola warna tipis dan tidak mendominasi
- [ ] Hanya warna palet inti dan token turunan yang dipakai
- [ ] Poppins di semua teks dengan bobot sesuai hierarki
- [ ] Logo tidak diubah, dirotasi, dibalik, diberi efek, atau diberi teks
- [ ] Clear space logo 2X terpenuhi
- [ ] Setiap halaman berada di file terpisah di `src/pages/`
- [ ] Konten berada di `src/data/`, bukan di template
- [ ] Panel kaca terbaca jelas di atas putih
- [ ] Responsif di 360px, 768px, dan 1280px
- [ ] `prefers-reduced-motion` dihormati
- [ ] Semua gambar punya `alt`, semua input punya `label`
