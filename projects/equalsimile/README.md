# EqualSmile

Aplikasi web edukasi kesehatan gigi dan mulut yang dirancang khusus untuk penyandang tunanetra, dilengkapi dengan panduan audio interaktif pada setiap elemen navigasi.

## Tentang Aplikasi

**EqualSmile** adalah platform pembelajaran berbasis web yang membantu pengguna tunanetra mempelajari cara menjaga kesehatan gigi dan mulut. Antarmuka dirancang dengan tombol berukuran besar dan dilengkapi audio panduan yang diputar saat kursor diarahkan ke elemen interaktif.

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Laravel 9 (PHP 8.0+) |
| Frontend | Vue 3, Bootstrap 5, SASS |
| Build Tool | Laravel Mix 6, Vite |
| Database | MySQL |
| Autentikasi | Laravel Sanctum, Laravel UI |
| Testing | PHPUnit |

## Fitur Utama

### Untuk Pengguna
- **Materi Pembelajaran** — 3 modul edukasi kesehatan gigi dengan panduan audio
  - Materi 1: Ayo Belajar Menyikat Gigi
  - Materi 2: Cara Memelihara Kesehatan Gigi dan Mulut
  - Materi 3: Cara Menyikat Gigi
- **Video Edukasi** — Konten video pembelajaran
- **Konsultasi Online** — Kontak langsung via telepon dan WhatsApp
- **Panduan Aplikasi** — Petunjuk penggunaan aplikasi
- **Penilaian Aplikasi** — Formulir penilaian pengguna
- **Profil** — Manajemen data diri

### Untuk Admin
- **Manajemen Pengguna** — CRUD data pengguna
- **Ekspor Data** — Export tabel ke Excel dan PDF
- **Filter Data** — Filter berdasarkan rentang tanggal

### Aksesibilitas
- Audio panduan pada setiap tombol navigasi (hover/mouseover)
- Tombol navigasi berukuran besar dengan gambar deskriptif
- Tampilan responsif (mobile-first)

## Struktur Database

**Tabel `users`:**

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint | Primary key |
| name | string | Nama lengkap |
| email | string (unique) | Email pengguna |
| password | string | Password (bcrypt) |
| role | integer | 0 = Admin, 1 = User |
| usia | string | Usia |
| jenis_kelamin | string | Jenis kelamin |
| alamat | string | Alamat |
| no_telp | string (max 15) | Nomor telepon |
| pekerjaan | string | Pekerjaan |
| pendidikan | string | Pendidikan terakhir |

## Instalasi

### Prasyarat
- PHP >= 8.0
- Composer
- Node.js & NPM
- MySQL
- Web server (Apache/Nginx) atau Laragon

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone <url-repository>
   cd EqualSmile
   ```

2. **Install dependensi PHP**
   ```bash
   composer install
   ```

3. **Install dependensi JavaScript**
   ```bash
   npm install
   ```

4. **Salin file environment**
   ```bash
   cp .env.example .env
   ```

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Konfigurasi database** — Edit file `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=equalsmile
   DB_USERNAME=root
   DB_PASSWORD=
   ```

7. **Jalankan migrasi dan seeder**
   ```bash
   php artisan migrate --seed
   ```

8. **Build aset frontend**
   ```bash
   npm run dev
   # atau untuk produksi:
   npm run prod
   ```

9. **Jalankan aplikasi**
   ```bash
   php artisan serve
   ```
   Aplikasi dapat diakses di `http://localhost:8000`

## Struktur Folder

```
EqualSmile/
├── app/
│   ├── Http/
│   │   ├── Controllers/     # Controller (Auth, Home, User, Profile)
│   │   ├── Middleware/      # AdminMiddleware, UserMiddleware
│   │   └── Requests/        # Form Request validation
│   └── Models/              # Eloquent models
├── database/
│   ├── migrations/          # Skema database
│   └── seeders/             # Data awal
├── public/
│   ├── argon/               # Aset tema Argon
│   ├── audio/               # File MP3 panduan audio (30+)
│   └── button/              # Gambar tombol navigasi
├── resources/
│   ├── views/               # Blade templates (98 file)
│   │   ├── auth/            # Halaman login/register
│   │   ├── layouts/         # Layout utama, navbar, footer
│   │   └── pages/           # Halaman konten (14 modul)
│   └── sass/                # Stylesheet SCSS
└── routes/
    ├── web.php              # Route web
    └── api.php              # Route API (Sanctum)
```

## Rute Utama

| URL | Deskripsi | Akses |
|---|---|---|
| `/` | Halaman sambutan | Publik |
| `/login` | Login | Publik |
| `/register` | Registrasi | Publik |
| `/home` | Dashboard | Auth |
| `/materi` | Hub materi pembelajaran | Auth |
| `/materi1`, `/materi2`, `/materi3` | Modul pelajaran | Auth |
| `/videoedu` | Video edukasi | Auth |
| `/konsul` | Konsultasi online | Auth |
| `/panduanapk` | Panduan aplikasi | Auth |
| `/profile` | Profil pengguna | Auth |
| `/user` | Manajemen pengguna | Admin only |

## Otorisasi (Role)

- **Role 0 (Admin):** Akses penuh termasuk manajemen pengguna
- **Role 1 (User):** Akses ke semua konten edukasi

> Pengguna dengan ID = 1 dilindungi: tidak dapat diedit, diubah passwordnya, atau dihapus.

## Lisensi

Proyek ini dibuat untuk keperluan edukasi.
