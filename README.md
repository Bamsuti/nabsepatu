# nab.sepatu - Toko Sepatu Online

Website toko sepatu online modern dibangun dengan HTML, CSS, JavaScript vanilla, dan Express.js sebagai backend server.

**Live:** https://nabsepatu.vercel.app  
**GitHub:** https://github.com/Bamsuti/nabsepatu

---

## Daftar Isi

- [Tentang](#tentang)
- [Fitur](#fitur)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi](#teknologi)
- [Cara Install](#cara-install)
- [Cara Penggunaan](#cara-penggunaan)
- [Arsitektur](#arsitektur)
- [API Endpoints](#api-endpoints)
- [Daftar Produk](#daftar-produk)
- [Screenshot](#screenshot)
- [Riwayat Pengembangan](#riwayat-pengembangan)
- [License](#license)

---

## Tentang

**nab.sepatu** adalah website e-commerce sepatu yang menyediakan katalog produk lengkap dengan fitur pencarian, keranjang belanja, dan sistem pemesanan. Website ini dirancang responsif dan dapat diakses dari desktop maupun mobile.

---

## Fitur

### Autentikasi Pengguna
- Login dengan email dan password
- Registrasi akun baru (data tersimpan di localStorage)
- Logout dengan session clear
- Login admin default: `admin@nab.sepatu` / `admin123`

### Katalog Produk
- **3 Kategori Utama:** Brand, Sport, Pria
- **20+ Subkategori:** Adidas, Nike, Vans, New Balance, Puma, Air Work, Lari, Jalan, Bulutangkis, Futsal, Bola, Basket, Renang, Tenis, Fitnes, Sneakers, Kasual, Sendal, Golf, Sepak Bola
- **216+ produk** dengan gambar, harga, dan deskripsi

### Pencarian
- Pencarian real-time (live search)
- Mencari berdasarkan nama produk, deskripsi, kategori, dan subkategori

### Keranjang Belanja
- Tambah produk ke keranjang
- Kontrol jumlah (tambah/kurang) per item
- Harga otomatis menyesuaikan jumlah
- Hapus item dari keranjang
- Badge counter di icon keranjang

### Sistem Pemesanan
- Form pemesanan lengkap: nama, telepon, alamat pengiriman
- **6 Metode Pembayaran:**
  - Transfer BCA
  - Transfer BRI
  - Transfer Mandiri
  - Transfer BNI
  - Cash on Delivery (COD)
  - QRIS / E-Wallet
- Ringkasan pesanan sebelum konfirmasi
- Halaman konfirmasi dengan detail pesanan lengkap

### UI/UX
- Desain responsif (desktop, tablet, mobile)
- Tema biru-putih profesional
- Modal untuk detail produk, keranjang, pemesanan
- Animasi hover dan transisi halus
- Sticky header dan navigasi

---

## Struktur Proyek

```
nabsepatu/
â”œâ”€â”€ index.html          # Halaman utama (SPA)
â”œâ”€â”€ style.css           # Semua style CSS (1100+ baris)
â”œâ”€â”€ script.js           # Logic JavaScript (500+ baris)
â”œâ”€â”€ data.js             # Database produk (216 produk)
â”œâ”€â”€ server.js           # Express.js API server
â”œâ”€â”€ package.json        # Konfigurasi Node.js
â”œâ”€â”€ .gitignore          # File yang diabaikan git
â”œâ”€â”€ README.md           # Dokumentasi proyek
â””â”€â”€ PRD.md              # Product Requirements Document
```

---

## Teknologi

| Komponen | Teknologi |
|----------|-----------|
| Frontend | HTML5, CSS3, JavaScript ES6+ |
| Backend | Node.js, Express.js |
| Server | Express.js (localhost:3000) |
| Security | Helmet.js (HTTP headers) |
| Gambar | Unsplash CDN (hotlink-friendly) |
| Storage | localStorage (data pengguna) |
| Hosting | Vercel (frontend), GitHub (source) |

### Dependencies

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "helmet": "^8.2.0",
  "@octokit/rest": "^22.0.1"
}
```

---

## Cara Install

### Prasyarat
- Node.js v16 atau lebih tinggi
- npm atau yarn

### Langkah Install

```bash
# Clone repository
git clone https://github.com/Bamsuti/nabsepatu.git

# Masuk ke direktori
cd nabsepatu

# Install dependencies
npm install

# Jalankan server
npm start
```

Server akan berjalan di `http://localhost:3000`

### tanpa Backend (Static File)

Website juga bisa dibuka langsung tanpa server:

```bash
# Buka index.html langsung di browser
start index.html
```

> Catatan: API endpoints tidak akan berfungsi tanpa server, tetapi semua fitur frontend tetap bekerja.

---

## Cara Penggunaan

1. **Buka website** - Akses `http://localhost:3000` atau buka `index.html`
2. **Login** - Gunakan akun admin atau daftar akun baru
3. **Jelajahi Produk** - Klik kategori (Brand/Sport/Pria) lalu pilih subkategori
4. **Cari Produk** - Ketik kata kunci di search bar
5. **Lihat Detail** - Klik tombol "Detail" pada produk
6. **Tambah ke Keranjang** - Klik tombol "Beli"
7. **Atur Jumlah** - Gunakan tombol +/- di keranjang
8. **Checkout** - Klik "Checkout" lalu isi form pemesanan
9. **Pilih Pembayaran** - Pilih salah satu metode yang tersedia
10. **Konfirmasi** - Klik "Konfirmasi Pesanan" dan lihat ringkasan

---

## Arsitektur

### Frontend (Client-Side)
- **Single Page Application (SPA)** tanpa framework
- Navigasi kategori/subkategori menggunakan JavaScript DOM manipulation
- Data produk di-load dari `data.js` secara client-side
- State management menggunakan variabel global (`cart`, `currentService`, `currentSubcategory`)

### Backend (Server-Side)
- Express.js sebagai HTTP server dan API provider
- Static file serving dari root directory
- API endpoint untuk query produk dan kategori
- Helmet.js untuk keamanan HTTP headers

### Alur Aplikasi

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   Login /   â”‚â”€â”€â”€â”€>â”‚   Katalog   â”‚â”€â”€â”€â”€>â”‚   Detail    â”‚
â”‚  Register   â”‚     â”‚   Produk    â”‚     â”‚   Produk    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                          â”‚                    â”‚
                          v                    v
                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”     â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                    â”‚   Pencarian â”‚     â”‚ Keranjang   â”‚
                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜     â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                              â”‚
                                              v
                                        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                                        â”‚   Checkout  â”‚
                                        â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                              â”‚
                                              v
                                        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                                        â”‚ Form Order  â”‚
                                        â”‚ + Pembayaranâ”‚
                                        â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                                              â”‚
                                              v
                                        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                                        â”‚ Konfirmasi  â”‚
                                        â”‚   Pesanan   â”‚
                                        â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## API Endpoints

### `GET /api/products`
Query produk dengan filter opsional.

**Parameters:**
- `category` (string) - Filter kategori: `brand`, `sport`, `pria`
- `subcategory` (string) - Filter subkategori
- `search` (string) - Pencarian berdasarkan nama/deskripsi

**Response:**
```json
{
  "success": true,
  "total": 9,
  "products": [
    {
      "id": "adidas-1",
      "name": "Adidas Ultraboost 25",
      "price": 1850000,
      "image": "https://images.unsplash.com/...",
      "description": "Sepatu lari dengan teknologi Boost...",
      "category": "brand",
      "subcategory": "adidas"
    }
  ]
}
```

### `GET /api/categories`
Mendapatkan daftar semua kategori dan subkategori.

**Response:**
```json
{
  "success": true,
  "categories": {
    "brand": {
      "label": "Brand",
      "subcategories": {
        "adidas": { "label": "Adidas", "count": 9 },
        "nike": { "label": "Nike", "count": 9 }
      }
    }
  }
}
```

---

## Daftar Produk

| Kategori | Subkategori | Jumlah |
|----------|-------------|--------|
| Brand | Adidas | 9 |
| Brand | Nike | 9 |
| Brand | Vans | 9 |
| Brand | Air Work | 9 |
| Brand | New Balance | 9 |
| Brand | Puma | 9 |
| Sport | Lari | 9 |
| Sport | Jalan | 9 |
| Sport | Bulutangkis | 9 |
| Sport | Futsal | 9 |
| Sport | Bola | 9 |
| Sport | Basket | 9 |
| Sport | Renang | 9 |
| Sport | Tenis | 9 |
| Sport | Fitnes | 9 |
| Pria | Lari | 9 |
| Pria | Jalan | 9 |
| Pria | Sepak Bola | 9 |
| Pria | Basket | 9 |
| Pria | Golf | 9 |
| Pria | Fitness | 9 |
| Pria | Sneakers | 9 |
| Pria | Kasual | 9 |
| Pria | Sendal | 9 |
| **Total** | | **216** |

---

## Riwayat Pengembangan

| Tanggal | Versi | Deskripsi |
|---------|-------|-----------|
| 2026-07-09 | 1.0.0 | **Sprint 2** - Implementasi awal: struktur SPA, katalog 216 produk, navigasi kategori, pencarian, keranjang, detail produk, Express.js server |
| 2026-07-12 | 1.1.0 | **Security Fix** - XSS sanitasi pada input pencarian, penambahan Helmet.js untuk HTTP security headers |
| 2026-07-13 | 1.2.0 | **Autentikasi** - Halaman login, registrasi pengguna baru, logout, admin login |
| 2026-07-14 | 1.3.0 | **Image Fix** - Penggantian semua URL gambar eksternal (StockX, Walmart, dll) dengan Unsplash CDN yang reliable |
| 2026-07-15 | 2.0.0 | **Order System** - Form pemesanan lengkap, 6 metode pembayaran (BCA, BRI, Mandiri, BNI, COD, QRIS), kontrol jumlah di keranjang, halaman konfirmasi pesanan |

---

## License

Project ini dibuat untuk keperluan pengembangan web.
