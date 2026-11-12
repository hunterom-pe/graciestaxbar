import type { CSSProperties } from 'react'
import type { BarEvent, PosterKind } from '../data/events'
import { eventDateParts } from '../data/events'

/**
 * Original demonstration flyers, drawn in SVG. Each `PosterKind` is its
 * own layout so the wall reads as work by different hands. When an event
 * has real `flyer` artwork, that image is shown instead.
 */

const C = {
  coal: '#141010',
  red: '#8C252C',
  hot: '#E0263A',
  pink: '#FF3D2E',
  blush: '#F7C6D9',
  bone: '#F3EBDD',
  orange: '#FF6A1A',
  blue: '#2B4BFF',
  lime: '#C8F03C',
  plum: '#6B4E8E',
}

const cond: CSSProperties = {
  fontFamily: 'Anybody, Impact, sans-serif',
  fontStretch: '50%',
  fontWeight: 900,
  textTransform: 'uppercase',
}
const wide: CSSProperties = {
  fontFamily: 'Anybody, Arial Black, sans-serif',
  fontStretch: '150%',
  fontWeight: 800,
  textTransform: 'uppercase',
}
const grot: CSSProperties = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
  fontWeight: 800,
  fontStretch: '75%',
  textTransform: 'uppercase',
}
const mono: CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
}
const cute: CSSProperties = {
  fontFamily: 'Fraunces, Georgia, serif',
  fontStyle: 'italic',
  fontWeight: 800,
  fontVariationSettings: "'SOFT' 100, 'WONK' 1",
}

const posterRatio: Record<PosterKind, string> = {
  rings: '3 / 4',
  karaoke: '4 / 5',
  chrome: '4 / 5',
  checker: '1 / 1',
  slash: '2 / 3',
  beam: '3 / 4',
  stack: '4 / 5',
}

interface ArtProps {
  date: string
  time: string
  id: string
}

function Rings({ date, time }: ArtProps) {
  return (
    <svg viewBox="0 0 300 400" className="block h-full w-full">
      <rect width="300" height="400" fill={C.orange} />
      {[118, 96, 74, 52, 30].map((r, i) => (
        <circle key={r} cx="212" cy="212" r={r} fill={i % 2 ? C.orange : C.coal} />
      ))}
      <circle cx="212" cy="212" r="10" fill={C.pink} />
      <text x="18" y="30" fontSize="9" fill={C.coal} style={mono}>
        All vinyl · out back
      </text>
      <text x="16" y="118" fontSize="104" fill={C.bone} style={cond}>
        Patio
      </text>
      <text x="16" y="204" fontSize="104" fill={C.bone} style={cond}>
        Select
      </text>
      <text x="16" y="290" fontSize="104" fill={C.bone} style={cond}>
        -ors
      </text>
      <rect x="16" y="340" width="268" height="1.5" fill={C.coal} />
      <text x="16" y="364" fontSize="20" fill={C.coal} style={wide}>
        {date}
      </text>
      <text x="284" y="364" fontSize="11" textAnchor="end" fill={C.coal} style={mono}>
        {time}
      </text>
      <text x="16" y="384" fontSize="8" fill={C.coal} style={mono}>
        Bring a record · get in the rotation
      </text>
    </svg>
  )
}

function Karaoke({ date, time }: ArtProps) {
  return (
    <svg viewBox="0 0 320 400" className="block h-full w-full">
      <rect width="320" height="400" fill={C.blue} />
      {/* mic */}
      <g transform="translate(232 70) rotate(18)">
        <rect x="-11" y="34" width="22" height="120" rx="8" fill={C.coal} />
        <circle r="38" fill={C.bone} />
        {[-24, -12, 0, 12, 24].map((d) => (
          <line key={d} x1={d} y1="-34" x2={d} y2="34" stroke={C.blue} strokeWidth="3" opacity=".55" />
        ))}
        <rect x="-15" y="34" width="30" height="10" fill={C.pink} />
      </g>
      <text x="20" y="34" fontSize="9" fill={C.bone} style={mono}>
        Sign up at the bar
      </text>
      <text x="16" y="196" fontSize="88" fill={C.pink} style={cond}>
        Kara
      </text>
      <text x="16" y="276" fontSize="88" fill={C.bone} style={cond}>
        -oke
      </text>
      <text x="20" y="310" fontSize="26" fill={C.lime} style={cute}>
        ballads, bangers, both
      </text>
      {['Ballad', 'Banger', 'Both'].map((t, i) => (
        <g key={t} transform={`translate(${20 + i * 96} 330)`}>
          <rect width="14" height="14" fill="none" stroke={C.bone} strokeWidth="1.5" />
          {i === 2 && <path d="M2 7l4 5 8-12" fill="none" stroke={C.lime} strokeWidth="3" />}
          <text x="22" y="11" fontSize="9" fill={C.bone} style={mono}>
            {t}
          </text>
        </g>
      ))}
      <rect x="0" y="358" width="320" height="42" fill={C.coal} />
      <text x="20" y="386" fontSize="18" fill={C.bone} style={wide}>
        {date}
      </text>
      <text x="300" y="385" fontSize="11" textAnchor="end" fill={C.pink} style={mono}>
        {time}
      </text>
    </svg>
  )
}

function Chrome({ date, time, id }: ArtProps) {
  const g = `chrome-${id}`
  return (
    <svg viewBox="0 0 320 400" className="block h-full w-full">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".42" stopColor="#c9cdd2" />
          <stop offset=".5" stopColor="#5d636a" />
          <stop offset=".62" stopColor="#eef0f2" />
          <stop offset="1" stopColor="#8d9399" />
        </linearGradient>
      </defs>
      <rect width="320" height="400" fill={C.pink} />
      {/* scattered hearts */}
      {[
        [40, 60, 0.6, -14],
        [270, 48, 0.9, 12],
        [250, 300, 0.7, -8],
        [60, 330, 0.5, 18],
        [160, 30, 0.4, 0],
      ].map(([x, y, s, r], i) => (
        <path
          key={i}
          transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
          d="M0 30C-28 12-40-4-38-18-36-32-22-38-10-34-4-32 0-26 0-22 0-26 4-32 10-34 22-38 36-32 38-18 40-4 28 12 0 30Z"
          fill={i % 2 ? C.coal : C.red}
        />
      ))}
      <text x="160" y="190" fontSize="96" textAnchor="middle" fill={`url(#${g})`} stroke={C.coal} strokeWidth="2" style={cute}>
        Sad
      </text>
      <text x="160" y="262" fontSize="70" textAnchor="middle" fill={`url(#${g})`} stroke={C.coal} strokeWidth="2" style={grot}>
        Disco
      </text>
      <text x="160" y="300" fontSize="10" textAnchor="middle" fill={C.coal} style={mono}>
        slow songs · fast songs · glitter
      </text>
      <rect x="92" y="340" width="136" height="34" rx="17" fill={C.coal} />
      <text x="160" y="363" fontSize="15" textAnchor="middle" fill={C.bone} style={wide}>
        {date}
      </text>
      <text x="160" y="392" fontSize="9" textAnchor="middle" fill={C.coal} style={mono}>
        {time} till late
      </text>
    </svg>
  )
}

function Checker({ date, time }: ArtProps) {
  const cells = []
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 10; c++)
      if ((r + c) % 2 === 0)
        cells.push(<rect key={`${r}-${c}`} x={c * 32} y={224 + r * 32} width="32" height="32" fill={C.lime} />)
  return (
    <svg viewBox="0 0 320 320" className="block h-full w-full">
      <rect width="320" height="320" fill={C.blue} />
      {cells}
      <text x="16" y="28" fontSize="9" fill={C.bone} style={mono}>
        Zines · prints · junk · treasure
      </text>
      <text x="14" y="112" fontSize="62" fill={C.bone} style={wide}>
        Back
      </text>
      <text x="14" y="166" fontSize="62" fill={C.lime} style={wide}>
        yard
      </text>
      <text x="16" y="212" fontSize="46" fill={C.bone} style={cute}>
        flea
      </text>
      <rect x="196" y="176" width="108" height="34" fill={C.coal} />
      <text x="250" y="199" fontSize="16" textAnchor="middle" fill={C.bone} style={wide}>
        {date}
      </text>
      <text x="304" y="28" fontSize="9" textAnchor="end" fill={C.lime} style={mono}>
        {time}
      </text>
    </svg>
  )
}

function Slash({ date, time }: ArtProps) {
  return (
    <svg viewBox="0 0 300 450" className="block h-full w-full">
      <rect width="300" height="450" fill={C.coal} />
      <polygon points="0,330 300,120 300,250 0,460" fill={C.pink} />
      <polygon points="0,300 300,90 300,104 0,314" fill={C.hot} />
      <text x="18" y="34" fontSize="9" fill={C.pink} style={mono}>
        Drag + burlesque
      </text>
      <text x="16" y="112" fontSize="62" fill={C.pink} style={cute}>
        Pink
      </text>
      <text x="14" y="196" fontSize="100" fill={C.bone} style={cond}>
        Room
      </text>
      <g transform="rotate(-35 150 300)">
        <text x="150" y="318" fontSize="44" textAnchor="middle" fill={C.coal} style={wide}>
          Revue
        </text>
      </g>
      <text x="282" y="398" fontSize="26" textAnchor="end" fill={C.bone} style={wide}>
        {date}
      </text>
      <text x="282" y="424" fontSize="11" textAnchor="end" fill={C.pink} style={mono}>
        Doors {time}
      </text>
    </svg>
  )
}

function Beam({ date, time }: ArtProps) {
  const dots = []
  for (let y = 0; y < 14; y++)
    for (let x = 0; x < 12; x++) {
      const r = Math.max(0, 5.5 - Math.hypot(x - 7, y - 3) * 0.6)
      if (r > 0.4) dots.push(<circle key={`${x}-${y}`} cx={20 + x * 23} cy={28 + y * 23} r={r} fill={C.coal} />)
    }
  return (
    <svg viewBox="0 0 300 400" className="block h-full w-full">
      <rect width="300" height="400" fill={C.plum} />
      <polygon points="300,400 20,56 280,56" fill={C.bone} />
      <g opacity="0.85">{dots}</g>
      <text x="16" y="30" fontSize="9" fill={C.bone} style={mono}>
        Double feature · on the wall
      </text>
      <text x="14" y="252" fontSize="120" fill={C.lime} style={cond}>
        B-
      </text>
      <text x="14" y="328" fontSize="82" fill={C.bone} style={cond}>
        Movies
      </text>
      <text x="16" y="360" fontSize="28" fill={C.bone} style={cute}>
        out back
      </text>
      <text x="268" y="384" fontSize="18" textAnchor="end" fill={C.lime} style={wide}>
        {date}
      </text>
      <text x="16" y="384" fontSize="10" fill={C.bone} style={mono}>
        {time}
      </text>
    </svg>
  )
}

function Stack({ date }: ArtProps) {
  return (
    <svg viewBox="0 0 320 400" className="block h-full w-full">
      <rect width="320" height="400" fill={C.bone} />
      {[0, 1, 2, 3].map((i) => (
        <text
          key={i}
          x="14"
          y={104 + i * 78}
          fontSize="104"
          fill={i === 3 ? C.red : 'none'}
          stroke={C.red}
          strokeWidth="2"
          style={cond}
        >
          No Wave
        </text>
      ))}
      <rect x="14" y="352" width="292" height="34" fill={C.red} />
      <text x="24" y="376" fontSize="20" fill={C.bone} style={wide}>
        Night
      </text>
      <text x="296" y="374" fontSize="10" textAnchor="end" fill={C.bone} style={mono}>
        {date}
      </text>
    </svg>
  )
}

const art: Record<PosterKind, (p: ArtProps) => React.JSX.Element> = {
  rings: Rings,
  karaoke: Karaoke,
  chrome: Chrome,
  checker: Checker,
  slash: Slash,
  beam: Beam,
  stack: Stack,
}

export function Poster({ event }: { event: BarEvent }) {
  const d = eventDateParts(event.start)
  const Art = art[event.poster]
  return (
    <div
      className="relative overflow-hidden bg-coal shadow-[0_14px_30px_-12px_rgb(20_16_16_/_0.6)]"
      style={{ aspectRatio: posterRatio[event.poster] }}
    >
      {event.flyer ? (
        <img
          src={event.flyer}
          alt={`Flyer for ${event.title}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div role="img" aria-label={`Sample flyer artwork for ${event.title}`} className="h-full w-full">
          <Art date={`${d.month} ${d.day}`} time={d.time} id={event.id} />
        </div>
      )}
      {event.sample && (
        <span className="t-mono absolute right-0 top-3 bg-coal px-2 py-1 text-[0.5625rem] text-lime">
          Sample
        </span>
      )}
    </div>
  )
}
