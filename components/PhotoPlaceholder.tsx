type Props = {
  index?: number
  className?: string
  alt?: string
  aspectRatio?: string
}

const palettes = [
  { base: '#0e0808', overlay: 'radial-gradient(ellipse at 45% 75%, rgba(204,34,0,0.4) 0%, transparent 55%), radial-gradient(ellipse at 20% 50%, rgba(80,20,100,0.15) 0%, transparent 48%)' },
  { base: '#080810', overlay: 'radial-gradient(ellipse at 62% 65%, rgba(60,80,220,0.28) 0%, transparent 52%), radial-gradient(ellipse at 28% 38%, rgba(140,40,200,0.18) 0%, transparent 45%)' },
  { base: '#0a0803', overlay: 'radial-gradient(ellipse at 50% 72%, rgba(220,150,0,0.28) 0%, transparent 55%), radial-gradient(ellipse at 24% 55%, rgba(200,60,0,0.18) 0%, transparent 45%)' },
  { base: '#0a0a0c', overlay: 'radial-gradient(ellipse at 35% 60%, rgba(204,34,0,0.25) 0%, transparent 52%), radial-gradient(ellipse at 68% 42%, rgba(204,34,0,0.15) 0%, transparent 40%)' },
  { base: '#080c08', overlay: 'radial-gradient(ellipse at 55% 60%, rgba(0,200,100,0.12) 0%, transparent 50%), radial-gradient(ellipse at 72% 72%, rgba(204,34,0,0.15) 0%, transparent 42%)' },
  { base: '#0c0810', overlay: 'radial-gradient(ellipse at 40% 65%, rgba(160,40,220,0.24) 0%, transparent 50%), radial-gradient(ellipse at 65% 35%, rgba(220,40,80,0.18) 0%, transparent 45%)' },
  { base: '#100808', overlay: 'radial-gradient(ellipse at 55% 55%, rgba(255,40,0,0.3) 0%, transparent 50%), radial-gradient(ellipse at 25% 70%, rgba(180,0,0,0.15) 0%, transparent 45%)' },
  { base: '#060810', overlay: 'radial-gradient(ellipse at 50% 50%, rgba(20,80,200,0.25) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(60,0,160,0.18) 0%, transparent 45%)' },
]

export default function PhotoPlaceholder({ index = 0, className = '', alt = '', aspectRatio = '3/2' }: Props) {
  const palette = palettes[index % palettes.length]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio, backgroundColor: palette.base }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0" style={{ background: palette.overlay }} />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)' }}
      />
    </div>
  )
}
