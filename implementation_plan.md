# Implementation Plan: Migration to Next.js
**Project:** annisabaizan.github.io  
**Date:** 2026-04-02  
**Theme:** Galaxy × Harry Potter  

---

## Goals
- Migrate from vanilla HTML/CSS/JS → Next.js 15 (App Router) + TypeScript
- Tetap deploy ke GitHub Pages via static export (`output: 'export'`)
- Pertahankan semua visual: Galaxy dark theme, Cinzel/Crimson Text fonts, animasi, custom cursor
- Struktur scalable untuk project pages, blog, events yang akan terus bertambah

---

## Tech Stack

| Layer | Choice | Alasan |
|---|---|---|
| Framework | Next.js 15 (App Router) | File-based routing, static export, future-proof |
| Language | TypeScript | Type safety saat project makin besar |
| Styling | CSS Modules + globals.css | Pertahankan CSS variables yang sudah ada |
| Fonts | `next/font/google` | Optimized loading, no FOUC |
| Deployment | GitHub Actions → GitHub Pages | Tetap di annisabaizan.github.io |
| Animations | React hooks (useEffect) | Convert stars.js, cursor.js, effects.js |

---

## Struktur Direktori (Target)

```
annisabaizan.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: Nav, Footer, StarCanvas, Cursor
│   │   ├── page.tsx                # Home (index.html)
│   │   ├── about/
│   │   │   └── page.tsx            # about.html
│   │   ├── links/
│   │   │   └── page.tsx            # links.html
│   │   ├── projects/
│   │   │   ├── page.tsx            # daftar semua project
│   │   │   └── [slug]/
│   │   │       ├── page.tsx        # project hub
│   │   │       ├── docs/page.tsx
│   │   │       ├── presentations/
│   │   │       │   └── [id]/page.tsx
│   │   │       └── demo/
│   │   │           └── [id]/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx            # blog index
│   │   │   └── [slug]/page.tsx     # individual post (MDX ready)
│   │   ├── events/
│   │   │   └── [type]/
│   │   │       └── [slug]/page.tsx # birthdays, weddings
│   │   └── labs/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Nav.tsx                 # Fixed nav dengan hamburger
│   │   ├── Footer.tsx
│   │   ├── StarCanvas.tsx          # stars.js → React canvas hook
│   │   ├── Cursor.tsx              # cursor.js → React component
│   │   ├── MusicPlayer.tsx         # music-player.js → React state
│   │   ├── FloatingRunes.tsx       # floating rune effects
│   │   └── MobileOverlay.tsx       # mobile nav overlay
│   │
│   ├── hooks/
│   │   ├── useStars.ts             # star canvas logic
│   │   └── useCursor.ts            # custom cursor logic
│   │
│   ├── data/
│   │   ├── projects.ts             # metadata semua 10 project
│   │   └── blog.ts                 # blog post metadata
│   │
│   └── styles/
│       └── globals.css             # semua CSS variables + galaxy theme
│
├── public/
│   ├── assets/images/              # pindah dari assets/images
│   ├── favicon.ico
│   └── fonts/                      # fallback fonts jika perlu
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml              # GitHub Actions: build → deploy gh-pages
```

---

## Fase Eksekusi

### Phase 1 — Setup (Fondasi)
- [ ] `npx create-next-app@latest` di direktori saat ini
- [ ] Konfigurasi `next.config.ts`: `output: 'export'`, `basePath`, `trailingSlash`
- [ ] Setup GitHub Actions workflow untuk auto-deploy ke `gh-pages` branch
- [ ] Pindahkan `assets/images/` → `public/`

### Phase 2 — Design System
- [ ] Migrate semua CSS variables ke `src/styles/globals.css`
- [ ] Setup `next/font/google` untuk Cinzel, Crimson Text, Fira Code
- [ ] Import galaxy.css keyframes ke globals
- [ ] Pastikan semua CSS tokens tersedia global

### Phase 3 — Core Components
- [ ] `StarCanvas.tsx` — canvas bintang via `useEffect`
- [ ] `Cursor.tsx` — custom cursor (wand sparkle)
- [ ] `Nav.tsx` — fixed nav, hamburger, mobile overlay
- [ ] `Footer.tsx`
- [ ] `MusicPlayer.tsx`
- [ ] `FloatingRunes.tsx`
- [ ] Root `layout.tsx` yang menyatukan semua komponen

### Phase 4 — Halaman Utama
- [ ] `app/page.tsx` — Home (nebula orbs, hero, sections)
- [ ] `app/about/page.tsx` — About (ab-hero, strengths, friends)
- [ ] `app/links/page.tsx` — Links/contact

### Phase 5 — Projects
- [ ] `src/data/projects.ts` — data 10 project
- [ ] `app/projects/page.tsx` — project list page
- [ ] `app/projects/[slug]/page.tsx` — project hub template
- [ ] Migrate simkesgi, workplaceeval, dan 8 project lainnya

### Phase 6 — Blog, Events, Labs
- [ ] `app/blog/page.tsx` — blog index
- [ ] `app/events/[type]/[slug]/page.tsx` — event template
- [ ] `app/labs/page.tsx`

### Phase 7 — Verify & Deploy
- [ ] Test `next build` → pastikan static export berjalan
- [ ] Test semua route
- [ ] Push → trigger GitHub Actions → live di GitHub Pages
- [ ] Hapus file HTML lama

---

## Catatan Penting
- File HTML lama **tidak dihapus** sampai Phase 7 selesai — sebagai backup
- CSS variables tidak berubah sama sekali — hanya dipindah ke globals.css
- Animasi JS diconvert ke React hooks dengan `useEffect` + cleanup
- `cursor: none` tetap dipertahankan di body
- `lang="id"` tetap di root layout

---

## Pertanyaan untuk Konfirmasi
1. Apakah blog post akan dibuat dari MDX file, atau tetap hardcode di TSX?
2. Project yang ada (simkesgi, workplaceeval, dll) — kontennya tetap atau mau di-redesign juga?
3. Musik player — lagu yang sekarang dipakai tetap?
