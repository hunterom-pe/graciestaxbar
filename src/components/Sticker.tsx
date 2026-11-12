import type { CSSProperties } from 'react'

/**
 * Hand-cut sticker graphics, drawn in SVG. Decorative only: always
 * aria-hidden, never carry information the page needs.
 */
export type StickerKind = 'star' | 'daisy'

interface StickerProps {
  kind: StickerKind
  className?: string
  /** Text set inside the star sticker */
  text?: string
  /** Rotation in degrees */
  r?: number
  style?: CSSProperties
}

const BONE = '#F3EBDD'
const COAL = '#141010'
const RED = '#DB2B36'
const LIME = '#C8F03C'

function starPoints(cx: number, cy: number, spikes: number, outer: number, inner: number) {
  const pts: string[] = []
  for (let i = 0; i < spikes * 2; i++) {
    const rad = i % 2 === 0 ? outer : inner
    const a = (Math.PI / spikes) * i - Math.PI / 2
    pts.push(`${(cx + Math.cos(a) * rad).toFixed(1)},${(cy + Math.sin(a) * rad).toFixed(1)}`)
  }
  return pts.join(' ')
}

export function Sticker({ kind, className = '', text, r = 0, style }: StickerProps) {
  const common = {
    'aria-hidden': true as const,
    className: `pointer-events-none select-none drop-shadow-[0_3px_3px_rgb(0_0_0_/_0.35)] ${className}`,
    style: { rotate: `${r}deg`, ...style },
  }

  switch (kind) {
    case 'star':
      return (
        <svg viewBox="0 0 120 120" {...common}>
          <polygon points={starPoints(60, 60, 14, 58, 44)} fill={BONE} />
          <polygon points={starPoints(60, 60, 14, 52, 39)} fill={LIME} />
          {text && (
            <text
              x="60"
              y="67"
              textAnchor="middle"
              fontSize={text.length > 4 ? 17 : 22}
              fill={COAL}
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 800, fontStretch: '75%' }}
            >
              {text}
            </text>
          )}
        </svg>
      )
    case 'daisy':
      return (
        <svg viewBox="0 0 120 120" {...common}>
          {Array.from({ length: 10 }).map((_, i) => (
            <ellipse
              key={i}
              cx="60"
              cy="26"
              rx="15"
              ry="25"
              fill={BONE}
              stroke={COAL}
              strokeWidth="3"
              transform={`rotate(${i * 36} 60 60)`}
            />
          ))}
          <circle cx="60" cy="60" r="18" fill={RED} stroke={COAL} strokeWidth="3" />
          <circle cx="54" cy="56" r="2.5" fill={COAL} />
          <circle cx="66" cy="56" r="2.5" fill={COAL} />
          <path d="M52 65q8 7 16 0" stroke={COAL} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      )
  }
}
