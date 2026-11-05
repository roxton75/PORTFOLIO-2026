# PORTFOLIO-2026

> A portfolio site for **Rudraksh Ramekar** — Product Designer & Developer.

[![Deploy with Vercel](https://img.shields.io/badge/deploy-vercel-000?logo=vercel&logoColor=#fff)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/next.js-16-000000?logo=next.js&logoColor=#fff)](https://nextjs.org)

## Status

| Section | State |
| --- | --- |
| Hero | ✅ Complete |
| Navigation | ✅ Complete |
| Work / Projects | ⬜ Pending |
| Philosophy / Experience | ⬜ Pending |
| Contact | ⬜ Pending |

## Overview

This is the production portfolio for **2026** — exploring the intersection of
product design, technology, and thoughtful digital experiences. The site is
built with **Next.js 16 (App Router)** and styled with a custom design system
(Satoshi + JetBrains Mono, Tailwind v4, GSAP + Lenis smooth scroll, and a
custom WebGL `LightRays` background).

## Meta

- **Author:** Rudraksh Ramekar (`rudrx75`)
- **Year:** 2026
- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · GSAP 3 · Lenis · Motion (motion/react)
- **Fonts:** Satoshi Variable, JetBrains Mono (local, `next/font`)
- **Design direction:** Swiss matrix / design direction

## Getting Started

```bash
# install
npm install

# dev server
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # root layout + metadata
│   ├── page.tsx            # home → Hero
│   ├── providers.tsx       # Lenis smooth scroll provider
│   └── globals.css         # design tokens + reset
├── components/
│   ├── hero/               # Hero + navbar
│   ├── LightRays.tsx       # WebGL light-ray background
│   └── ui/
├── lib/
│   └── gsap.ts            # GSAP + ScrollTrigger registration
├── public/
│   ├── fonts/              # Satoshi, JetBrains Mono
│   └── img/                # avatar, resume preview, satin texture
└── ...
```

## Branch Strategy

| Branch | Purpose |
| --- | --- |
| `main` | Production — what is live |
| `dev` | Development — CI/CD runs here (builds, previews) |

Merge `dev` → `main` when promoting to production.

## Deploy

Deploy to Vercel from the `main` branch:

```bash
vercel --prod
```

## License

MIT — © 2026 rudrx_75. See [LICENSE](./LICENSE).