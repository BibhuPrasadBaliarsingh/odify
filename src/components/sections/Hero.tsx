import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Battery,
  Boxes,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Globe,
  Hand,
  Layers,
  Lock,
  Monitor,
  Palette,
  RefreshCw,
  RotateCw,
  Server,
  Smartphone,
  Sparkles,
  Tablet,
  Terminal,
  TrendingUp,
  Wifi,
  Wind,
  Zap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const easing = [0.22, 1, 0.36, 1] as const

type ViewportMode = 'desktop' | 'tablet' | 'mobile'
type ThemeAccent = 'signal' | 'emerald' | 'violet' | 'amber'

const accents: Record<ThemeAccent, { name: string; hex: string; glow: string; soft: string }> = {
  signal: { name: 'Brand Signal', hex: 'var(--color-signal)', glow: 'var(--color-signal-dim)', soft: 'var(--color-signal-soft)' },
  emerald: { name: 'Emerald', hex: '#10b981', glow: 'rgba(16, 185, 129, 0.35)', soft: '#34d399' },
  violet: { name: 'Violet', hex: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.35)', soft: '#a78bfa' },
  amber: { name: 'Solar Amber', hex: '#f59e0b', glow: 'rgba(245, 158, 11, 0.35)', soft: '#fbbf24' },
}

// -------------------------------------------------------------
// CARD 1: PERFECTED INTERACTIVE STUDIO & RESPONSIVE VIEWPORT ENGINE
// -------------------------------------------------------------
function CardStudio({ accent, setAccent }: { accent: ThemeAccent; setAccent: (a: ThemeAccent) => void }) {
  const [viewport, setViewport] = useState<ViewportMode>('desktop')
  const [simulatedMetric, setSimulatedMetric] = useState(99.6)
  const [activeTab, setActiveTab] = useState<'preview' | 'components' | 'telemetry'>('preview')
  const [isReloading, setIsReloading] = useState(false)
  const [interactiveCounter, setInteractiveCounter] = useState(148)
  const [componentToggle, setComponentToggle] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const width = (canvas.width = canvas.offsetWidth * 2)
    const height = (canvas.height = canvas.offsetHeight * 2)
    let step = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      step += 0.014

      ctx.strokeStyle = accents[accent].hex
      ctx.globalAlpha = 0.08
      ctx.lineWidth = 1.5

      const cols = 8
      const rows = 6
      const colGap = width / cols
      const rowGap = height / rows

      for (let i = 0; i <= cols; i++) {
        const x = i * colGap
        ctx.beginPath()
        for (let j = 0; j <= rows; j++) {
          const y = j * rowGap + Math.sin(step + (i + j) * 0.4) * 10
          if (j === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animationFrameId)
  }, [accent])

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedMetric((prev) => {
        const jitter = (Math.random() - 0.5) * 0.2
        return +(Math.min(99.9, Math.max(99.2, prev + jitter))).toFixed(1)
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const handleReload = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsReloading(true)
    setTimeout(() => setIsReloading(false), 450)
  }

  const currentAccent = accents[accent]

  return (
    <div className="relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />

      {/* Studio Header Bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-2.5 border-b border-line-soft pb-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-xs" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 shadow-xs" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 shadow-xs" />
          <span className="ml-1 font-mono text-[11px] text-bone-faint font-medium">odify://studio.engine</span>
        </div>

        {/* Viewport Resizer Controls */}
        <div className="flex items-center rounded-xl border border-line-soft bg-ink/70 p-1">
          {(['desktop', 'tablet', 'mobile'] as ViewportMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setViewport(mode)
              }}
              className={`flex h-6.5 w-6.5 items-center justify-center rounded-lg transition-all ${
                viewport === mode
                  ? 'bg-bone text-ink shadow-sm scale-105 font-bold'
                  : 'text-bone-dim hover:text-bone'
              }`}
              title={`Switch to ${mode} viewport`}
            >
              {mode === 'desktop' && <Monitor size={13} />}
              {mode === 'tablet' && <Tablet size={13} />}
              {mode === 'mobile' && <Smartphone size={13} />}
            </button>
          ))}
        </div>

        {/* Real-time Accent Palette Switcher */}
        <div className="flex items-center gap-1.5 rounded-full border border-line-soft bg-ink/70 px-2.5 py-1">
          <Palette size={11} className="text-bone-faint mr-0.5" />
          {(['signal', 'emerald', 'violet', 'amber'] as ThemeAccent[]).map((col) => (
            <button
              key={col}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setAccent(col)
              }}
              style={{ backgroundColor: accents[col].hex }}
              className={`h-3.5 w-3.5 rounded-full transition-transform ${
                accent === col ? 'scale-125 ring-2 ring-bone ring-offset-1 ring-offset-surface shadow-xs' : 'opacity-60 hover:opacity-100'
              }`}
              title={`Switch theme accent to ${accents[col].name}`}
            />
          ))}
        </div>
      </div>

      {/* Screen Area */}
      <div className="relative my-auto py-2.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: currentAccent.hex }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: currentAccent.hex }} />
            </span>
            <span className="font-display text-xs font-semibold text-bone">
              Engine Active • 120 FPS
            </span>
          </div>

          {/* Sub-Mode Tabs */}
          <div className="flex gap-1 text-[11px] rounded-lg border border-line-soft bg-ink/50 p-0.5">
            {(['preview', 'components', 'telemetry'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveTab(tab)
                }}
                className={`rounded-md px-2 py-0.5 font-medium capitalize transition-colors ${
                  activeTab === tab ? 'bg-surface text-bone shadow-xs' : 'text-bone-faint hover:text-bone'
                }`}
              >
                {tab === 'preview' ? 'Live UI' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Simulated Responsive Device Frame */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto overflow-hidden rounded-2xl border border-line/90 bg-ink/90 shadow-2xl transition-all ${
            viewport === 'desktop'
              ? 'w-full'
              : viewport === 'tablet'
              ? 'w-[84%]'
              : 'w-[62%]'
          }`}
        >
          {/* Top Browser Bar for Desktop */}
          {viewport === 'desktop' && (
            <div className="flex items-center justify-between border-b border-line-soft bg-surface/80 px-3 py-1.5 text-[10px] text-bone-faint">
              <div className="flex items-center gap-1.5">
                <Lock size={10} className="text-signal-soft" />
                <span className="font-mono text-bone-dim">odify.agency/live</span>
              </div>
              <button
                type="button"
                onClick={handleReload}
                className="text-bone-faint hover:text-bone transition-colors"
                title="Simulate Hot Reload"
              >
                <RefreshCw size={11} className={isReloading ? 'animate-spin text-signal-soft' : ''} />
              </button>
            </div>
          )}

          {/* Dynamic Island for Mobile */}
          {viewport === 'mobile' && (
            <div className="border-b border-line-soft bg-surface/90 px-3 py-1 text-[9px] text-bone-faint">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-bone">9:41</span>
                <div className="flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 border border-line-soft">
                  <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ backgroundColor: currentAccent.hex }} />
                  <span className="text-[8px] font-mono font-medium text-bone">Live</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi size={9} />
                  <Battery size={10} />
                </div>
              </div>
            </div>
          )}

          {/* Tablet Pinhole Camera Notch */}
          {viewport === 'tablet' && (
            <div className="flex items-center justify-center border-b border-line-soft bg-surface/50 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-bone/25" />
            </div>
          )}

          {/* Content Area Inside Device Canvas */}
          <div className={`p-3.5 transition-opacity duration-200 ${isReloading ? 'opacity-30' : 'opacity-100'}`}>
            {activeTab === 'preview' && (
              <div className="space-y-2.5">
                {/* Simulated Mini App Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: currentAccent.hex }} />
                    <span className="font-display text-[10px] font-bold text-bone">ODIFY</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="rounded-full bg-surface px-1.5 py-0.5 text-[8px] font-mono text-bone-dim border border-line-soft">
                      v2.4
                    </span>
                  </div>
                </div>

                {/* Mini Hero Statement & Interactive CTA */}
                <div className="flex items-center justify-between gap-2 pt-0.5">
                  <div className="space-y-1 flex-1">
                    <div className="h-3 w-3/4 rounded bg-bone/30" />
                    <div className="h-1.5 w-1/2 rounded bg-bone/15" />
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setInteractiveCounter((c) => c + 1)
                    }}
                    className="flex items-center gap-1 rounded-lg px-2 py-1 text-[9px] font-semibold text-white shadow-xs transition-transform active:scale-95"
                    style={{ backgroundColor: currentAccent.hex }}
                  >
                    <span>Clicks:</span>
                    <strong className="font-mono">{interactiveCounter}</strong>
                  </button>
                </div>

                {/* Interactive Visual Waveform Card */}
                <div
                  className="relative h-14 w-full overflow-hidden rounded-xl border border-line-soft p-2 flex items-end gap-1 justify-between"
                  style={{
                    background: `linear-gradient(180deg, ${currentAccent.glow} 0%, rgba(10,11,13,0.92) 100%)`,
                  }}
                >
                  {[40, 75, 30, 95, 60, 100, 70, 45, 90, 65, 80].map((h, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ height: [`${h * 0.35}%`, `${h}%`, `${h * 0.4}%`] }}
                      transition={{ duration: 1.5 + idx * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-full rounded-xs transition-colors"
                      style={{ backgroundColor: currentAccent.soft }}
                    />
                  ))}
                </div>

                {/* Footer Pill inside preview */}
                <div className="flex items-center justify-between pt-0.5">
                  <span className="font-mono text-[9px] text-bone-dim">
                    Lighthouse: <strong className="text-bone">{simulatedMetric}%</strong>
                  </span>
                  <span
                    className="font-display text-[9px] font-semibold flex items-center gap-1"
                    style={{ color: currentAccent.soft }}
                  >
                    <Zap size={9} /> 1.1ms TTFB
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'components' && (
              <div className="space-y-2 text-xs py-0.5">
                <div className="flex items-center justify-between rounded-xl border border-line-soft bg-surface/60 p-2">
                  <span className="text-[10px] text-bone font-medium">Interactive Toggle</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setComponentToggle(!componentToggle)
                    }}
                    className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${
                      componentToggle ? 'bg-signal-soft' : 'bg-line'
                    }`}
                  >
                    <span
                      className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        componentToggle ? 'translate-x-3.5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <div className="rounded-xl border border-line-soft bg-surface/60 p-2 text-center">
                    <div className="text-[9px] text-bone-faint font-mono">Accent Token</div>
                    <div className="font-mono text-[10px] font-bold mt-0.5" style={{ color: currentAccent.soft }}>
                      {currentAccent.name}
                    </div>
                  </div>
                  <div className="rounded-xl border border-line-soft bg-surface/60 p-2 text-center">
                    <div className="text-[9px] text-bone-faint font-mono">Design System</div>
                    <div className="font-display text-[10px] font-bold text-bone mt-0.5">Odify Tokens v3</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div className="grid grid-cols-2 gap-1.5 text-xs py-0.5">
                <div className="rounded-xl border border-line-soft bg-surface/60 p-2">
                  <div className="text-[9px] text-bone-faint font-mono">Render Cycle</div>
                  <div className="font-display font-bold text-bone text-sm mt-0.5">1.1ms</div>
                </div>
                <div className="rounded-xl border border-line-soft bg-surface/60 p-2">
                  <div className="text-[9px] text-bone-faint font-mono">Performance</div>
                  <div className="font-display font-bold text-signal-soft text-sm mt-0.5">100/100</div>
                </div>
                <div className="rounded-xl border border-line-soft bg-surface/60 p-2">
                  <div className="text-[9px] text-bone-faint font-mono">CLS Stability</div>
                  <div className="font-display font-bold text-bone text-sm mt-0.5">0.00</div>
                </div>
                <div className="rounded-xl border border-line-soft bg-surface/60 p-2">
                  <div className="text-[9px] text-bone-faint font-mono">Global Edge</div>
                  <div className="font-display font-bold text-emerald-400 text-sm mt-0.5">320+ Nodes</div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer Info Bar */}
      <div className="flex items-center justify-between border-t border-line-soft pt-3 text-xs text-bone-dim">
        <span className="font-mono text-[11px]">
          Viewport: <strong className="text-bone capitalize">{viewport}</strong>
        </span>
        <span className="flex items-center gap-1 font-semibold text-[11px]" style={{ color: currentAccent.soft }}>
          <Zap size={12} /> Edge Accelerated
        </span>
      </div>
    </div>
  )
}// -------------------------------------------------------------
// CARD 2: PURE 360° REVOLVING TECH ORBIT GALAXY (NO TEXT)
// -------------------------------------------------------------
function CardTechOrbit() {
  const ring1 = [
    { color: '#00d8ff', icon: Atom },
    { color: '#38bdf8', icon: Code2 },
    { color: '#06b6d4', icon: Wind },
    { color: '#c084fc', icon: Layers },
  ]

  const ring2 = [
    { color: '#f3f2ee', icon: Globe },
    { color: '#f43f5e', icon: Sparkles },
    { color: '#4ade80', icon: Server },
    { color: '#a78bfa', icon: Cpu },
  ]

  const ring3 = [
    { color: '#facc15', icon: Zap },
    { color: '#ec4899', icon: Database },
    { color: '#34d399', icon: Terminal },
    { color: '#60a5fa', icon: Boxes },
  ]

  return (
    <div className="relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
      {/* Pure Minimal Top Bar - No Text */}
      <div className="flex items-center justify-between border-b border-line-soft pb-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 shadow-xs" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 shadow-xs" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 shadow-xs" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-signal-soft/30 bg-signal/15 px-2.5 py-1">
          <span className="h-2 w-2 rounded-full bg-signal animate-ping" />
          <RotateCw size={12} className="text-signal-soft animate-spin-slow" />
        </div>
      </div>

      {/* Pure Hypnotic Rotating Galaxy Stage */}
      <div className="relative my-auto flex h-[380px] w-full items-center justify-center overflow-hidden">
        {/* Dynamic Center Ambient Radial Glow */}
        <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-signal/25 blur-3xl" />

        {/* Orbit Track Rings with Micro Guide Accents */}
        <div className="pointer-events-none absolute h-[156px] w-[156px] rounded-full border border-line/80" />
        <div className="pointer-events-none absolute h-[246px] w-[246px] rounded-full border border-line-soft/90 border-dashed" />
        <div className="pointer-events-none absolute h-[336px] w-[336px] rounded-full border border-line-soft/60" />

        {/* Central Glowing Core Nucleus */}
        <div className="z-20 relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-signal-soft bg-surface shadow-2xl shadow-signal/60 ring-4 ring-signal/20">
          <Atom size={34} className="text-signal-soft animate-spin-slow" />
        </div>

        {/* ---------------- RING 1: Inner Orbit (Clockwise 12s) ---------------- */}
        <div className="animate-orbit-cw-fast pointer-events-none absolute h-[156px] w-[156px] rounded-full">
          {ring1.map((tool, idx) => {
            const angle = (idx * 360) / ring1.length
            const rad = (angle * Math.PI) / 180
            const x = Math.cos(rad) * 78
            const y = Math.sin(rad) * 78
            const Icon = tool.icon

            return (
              <div
                key={idx}
                className="pointer-events-auto absolute -ml-5.5 -mt-5.5"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                {/* Counter-rotation to keep icon facing upright */}
                <div
                  className="animate-orbit-ccw-fast flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface shadow-xl transition-all duration-300 hover:scale-130 hover:border-signal-soft hover:shadow-2xl hover:shadow-signal/50"
                  style={{ color: tool.color }}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>
              </div>
            )
          })}
        </div>

        {/* ---------------- RING 2: Middle Orbit (Counter-Clockwise 18s) ---------------- */}
        <div className="animate-orbit-ccw-mid pointer-events-none absolute h-[246px] w-[246px] rounded-full">
          {ring2.map((tool, idx) => {
            const angle = (idx * 360) / ring2.length + 45
            const rad = (angle * Math.PI) / 180
            const x = Math.cos(rad) * 123
            const y = Math.sin(rad) * 123
            const Icon = tool.icon

            return (
              <div
                key={idx}
                className="pointer-events-auto absolute -ml-6 -mt-6"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                {/* Counter-rotation with EXTRA LARGE ICON */}
                <div
                  className="animate-orbit-cw-mid flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface shadow-2xl transition-all duration-300 hover:scale-130 hover:border-signal-soft hover:shadow-2xl hover:shadow-signal/60"
                  style={{ color: tool.color }}
                >
                  <Icon size={24} strokeWidth={2.2} />
                </div>
              </div>
            )
          })}
        </div>

        {/* ---------------- RING 3: Outer Orbit (Clockwise 26s) ---------------- */}
        <div className="animate-orbit-cw-slow pointer-events-none absolute h-[336px] w-[336px] rounded-full">
          {ring3.map((tool, idx) => {
            const angle = (idx * 360) / ring3.length + 22.5
            const rad = (angle * Math.PI) / 180
            const x = Math.cos(rad) * 168
            const y = Math.sin(rad) * 168
            const Icon = tool.icon

            return (
              <div
                key={idx}
                className="pointer-events-auto absolute -ml-5.5 -mt-5.5"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                {/* Counter-rotation with LARGE ICON */}
                <div
                  className="animate-orbit-ccw-slow flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface shadow-xl transition-all duration-300 hover:scale-130 hover:border-signal-soft hover:shadow-2xl hover:shadow-signal/50"
                  style={{ color: tool.color }}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pure Minimal Footer - No Text */}
      <div className="flex items-center justify-between border-t border-line-soft pt-3">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-soft/60" />
          <span className="h-1.5 w-4 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-signal-soft/60" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-signal-soft" />
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
        </div>
      </div>
    </div>
  )
}

// -------------------------------------------------------------
// CARD 3: Conversion & Growth Telemetry Matrix
// -------------------------------------------------------------
function CardGrowthMatrix() {
  const [metricIndex, setMetricIndex] = useState(0)

  const metrics = [
    { label: 'Conversion Uplift', value: '+148.4%', trend: '+34% MoM' },
    { label: 'Average Session Duration', value: '4m 12s', trend: '2.8x Industry Avg' },
    { label: 'Time To Interactive', value: '0.38s', trend: 'Top 1% Global' },
  ]

  const activeMetric = metrics[metricIndex]

  return (
    <div className="relative flex h-full min-h-[470px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface/95 p-6 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line-soft pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
            <Activity size={14} />
          </span>
          <div>
            <div className="font-display text-xs font-semibold text-bone">Growth Engine Telemetry</div>
            <div className="font-mono text-[10px] text-bone-faint font-medium">odify://growth.telemetry</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Live Metrics</span>
        </div>
      </div>

      {/* Main Metric Spotlight with Circular Progress / Chart */}
      <div className="my-auto space-y-4 py-2">
        {/* Metric Selector Tabs */}
        <div className="flex gap-1.5 rounded-xl border border-line-soft bg-ink/70 p-1">
          {metrics.map((m, idx) => (
            <button
              key={m.label}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setMetricIndex(idx)
              }}
              className={`flex-1 rounded-lg py-1 text-[11px] font-medium transition-all ${
                metricIndex === idx ? 'bg-bone text-ink shadow-sm' : 'text-bone-dim hover:text-bone'
              }`}
            >
              Metric 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Large Metric Display & Animated Sparkline */}
        <div className="rounded-2xl border border-line-soft bg-ink/85 p-4">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-bone-faint uppercase tracking-wider">{activeMetric.label}</span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <TrendingUp size={12} /> {activeMetric.trend}
            </span>
          </div>

          <div className="mt-2 font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            {activeMetric.value}
          </div>

          {/* Animated SVG Trajectory Curve */}
          <div className="mt-3 relative h-16 w-full overflow-hidden rounded-xl border border-line-soft/80 bg-ink/60 p-2">
            <svg viewBox="0 0 300 70" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="growthGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,60 Q 60,50 120,35 T 240,15 T 300,5 L 300,70 L 0,70 Z"
                fill="url(#growthGlow)"
              />
              <motion.path
                d="M 0,60 Q 60,50 120,35 T 240,15 T 300,5"
                fill="none"
                stroke="#34d399"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: easing }}
              />
              <motion.circle
                cx="300"
                cy="5"
                r="4"
                fill="#f3f2ee"
                stroke="#10b981"
                strokeWidth="2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </div>
        </div>

        {/* Global Edge Node Highlights */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl border border-line-soft bg-surface/50 p-2">
            <div className="text-[10px] text-bone-faint">CDN Latency</div>
            <div className="font-display text-xs font-bold text-bone">18ms Avg</div>
          </div>
          <div className="rounded-xl border border-line-soft bg-surface/50 p-2">
            <div className="text-[10px] text-bone-faint">Uptime SLA</div>
            <div className="font-display text-xs font-bold text-signal-soft">99.99%</div>
          </div>
          <div className="rounded-xl border border-line-soft bg-surface/50 p-2">
            <div className="text-[10px] text-bone-faint">Revenue Tracked</div>
            <div className="font-display text-xs font-bold text-emerald-400">₹50 Cr+</div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-line-soft pt-3 text-xs text-bone-dim">
        <span className="flex items-center gap-1">
          <Globe size={13} className="text-emerald-400" /> Multi-Region Edge Deploy
        </span>
        <span className="font-mono text-bone">Sync: 0.1s</span>
      </div>
    </div>
  )
}

// -------------------------------------------------------------
// MAIN HERO 3D SWAPPABLE STACKED DECK
// -------------------------------------------------------------
export function Hero() {
  // Array of card IDs: 0 = 01 Live Studio, 1 = 02 Revolving Tech Orbit Galaxy, 2 = 03 Growth
  const [cards, setCards] = useState<number[]>([0, 1, 2]) // Default Card 01 (Live Studio & Viewport) at front!
  const [accent, setAccent] = useState<ThemeAccent>('signal')
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)

  // Swap to next card (move front card to back)
  function swapNext() {
    setSwipeDirection('right')
    setCards((prev) => {
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }

  // Swap to previous card (move back card to front)
  function swapPrev() {
    setSwipeDirection('left')
    setCards((prev) => {
      const last = prev[prev.length - 1]
      const rest = prev.slice(0, prev.length - 1)
      return [last, ...rest]
    })
  }

  // Bring a specific card to front by clicking on it
  function bringToFront(cardId: number) {
    setCards((prev) => {
      const filtered = prev.filter((id) => id !== cardId)
      return [cardId, ...filtered]
    })
  }

  // Drag end handler for touch/mouse swipe
  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x > 80 || info.velocity.x > 300) {
      swapNext()
    } else if (info.offset.x < -80 || info.velocity.x < -300) {
      swapPrev()
    }
  }

  const cardLabels = [
    '01 Live Studio & Viewport',
    '02 Tech Orbit Galaxy (360° Revolving)',
    '03 Growth Engine Telemetry',
  ]

  const frontCardId = cards[0]

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      {/* Background Subtle Grid with Radial Mask */}
      <div className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left Column: Copy & Hero Actions */}
        <div>
          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easing }}
            className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-6xl lg:text-[3.75rem]"
          >
            We build digital experiences that{' '}
            <span className="bg-gradient-to-r from-bone via-bone to-signal-soft bg-clip-text text-transparent">
              move businesses forward.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: easing }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-bone-dim"
          >
            Strategy, design, engineering and growth — unified to engineer digital flagships
            that scale revenue and make brands impossible to ignore.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: easing }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" className="shadow-lg shadow-signal/20">
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#work" variant="secondary">
              Explore Selected Work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-6 border-t border-line-soft pt-6 text-xs text-bone-dim"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-soft" />
              <span>Available for Q2 Projects</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-signal-soft" />
              <span>Full IP Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-signal-soft" />
              <span>Lighthouse 95+ Score</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Swappable Stacked Card Deck */}
        <div className="relative mx-auto w-full max-w-[500px]">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full blur-[110px] transition-all duration-700"
            style={{ backgroundColor: accents[accent].glow }}
          />

          {/* Swappable Deck Header Controls */}
          <div className="mb-4 flex items-center justify-between gap-3">
            {/* Active Card Label & Hint */}
            <div className="flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 backdrop-blur-md">
              <Hand size={13} className="text-signal-soft animate-pulse" />
              <span className="font-display text-xs font-semibold text-bone">
                {cardLabels[frontCardId]}
              </span>
            </div>

            {/* Circular Swap Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={swapPrev}
                aria-label="Swap to previous card"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/80 text-bone-dim transition-all hover:border-signal-soft hover:bg-surface hover:text-bone"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={swapNext}
                aria-label="Swap to next card"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/80 text-bone-dim transition-all hover:border-signal-soft hover:bg-surface hover:text-bone"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Stacked 3D Swappable Stage */}
          <div className="relative h-[520px] w-full perspective-[1200px]">
            <AnimatePresence initial={false}>
              {cards.map((cardId, index) => {
                const isFront = index === 0

                // Calculate visual depth, scale, and offset for the 3D stack
                const zIndex = 3 - index
                const scale = 1 - index * 0.05
                const yOffset = index * 18
                const opacity = index === 0 ? 1 : index === 1 ? 0.75 : 0.45

                return (
                  <motion.div
                    key={cardId}
                    layout
                    drag={isFront ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.65}
                    onDragEnd={isFront ? handleDragEnd : undefined}
                    onClick={() => {
                      if (!isFront) bringToFront(cardId)
                    }}
                    initial={{
                      scale: 0.9,
                      y: 30,
                      opacity: 0,
                    }}
                    animate={{
                      scale,
                      y: yOffset,
                      opacity,
                      zIndex,
                      rotateZ: isFront ? 0 : index === 1 ? -2 : 2,
                    }}
                    exit={{
                      x: swipeDirection === 'right' ? 300 : -300,
                      opacity: 0,
                      scale: 0.85,
                      rotateZ: swipeDirection === 'right' ? 12 : -12,
                      transition: { duration: 0.3 },
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 26,
                    }}
                    whileHover={
                      !isFront
                        ? {
                            scale: scale + 0.02,
                            opacity: opacity + 0.15,
                            cursor: 'pointer',
                          }
                        : undefined
                    }
                    whileDrag={
                      isFront
                        ? {
                            scale: 1.02,
                            cursor: 'grabbing',
                            rotateZ: 4,
                          }
                        : undefined
                    }
                    className={`absolute inset-x-0 top-0 origin-bottom select-none ${
                      isFront ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {cardId === 0 && (
                      <CardStudio accent={accent} setAccent={setAccent} />
                    )}
                    {cardId === 1 && (
                      <CardTechOrbit />
                    )}
                    {cardId === 2 && (
                      <CardGrowthMatrix />
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Bottom Deck Indicator with Swap Action Callout */}
          <div className="mt-6 flex items-center justify-between text-xs text-bone-faint border-t border-line-soft pt-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal/15 text-signal-soft">
                <RotateCw size={11} />
              </span>
              <span>Drag card or tap stack to swap</span>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => bringToFront(id)}
                  aria-label={`Bring card ${id + 1} to front`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    frontCardId === id ? 'w-6 bg-signal-soft' : 'w-2 bg-line hover:bg-bone-dim'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
