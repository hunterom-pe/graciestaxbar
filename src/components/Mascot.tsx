import type { CSSProperties } from 'react'

/**
 * Gracie's heart mascot. The artwork lives in /public/mascot.svg so the
 * same file serves the site, merch mockups and the icon exports.
 * Decorative wherever it appears next to the name, so alt is empty.
 */
export function Mascot({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <img
      src="/mascot.svg"
      alt=""
      aria-hidden="true"
      width={200}
      height={200}
      decoding="async"
      draggable={false}
      className={`pointer-events-none select-none ${className}`}
      style={style}
    />
  )
}
