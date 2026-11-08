# Product Requirements Document — Sweet Bakery

## 1. Ringkasan Produk

Sweet Bakery adalah landing page toko bakery yang dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**. Halaman ini menampilkan kategori serta produk unggulan, memperkenalkan bisnis, dan menyediakan formulir berlangganan newsletter.

## 2. Tujuan

- Menyajikan katalog bakery secara menarik dan responsif.
- Memudahkan pengunjung menemukan produk unggulan.
- Mengumpulkan email pelanggan melalui newsletter.
- Menjaga kode bersih, modular, dan mudah dirawat.

## 3. Breakdown Komponen UI

| Section | Fungsi Utama |
| --- | --- |
| `Navbar` | Menampilkan identitas brand dan navigasi halaman. |
| `Hero` | Menampilkan headline, deskripsi singkat, CTA, dan visual utama. |
| `Categories` | Menampilkan kategori produk bakery. |
| `Our Featured Food` | Mengambil dan menampilkan daftar produk unggulan dari API. |
| `About Us` | Menjelaskan profil, nilai, dan keunggulan Sweet Bakery. |
| `Newsletter` | Menyediakan formulir berlangganan menggunakan email. |
| `Footer` | Menampilkan informasi bisnis, tautan penting, dan hak cipta. |

## 4. Arsitektur Komponen

Aplikasi menggunakan prinsip **Component Composition** dengan dua tingkatan:

### Base UI Components

Komponen dasar yang dapat digunakan kembali dan menerima props secara fleksibel:

- `Button`
- `Card`
- `Input`
- `Skeleton`

### Section Components

Komponen yang menyusun Base UI Components menjadi bagian halaman yang utuh, antara lain:

- `Navbar`
- `HeroSection`
- `CategoriesSection`
- `FeaturedFood`
- `AboutSection`
- `NewsletterSection`
- `Footer`

`App.jsx` bertindak sebagai entrypoint yang ramping dan hanya merangkai section utama sesuai urutan halaman.

## 5. Kontrak API Backend

### GET `/api/foods`

Mengambil daftar produk bakery.

**Respons berhasil — `200 OK`**

```json
[
  {
    "id": 1,
    "name": "Croissant",
    "price": 25000,
    "image": "https://example.com/images/croissant.jpg"
  }
]
```

| Field | Tipe | Keterangan |
| --- | --- | --- |
| `id` | number | ID unik produk. |
| `name` | string | Nama produk. |
| `price` | number | Harga produk dalam rupiah. |
| `image` | string | URL gambar produk. |

### POST `/api/subscribe`

Mendaftarkan email pengunjung ke newsletter.

**Payload**

```json
{
  "email": "pelanggan@example.com"
}
```

**Respons berhasil — `200 OK`**

```json
{
  "message": "Berhasil berlangganan."
}
```

**Validasi gagal — `400 Bad Request`**

Digunakan jika email kosong atau format email tidak valid.

```json
{
  "message": "Email wajib diisi dan harus valid."
}
```

## 6. Handling UI States

### Loading

- Tampilkan `Skeleton` saat data produk sedang dimuat.
- Tombol submit newsletter berada dalam keadaan disabled dan menampilkan indikator loading selama permintaan berlangsung.

### Error

- Tampilkan pesan error yang jelas dan ramah pengguna.
- Pada kegagalan memuat produk, tampilkan tombol **Coba Lagi** untuk mengulang permintaan.
- Pada validasi newsletter, tampilkan pesan error di dekat input email dan pertahankan nilai input agar mudah diperbaiki.

### Success

- Produk yang berhasil dimuat ditampilkan dalam kumpulan `Card`.
- Setelah subscription berhasil, tampilkan pesan sukses dan kosongkan input email.

## 7. Penyimpanan Data

Data produk dan daftar email subscriber disimpan sementara dalam **in-memory array** di backend. Data akan kembali ke kondisi awal ketika server dimulai ulang; database persisten belum termasuk dalam cakupan versi ini.

## 8. Kriteria Selesai

- Seluruh section utama tampil sesuai urutan dan responsif.
- Daftar produk menggunakan `GET /api/foods` dengan state loading, error, retry, dan success.
- Form newsletter menggunakan `POST /api/subscribe` serta menangani respons `200` dan `400`.
- `App.jsx` hanya merangkai section utama.
- Base UI Components dapat digunakan kembali dan tidak terikat pada satu section tertentu.
