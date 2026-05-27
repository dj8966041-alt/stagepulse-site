type Props = {
  index?: number
  className?: string
  alt?: string
  /** Fixed aspect for cards. Omit when using fill + absolute positioning. */
  aspectRatio?: string
  /** Stretches to parent; no aspect-ratio (use in article hero, etc.). */
  fill?: boolean
}

// Color palettes evoke the lighting of a real Texas concert: burnt orange stage
// wash, golden hour at an outdoor festival, neon club, dusty amphitheater. The
// palettes are intentionally muted and editorial — they never feel like
// generic gradients.
const palettes = [
  // 0 — Burnt orange / signature StagePulse palette
  {
    base: '#0c0500',
    overlay: [
      'linear-gradient(165deg, rgba(232,101,26,0.55) 0%, transparent 45%)',
      'radial-gradient(ellipse at 30% 12%, rgba(244,130,59,0.5) 0%, transparent 40%)',
      'radial-gradient(ellipse at 70% 25%, rgba(196,80,15,0.45) 0%, transparent 45%)',
      'radial-gradient(ellipse at 50% 85%, rgba(70,25,5,0.6) 0%, transparent 55%)',
      'linear-gradient(to top, rgba(10,5,0,0.95) 0%, rgba(10,5,0,0.25) 55%, transparent 80%)',
    ].join(', '),
  },
  // 1 — Deep blue indigo (night drive, AT&T Center upper deck)
  {
    base: '#040510',
    overlay: [
      'radial-gradient(ellipse at 60% 65%, rgba(50,70,180,0.42) 0%, transparent 52%)',
      'radial-gradient(ellipse at 22% 35%, rgba(120,45,170,0.3) 0%, transparent 48%)',
      'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 65%)',
    ].join(', '),
  },
  // 2 — Hill Country golden hour, outdoor amphitheater
  {
    base: '#0d0703',
    overlay: [
      'linear-gradient(180deg, rgba(232,101,26,0.58) 0%, rgba(170,55,8,0.28) 48%, transparent 72%)',
      'radial-gradient(ellipse at 50% 18%, rgba(255,160,60,0.5) 0%, transparent 50%)',
      'radial-gradient(ellipse at 78% 42%, rgba(196,80,15,0.32) 0%, transparent 44%)',
      'radial-gradient(ellipse at 22% 55%, rgba(140,50,10,0.22) 0%, transparent 42%)',
      'linear-gradient(0deg, rgba(13,7,3,1) 0%, rgba(13,7,3,0.55) 38%, transparent 70%)',
    ].join(', '),
  },
  // 3 — Festival main stage, multi-color stage wash
  {
    base: '#02010a',
    overlay: [
      'radial-gradient(ellipse at 15% 28%, rgba(232,101,26,0.5) 0%, transparent 36%)',
      'radial-gradient(ellipse at 48% 16%, rgba(180,30,200,0.4) 0%, transparent 36%)',
      'radial-gradient(ellipse at 83% 26%, rgba(30,160,220,0.42) 0%, transparent 34%)',
      'radial-gradient(ellipse at 32% 62%, rgba(244,130,59,0.32) 0%, transparent 32%)',
      'radial-gradient(ellipse at 68% 55%, rgba(220,180,40,0.22) 0%, transparent 28%)',
      'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 52%, transparent 78%)',
    ].join(', '),
  },
  // 4 — Dusty desert mesa, warm taupe + ember
  {
    base: '#0a0604',
    overlay: [
      'radial-gradient(ellipse at 55% 60%, rgba(200,120,60,0.28) 0%, transparent 55%)',
      'radial-gradient(ellipse at 72% 72%, rgba(232,101,26,0.24) 0%, transparent 45%)',
      'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 65%)',
    ].join(', '),
  },
  // 5 — Smoke + ember, intimate club
  {
    base: '#0a0303',
    overlay: [
      'radial-gradient(ellipse at 40% 62%, rgba(232,101,26,0.4) 0%, transparent 50%)',
      'radial-gradient(ellipse at 65% 32%, rgba(180,55,15,0.32) 0%, transparent 48%)',
      'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 65%)',
    ].join(', '),
  },
  // 6 — Sunset over the Guadalupe, deep amber wash
  {
    base: '#0d0500',
    overlay: [
      'linear-gradient(175deg, rgba(232,101,26,0.6) 0%, rgba(170,55,8,0.25) 42%, transparent 65%)',
      'radial-gradient(ellipse at 45% 12%, rgba(255,170,70,0.48) 0%, transparent 50%)',
      'radial-gradient(ellipse at 80% 38%, rgba(196,80,15,0.32) 0%, transparent 44%)',
      'radial-gradient(ellipse at 18% 50%, rgba(140,40,5,0.22) 0%, transparent 40%)',
      'linear-gradient(0deg, rgba(13,5,0,1) 0%, rgba(13,5,0,0.5) 42%, transparent 72%)',
    ].join(', '),
  },
  // 7 — Deep midnight, sparse stage spot
  {
    base: '#020410',
    overlay: [
      'radial-gradient(ellipse at 50% 48%, rgba(30,80,180,0.3) 0%, transparent 55%)',
      'radial-gradient(ellipse at 80% 68%, rgba(232,101,26,0.18) 0%, transparent 46%)',
      'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 65%)',
    ].join(', '),
  },
]

export default function PhotoPlaceholder({
  index = 0,
  className = '',
  alt = '',
  aspectRatio = '3/2',
  fill = false,
}: Props) {
  const palette = palettes[index % palettes.length]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={fill ? { backgroundColor: palette.base } : { aspectRatio, backgroundColor: palette.base }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0" style={{ background: palette.overlay }} />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.7) 100%)' }}
      />
    </div>
  )
}
