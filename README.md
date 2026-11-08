# Sweet Bakery

Sweet Bakery adalah implementasi landing page toko roti menggunakan React, Vite, dan Tailwind CSS. Halaman ini menampilkan kategori produk, katalog makanan unggulan, profil toko, serta formulir berlangganan newsletter.

## Acuan desain

Tampilan yang direkonstruksi mengacu pada **Bakery Shop Landing Page** dalam gambar referensi berikut. Struktur halaman dan nuansa visualnya dipertahankan, kemudian disesuaikan dengan identitas Sweet Bakery dan aset yang tersedia.

![Gambar referensi Bakery Shop Landing Page](<src/assets/Bakery Shop Landing page (1).jpg>)

## Keputusan implementasi

- **Komponen yang dapat digunakan kembali.** `src/Components/` memuat elemen dasar (`Button`, `Card`, `Input`, `Skeleton`), sedangkan `src/Sections/` memuat bagian halaman. Pembagian ini menjaga `App.jsx` tetap ringkas dan memudahkan perawatan tampilan.
- **Interaksi yang jelas.** Hero berganti gambar setiap tiga detik. Katalog produk menyediakan navigasi Previous/Next serta state loading, error, dan tombol untuk mencoba kembali. Formulir newsletter menampilkan indikator proses dan umpan balik hasil pengiriman.
- **Halaman detail terpisah.** Bagian About Us pada landing page mengarahkan pengunjung ke `/about-us/` untuk membaca profil toko lebih lengkap.
- **Penyimpanan sederhana untuk cakupan proyek.** Data produk dan alamat email pelanggan disimpan sementara dalam array di memori server. Data pelanggan tidak persisten setelah server dimulai ulang.

## API

Endpoint berikut dapat dicoba saat menjalankan `npm run dev`.

### `GET /api/foods`

Mengembalikan daftar produk. Contoh di bawah memperlihatkan satu item dari respons `200 OK`; respons sebenarnya berisi seluruh produk.

```http
GET /api/foods HTTP/1.1

HTTP/1.1 200 OK
Content-Type: application/json

[{"id":1,"name":"Mango Cake","price":38000,"image":"/foods/product1.jpg"}]
```

`price` dinyatakan dalam rupiah dan `image` menunjuk ke aset dalam direktori `public/foods/`.

### `POST /api/subscribe`

Menerima alamat email dalam format JSON. Contoh pendaftaran berhasil:

```http
POST /api/subscribe HTTP/1.1
Content-Type: application/json

{"email":"pelanggan@example.com"}

HTTP/1.1 200 OK
Content-Type: application/json

{"message":"Berhasil berlangganan."}
```

Email kosong atau tidak valid menghasilkan `400 Bad Request` dengan respons `{"message":"Email wajib diisi dan harus valid."}`. Kedua endpoint mengembalikan `405 Method Not Allowed` untuk metode HTTP yang tidak didukung.

## Menjalankan proyek secara lokal

Pastikan Node.js dan npm sudah terpasang. Dari direktori utama proyek, jalankan:

```bash
npm ci
npm run dev
```

Buka alamat yang ditampilkan Vite di terminal (umumnya `http://localhost:5173/`). Pemeriksaan kode dan build dapat dijalankan dengan:

```bash
npm run lint
npm run build
```

**Catatan deployment:** middleware API di `vite.config.js` hanya berjalan pada server pengembangan. Agar kedua endpoint berfungsi setelah deployment, handler dalam `api/` perlu dijalankan pada platform serverless; build statis saja tidak menyediakan API.
