import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { trustLogos } from '@/data/site'

// NOTE: the marks below are illustrative placeholder brands, not real clients.
export function TrustBar() {
  const loop = [...trustLogos, ...trustLogos]

  return (
    <section className="border-y border-line-soft py-12">
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <p className="text-center text-sm text-bone-faint">
            Trusted by ambitious businesses and growing brands
          </p>
          <div className="no-scrollbar w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16">
              {loop.map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  className="font-display text-2xl font-semibold tracking-tight text-bone-faint"
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
