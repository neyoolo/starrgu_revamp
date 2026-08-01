# Starrgu — AI Infrastructure & Media Technology

A production-grade marketing site for **Starrgu**, showcasing vertically integrated AI operating systems, broadcast distribution, and competitive media infrastructure. Built with React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Live Demo

```bash
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Lint | Oxlint |

## Features

- **Hero** — 3D-tilt media card with live video, word-reveal headline, gradient CTA
- **Metrics strip** — animated counters (1.2M+ sessions, <12ms latency, 99.997% SLA)
- **Partner marquee** — infinite-scroll ticker
- **Bento grid** — six product cards with live terminal simulation, sparklines, video player
- **Infrastructure model** — four-layer architecture walkthrough
- **Technical section** — architecture comparison + interactive metrics tabs
- **About section** — company positioning with stat cards
- **Contact drawer** — investor/enterprise inquiry form with success state
- **Legal modals** — Privacy, Terms, Cookies, DPA
- **Mobile navigation** — full-screen overlay menu
- **Dark/light theme** — persisted via localStorage
- **Custom cursor** — halo trail on desktop
- **Scroll progress bar** — gradient indicator

## Project Structure

```
src/
├── components/     # UI sections (Hero, BentoGrid, Navbar, etc.)
├── lib/assets.ts   # Centralised public asset paths
├── App.tsx         # Root layout & global effects
├── index.css       # Design tokens, glass cards, animations
└── main.tsx        # Entry point
public/
├── Starrgu Images/ # Brand photography & video
└── Starrgu Logos/  # Logo variants
```

## Deployment

Build output goes to `dist/`. Deploy to any static host:

```bash
npm run build
# Deploy dist/ to Vercel, Netlify, Cloudflare Pages, etc.
```

## Design

Based on the Starrgu brand system: void black (`#05060A`), brand blue (`#0222F1`), aqua (`#27E2D8`), orange (`#F53A0F`), gold (`#FCAE04`).

---

Built in the United Kingdom · Starrgu Ltd
