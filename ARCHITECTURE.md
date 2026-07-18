# ARCHITECTURE.md

## Ringkasan
Migrasi `ogisetiawan.github.io` dari static HTML/CSS/jQuery/Bootstrap ke
**Astro** (SSG — Static Site Generation), dipertahankan static-first tapi
dengan content management yang lebih maintainable dan SEO/performance yang
lebih baik. Bukan SPA, bukan SSR penuh — output tetap file HTML statis di
build time, di-deploy ke Vercel/Netlify (bukan GitHub Pages lagi).

## Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | Astro | Static-first, minimal JS, cocok content-heavy site |
| Styling | Tailwind CSS | Utility-first, konsisten, gampang refactor dari Bootstrap |
| Content | Astro Content Collections (Markdown/MDX + Zod schema) | Type-safe, gampang diupdate tanpa sentuh komponen |
| Interaktivitas | Astro Islands (`client:visible`/`client:load` selektif) | Hanya hydrate komponen yang benar-benar butuh (carousel, filter, form) |
| Contact form | Web3Forms / Formspree | Static site tidak punya backend — pakai third-party form endpoint |
| Artikel blog | dev.to API (fetch saat build time) | Auto-sync tanpa duplikasi konten manual |
| SEO tooling | `@astrojs/sitemap`, custom `<SEO />` component, JSON-LD | Sitemap otomatis, meta tags konsisten, structured data |
| Image | `astro:assets` (`<Image />`) | Optimasi otomatis (format, lazy load, sizing) |

## Struktur Folder

```
/
├── AGENTS.md
├── ARCHITECTURE.md
├── astro.config.mjs
├── tailwind.config.mjs
├── .env.example
├── .cursorignore
├── .cursor/
│   ├── rules/
│   └── skills/
├── legacy/                      # backup HTML lama, referensi konten SAJA
├── public/
│   ├── cv/ogi-setiawan-cv.pdf   # CV di-hosting sendiri (bukan link LinkedIn temp)
│   ├── robots.txt
│   └── images/                  # gambar project, dioptimasi lewat astro:assets
└── src/
    ├── content/
    │   ├── config.ts            # Zod schema semua collection
    │   ├── projects/            # satu .md per project
    │   ├── experience/          # satu .md per pekerjaan
    │   └── certifications/      # satu .md per sertifikasi
    ├── components/
    │   ├── SEO.astro            # satu komponen SEO reusable, dipakai semua page
    │   ├── ui/                  # Button, Card, Badge, Modal — reusable
    │   └── sections/            # Hero, About, Skills, Portfolio, Blog, Contact
    ├── layouts/
    │   └── BaseLayout.astro     # head/meta/nav/footer umum
    ├── pages/
    │   ├── index.astro          # single-page portfolio (sesuai versi lama)
    │   ├── projects/[slug].astro # detail page per project (upgrade dari modal)
    │   └── blog/index.astro     # daftar artikel dev.to
    └── lib/
        ├── devto.ts             # fetch + tipe data dev.to API
        └── seo-defaults.ts      # default meta title/description per section
```

## Alur Data

1. **Build time**: Astro membaca `src/content/*` (Markdown lokal) DAN fetch
   dev.to API sekali saat build → semua digabung jadi HTML statis.
2. **Update konten baru** (project baru, artikel baru): edit Markdown lokal
   ATAU tulis artikel baru di dev.to → trigger rebuild (manual atau webhook)
   → situs otomatis terupdate tanpa deploy manual sentuh kode.
3. **Contact form**: submit form → POST langsung ke Web3Forms/Formspree
   endpoint dari client — tidak butuh backend sendiri.

## Keputusan yang Sudah Diambil (jangan didebat ulang tanpa alasan baru)
- **Astro**, bukan Next.js — situs ini content-heavy tanpa kebutuhan dynamic
  route/auth/database, Next.js overkill untuk use case ini.
- **SSG penuh**, bukan SSR — tidak ada personalisasi per-user, jadi static
  output lebih cepat dan lebih murah untuk SEO.