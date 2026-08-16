# Stanley Gerson — Developer Portfolio

A modern, responsive, accessible, interview-ready portfolio for Stanley Gerson,
an early-career software developer. Built with **React + Vite**, frontend-only,
deployable to Vercel or Netlify.

> Content is honest by design: no invented metrics, no exaggerated seniority.
> The flagship case study (200 CEOs Business Forum) is written from the actual
> project source code.

## Tech stack

- React 18 + Vite 5
- Plain JavaScript (no TypeScript)
- Plain CSS with custom properties (single global stylesheet, no framework)

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build locally
npm run lint    # ESLint check
```

## Project structure

```
├── public/
│   ├── favicon.svg
│   ├── 404.html           # styled 404 (served by static hosts)
│   ├── robots.txt
│   ├── sitemap.xml        # update domain after deploying
│   └── images/            # screenshots & OG cover
└── src/
    ├── components/        # Navbar, Hero, About, Skills, FeaturedProject,
    │                      # CaseStudy, Contact, Footer
    ├── data/
    │   ├── site.js        # name, email, GitHub, LinkedIn, nav — EDIT HERE
    │   ├── skills.js      # skill groups + honest proficiency levels
    │   └── projects.js    # featured project + full case study content
    ├── hooks/useReveal.js # scroll-reveal (respects reduced motion)
    ├── App.jsx
    ├── main.jsx
    └── index.css          # design system (tokens, type, layout)
```

## Editing content

| What | Where |
|------|-------|
| Name, email, GitHub, LinkedIn, nav | `src/data/site.js` |
| Skills and proficiency labels | `src/data/skills.js` |
| Featured project & case study copy | `src/data/projects.js` |
| Site title, meta description, OG tags | `index.html` |
| Colors, fonts, spacing | `src/index.css` (`:root` tokens) |

Project screenshots live in `public/images/`. To use better screenshots, drop
new PNGs in there and update the paths in `src/data/projects.js` and
`src/components/CaseStudy.jsx`.

## Deployment

The portfolio is fully static — no backend, no environment variables required.

### Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**.
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. The custom `404.html` is served automatically.

### Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, **Add new site** → **Import an existing project** → your repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

No SPA fallback configuration is needed — this site uses anchor navigation,
not client-side routes.

### After deploying

- Replace the placeholder domain **`https://stanleygerson.dev/`** in:
  - `index.html` (canonical URL, Open Graph `og:url`, JSON-LD `url`)
  - `public/robots.txt` (sitemap reference)
  - `public/sitemap.xml`
  - `src/data/site.js` (`siteUrl`)

## Design notes

- **Premium editorial** aesthetic: Fraunces serif display + Inter body,
  warm paper background, single restrained accent (terracotta).
- Mobile-first, semantic HTML, keyboard-navigable, visible focus states,
  skip link, and full `prefers-reduced-motion` support.
- The case study section uses a dark surface with the forum's gold accent —
  a deliberate nod to the client brand.
- No skill percentage bars (per the PRD).

## Definition of done checklist

- [x] Production build passes (`npm run build`)
- [x] Responsive on mobile / tablet / desktop
- [x] No broken links or missing assets
- [x] Accessible navigation (skip link, focus states, aria labels)
- [x] SEO metadata (title, description, Open Graph, JSON-LD)
- [x] Strong, honest 200 CEOs case study
- [x] Working contact links
- [x] README + deployment instructions
