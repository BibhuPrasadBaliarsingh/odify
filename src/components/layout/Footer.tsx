import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { footerColumns, site, socialLinks } from '@/data/site'
import { scrollToTarget } from '@/lib/lenis'

export function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToTarget(href)
    }
  }

  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
        {/* Brand & Contact summary */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-bone">
            <span>{site.name.toUpperCase()}</span>
            <span className="h-2 w-2 rounded-full bg-signal" />
          </div>
          <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-bone-dim">
            Fast, scalable, and search-ready platforms crafted for businesses in Bhubaneswar and beyond.
          </p>

          <div className="flex flex-col gap-2 pt-2 text-xs">
            <div className="flex items-center gap-2 text-bone-dim">
              <MapPin size={14} className="text-signal shrink-0" />
              <span>{site.location}</span>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 font-display text-xs font-semibold text-bone hover:text-signal transition-colors w-fit"
            >
              <Mail size={14} className="text-signal shrink-0" />
              <span>{site.email}</span>
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-display text-xs font-semibold text-bone hover:text-signal transition-colors w-fit"
            >
              <Phone size={14} className="text-signal shrink-0" />
              <span>{site.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-xs text-bone-dim transition-colors hover:text-bone"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* 3 Nav Columns: Quick Links, Services, Industries */}
        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3.5">
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-bone">
              {col.heading}
            </span>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        handleLinkClick(link.href)
                      }
                    }}
                    className="text-xs text-bone-dim transition-colors hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <Container className="flex flex-col gap-4 border-t border-line-soft py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-bone-faint">
          &copy; {site.year} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#home" className="text-xs text-bone-faint transition-colors hover:text-bone-dim">
            Privacy Policy
          </a>
          <a href="#home" className="text-xs text-bone-faint transition-colors hover:text-bone-dim">
            Terms &amp; Conditions
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-xs text-bone-dim transition-colors hover:text-signal"
          >
            <Phone size={12} className="text-signal" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1 text-xs text-bone-dim transition-colors hover:text-signal"
          >
            {site.email}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
