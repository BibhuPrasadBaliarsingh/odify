interface GlowOrbProps {
  className?: string
  size?: number
  gradient?: string
}

export function GlowOrb({ className = '', size = 480, gradient }: GlowOrbProps) {
  const bg =
    gradient ||
    'radial-gradient(circle at 45% 45%, rgba(255,49,49,0.38) 0%, rgba(255,145,77,0.28) 45%, rgba(255,145,77,0) 72%)'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[80px] sm:blur-[110px] ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
      }}
    />
  )
}
