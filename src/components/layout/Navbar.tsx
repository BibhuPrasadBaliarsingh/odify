import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
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
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-line/80 bg-white/85 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <Container
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3.5' : 'py-5 sm:py-6'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="group flex items-center gap-1.5 font-display text-xl font-semibold tracking-tight text-bone"
          >
            <span>{site.name.toUpperCase()}</span>
            <span className="h-2 w-2 rounded-full bg-signal shadow-xs transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
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
              className="!px-5 !py-2.5 text-sm"
              onClick={() => handleNavClick('#contact')}
            >
              Let's Talk
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-bone shadow-xs transition-colors hover:border-signal lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-white/95 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center justify-between border-b border-line-soft py-3.5 font-display text-base font-medium text-bone hover:text-signal-soft"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-bone-faint font-mono">0{i + 1}</span>
                </motion.a>
              ))}
              <div className="pt-5">
                <Button
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="w-full justify-center"
                >
                  Start a Project
                  <ArrowRight size={15} />
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
