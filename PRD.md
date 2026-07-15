# Product Requirements Document (PRD)

## nab.sepatu - Toko Sepatu Online

**Versi Dokumen:** 2.0  
**Tanggal:** 15 Juli 2026  
**Status:** Aktif  
**Pemilik Produk:** Bamsuti  
**Live:** https://nabsepatu-ublo.vercel.app/

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Tujuan & Target Pengguna](#2-tujuan--target-pengguna)
3. [Ruang Lingkup](#3-ruang-lingkup)
4. [Kebutuhan Fungsional](#4-kebutuhan-fungsional)
5. [Kebutuhan Non-Fungsional](#5-kebutuhan-non-fungsional)
6. [Arsitektur Sistem](#6-arsitektur-sistem)
7. [Model Data](#7-model-data)
8. [Spesifikasi Fitur](#8-spesifikasi-fitur)
9. [Alur Pengguna](#9-alur-pengguna)
10. [Riwayat Sprint & Pengembangan](#10-riwayat-sprint--pengembangan)
11. [Revisi Mendatang](#11-revisi-mendatang)
12. [Lampiran](#12-lampiran)

---

## 1. Ringkasan Eksekutif

**nab.sepatu** adalah website e-commerce sepatu yang menyediakan katalog produk, pencarian, keranjang belanja, dan sistem pemesanan dengan berbagai metode pembayaran. Website ini dibangun sebagai Single Page Application (SPA) menggunakan HTML, CSS, dan JavaScript vanilla tanpa framework, dengan Express.js sebagai backend server.

### Pernyataan Masalah

Pengembang membutuhkan platform toko online sepatu yang:
- Mudah di-deploy (GitHub Pages / Vercel)
- Ringan tanpa dependensi framework berat
- Berfungsi penuh di sisi client
- Dapat diakses dari berbagai perangkat

### Solusi

Website SPA yang berjalan sepenuhnya di browser dengan data produk statis, server Express.js opsional untuk API, dan deploy statis ke Vercel/GitHub Pages.

---

## 2. Tujuan & Target Pengguna

### Tujuan Produk

| No | Tujuan | Keterangan |
|----|--------|------------|
| 1 | Katalog Produk | Menampilkan 216+ produk sepatu dengan gambar nyata |
| 2 | Pencarian | Memudahkan pengguna menemukan produk spesifik |
| 3 | Transaksi Online | Memungkinkan pemesanan dengan berbagai pembayaran |
| 4 | Responsif | Berfungsi di desktop, tablet, dan mobile |

### Target Pengguna

| Persona | Deskripsi | Kebutuhan Utama |
|---------|-----------|-----------------|
| Pembeli Casual | Pengguna yang mencari sepatu untuk penggunaan sehari-hari | Browsing, pencarian, beli cepat |
| Pecinta Sneakers | Pengguna yang mencari brand/model tertentu | Filter by brand, detail produk |
| Atlet/Sport enthusiast | Pengguna yang mencari sepatu olahraga spesifik | Filter by kategori sport |
| Pengguna Mobile | Akses dari smartphone | Responsif, touch-friendly |

---

## 3. Ruang Lingkup

### In-Scope (Versi Saat Ini - v2.0)

- Autentikasi pengguna (login, register, logout)
- Katalog produk 3 kategori utama, 20+ subkategori, 216 produk
- Pencarian real-time lintas kategori
- Keranjang belanja dengan kontrol jumlah
- Form pemesanan (nama, telepon, alamat)
- 6 metode pembayaran (4 bank, COD, QRIS)
- Konfirmasi pesanan
- Desain responsif
- Server API (Express.js)
- Deploy ke Vercel

### Out-of-Scope (Versi Mendatang)

- Payment gateway integrasi (midtrans, xendit)
- Database produk (MySQL/PostgreSQL)
- Dashboard admin
- Sistem review/rating produk
- Wishlist
- Tracking pesanan
- Notifikasi email/WhatsApp
- Pencarian dengan filter harga
- Sorting (termurah, termahal, terbaru)

---

## 4. Kebutuhan Fungsional

### F4.1 Autentikasi Pengguna

| ID | Fitur | Deskripsi | Status |
|----|-------|-----------|--------|
| F-001 | Login | Pengguna masuk dengan email dan password | Selesai |
| F-002 | Register | Pengguna baru daftar akun | Selesai |
| F-003 | Logout | Pengguna keluar dari sesi | Selesai |
| F-004 | Admin Login | Login admin default (admin@nab.sepatu / admin123) | Selesai |
| F-005 | Session | Data login tersimpan di localStorage | Selesai |

### F4.2 Katalog Produk

| ID | Fitur | Deskripsi | Status |
|----|-------|-----------|--------|
| F-010 | Kategori Utama | 3 tab: Brand, Sport, Pria | Selesai |
| F-011 | Subkategori | Tombol subkategori per kategori | Selesai |
| F-012 | Grid Produk | Tampilan 3 kolom (desktop), 2 (tablet), 1 (mobile) | Selesai |
| F-013 | Card Produk | Gambar, nama, kategori, harga, tombol Beli/Detail | Selesai |
| F-014 | Detail Produk | Modal dengan gambar besar, nama, harga, deskripsi, tombol beli | Selesai |
| F-015 | Gambar | URL gambar dari Unsplash CDN | Selesai |

### F4.3 Pencarian

| ID | Fitur | Deskripsi | Status |
|----|-------|-----------|--------|
| F-020 | Live Search | Pencarian real-time saat mengetik | Selesai |
| F-021 | Search Button | Tombol "Cari" untuk submit pencarian | Selesai |
| F-022 | Multi-field | Mencari di nama, deskripsi, kategori, subkategori | Selesai |
| F-023 | No Results | Pesan "tidak ditemukan" jika hasil kosong | Selesai |

### F4.4 Keranjang Belanja

| ID | Fitur | Deskripsi | Status |
|----|-------|-----------|--------|
| F-030 | Add to Cart | Tambah produk dari card atau detail | Selesai |
| F-031 | Cart Modal | Tampilan daftar item di keranjang | Selesai |
| F-032 | Qty Control | Tombol +/- untuk jumlah item | Selesai |
| F-033 | Qty Auto | Jika qty = 0, item otomatis dihapus | Selesai |
| F-034 | Remove Item | Tombol hapus per item | Selesai |
| F-035 | Cart Counter | Badge angka di icon keranjang | Selesai |
| F-036 | Total | Hitung total harga otomatis | Selesai |
| F-037 | Duplicate | Jika produk sama ditambah lagi, qty bertambah | Selesai |

### F4.5 Pemesanan

| ID | Fitur | Deskripsi | Status |
|----|-------|-----------|--------|
| F-040 | Checkout | Tombol checkout dari keranjang | Selesai |
| F-041 | Order Summary | Ringkasan item yang dipesan di form | Selesai |
| F-042 | Form Nama | Input nama lengkap pemesan | Selesai |
| F-043 | Form Telepon | Input nomor telepon/WhatsApp | Selesai |
| F-044 | Form Alamat | Textarea alamat pengiriman lengkap | Selesai |
| F-045 | Payment Select | Pilihan metode pembayaran (radio button) | Selesai |
| F-046 | Payment BCA | Transfer BCA dengan info rekening | Selesai |
| F-047 | Payment BRI | Transfer BRI dengan info rekening | Selesai |
| F-048 | Payment Mandiri | Transfer Mandiri dengan info rekening | Selesai |
| F-049 | Payment BNI | Transfer BNI dengan info rekening | Selesai |
| F-050 | Payment COD | Cash on Delivery | Selesai |
| F-051 | Payment QRIS | QRIS / E-Wallet | Selesai |
| F-052 | Konfirmasi | Modal sukses dengan ringkasan pesanan | Selesai |
| F-053 | Form Validation | Validasi semua field wajib terisi | Selesai |

### F4.6 Server API

| ID | Fitur | Deskripsi | Status |
|----|-------|-----------|--------|
| F-060 | GET /api/products | Query produk dengan filter | Selesai |
| F-061 | GET /api/categories | Daftar kategori dan subkategori | Selesai |
| F-062 | Static Serving | Serve file HTML/CSS/JS | Selesai |
| F-063 | CORS | Cross-origin resource sharing | Selesai |
| F-064 | Helmet | HTTP security headers | Selesai |

---

## 5. Kebutuhan Non-Fungsional

### NF5.1 Performa

| ID | Kebutuhan | Target | Status |
|----|-----------|--------|--------|
| NF-001 | Ukuran halaman utama | < 100KB (HTML + CSS + JS) | Selesai |
| NF-002 | Waktu load awal | < 2 detik | Selesai |
| NF-003 | Image loading | Lazy loading pada semua gambar | Selesai |
| NF-004 | CDN Gambar | Unsplash CDN (reliable, cepat) | Selesai |

### NF5.2 Responsifitas

| ID | Kebutuhan | Target | Status |
|----|-----------|--------|--------|
| NF-010 | Desktop | >= 768px, grid 3 kolom | Selesai |
| NF-011 | Tablet | 481-768px, grid 2 kolom | Selesai |
| NF-012 | Mobile | <= 480px, grid 1 kolom | Selesai |

### NF5.3 Keamanan

| ID | Kebutuhan | Target | Status |
|----|-----------|--------|--------|
| NF-020 | HTTP Headers | Helmet.js (XSS, Clickjacking, dll) | Selesai |
| NF-021 | Input Sanitization | Escape karakter berbahaya di search | Selesai |
| NF-022 | CSP | Content Security Policy headers | Selesai |

### NF5.4 Kompatibilitas

| ID | Kebutuhan | Target | Status |
|----|-----------|--------|--------|
| NF-030 | Browser | Chrome, Firefox, Safari, Edge | Selesai |
| NF-031 | OS | Windows, macOS, Linux, Android, iOS | Selesai |
| NF-032 | Deploy | GitHub + Vercel | Selesai |

---

## 6. Arsitektur Sistem

### 6.1 Diagram Komponen

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                    CLIENT                        â”‚
â”‚                                                  â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚  â”‚  index   â”‚  â”‚  style   â”‚  â”‚   script     â”‚  â”‚
â”‚  â”‚  .html   â”‚  â”‚  .css    â”‚  â”‚   .js        â”‚  â”‚
â”‚  â”‚          â”‚  â”‚          â”‚  â”‚              â”‚  â”‚
â”‚  â”‚ - Login  â”‚  â”‚ - Theme  â”‚  â”‚ - DOM Manip  â”‚  â”‚
â”‚  â”‚ - App    â”‚  â”‚ - Layout â”‚  â”‚ - Cart Logic â”‚  â”‚
â”‚  â”‚ - Modals â”‚  â”‚ - Modals â”‚  â”‚ - Search     â”‚  â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚ - Order      â”‚  â”‚
â”‚                              â”‚ - Auth       â”‚  â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â”‚  â”‚  data.js â”‚                                  â”‚
â”‚  â”‚          â”‚                                  â”‚
â”‚  â”‚ 216 produkâ”‚                                 â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜                                  â”‚
â”‚                                                  â”‚
â”‚  localStorage (user data, session)               â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                    SERVER                        â”‚
â”‚                                                  â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚  â”‚ server.jsâ”‚  â”‚ Express  â”‚  â”‚   Helmet     â”‚  â”‚
â”‚  â”‚          â”‚  â”‚          â”‚  â”‚              â”‚  â”‚
â”‚  â”‚ - /api/* â”‚  â”‚ - Static â”‚  â”‚ - Security   â”‚  â”‚
â”‚  â”‚ - CORS   â”‚  â”‚ - Router â”‚  â”‚ - Headers    â”‚  â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 6.2 Diagram Deploy

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   GitHub    â”‚â”€â”€â”€â”€>â”‚   Vercel    â”‚â”€â”€â”€â”€>â”‚   User      â”‚
â”‚  Repository â”‚     â”‚   Deploy    â”‚     â”‚   Browser   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
       â”‚                                       â”‚
       â”‚              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”          â”‚
       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€>â”‚  Unsplash   â”‚<â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                      â”‚    CDN      â”‚
                      â”‚  (Gambar)   â”‚
                      â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## 7. Model Data

### 7.1 Produk

```javascript
{
  id: string,          // Unique identifier (e.g., "adidas-1")
  name: string,        // Nama produk (e.g., "Adidas Ultraboost 25")
  price: number,       // Harga dalam Rupiah (e.g., 1850000)
  image: string,       // URL gambar Unsplash
  description: string  // Deskripsi produk
}
```

### 7.2 Kategori

```javascript
{
  [categoryKey]: {
    label: string,     // Nama kategori (e.g., "Brand")
    subcategories: {
      [subKey]: {
        label: string,  // Nama subkategori (e.g., "Adidas")
        products: [Produk]
      }
    }
  }
}
```

### 7.3 Cart Item

```javascript
{
  id: string,          // ID produk
  name: string,        // Nama produk
  price: number,       // Harga satuan
  image: string,       // URL gambar
  description: string, // Deskripsi
  qty: number          // Jumlah yang dipesan (default: 1)
}
```

### 7.4 User

```javascript
{
  name: string,        // Nama lengkap
  email: string,       // Email (unique)
  password: string     // Password
}
```

### 7.5 Order

```javascript
{
  name: string,        // Nama pemesan
  phone: string,       // Nomor telepon
  address: string,     // Alamat pengiriman
  payment: string,     // Metode: bca|bri|mandiri|bni|cod|qris
  items: [CartItem],   // Daftar item
  total: number        // Total harga
}
```

---

## 8. Spesifikasi Fitur

### 8.1 Halaman Login

**Elemen:**
- Logo "nab.sepatu"
- Form email + password
- Tombol "Masuk"
- Link "Daftar" ke registrasi

**Logika:**
- Admin default: `admin@nab.sepatu` / `admin123`
- User biasa: cek dari localStorage
- Gagal: tampilkan alert error

### 8.2 Modal Registrasi

**Elemen:**
- Form nama, email, password
- Tombol "Daftar"
- Link "Masuk" kembali

**Logika:**
- Validasi email unik
- Simpan ke localStorage
- Alert sukses, tutup modal

### 8.3 Header

**Elemen:**
- Logo "nab.sepatu" (klik ke home)
- Search bar dengan tombol "Cari"
- Tombol "Keluar"
- Icon keranjang dengan counter

**Comportment:**
- Sticky header (z-index tinggi)
- Search real-time (oninput)
- Counter update otomatis

### 8.4 Navigasi Kategori

**Tab Kategori:**
- 3 tombol: Brand, Sport, Pria
- Active state: background putih, warna biru
- Klik: render subkategori baru

**Subkategori:**
- Tombol pill (bordered)
- Active state: background biru, teks putih
- Klik: render produk grid

### 8.5 Grid Produk

**Card:**
- Gambar (200px height, object-fit cover)
- Nama produk (bold)
- Label kategori (huruf kecil, abu-abu)
- Harga (Rupiah format)
- Tombol "Beli" (primary) dan "Detail" (secondary)

**Hover:**
- Card terangkat (translateY -4px)
- Shadow membesar

### 8.6 Modal Detail

**Elemen:**
- Gambar besar (250px)
- Nama produk (20px, bold)
- Harga (24px, bold)
- Deskripsi
- Tombol "Beli Sekarang"

### 8.7 Keranjang

**Elemen:**
- Daftar item (image, nama, harga x qty)
- Kontrol jumlah (- [qty] +)
- Tombol hapus (x)
- Total harga
- Tombol "Checkout"

**Logika:**
- Jika qty <= 0, hapus item
- Total = sum(harga x qty)
- Counter badge = sum(qty)

### 8.8 Form Pemesanan

**Elemen:**
- Ringkasan pesanan (daftar item + subtotal)
- Input nama (text, required)
- Input telepon (tel, required)
- Textarea alamat (required)
- Pilihan pembayaran (radio, 6 opsi)
- Total bayar
- Tombol "Konfirmasi Pesanan"

**Pembayaran:**

| Opsi | Label | Warna Logo | Info Rekening |
|------|-------|------------|---------------|
| BCA | Transfer BCA | Biru (#0066b2) | 1234567890 a/n Bamsuti |
| BRI | Transfer BRI | Biru Tua (#004b87) | 9876543210 a/n Bamsuti |
| Mandiri | Transfer Mandiri | Biru Gelap (#003d7a) | 555012345678 a/n Bamsuti |
| BNI | Transfer BNI | Merah (#e31e24) | 0981234567 a/n Bamsuti |
| COD | Cash on Delivery | Hijau (#43a047) | Bayar di tempat |
| QRIS | QRIS / E-Wallet | Ungu (#5c2d91) | Scan QR code |

### 8.9 Konfirmasi Pesanan

**Elemen:**
- Ikon centang hijau
- Judul "Pesanan Berhasil!"
- Subtitle terima kasih
- Daftar item yang dipesan
- Detail: pemesan, telepon, alamat, pembayaran, total item, total bayar
- Info rekening (jika transfer bank)
- Tombol "Kembali Berbelanja"

**Logika:**
- Keranjang dikosongkan
- Form direset
- Kembali ke halaman utama

---

## 9. Alur Pengguna

### Alur 1: Browsing Produk

```
Buka Website
    â”‚
    v
Login / Register â”€â”€(akun baru)â”€â”€> Register â”€â”€> Login
    â”‚
    v
Pilih Kategori (Brand/Sport/Pria)
    â”‚
    v
Pilih Subkategori (Adidas/Nike/etc)
    â”‚
    v
Lihat Grid Produk
    â”‚
    â”œâ”€â”€> Klik "Detail" â”€â”€> Modal Detail â”€â”€> "Beli"
    â”‚
    â””â”€â”€> Klik "Beli" langsung â”€â”€> Alert ditambahkan
```

### Alur 2: Checkout & Pemesanan

```
Klik Icon Keranjang
    â”‚
    v
Lihat Daftar Item
    â”‚
    â”œâ”€â”€> Atur Jumlah (+/-)
    â”‚
    â””â”€â”€> Klik "Checkout"
            â”‚
            v
        Form Pemesanan
            â”‚
            â”œâ”€â”€> Isi Nama
            â”œâ”€â”€> Isi Telepon
            â”œâ”€â”€> Isi Alamat
            â””â”€â”€> Pilih Pembayaran
                    â”‚
                    v
            Klik "Konfirmasi Pesanan"
                    â”‚
                    v
            Modal Konfirmasi
            - Daftar item
            - Detail pesanan
            - Info rekening (jika bank)
                    â”‚
                    v
            Klik "Kembali Berbelanja"
                    â”‚
                    v
            Kembali ke halaman utama
```

### Alur 3: Pencarian

```
Ketik di Search Bar
    â”‚
    v
Real-time Filter Produk
    â”‚
    â”œâ”€â”€> Hasil ditemukan â”€â”€> Tampilkan Grid
    â”‚
    â””â”€â”€> Tidak ditemukan â”€â”€> Pesan "Produk tidak ditemukan"
```

---

## 10. Riwayat Sprint & Pengembangan

### Sprint 1: Inisialisasi (9 Juli 2026)

**Tujuan:** Setup proyek dan struktur dasar.

| Tugas | Status | Keterangan |
|-------|--------|------------|
| Setup repository GitHub | Selesai | Repo Bamsuti/nabsepatu |
| Buat package.json | Selesai | Dependencies: express, cors, helmet |
| Setup server.js | Selesai | Express server + static files + API |
| Buat index.html | Selesai | Struktur SPA dengan modals |
| Buat style.css | Selesai | Tema biru-putih, responsif |
| Buat data.js | Selesai | 216 produk, 3 kategori |
| Buat script.js | Selesai | Navigasi, search, cart, detail |
| Deploy ke Vercel | Selesai | Auto-deploy dari GitHub |
| Buat .gitignore | Selesai | node_modules, .env |

**Hasil:** Website berjalan dengan fitur dasar katalog, pencarian, keranjang, dan detail produk.

---

### Sprint 2: Keamanan & Autentikasi (12 Juli 2026)

**Tujuan:** Tingkatkan keamanan dan tambah fitur pengguna.

| Tugas | Status | Keterangan |
|-------|--------|------------|
| Tambah Helmet.js | Selesai | HTTP security headers |
| XSS sanitization | Selesai | Escape karakter berbahaya di search |
| Buat halaman login | Selesai | Form login dengan validasi |
| Buat modal register | Selesai | Pendaftaran akun baru |
| Fitur logout | Selesai | Clear session dan cart |
| Login admin | Selesai | Default: admin@nab.sepatu / admin123 |
| User storage | Selesai | localStorage untuk data pengguna |

**Hasil:** Website memiliki autentikasi pengguna dan keamanan dasar.

---

### Sprint 3: Perbaikan Gambar (14 Juli 2026)

**Tujuan:** Pastikan semua gambar produk tampil.

| Tugas | Status | Keterangan |
|-------|--------|------------|
| Audit semua URL gambar | Selesai | 216 URL diperiksa |
| Ganti URL non-Unsplash | Selesai | StockX, Walmart, Amazon, FootLocker diblokir hotlink |
| Standarisasi ke Unsplash | Selesai | Semua URL ke images.unsplash.com |
| Test gambar | Selesai | Semua gambar tampil di GitHub/Vercel |

**Hasil:** 100% gambar produk tampil tanpa broken image.

---

### Sprint 4: Sistem Pemesanan (15 Juli 2026)

**Tujuan:** Implementasi checkout dan pembayaran.

| Tugas | Status | Keterangan |
|-------|--------|------------|
| Modifikasi keranjang | Selesai | Tambah kontrol jumlah (+/-) |
| Duplicate handling | Selesai | Produk sama = qty bertambah |
| Form pemesanan | Selesai | Nama, telepon, alamat |
| Pilihan pembayaran | Selesai | 6 opsi (4 bank, COD, QRIS) |
| Logo pembayaran | Selesai | Warna branded per bank |
| Ringkasan pesanan | Selesai | Item + subtotal di form |
| Modal konfirmasi | Selesai | Detail pesanan lengkap |
| Info rekening bank | Selesai | Nomor rekening per bank |
| CSS order form | Selesai | Styling lengkap + responsive |
| Push ke GitHub | Selesai | 4 file di-update |

**Hasil:** Alur checkout lengkap dari keranjang hingga konfirmasi pesanan.

---

## 11. Revisi Mendatang

### Prioritas Tinggi

| ID | Fitur | Estimasi | Keterangan |
|----|-------|----------|------------|
| R-001 | Payment Gateway | 2 sprint | Integrasi Midtrans/Xendit |
| R-002 | Database Produk | 1 sprint | MySQL/PostgreSQL + admin panel |
| R-003 | Dashboard Admin | 2 sprint | CRUD produk, lihat pesanan |

### Prioritas Sedang

| ID | Fitur | Estimasi | Keterangan |
|----|-------|----------|------------|
| R-004 | Filter Harga | 0.5 sprint | Slider min-max harga |
| R-005 | Sorting | 0.5 sprint | Harga naik/turun, nama A-Z |
| R-006 | Wishlist | 1 sprint | Simpan produk favorit |
| R-007 | Rating & Review | 1 sprint | Bintang + komentar |

### Prioritas Rendah

| ID | Fitur | Estimasi | Keterangan |
|----|-------|----------|------------|
| R-008 | Notifikasi WA | 1 sprint | Pesanan otomatis via WhatsApp |
| R-009 | Tracking | 1 sprint | Lacak status pesanan |
| R-010 | Dark Mode | 0.5 sprint | Toggle tema gelap/terang |
| R-011 | Multi Bahasa | 1 sprint | Indonesia + English |

---

## 12. Lampiran

### A. Daftar File

| File | Ukuran | Keterangan |
|------|--------|------------|
| index.html | ~6KB | Struktur halaman utama |
| style.css | ~30KB | Semua styling (1100+ baris) |
| script.js | ~15KB | Logic aplikasi (500+ baris) |
| data.js | ~50KB | Database produk (216 item) |
| server.js | ~3KB | Express server (82 baris) |
| package.json | ~0.5KB | Konfigurasi Node.js |

### B. Endpoint API

| Method | Endpoint | Parameter | Response |
|--------|----------|-----------|----------|
| GET | /api/products | category, subcategory, search | { success, total, products } |
| GET | /api/categories | - | { success, categories } |

### C. Kredensial Default

| Item | Value |
|------|-------|
| Admin Email | admin@nab.sepatu |
| Admin Password | admin123 |
| Server Port | 3000 |

### D. Warna Tema

| Elemen | Warna | Kode |
|--------|-------|------|
| Primary | Biru Tua | #0d47a1 |
| Secondary | Biru | #1565c0 |
| Accent | Biru Muda | #90caf9 |
| Background | Biru Sangat Muda | #f0f8ff |
| Surface | Putih | #ffffff |
| Text | Biru Gelap | #1a237e |
| Error | Merah | #ff5252 |
| Success | Hijau | #43a047 |

---

**Dokumen ini terakhir diperbarui: 15 Juli 2026**
