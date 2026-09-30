interface GlowOrbProps {
  className?: string
  size?: number
}

export function GlowOrb({ className = '', size = 480 }: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[100px] ${className}`}
      style={{
        width: size,
        height: size,
        background:
          'radial-gradient(circle at 40% 40%, rgba(245,158,11,0.22), rgba(251,191,36,0.12) 45%, rgba(245,158,11,0) 70%)',
      }}
    />
  )
}
