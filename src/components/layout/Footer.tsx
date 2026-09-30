import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { footerColumns, site, socialLinks } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10 lg:py-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-1.5 font-display text-2xl font-semibold tracking-tight text-bone">
            <span>{site.name.toUpperCase()}</span>
            <span className="h-2 w-2 rounded-full bg-signal" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-bone-dim">{site.tagline}</p>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 font-display text-sm font-semibold text-bone hover:text-signal-soft transition-colors w-fit"
            >
              <Mail size={15} className="text-signal-soft" />
              <span>{site.email}</span>
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-display text-sm font-semibold text-bone hover:text-signal-soft transition-colors w-fit"
            >
              <Phone size={15} className="text-signal-soft" />
              <span>{site.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 pt-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-sm text-bone-dim transition-colors hover:text-bone"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-4">
            <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-bone-faint">
              {col.heading}
            </span>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <Container className="flex flex-col gap-4 border-t border-line-soft py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-bone-faint">
          &copy; {site.year} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#" className="text-xs text-bone-faint transition-colors hover:text-bone-dim">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-bone-faint transition-colors hover:text-bone-dim">
            Terms &amp; Conditions
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-xs text-bone-dim transition-colors hover:text-signal-soft"
          >
            <Phone size={12} className="text-signal-soft" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1 text-xs text-bone-dim transition-colors hover:text-signal-soft"
          >
            {site.email}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
