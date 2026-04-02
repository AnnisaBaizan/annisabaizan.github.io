# E-Lab — Sistem Manajemen Pemeliharaan Peralatan Laboratorium

Aplikasi web berbasis **Laravel 9** untuk mengelola inventaris, jadwal pemeliharaan, dan pelaporan peralatan laboratorium di lingkungan institusi pendidikan.

---

## Fitur Utama

- **Manajemen Laboratorium** — Tambah, edit, dan kelola data laboratorium beserta deskripsi dan fotonya.
- **Manajemen Peralatan (Alat)** — Catat peralatan lengkap dengan merk, tipe, NUP, kondisi, SOP (PDF), dan foto.
- **Penempatan Alat ke Lab (Alat Lab)** — Hubungkan peralatan ke laboratorium tertentu dengan informasi kuantitas dan keterangan.
- **Penjadwalan Pemeliharaan** — Buat jadwal kegiatan pemeliharaan untuk setiap peralatan dengan status otomatis.
- **Laporan Pemeliharaan** — Dokumentasikan hasil pemeliharaan lengkap dengan tindakan, hasil, dan bukti foto. Mendukung cetak dan ekspor.
- **Manajemen Staf** — Kelola data staf dengan hierarki peran: Ketua Jurusan, Ketua Prodi, Koordinator, Penanggung Jawab, dan Staf.
- **Manajemen Pengguna** — Admin dapat mengelola akun pengguna sistem.
- **Notifikasi** — Pengingat otomatis untuk jadwal pemeliharaan yang akan jatuh tempo (1–4 hari ke depan).
- **Task Scheduler** — Status pemeliharaan diperbarui otomatis berdasarkan tanggal selesai yang tercatat.
- **Role-Based Access Control** — Admin dapat melihat semua data; pengguna biasa hanya dapat melihat data miliknya sendiri.

---

## Teknologi

| Layer | Teknologi |
|---|---|
| Backend | PHP 8.0+, Laravel 9 |
| Frontend | Blade, Vue 3, Bootstrap 5, Material Dashboard |
| Database | MySQL |
| Build Tool | Laravel Mix, Vite |
| Auth | Laravel Sanctum |

---

## Persyaratan Sistem

- PHP >= 8.0
- Composer
- Node.js >= 14 & NPM
- MySQL >= 5.7
- Laravel 9.x

---

## Instalasi

### 1. Clone repositori

```bash
git clone <url-repositori> E-Lab
cd E-Lab
```

### 2. Install dependensi PHP

```bash
composer install
```

### 3. Install dependensi Node

```bash
npm install
```

### 4. Konfigurasi environment

```bash
cp .env.example .env
php artisan key:generate
```

Edit file `.env` sesuaikan dengan konfigurasi database lokal Anda:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=e_lab
DB_USERNAME=root
DB_PASSWORD=
```

### 5. Migrasi dan seeding database

```bash
php artisan migrate --seed
```

### 6. Build asset frontend

```bash
npm run dev
# atau untuk produksi:
npm run build
```

### 7. Jalankan aplikasi

```bash
php artisan serve
```

Akses aplikasi di `http://localhost:8000`

---

## Menjalankan Task Scheduler

Untuk mengaktifkan pembaruan status pemeliharaan otomatis, tambahkan cron job berikut di server:

```bash
* * * * * cd /path/ke/proyek && php artisan schedule:run >> /dev/null 2>&1
```

Atau jalankan secara manual untuk pengembangan lokal:

```bash
php artisan schedule:run
```

---

## Struktur Modul

```
app/
├── Http/Controllers/       # AlatController, AlatLabController, LabController,
│                           # PemeliharaanController, LaporanController,
│                           # StafController, UserController, HomeController, dll.
├── Models/                 # User, Staf, Lab, Alat, AlatLab, Pemeliharaan, Laporan
├── Policies/               # Otorisasi berbasis kebijakan per model
├── Enums/                  # PemeliharaanStatus (Belum Terlaksana, Dalam Proses, Sudah Terlaksana)
├── Console/Commands/       # UpdatePemeliharaanStatus (task scheduler)
└── helpers.php             # Fungsi utilitas global (format tanggal, notifikasi, dll.)

resources/views/pages/
├── alat/                   # CRUD peralatan
├── lab/                    # CRUD laboratorium
├── pemeliharaan/           # Jadwal pemeliharaan
├── laporan/                # Laporan dan cetak
├── staf/                   # Manajemen staf
└── user/                   # Manajemen pengguna
```

---

## Akun Default (Seeder)

Setelah menjalankan `php artisan migrate --seed`, akun berikut tersedia:

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | password |
| User | user@example.com | password |

> Segera ganti password setelah login pertama kali.

---

## Lisensi

Proyek ini dikembangkan untuk keperluan internal institusi pendidikan.
