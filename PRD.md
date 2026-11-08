# PRD — Landing Page Toko Bakery

## Tujuan
Membangun landing page toko bakery yang menarik dan responsif menggunakan React, Vite, dan Tailwind CSS. Struktur UI mengikuti prinsip **Component Composition** agar kode modular, bersih, dan mudah dirawat.

## Struktur UI

### Section utama
1. **Navbar** — identitas toko dan navigasi halaman.
2. **Hero** — pesan utama, ajakan bertindak, dan visual unggulan.
3. **Categories** — kategori produk bakery.
4. **Our Featured Food** — daftar produk unggulan dari API.
5. **About Us** — cerita dan keunggulan toko.
6. **Newsletter** — formulir berlangganan email.
7. **Footer** — informasi toko dan tautan pendukung.

### Komposisi komponen
- **Base UI Components:** `Button`, `Card`, `Input`, dan `Skeleton` sebagai blok dasar dengan props fleksibel.
- **Section Components:** `HeroSection`, `FeaturedFood`, `NewsletterSection`, serta section lain yang merangkai komponen dasar untuk kebutuhan halaman.
- **App.jsx:** entrypoint ramping yang hanya menyusun section utama secara berurutan.

## Kontrak API Backend

### `GET /api/menu`
Mengambil daftar produk. Respons sukses berstatus **200 OK**:

```json
[
  {
    "id": 1,
    "name": "Roti Sourdough",
    "price": 35000,
    "image": "/images/sourdough.jpg"
  }
]
```

`price` berupa angka; `image` berisi URL atau path gambar.

### `POST /api/subscribe`
Menerima pendaftaran newsletter dengan payload:

```json
{ "email": "pelanggan@example.com" }
```

- **200 OK:** pendaftaran berhasil. Contoh respons: `{ "message": "Berhasil berlangganan." }`
- **400 Bad Request:** validasi server gagal karena email kosong atau tidak valid. Contoh respons: `{ "message": "Email wajib diisi dan harus valid." }`

## Perilaku UI
- **Loading:** tampilkan skeleton loader selama data produk dimuat atau proses langganan berlangsung.
- **Error:** tampilkan pesan error yang mudah dipahami dan tombol **Coba lagi** untuk mengulangi permintaan yang gagal.
- **Success:** tampilkan produk setelah pemuatan berhasil dan konfirmasi setelah langganan sukses.

## Penyimpanan Data
Untuk tahap awal, data disimpan sementara di **in-memory array**. Data dapat hilang saat server dimulai ulang; persistensi database berada di luar cakupan tahap ini.
