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
  hot: '#D6323D',
  pink: '#D98EA3',
  bone: '#F0E6D8',
  orange: '#E4572E',
  blue: '#2B4BFF',
  acid: '#C6F23A',
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
const mono: CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
}
const serif: CSSProperties = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic' }

const posterRatio: Record<PosterKind, string> = {
  rings: '3 / 4',
  form: '4 / 5',
  checker: '1 / 1',
  slash: '2 / 3',
  beam: '3 / 4',
  stack: '4 / 5',
}

interface ArtProps {
  date: string
  time: string
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

function Form({ date, time }: ArtProps) {
  return (
    <svg viewBox="0 0 320 400" className="block h-full w-full">
      <rect width="320" height="400" fill={C.bone} />
      <rect x="12" y="12" width="296" height="376" fill="none" stroke={C.coal} strokeWidth="2" />
      <line x1="12" y1="58" x2="308" y2="58" stroke={C.coal} strokeWidth="2" />
      <text x="22" y="32" fontSize="8" fill={C.coal} style={mono}>
        Form
      </text>
      <text x="22" y="51" fontSize="20" fill={C.coal} style={wide}>
        K-0K
      </text>
      <text x="298" y="40" fontSize="8" textAnchor="end" fill={C.coal} style={mono}>
        Dept. of bad decisions
      </text>
      <text x="22" y="150" fontSize="98" fill={C.coal} style={cond}>
        Audit
      </text>
      <text x="22" y="232" fontSize="98" fill={C.red} style={cond}>
        Night
      </text>
      <text x="24" y="266" fontSize="30" fill={C.coal} style={serif}>
        karaoke, itemized
      </text>
      {['Sang', 'Cried', 'Both'].map((t, i) => (
        <g key={t} transform={`translate(${24 + i * 92} 292)`}>
          <rect width="14" height="14" fill="none" stroke={C.coal} strokeWidth="1.5" />
          {i === 2 && <path d="M2 7l4 5 8-12" fill="none" stroke={C.hot} strokeWidth="3" />}
          <text x="22" y="11" fontSize="9" fill={C.coal} style={mono}>
            {t}
          </text>
        </g>
      ))}
      <line x1="12" y1="326" x2="308" y2="326" stroke={C.coal} strokeWidth="2" />
      <line x1="170" y1="326" x2="170" y2="388" stroke={C.coal} strokeWidth="2" />
      <text x="22" y="342" fontSize="7" fill={C.coal} style={mono}>
        1 Date
      </text>
      <text x="22" y="372" fontSize="22" fill={C.coal} style={wide}>
        {date}
      </text>
      <text x="180" y="342" fontSize="7" fill={C.coal} style={mono}>
        2 Time
      </text>
      <text x="180" y="372" fontSize="22" fill={C.coal} style={wide}>
        {time}
      </text>
      <g transform="rotate(-14 236 196)" opacity="0.88">
        <rect x="176" y="176" width="124" height="40" fill="none" stroke={C.hot} strokeWidth="3" />
        <text x="238" y="205" fontSize="24" textAnchor="middle" fill={C.hot} style={cond}>
          Under review
        </text>
      </g>
    </svg>
  )
}

function Checker({ date, time }: ArtProps) {
  const cells = []
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 10; c++)
      if ((r + c) % 2 === 0)
        cells.push(<rect key={`${r}-${c}`} x={c * 32} y={224 + r * 32} width="32" height="32" fill={C.acid} />)
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
      <text x="14" y="166" fontSize="62" fill={C.acid} style={wide}>
        yard
      </text>
      <text x="14" y="214" fontSize="50" fill={C.bone} style={serif}>
        flea
      </text>
      <rect x="196" y="176" width="108" height="34" fill={C.coal} />
      <text x="250" y="199" fontSize="16" textAnchor="middle" fill={C.bone} style={wide}>
        {date}
      </text>
      <text x="304" y="28" fontSize="9" textAnchor="end" fill={C.acid} style={mono}>
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
      <text x="16" y="110" fontSize="58" fill={C.bone} style={serif}>
        The
      </text>
      <text x="14" y="196" fontSize="100" fill={C.bone} style={cond}>
        Write
      </text>
      <text x="14" y="282" fontSize="100" fill={C.bone} style={cond}>
        -off
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
      <text x="14" y="252" fontSize="120" fill={C.acid} style={cond}>
        B-
      </text>
      <text x="14" y="328" fontSize="82" fill={C.bone} style={cond}>
        Movies
      </text>
      <text x="16" y="360" fontSize="28" fill={C.bone} style={serif}>
        out back
      </text>
      <text x="268" y="384" fontSize="18" textAnchor="end" fill={C.acid} style={wide}>
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
          fontSize="96"
          fill={i === 3 ? C.red : 'none'}
          stroke={C.red}
          strokeWidth="2"
          style={cond}
        >
          Extension
        </text>
      ))}
      <rect x="14" y="352" width="292" height="34" fill={C.red} />
      <text x="24" y="376" fontSize="20" fill={C.bone} style={wide}>
        Filed
      </text>
      <text x="296" y="374" fontSize="10" textAnchor="end" fill={C.bone} style={mono}>
        {date}
      </text>
    </svg>
  )
}

const art: Record<PosterKind, (p: ArtProps) => React.JSX.Element> = {
  rings: Rings,
  form: Form,
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
          <Art date={`${d.month} ${d.day}`} time={d.time} />
        </div>
      )}
      {event.sample && (
        <span className="label absolute right-0 top-3 bg-coal px-2 py-1 text-[0.5625rem] text-acid">
          Sample
        </span>
      )}
    </div>
  )
}
