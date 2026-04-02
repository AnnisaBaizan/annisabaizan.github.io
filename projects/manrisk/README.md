# MANRISK - Sistem Manajemen Risiko Poltekkes Palembang

Aplikasi web untuk manajemen risiko organisasi di lingkungan Poltekkes Kemenkes Palembang. Sistem ini membantu unit-unit organisasi dalam mengidentifikasi, memantau, dan melaporkan risiko beserta upaya mitigasinya.

---

## Teknologi

- **Backend**: PHP + CodeIgniter 3 (MVC)
- **Database**: MySQL
- **Frontend**: Bootstrap 3, jQuery, Gentelella Admin Template
- **Server**: Apache dengan mod_rewrite

---

## Fitur Utama

| Modul | Deskripsi |
|---|---|
| Identifikasi Risiko | Pencatatan dan pemetaan risiko per unit organisasi |
| Kegiatan | Pengelolaan program/kegiatan yang terkait risiko |
| Monev | Pemantauan dan evaluasi mitigasi risiko |
| Pelaporan | Upload dan manajemen laporan (RKT & TW) |
| Pengumuman | Notifikasi dan pengumuman sistem |
| Peta Risiko | Visualisasi heat map risiko |
| Dashboard | Ringkasan statistik sistem |

### Manajemen Pengguna
- Login berbasis email dan password
- Reset password via email
- Tiga level akses: **Admin**, **User** (per unit), **Guest**
- Kontrol akses berbasis unit organisasi

---

## Persyaratan Sistem

- PHP >= 5.2.4
- MySQL / MariaDB
- Apache dengan `mod_rewrite` aktif
- Ekstensi PHP: `mysqli`, `mbstring`, `openssl`

---

## Instalasi

### 1. Clone / Salin Proyek

```bash
git clone <repo-url> manrisk
# atau salin folder ke direktori web server
```

### 2. Konfigurasi Database

Buat database baru:

```sql
CREATE DATABASE manrisk CHARACTER SET utf8 COLLATE utf8_general_ci;
```

Import skema database (jika tersedia di folder `assets/document/`).

Edit file `application/config/database.php`:

```php
$db['default'] = array(
    'hostname' => 'localhost',
    'username' => 'root',
    'password' => 'your_password',
    'database' => 'manrisk',
    'dbdriver' => 'mysqli',
    'char_set' => 'utf8',
    'dbcollat'  => 'utf8_general_ci',
    ...
);
```

### 3. Konfigurasi Aplikasi

Edit `application/config/config.php`:

```php
$config['base_url'] = 'http://localhost/manrisk/';
```

Edit `application/config/constants.php` untuk konfigurasi email:

```php
define('EMAIL_ADDRESS_SENDER', 'your-email@domain.com');
define('EMAIL_PASSWORD_SENDER', 'your-email-password');
define('EMAIL_NAME_SENDER',     'MANRISK');
```

### 4. Konfigurasi Virtual Host (Opsional)

Untuk URL `http://manrisk.test/`, tambahkan virtual host di Apache dan entry di file `hosts`:

```
127.0.0.1   manrisk.test
```

### 5. Pastikan Folder Writable

```bash
chmod -R 777 application/logs/
chmod -R 777 application/cache/
chmod -R 777 uploads/
chmod -R 777 uploads_laporan_rkt/
chmod -R 777 uploads_laporan_tw/
chmod -R 777 uploads_monev/
chmod -R 777 filepelaporan/
```

---

## Struktur Direktori

```
manrisk/
├── application/
│   ├── config/             # Konfigurasi aplikasi
│   ├── controllers/        # Controller utama (admin)
│   │   └── pageunit/       # Controller untuk user unit
│   ├── helpers/            # Helper kustom (simpel_helper.php)
│   ├── models/             # Model database
│   └── views/              # Template tampilan
├── assets/
│   ├── build/              # CSS/JS hasil build
│   ├── vendors/            # Library pihak ketiga
│   └── images/             # Aset gambar
├── system/                 # Core CodeIgniter
├── uploads/                # Upload profil pengguna
├── uploads_laporan_rkt/    # Upload laporan RKT
├── uploads_laporan_tw/     # Upload laporan TW
├── uploads_monev/          # Upload dokumen monev
├── filepelaporan/          # File laporan
├── index.php               # Front controller
└── .htaccess               # URL rewriting
```

---

## Hak Akses Pengguna

| Level | Kode | Akses |
|---|---|---|
| Admin | `A` | Akses penuh ke semua modul dan unit |
| User | `U` | Akses terbatas ke unit sendiri |
| Guest | `G` | Akses baca saja |

---

## Navigasi URL

| URL | Keterangan |
|---|---|
| `/login` | Halaman login |
| `/dashboard` | Dashboard admin |
| `/identifikasiresiko` | Manajemen identifikasi risiko |
| `/kegiatan` | Manajemen kegiatan |
| `/monev` | Monitoring & evaluasi |
| `/pelaporan` | Manajemen pelaporan |
| `/pengumuman` | Pengumuman |
| `/unit` | Manajemen unit organisasi |
| `/periode` | Manajemen periode |
| `/users` | Manajemen pengguna |
| `/profil` | Profil pengguna |
| `/pageunit/dashboard` | Dashboard user unit |

---

## Kalkulasi Risiko

Tingkat risiko dihitung menggunakan formula:

```
Tingkat Risiko (TR) = Kemungkinan × Dampak
```

| Kategori | Kode | Rentang Nilai |
|---|---|---|
| Sangat Rendah | SR | TR rendah |
| Rendah | R | |
| Sedang | S | |
| Tinggi | T | |
| Sangat Tinggi | ST | TR tinggi |

Status mitigasi RTL:
- `I` = In Progress (Sedang berjalan)
- `C` = Completed (Selesai)
- `O` = Not Done (Belum dilaksanakan)

---

## Pengembangan

### Menambah Controller Baru

1. Buat file di `application/controllers/NamaController.php`
2. Extends `CI_Controller`
3. Panggil `otentikasi()` di setiap method yang memerlukan autentikasi

### Menambah Model Baru

1. Buat file di `application/models/Nama_model.php`
2. Extends `CI_Model`
3. Gunakan `$this->db` untuk query database

---

## Catatan Keamanan

- Password disimpan menggunakan SHA1 — pertimbangkan upgrade ke bcrypt untuk keamanan lebih baik
- Kredensial email disimpan di `constants.php` — jangan commit ke repository publik
- Pastikan konfigurasi `database.php` tidak terekspos secara publik

---

## Lisensi

Dikembangkan untuk keperluan internal **Poltekkes Kemenkes Palembang**.
