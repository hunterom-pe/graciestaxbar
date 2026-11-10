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
 *      the "demonstration content" banner disappears on its own.
 *   3. For real flyer art, set `flyer` to an image path in /public and
 *      the generated poster is replaced by the image.
 *
 * Upcoming vs. past is worked out automatically from the dates, so an
 * event drops into "Previously" once it is over. This array is the only
 * thing a future CMS or calendar feed needs to produce.
 */

export type PosterKind = 'rings' | 'form' | 'checker' | 'slash' | 'beam' | 'stack'

export interface BarEvent {
  id: string
  title: string
  /** ISO 8601 with offset */
  start: string
  /** ISO 8601 with offset. Defaults to four hours after start. */
  end?: string
  description: string
  /** Only fill in once confirmed, e.g. "No cover" or "$10 at the door" */
  admission?: string
  link?: { label: string; url: string }
  /** e.g. "Every Thursday" */
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
    start: inDays(3, '21:00'),
    description:
      'An all-vinyl night out back. Bring a record you love and get a turn in the rotation.',
    recurring: 'Weekly',
    poster: 'rings',
    sample: true,
  },
  {
    id: 'audit-night',
    title: 'Audit Night Karaoke',
    start: inDays(6, '20:00'),
    description: 'Sing one song and your performance is reviewed by a panel of people at the bar.',
    recurring: 'Weekly',
    poster: 'form',
    sample: true,
  },
  {
    id: 'backyard-flea',
    title: 'Backyard Flea',
    start: inDays(11, '16:00'),
    description: 'Zines, prints, thrifted jackets and one guy selling hot sauce, all on the patio.',
    poster: 'checker',
    sample: true,
  },
  {
    id: 'write-off-revue',
    title: 'The Write-Off Revue',
    start: inDays(16, '21:30'),
    description: 'A drag and burlesque showcase on a stage roughly the size of a pool table.',
    poster: 'slash',
    sample: true,
  },
  {
    id: 'b-movies',
    title: 'B-Movies Out Back',
    start: inDays(24, '19:30'),
    description: 'A projector, a wall, and a double feature nobody asked for.',
    recurring: 'Monthly',
    poster: 'beam',
    sample: true,
  },
  {
    id: 'extension-filed',
    title: 'Extension Filed',
    start: inDays(-9, '21:00'),
    description: 'A post-punk patio party for everyone who put it off until the last minute.',
    poster: 'stack',
    sample: true,
  },
]

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
