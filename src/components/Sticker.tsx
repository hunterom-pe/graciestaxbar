import type { CSSProperties } from 'react'

/**
 * Hand-cut sticker graphics, drawn in SVG. Decorative only: always
 * aria-hidden, never carry information the page needs.
 */
export type StickerKind = 'star' | 'heart' | 'bolt' | 'daisy' | 'swirl' | 'arrow'

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
const PINK = '#FF5FA8'
const LIME = '#C8F03C'
const RED = '#E0263A'

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
    case 'heart':
      return (
        <svg viewBox="0 0 120 110" {...common}>
          <path
            d="M60 104C24 80 4 58 6 34 8 14 24 4 40 6c10 1 16 7 20 15 4-8 10-14 20-15 16-2 32 8 34 28 2 24-18 46-54 70Z"
            fill={BONE}
          />
          <path
            d="M60 94C30 74 14 56 15 36 16 21 27 13 40 14c9 1 15 8 20 18 5-10 11-17 20-18 13-1 24 7 25 22 1 20-15 38-45 58Z"
            fill={PINK}
          />
          <path d="M34 30c-6 2-9 8-8 14" stroke={BONE} strokeWidth="5" strokeLinecap="round" fill="none" opacity=".8" />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 80 120" {...common}>
          <polygon points="46,2 4,68 34,68 24,118 76,44 44,44 58,2" fill={BONE} />
          <polygon points="45,10 13,63 41,63 33,104 68,49 37,49 50,10" fill={RED} />
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
          <circle cx="60" cy="60" r="18" fill={PINK} stroke={COAL} strokeWidth="3" />
          <circle cx="54" cy="56" r="2.5" fill={COAL} />
          <circle cx="66" cy="56" r="2.5" fill={COAL} />
          <path d="M52 65q8 7 16 0" stroke={COAL} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'swirl':
      return (
        <svg viewBox="0 0 160 60" {...common}>
          <path
            d="M6 40c20-30 40-30 46-10s-14 26-12 8 30-30 52-14 6 30-6 18 22-34 62-26"
            stroke={PINK}
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'arrow':
      return (
        <svg viewBox="0 0 120 80" {...common} className={common.className.replace(/drop-shadow\S+/, '')}>
          <path
            d="M6 14c30-8 70 0 88 40"
            stroke="currentColor"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M80 50l15 8 4-17" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}
