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
          'radial-gradient(circle at 30% 30%, rgba(77,91,255,0.35), rgba(77,91,255,0) 70%)',
      }}
    />
  )
}
