# Odify — Digital Agency Website

A premium, component-based marketing site for **Odify**, built with React 19, Vite, TypeScript, Tailwind CSS v4, React Router and Framer Motion.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (CSS-first theme config in `src/index.css`)
- **React Router v7** — `createBrowserRouter` + `RouterProvider`
- **Framer Motion** — scroll reveals, hover interactions, hero animation
- **Lucide React** — icons
- Self-hosted variable fonts via `@fontsource` (Space Grotesk, Manrope, Instrument Serif) — no external font requests at runtime

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build
npm run lint       # oxlint
```

## Project Structure

```
src/
  data/            Central, editable content (site config, services, projects, process)
  components/
    ui/            Reusable primitives (Button, Container, SectionHeading, Reveal, GlowOrb)
    layout/        Navbar, Footer, Layout (wraps <Outlet />)
    sections/      One component per homepage section (Hero, Services, Work, Contact, etc.)
  hooks/           useScrolled
  pages/           Home, NotFound
  router.tsx       Route definitions
  App.tsx          RouterProvider entry
  index.css        Tailwind import + design tokens (@theme)
public/            favicon, robots.txt, sitemap.xml
```

## Editing Content

Nearly all copy lives in `src/data/`:

- `site.ts` — brand name, email, nav links, footer links, trust-bar placeholder logos, "Why Odify" copy, project-type dropdown options
- `services.ts` — the 6 service cards
- `projects.ts` — the case-study cards (abstract gradient mockups are generated from the `hue` value — swap in real project imagery here later)
- `process.ts` — the 6-step process timeline

No fabricated stats, testimonials, or client claims are used anywhere — trust-bar logos are clearly placeholder word-marks.

## Notes

- Contact form includes client-side validation; wire the `handleSubmit` function in `src/components/sections/Contact.tsx` up to your backend/email service of choice.
- All animations respect `prefers-reduced-motion`.
- Fully responsive from 360px to 1920px+.
