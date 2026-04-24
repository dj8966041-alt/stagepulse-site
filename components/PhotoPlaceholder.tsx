type Props = {
  index?: number
  className?: string
  alt?: string
  /** Fixed aspect for cards. Omit when using fill + absolute positioning. */
  aspectRatio?: string
  /** Stretches to parent; no aspect-ratio (use in article hero, etc.). */
  fill?: boolean
}

const palettes = [
  // 0 — Che / underground rap show: deep red stage beams, black, gritty
  {
    base: '#080000',
    overlay: [
      'linear-gradient(158deg, rgba(220,20,0,0.65) 0%, transparent 42%)',
      'linear-gradient(212deg, rgba(200,30,0,0.4) 0%, transparent 38%)',
      'radial-gradient(ellipse at 28% 5%, rgba(255,50,0,0.5) 0%, transparent 38%)',
      'radial-gradient(ellipse at 72% 8%, rgba(160,10,0,0.35) 0%, transparent 36%)',
      'radial-gradient(ellipse at 50% 90%, rgba(80,0,0,0.4) 0%, transparent 50%)',
      'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 55%, transparent 80%)',
    ].join(', '),
  },
  // 1 — deep blue/purple atmospheric
  {
    base: '#040510',
    overlay: [
      'radial-gradient(ellipse at 60% 65%, rgba(50,70,210,0.4) 0%, transparent 52%)',
      'radial-gradient(ellipse at 22% 35%, rgba(130,35,190,0.28) 0%, transparent 48%)',
      'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 65%)',
    ].join(', '),
  },
  // 2 — ACL / outdoor festival: warm amber sunset, golden hour
  {
    base: '#0c0500',
    overlay: [
      'linear-gradient(180deg, rgba(210,90,0,0.6) 0%, rgba(170,45,0,0.25) 48%, transparent 72%)',
      'radial-gradient(ellipse at 50% 18%, rgba(255,140,20,0.5) 0%, transparent 52%)',
      'radial-gradient(ellipse at 78% 42%, rgba(200,70,0,0.32) 0%, transparent 44%)',
      'radial-gradient(ellipse at 22% 55%, rgba(160,40,0,0.2) 0%, transparent 40%)',
      'linear-gradient(0deg, rgba(10,4,0,1) 0%, rgba(10,4,0,0.55) 38%, transparent 70%)',
    ].join(', '),
  },
  // 3 — Concert Calendar: multi-colored stage lights, electric
  {
    base: '#010108',
    overlay: [
      'radial-gradient(ellipse at 15% 28%, rgba(20,80,255,0.58) 0%, transparent 34%)',
      'radial-gradient(ellipse at 48% 16%, rgba(200,0,230,0.52) 0%, transparent 34%)',
      'radial-gradient(ellipse at 83% 26%, rgba(0,210,120,0.48) 0%, transparent 32%)',
      'radial-gradient(ellipse at 32% 62%, rgba(255,80,0,0.38) 0%, transparent 30%)',
      'radial-gradient(ellipse at 68% 55%, rgba(220,180,0,0.28) 0%, transparent 28%)',
      'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 52%, transparent 78%)',
    ].join(', '),
  },
  // 4 — green/red mix
  {
    base: '#040a04',
    overlay: [
      'radial-gradient(ellipse at 55% 60%, rgba(0,180,100,0.22) 0%, transparent 50%)',
      'radial-gradient(ellipse at 72% 72%, rgba(200,40,0,0.22) 0%, transparent 42%)',
      'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)',
    ].join(', '),
  },
  // 5 — purple/magenta
  {
    base: '#090510',
    overlay: [
      'radial-gradient(ellipse at 40% 62%, rgba(160,40,220,0.32) 0%, transparent 50%)',
      'radial-gradient(ellipse at 65% 32%, rgba(220,40,80,0.26) 0%, transparent 46%)',
      'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 65%)',
    ].join(', '),
  },
  // 6 — ACL main / golden hour sunset, editorial dark treatment
  {
    base: '#0d0600',
    overlay: [
      'linear-gradient(175deg, rgba(225,100,0,0.55) 0%, rgba(180,55,0,0.22) 42%, transparent 65%)',
      'radial-gradient(ellipse at 45% 12%, rgba(255,155,25,0.48) 0%, transparent 50%)',
      'radial-gradient(ellipse at 80% 38%, rgba(205,75,0,0.3) 0%, transparent 44%)',
      'radial-gradient(ellipse at 18% 50%, rgba(140,30,0,0.22) 0%, transparent 40%)',
      'linear-gradient(0deg, rgba(12,5,0,1) 0%, rgba(12,5,0,0.5) 42%, transparent 72%)',
    ].join(', '),
  },
  // 7 — deep blue night
  {
    base: '#020510',
    overlay: [
      'radial-gradient(ellipse at 50% 48%, rgba(20,75,200,0.32) 0%, transparent 55%)',
      'radial-gradient(ellipse at 80% 68%, rgba(60,0,160,0.26) 0%, transparent 46%)',
      'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 65%)',
    ].join(', '),
  },
]

export default function PhotoPlaceholder({ index = 0, className = '', alt = '', aspectRatio = '3/2', fill = false }: Props) {
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
