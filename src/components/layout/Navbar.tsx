import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { navLinks, site } from '@/data/site'
import { useScrolled } from '@/hooks/useScrolled'
import { useTheme } from '@/hooks/useTheme'

// -------------------------------------------------------------
// TRADITIONAL TERRACOTTA ROYAL ELEPHANT & APPLIQUÉ NAVBAR EMBROIDERY
// -------------------------------------------------------------
function NavbarEmbroidery({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden select-none">
      {/* Horizontal Continuous Terracotta Embroidery Running Stitch */}
      <div className="relative h-[8px] w-full flex items-center justify-between">
        <svg
          className="absolute inset-0 h-full w-full text-signal-soft"
          preserveAspectRatio="none"
          viewBox="0 0 1200 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Stitch Rail */}
          <line x1="0" y1="4" x2="1200" y2="4" stroke="currentColor" strokeWidth="1" strokeOpacity={scrolled ? 0.7 : 0.4} />
          {/* Dashed Needlework Line */}
          <line x1="0" y1="4" x2="1200" y2="4" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" strokeOpacity={scrolled ? 0.9 : 0.6} />
          {/* Repeating Terracotta Temple Spikes (Shikhara Motifs) */}
          <path
            d="M300 1 L 304 7 L 308 1 M 600 1 L 604 7 L 608 1 M 900 1 L 904 7 L 908 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Left Terracotta Mini Elephant & Finial Knot */}
        <div className="relative z-10 flex items-center gap-1.5 pl-3 sm:pl-6 text-signal-soft">
          {/* Micro Terracotta Elephant Silhouette */}
          <svg width="18" height="14" viewBox="0 0 24 18" fill="none" className="opacity-90">
            <path
              d="M4 14 C 3 14 2 12 2 10 C 2 7 4 5 7 4.5 C 9 4 10.5 3 11.5 2 C 12.5 1 14 0.5 15 1 C 16 1.5 15.5 3 15 4 C 14 5 13 6 13 7.5 C 13 8.5 14 9.5 15 10 C 16 11 17 12 17 13 L 16 17 C 16 17.5 15.5 18 15 18 L 13 18 C 12.5 18 12 17.5 12 17 L 12 14.5 L 9 14.5 L 9 17 C 9 17.5 8.5 18 8 18 L 6 18 C 5.5 18 5 17.5 5 17 Z"
              fill="currentColor"
            />
            <circle cx="15.5" cy="1" r="0.8" fill="currentColor" />
          </svg>
          <span className="h-1.5 w-1.5 rotate-45 border border-current bg-surface shadow-xs" />
        </div>

        {/* Center Diamond Embroidery Crest */}
        <div className="relative z-10 hidden sm:flex items-center gap-2 text-signal-soft">
          <span className="font-mono text-[8px] font-bold opacity-60">✕</span>
          <span className="h-2.5 w-2.5 rotate-45 border border-current bg-surface shadow-xs flex items-center justify-center">
            <span className="h-1 w-1 rounded-full bg-current" />
          </span>
          <span className="font-mono text-[8px] font-bold opacity-60">✕</span>
        </div>

        {/* Right Terracotta Mini Elephant (Mirrored) & Finial Knot */}
        <div className="relative z-10 flex items-center gap-1.5 pr-3 sm:pr-6 text-signal-soft">
          <span className="h-1.5 w-1.5 rotate-45 border border-current bg-surface shadow-xs" />
          {/* Micro Terracotta Elephant Silhouette (Mirrored) */}
          <svg width="18" height="14" viewBox="0 0 24 18" fill="none" className="opacity-90 scale-x-[-1]">
            <path
              d="M4 14 C 3 14 2 12 2 10 C 2 7 4 5 7 4.5 C 9 4 10.5 3 11.5 2 C 12.5 1 14 0.5 15 1 C 16 1.5 15.5 3 15 4 C 14 5 13 6 13 7.5 C 13 8.5 14 9.5 15 10 C 16 11 17 12 17 13 L 16 17 C 16 17.5 15.5 18 15 18 L 13 18 C 12.5 18 12 17.5 12 17 L 12 14.5 L 9 14.5 L 9 17 C 9 17.5 8.5 18 8 18 L 6 18 C 5.5 18 5 17.5 5 17 Z"
              fill="currentColor"
            />
            <circle cx="15.5" cy="1" r="0.8" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative transition-all duration-500 ${
          scrolled
            ? 'border-b border-line bg-ink/90 backdrop-blur-xl shadow-lg'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        {/* Horizontal Terracotta Embroidery Ribbon on Navbar */}
        <NavbarEmbroidery scrolled={scrolled} />

        <Container className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3.5' : 'py-5'}`}>
          {/* Logo with Terracotta Elephant & Appliqué Bracket */}
          <div className="relative group flex items-center gap-2.5">
            {/* Logo Embroidery Corner Bracket */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute -left-2.5 -top-2.5 text-signal-soft/70"
            >
              <path d="M1 12 V 4 C 1 2.343 2.343 1 4 1 H 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="1" cy="1" r="1.5" fill="currentColor" />
            </svg>

            <a href="#home" className="font-display text-xl font-semibold tracking-tight text-bone flex items-center gap-2">
              <span className="flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-signal text-white text-xs font-bold font-display shadow-md shadow-signal/30 ring-1 ring-signal-soft/40">
                O
              </span>

              {/* Terracotta Royal Elephant Emblem Icon in Brand Mark */}
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal/15 text-signal-soft border border-signal-soft/30 shadow-xs" title="Odisha Terracotta Heritage Emblem">
                <svg width="15" height="12" viewBox="0 0 24 18" fill="none">
                  <path
                    d="M4 14 C 3 14 2 12 2 10 C 2 7 4 5 7 4.5 C 9 4 10.5 3 11.5 2 C 12.5 1 14 0.5 15 1 C 16 1.5 15.5 3 15 4 C 14 5 13 6 13 7.5 C 13 8.5 14 9.5 15 10 C 16 11 17 12 17 13 L 16 17 C 16 17.5 15.5 18 15 18 L 13 18 C 12.5 18 12 17.5 12 17 L 12 14.5 L 9 14.5 L 9 17 C 9 17.5 8.5 18 8 18 L 6 18 C 5.5 18 5 17.5 5 17 Z"
                    fill="currentColor"
                  />
                  <circle cx="15.5" cy="1" r="0.9" fill="currentColor" />
                </svg>
              </span>

              <span>{site.name.toUpperCase()}</span>
            </a>
          </div>

          {/* Nav Links with Embroidery Stitch Highlights */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-display text-sm text-bone-dim transition-colors duration-200 hover:text-bone py-1"
              >
                <span>{link.label}</span>
                {/* Hover Embroidery Stitch Dot */}
                <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rotate-45 rounded-xs bg-signal-soft opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle & CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-bone transition-colors hover:border-signal-soft hover:text-signal shadow-xs"
            >
              {theme === 'dark' ? (
                <Sun size={17} className="text-yellow-400 transition-transform" />
              ) : (
                <Moon size={17} className="text-signal transition-transform" />
              )}
            </motion.button>

            <Button href="#contact" variant="secondary" className="!px-5 !py-2.5 text-sm shadow-xs">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone"
            >
              {theme === 'dark' ? (
                <Sun size={17} className="text-yellow-400" />
              ) : (
                <Moon size={17} className="text-signal" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-b border-line-soft py-4 font-display text-lg text-bone"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-5 flex items-center justify-between gap-4">
                <Button href="#contact" onClick={() => setOpen(false)} className="flex-1 justify-center">
                  Let's Talk
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
