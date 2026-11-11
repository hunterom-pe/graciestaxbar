import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useMemo, useRef } from 'react'
import { eventDateParts, events, isThisWeek, splitEvents, type BarEvent } from '../data/events'
import { site } from '../data/site'
import { Edge } from './Edge'
import { FilmStrip } from './FilmStrip'
import { Poster } from './Poster'
import { Reveal } from './Reveal'
import { Sticker } from './Sticker'

/** Desktop wall placement: offset + tilt per slot. Cycles if there are more events. */
const wall = [
  'lg:-rotate-2',
  'lg:mt-16 lg:rotate-1',
  'lg:-mt-4 lg:-rotate-1',
  'lg:rotate-2',
  'lg:mt-16 lg:-rotate-1',
  'lg:-mt-4 lg:rotate-1',
]
const tapes = ['left-6 -top-2 -rotate-6', 'right-8 -top-2 rotate-3', 'left-1/2 -top-2 -translate-x-1/2 rotate-1']

function EventCard({ event, index }: { event: BarEvent; index: number }) {
  const d = eventDateParts(event.start)
  const soon = isThisWeek(event)
  return (
    <article className="group relative">
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        <span aria-hidden="true" className={`tape ${tapes[index % tapes.length]}`} />
        <Poster event={event} />
        {soon && (
          <Sticker kind="star" text="THIS WEEK" r={-10} className="absolute -left-5 -top-7 z-10 w-24" />
        )}
      </div>

      <div className="mt-6 text-coal">
        <p className="t-label flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-coal px-2.5 py-1 text-bone">
            <time dateTime={event.start}>
              {d.weekday} {d.month} {d.day} · {d.time}
            </time>
          </span>
          {event.recurring && (
            <span className="rounded-full border-2 border-coal px-2.5 py-0.5">{event.recurring}</span>
          )}
          {soon && <span className="sr-only">This week.</span>}
        </p>
        <h3 className="t-block mt-3 text-[1.9rem]">{event.title}</h3>
        {event.description && <p className="mt-1 text-[0.9375rem] text-coal/80">{event.description}</p>}
        {event.admission && <p className="t-mono mt-2">{event.admission}</p>}
        {event.link && (
          <a
            href={event.link.url}
            target="_blank"
            rel="noreferrer"
            className="t-label u-link mt-3 inline-flex items-center gap-1.5 text-red"
          >
            {event.link.label}
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}

export function Events() {
  const { upcoming, past } = useMemo(() => splitEvents(events), [])
  const hasSamples = events.some((e) => e.sample)
  const railRef = useRef<HTMLUListElement>(null)

  const nudge = (dir: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    rail.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section id="events" className="relative bg-pink">
      <Edge color="#0b0909" />
      <FilmStrip />
      <Edge color="#ECE2D1" className="-mt-px bg-[#0b0909]" />

      <div className="paper relative overflow-hidden px-4 pb-24 pt-12 text-coal md:px-8 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-[96rem]">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <Reveal>
              <h2 className="t-block text-[clamp(4rem,20vw,7rem)] lg:text-[clamp(7rem,11vw,12rem)]">
                Events
              </h2>
            </Reveal>

            <Reveal className="flex max-w-md flex-col items-start gap-4 lg:items-end" delay={100}>
              {hasSamples && (
                <p
                  role="note"
                  className="-rotate-1 border-2 border-coal bg-lime px-3 py-2 text-[0.9375rem] leading-snug shadow-[4px_4px_0_var(--color-coal)]"
                >
                  <strong className="t-label mr-1.5">Demo:</strong>
                  every event and flyer here is made up. None are real Gracie&rsquo;s nights.
                </p>
              )}
              <a
                href={site.links.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="btn t-label bg-coal text-bone"
              >
                Real listings on Instagram
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-10 flex items-center justify-between lg:hidden">
            <p className="t-mono">{upcoming.length} coming up</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Previous events"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-coal active:bg-coal active:text-bone"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="More events"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-coal active:bg-coal active:text-bone"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {upcoming.length === 0 ? (
            <p className="t-cute mt-10 text-5xl">Nothing listed yet.</p>
          ) : (
            <ul
              ref={railRef}
              tabIndex={0}
              aria-label="Upcoming events"
              className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-4 pb-8 pt-4 md:-mx-8 md:px-8 lg:mx-0 lg:mt-14 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20 lg:overflow-visible lg:px-0 xl:gap-x-16"
            >
              {upcoming.map((event, i) => (
                <li
                  key={event.id}
                  className={`w-[76vw] max-w-[21rem] shrink-0 snap-center transition-transform duration-500 sm:w-[19rem] lg:w-auto lg:max-w-none lg:hover:rotate-0 lg:focus-within:rotate-0 ${wall[i % wall.length]}`}
                >
                  <EventCard event={event} index={i} />
                </li>
              ))}
            </ul>
          )}

          {past.length > 0 && (
            <Reveal className="mt-10 lg:mt-24">
              <h3 className="t-mono">Previously</h3>
              <ul className="mt-2 border-t-2 border-coal">
                {past.map((event) => {
                  const d = eventDateParts(event.start)
                  return (
                    <li
                      key={event.id}
                      className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b-2 border-coal py-3 text-coal/75"
                    >
                      <time dateTime={event.start} className="t-mono w-20 shrink-0">
                        {d.month} {d.day}
                      </time>
                      <span className="t-block text-2xl line-through decoration-pink decoration-[3px]">
                        {event.title}
                      </span>
                      {event.sample && <span className="t-mono ml-auto text-[0.5625rem]">Sample</span>}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
