import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32">
      <Container className="flex flex-col items-start gap-6">
        <span className="font-display text-sm uppercase tracking-[0.28em] text-bone-faint">
          404
        </span>
        <h1 className="font-display text-4xl font-medium text-bone sm:text-5xl">
          This page doesn't exist.
        </h1>
        <p className="max-w-md text-bone-dim">
          The page you're looking for may have moved or never existed. Let's get you back home.
        </p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-2 font-display text-sm text-bone underline decoration-line underline-offset-4 hover:text-signal-soft"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>
      </Container>
    </section>
  )
}
