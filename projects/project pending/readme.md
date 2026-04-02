# App Pendamping – Sistem Manajemen Anggaran

Aplikasi web fullstack untuk manajemen perencanaan dan realisasi anggaran institusi pendidikan (Poltekkes Palembang). Sistem ini mengelola pengajuan anggaran antarunit, proses persetujuan bertingkat, serta pelaporan realisasi secara terpusat.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Model Database](#model-database)
- [API Endpoints](#api-endpoints)
- [Role & Hak Akses](#role--hak-akses)
- [Setup Development](#setup-development)
- [Setup Production](#setup-production)
- [Migrasi Database](#migrasi-database)
- [Menambahkan Modul Baru](#menambahkan-modulmen-baru)
- [Konfigurasi Default](#konfigurasi-default)

---

## Fitur Utama

- **Manajemen Anggaran** – Struktur hierarkis 7 level (Program → Kegiatan → Output → Rincian Output → Komponen → Sub Komponen → Akun)
- **Pengajuan Permohonan** – Unit mengajukan permintaan anggaran dengan sistem header-detail
- **Alur Persetujuan** – Status berjenjang: Dikirim → Disetujui / Diperbaiki
- **Tracking Realisasi** – Pencatatan realisasi anggaran beserta laporan
- **Import CSV** – Upload massal data anggaran via file CSV
- **Audit Trail** – Riwayat perubahan data anggaran tersimpan otomatis
- **Laporan Rekapitulasi** – Ringkasan anggaran vs realisasi per unit
- **RBAC** – Kontrol akses berbasis role (Admin, Unit, Budget)
- **JWT Authentication** – Token-based authentication dengan expiry 120 menit

---

## Tech Stack

### Backend

| Teknologi | Kegunaan |
|---|---|
| Python 3.x | Bahasa pemrograman |
| FastAPI | Web framework |
| Uvicorn | ASGI server |
| SQLAlchemy | ORM |
| Alembic | Migrasi database |
| PyMySQL | Driver MySQL |
| Passlib + Bcrypt | Hashing password |
| PyJWT | JWT authentication |
| Pandas | Pemrosesan file CSV |
| Python-Multipart | Upload file |
| FastAPI-Utils | Class-based views |

### Frontend

| Teknologi | Kegunaan |
|---|---|
| React 18+ | UI library |
| TypeScript | Typed JavaScript |
| Vite | Build tool |
| Tailwind CSS + DaisyUI | Styling & komponen UI |
| Axios | HTTP client |
| React Hook Form | Manajemen form |
| React Router DOM v6 | Routing |
| React Auth Kit | State autentikasi |
| SweetAlert2 | Notifikasi dialog |
| Chart.js | Visualisasi data |
| React Data Table | Tabel dengan sorting/pagination |

### Database & DevOps

| Teknologi | Kegunaan |
|---|---|
| MySQL | Relational database |
| PhpMyAdmin | GUI manajemen database (opsional) |
| Docker & Docker Compose | Containerization |

---

## Struktur Proyek

```
app_pendamping/
├── backend_pendamping/
│   ├── app.py                    # FastAPI entry point & CORS config
│   ├── database.py               # SQLAlchemy session & engine
│   ├── exceptions.py             # Custom exception classes
│   ├── utils.py                  # JWT & password utilities
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .env                      # JWT secret keys
│   ├── models/
│   │   ├── user.py
│   │   ├── unit.py
│   │   ├── budget.py
│   │   ├── budgetHistory.py
│   │   ├── permohonanh.py
│   │   └── permohonand.py
│   ├── schemas/                  # Pydantic request/response schemas
│   ├── cruds/                    # Business logic & operasi DB
│   ├── routers/                  # Definisi endpoint API
│   ├── resources/routes.py       # Registrasi semua router
│   ├── util/                     # Helper utilities
│   ├── uploads/                  # Direktori penyimpanan file CSV
│   ├── alembic/                  # Script migrasi database
│   └── data/                     # Sample/seed data
│
├── frontend_pendamping/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── dashboard/
│   │   │   ├── budget/           # Manajemen & import anggaran
│   │   │   ├── adminListPermohonan/
│   │   │   ├── adminUserManagement/
│   │   │   ├── adminUnit/
│   │   │   ├── unitListPermohonan/
│   │   │   └── applicationReport/
│   │   ├── components/
│   │   │   ├── auth/             # Route guard per role
│   │   │   ├── filterBudget.tsx
│   │   │   └── loading.tsx
│   │   ├── api/                  # Layer service API (per modul)
│   │   ├── utils/                # Helper: formatDate, currencyToText
│   │   ├── main.tsx              # Setup routing React Router
│   │   └── constant.ts           # Konfigurasi URL & route path
│   ├── public/slideShow/         # Gambar banner (1.jpg, 2.jpg, 3.jpg)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── Dockerfile
│
├── docker-compose.yml
└── readme.md
```

---

## Model Database

### `users`
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| username | String | Unik |
| password | String | Bcrypt hashed |
| firstName | String | |
| lastName | String | |
| isActive | Boolean | |
| roleID | Integer | 1=Admin, 2=Unit, 3=Budget |
| unitID | FK → units | |

### `units`
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| description | String | Nama unit |
| unitCode | String | Kode unit |
| count | Integer | |

### `budgets`
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| program | String | Level 1 hierarki |
| kegiatan | String | Level 2 |
| output | String | Level 3 |
| rincian_output | String | Level 4 |
| komponen | String | Level 5 |
| sub_komponen | String | Level 6 |
| akun | String | Level 7 |
| detail | String | |
| description | String | |
| budget | BigInteger | Total anggaran |
| realisasi | BigInteger | Realisasi |
| lock_budget | BigInteger | Terkunci |
| unitCode | FK → units | |
| status | Boolean | |

### `budgetshistory` (Audit Trail)
Menduplikasi seluruh field `budgets` beserta `user_id`, `method` (CREATE/UPDATE/DELETE), dan `tanggal`.

### `permohonanhs` (Header Permohonan)
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| unitID | FK → units | |
| tanggal | DateTime | Tanggal pengajuan |
| tujuan | Text | Tujuan permohonan |
| status | String | Status pengiriman |
| statusPersetujuan | String | Status persetujuan |
| statusRealisasi | String | Status realisasi |
| dikirim / diperbaiki / disetujui / dilaporkan | DateTime | Timestamp tiap tahap |
| keteranganStatus | Text | Catatan |
| count_unit / count_sys | Integer | Jumlah item |
| isActive | Boolean | |

### `permohonands` (Detail Permohonan)
| Field | Tipe | Keterangan |
|---|---|---|
| id | PK | |
| permohonanhID | FK → permohonanhs | |
| budgetID | FK → budgets | |
| nilai | Decimal(20,2) | Nilai yang dimohon |
| keterangan | Text | |
| nilaiRealisasi | Decimal(20,2) | Nilai realisasi |
| laporanRealisasi | Text | Laporan realisasi |

---

## API Endpoints

### Auth & Users – `/api/users`
| Method | Path | Keterangan |
|---|---|---|
| POST | `/users/login` | Login, return JWT token |
| POST | `/token` | OAuth2 token endpoint |
| GET | `/users` | List users (paginated) |
| GET | `/usersnolimit` | List semua users |
| POST | `/users` | Buat user baru |
| GET | `/users/{id}` | Detail user |
| GET | `/users/getbyusername/{username}` | Cari user by username |
| PUT | `/users/{id}` | Update user |
| DELETE | `/users/{id}` | Hapus user |
| GET | `/users/getProfile/{token}` | Profil user dari token |

### Units – `/api/units`
| Method | Path | Keterangan |
|---|---|---|
| GET | `/units` | List units (paginated) |
| GET | `/unitsnolimit` | List semua units |
| POST | `/units` | Buat unit |
| GET | `/unit/{id}` | Detail unit |
| PUT | `/unit/{id}` | Update unit |
| DELETE | `/unit/{id}` | Hapus unit |

### Budgets – `/api/budgets`
| Method | Path | Keterangan |
|---|---|---|
| GET | `/budgets` | List anggaran (paginated) |
| GET | `/budgetsnolimit` | List semua anggaran |
| GET | `/budgetfilter` | Filter multi-kriteria |
| GET | `/getBudgetByUnit/{unit_id}` | Anggaran per unit |
| POST | `/budgets` | Buat anggaran |
| POST | `/uploadfile` | Import CSV bulk |
| GET | `/budget/{id}` | Detail anggaran |
| PUT | `/budgets/{id}` | Update anggaran |
| DELETE | `/budgets/{id}` | Hapus anggaran |
| GET | `/programDistinct` | Daftar program unik |
| GET | `/kegiatanDistinct` | Daftar kegiatan unik |
| GET | `/outputDistinct` | Daftar output unik |
| GET | `/rincian_outputDistinct` | Daftar rincian output unik |
| GET | `/komponenDistinct` | Daftar komponen unik |
| GET | `/subKomponenDistinct` | Daftar sub komponen unik |
| GET | `/akunDistinct` | Daftar akun unik |

### Application Header – `/api/applicationsHeader`
| Method | Path | Keterangan |
|---|---|---|
| GET | `/applicationsHeader` | List header (paginated) |
| GET | `/applicationsHeadernolimit` | List semua header |
| GET | `/getPermohonanHByUnit/{unit_id}` | Header by unit |
| GET | `/filterApplicationsHeader` | Filter lanjutan |
| POST | `/applicationsHeader` | Buat/update header |
| GET | `/applicationsHeader/{id}` | Detail header |
| PUT | `/applicationsHeader/{id}` | Update header |
| DELETE | `/applicationsHeader/{id}` | Hapus header |

### Application Detail – `/api/applicationsDetail`
| Method | Path | Keterangan |
|---|---|---|
| GET | `/applicationsDetail` | List detail (paginated) |
| GET | `/applicationsDetailnolimit` | List semua detail |
| GET | `/getDetailByHeader/{header_id}` | Detail by header |
| POST | `/applicationsDetail` | Tambah item detail |
| PUT | `/applicationsDetail/{id}` | Update item detail |
| DELETE | `/applicationsDetail/{id}` | Hapus item detail |

### Reporting
| Method | Path | Keterangan |
|---|---|---|
| GET | `/api/rekapitulasi/` | Rekapitulasi anggaran (opsional filter `unit_code`) |
| GET | `/api/budgetHistory/` | Riwayat perubahan anggaran |

> **Swagger UI tersedia di:** `http://localhost:8000/docs`

---

## Role & Hak Akses

| Role | ID | Akses |
|---|---|---|
| Admin | 1 | Full akses: kelola user, unit, semua permohonan, anggaran |
| Unit | 2 | Buat & kelola permohonan unit sendiri, lihat realisasi |
| Budget | 3 | Kelola & import data anggaran |

- Autentikasi menggunakan JWT dengan expiry **120 menit**
- Setiap route dilindungi guard komponen sesuai role (`adminAuth`, `unitAuth`, `budgetAuth`)

---

## Setup Development

### Prasyarat

- Python 3.x
- Node.js & npm
- MySQL atau Docker

---

### Opsi A: Menggunakan Docker (Direkomendasikan)

```bash
# Jalankan seluruh service (DB, Backend, Frontend, PhpMyAdmin)
docker-compose up --build
```

---

### Opsi B: Manual

#### 1. Backend

```bash
cd backend_pendamping

# Buat virtual environment
python -m venv .venv
source .venv/bin/activate        # Linux/macOS
.\.venv\Scripts\activate         # Windows

# Install dependensi
pip install -r requirements.txt

# Jalankan migrasi
alembic upgrade head

# Jalankan server (hot reload)
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

#### 2. Frontend

```bash
cd frontend_pendamping

npm install
npm run dev
```

---

## Setup Production

#### 1. Build Frontend

```bash
cd frontend_pendamping
npm run build
# Output tersimpan di dist/
```

#### 2. Jalankan Backend

```bash
cd backend_pendamping
pip install -r requirements.txt
alembic upgrade head
uvicorn app:app --host 0.0.0.0 --port 8000
```

#### 3. Docker Production

```bash
docker-compose -f docker-compose.prod.yml up --build
```

---

## Migrasi Database

```bash
cd backend_pendamping

# Generate migrasi baru (deteksi perubahan schema otomatis)
alembic revision --autogenerate -m "deskripsi perubahan"

# Terapkan migrasi
alembic upgrade head

# Rollback migrasi terakhir
alembic downgrade -1
```

---

## Menambahkan Modul/Menu Baru

### Menggunakan generator otomatis

```bash
python generate_module.py <nama_modul>
```

### Manual

#### Backend

1. Buat file berikut:
   - `backend_pendamping/models/<modul>.py`
   - `backend_pendamping/schemas/<modul>.py`
   - `backend_pendamping/cruds/<modul>.py`
   - `backend_pendamping/routers/<modul>.py`

2. Daftarkan router di `resources/routes.py`

3. Jalankan migrasi database:
   ```bash
   alembic revision --autogenerate -m "add <modul>"
   alembic upgrade head
   ```

#### Frontend

1. Buat file berikut:
   - `src/pages/<Modul>Page.tsx`
   - `src/api/<modul>/index.ts`

2. Tambahkan route di `src/main.tsx`

3. Tambahkan navigasi di komponen Navbar/Sidebar

4. (Opsional) Tambahkan konfigurasi di `src/constant.ts`

#### Alur Client–Server

```
Browser → src/api/<modul>/index.ts → routers/<modul>.py → cruds/<modul>.py → Database
```

---

## Konfigurasi Default

| Parameter | Nilai Default |
|---|---|
| Backend port | `8000` |
| Frontend port | `5173` |
| PhpMyAdmin port | `8080` |
| Database host (Docker) | `db_mysql` |
| Database name | `keuangan` |
| Database user | `keuangan` |
| Database password | `secret` |
| JWT expiry | 120 menit |
| Refresh token expiry | 7 hari |
| API base path | `/api` |
| Swagger UI | `http://localhost:8000/docs` |
