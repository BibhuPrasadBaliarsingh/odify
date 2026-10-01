import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { navLinks, site } from '@/data/site'
import { useScrolled } from '@/hooks/useScrolled'
import { scrollToTarget } from '@/lib/lenis'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // 1. Navbar fades/slides into position on load
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.05 }
      )
    }
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('#')) {
      scrollToTarget(href)
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300 pointer-events-none"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-12 pt-3 sm:pt-4 pointer-events-auto">
        <div
          className={`flex items-center justify-between rounded-2xl sm:rounded-full border transition-all duration-500 px-5 sm:px-7 py-3 ${
            scrolled
              ? 'border-bone/10 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl'
              : 'border-bone/10 bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md'
          }`}
        >
          {/* Brand Logo on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="group flex items-center gap-1.5 font-display text-lg sm:text-xl font-bold tracking-tight text-bone"
          >
            <span>{site.name.toUpperCase()}</span>
            <span className="h-2 w-2 rounded-full bg-signal shadow-xs transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="relative font-display text-sm font-medium text-bone-dim transition-colors duration-200 hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              className="!px-5 !py-2.5 text-xs sm:text-sm !font-semibold"
              onClick={() => handleNavClick('#contact')}
            >
              Let's Talk
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Trigger on Right */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-bone/10 bg-surface text-bone shadow-2xs transition-colors hover:border-signal lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mt-2 overflow-hidden rounded-2xl border border-bone/10 bg-white/98 p-5 shadow-xl backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                    className="flex items-center justify-between border-b border-line-soft py-3 font-display text-sm font-medium text-bone hover:text-signal-soft"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-bone-faint font-mono">0{i + 1}</span>
                  </motion.a>
                ))}
                <div className="pt-4">
                  <Button
                    href="#contact"
                    onClick={() => handleNavClick('#contact')}
                    className="w-full justify-center !py-3 text-sm font-semibold"
                  >
                    Start a Project
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
