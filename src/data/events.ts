/**
 * Event listings.
 *
 * !! Everything in `events` below is FICTIONAL sample content, written to
 * demonstrate the design. None of it is real Gracie's programming.
 *
 * To go live:
 *   1. Replace the entries with real events. `start` is an ISO date-time
 *      with the Phoenix offset, e.g. "2027-01-15T21:00:00-07:00"
 *      (Arizona has no daylight saving, so it is always -07:00).
 *   2. Set `sample: false` on real entries. When no entry is a sample,
 *      the "demo" banner disappears on its own.
 *   3. For real flyer art, set `flyer` to an image path in /public and
 *      the generated poster is replaced by the image.
 *
 * Upcoming vs. past is worked out from the dates, and anything in the
 * next seven days is tagged "this week". This array is the only thing a
 * future CMS or calendar feed needs to produce.
 */

export type PosterKind = 'rings' | 'karaoke' | 'chrome' | 'checker' | 'slash' | 'beam' | 'stack'

export interface BarEvent {
  id: string
  title: string
  /** ISO 8601 with offset */
  start: string
  /** ISO 8601 with offset. Defaults to four hours after start. */
  end?: string
  /** One short line. Optional. */
  description?: string
  /** Only fill in once confirmed, e.g. "No cover" or "$10 at the door" */
  admission?: string
  link?: { label: string; url: string }
  /** e.g. "Weekly" */
  recurring?: string
  poster: PosterKind
  /** Path to real flyer artwork; overrides the generated poster */
  flyer?: string
  /** true = fictional demonstration listing */
  sample: boolean
}

/**
 * Sample dates are written relative to "today" so the demo never goes
 * stale. Real events should use fixed ISO strings instead.
 */
function inDays(days: number, time: string): string {
  const d = new Date(Date.now() + days * 86_400_000)
  const ymd = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Phoenix' }).format(d)
  return `${ymd}T${time}:00-07:00`
}

export const events: BarEvent[] = [
  {
    id: 'patio-selectors',
    title: 'Patio Selectors',
    start: inDays(2, '21:00'),
    description: 'All vinyl. Bring a record.',
    recurring: 'Weekly',
    poster: 'rings',
    sample: true,
  },
  {
    id: 'karaoke',
    title: 'Karaoke',
    start: inDays(5, '20:00'),
    description: 'Ballads, bangers, both.',
    recurring: 'Weekly',
    poster: 'karaoke',
    sample: true,
  },
  {
    id: 'sad-disco',
    title: 'Sad Disco',
    start: inDays(9, '22:00'),
    description: 'Slow songs, fast songs, glitter.',
    poster: 'chrome',
    sample: true,
  },
  {
    id: 'backyard-flea',
    title: 'Backyard Flea',
    start: inDays(12, '16:00'),
    description: 'Zines, prints, thrifted stuff.',
    poster: 'checker',
    sample: true,
  },
  {
    id: 'pink-room-revue',
    title: 'Pink Room Revue',
    start: inDays(16, '21:30'),
    description: 'Drag + burlesque.',
    poster: 'slash',
    sample: true,
  },
  {
    id: 'b-movies',
    title: 'B-Movies Out Back',
    start: inDays(24, '19:30'),
    description: 'Double feature on the wall.',
    recurring: 'Monthly',
    poster: 'beam',
    sample: true,
  },
  {
    id: 'no-wave',
    title: 'No Wave Night',
    start: inDays(-9, '21:00'),
    description: 'Post-punk on the patio.',
    poster: 'stack',
    sample: true,
  },
]

const DAY = 86_400_000

export function splitEvents(list: BarEvent[], now: Date = new Date()) {
  const endOf = (e: BarEvent) =>
    e.end ? new Date(e.end).getTime() : new Date(e.start).getTime() + 4 * 3_600_000
  const t = now.getTime()
  const byStart = (a: BarEvent, b: BarEvent) =>
    new Date(a.start).getTime() - new Date(b.start).getTime()
  return {
    upcoming: list.filter((e) => endOf(e) >= t).sort(byStart),
    past: list
      .filter((e) => endOf(e) < t)
      .sort(byStart)
      .reverse(),
  }
}

export function isThisWeek(e: BarEvent, now: Date = new Date()) {
  return new Date(e.start).getTime() - now.getTime() < 7 * DAY
}

const tz = 'America/Phoenix'
const fmt = (opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-US', { timeZone: tz, ...opts })

export function eventDateParts(iso: string) {
  const d = new Date(iso)
  return {
    weekday: fmt({ weekday: 'short' }).format(d),
    month: fmt({ month: 'short' }).format(d),
    day: fmt({ day: 'numeric' }).format(d),
    time: fmt({ hour: 'numeric', minute: '2-digit' }).format(d).replace(':00', ''),
    full: fmt({ weekday: 'long', month: 'long', day: 'numeric' }).format(d),
  }
}
