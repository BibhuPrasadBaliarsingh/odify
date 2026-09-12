import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { navLinks, site } from '@/data/site'
import { useScrolled } from '@/hooks/useScrolled'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <Container className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
          <a href="#home" className="font-display text-xl font-semibold tracking-tight text-bone">
            {site.name.toUpperCase()}
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm text-bone-dim transition-colors duration-200 hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" variant="secondary" className="!px-5 !py-2.5 text-sm">
              Let's Talk
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>
      </div>

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
              <div className="pt-5">
                <Button href="#contact" onClick={() => setOpen(false)} className="w-full justify-center">
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
