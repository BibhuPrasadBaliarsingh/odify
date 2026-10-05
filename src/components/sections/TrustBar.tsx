import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { servicePills, trustLogos } from '@/data/site'

export function TrustBar() {
  const brandLoop = [...trustLogos, ...trustLogos]
  const pillsLoop = [...servicePills, ...servicePills, ...servicePills]

  return (
    <section className="border-y border-line-soft py-10 bg-surface/50">
      <Container className="flex flex-col gap-8">
        {/* Capability Services Ticker Strip */}
        <div className="no-scrollbar w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-6">
            {pillsLoop.map((pill, i) => (
              <span
                key={`${pill}-${i}`}
                className="inline-flex items-center gap-3 font-display text-xs font-semibold tracking-wider uppercase text-bone-dim"
              >
                <span>{pill}</span>
                <span className="h-1 w-1 rounded-full bg-signal" />
              </span>
            ))}
          </div>
        </div>

        {/* Brand Logos Row */}
        <Reveal className="flex flex-col items-center gap-5 pt-2">
          <p className="text-center text-xs uppercase tracking-widest font-semibold text-bone-faint">
            Trusted by ambitious businesses and scaling teams
          </p>
          <div className="no-scrollbar w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16">
              {brandLoop.map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="font-display text-xl sm:text-2xl font-bold tracking-tight text-bone-faint/60 hover:text-bone transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
