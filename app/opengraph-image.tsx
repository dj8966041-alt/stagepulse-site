import { ImageResponse } from 'next/og'

/**
 * Site-wide default OpenGraph image — used when an article (or any page that
 * doesn't override) gets shared on Instagram, X, Facebook, Slack, iMessage,
 * etc. Rendered at request time by Next.js and cached at the CDN edge.
 *
 * 1200×630 is the OpenGraph standard size — same crop on every platform.
 */

export const runtime = 'edge'
export const alt = 'StagePulse — Independent live music coverage'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(ellipse at 20% 20%, rgba(232,101,26,0.32) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(232,101,26,0.18) 0%, transparent 50%)',
          padding: 80,
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            color: '#e8651a',
            fontSize: 24,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          <span>★</span>
          <span>Independent music coverage</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 112,
            lineHeight: 0.95,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
          }}
        >
          <span>In the room.</span>
          <span style={{ color: '#e8651a' }}>On the record.</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', fontSize: 32, letterSpacing: '-0.01em' }}>
            <span>Stage</span>
            <span style={{ fontWeight: 700, fontStyle: 'normal' }}>Pulse</span>
            <span style={{ color: '#e8651a', marginLeft: 12, fontSize: 24 }}>★</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#8a8a8a',
            }}
          >
            stagepulselive
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
