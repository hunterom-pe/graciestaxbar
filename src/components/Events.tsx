import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useMemo, useRef } from 'react'
import { eventDateParts, events, splitEvents, type BarEvent } from '../data/events'
import { site } from '../data/site'
import { Poster } from './Poster'
import { Reveal } from './Reveal'

/** Desktop wall placement: column span, vertical nudge, tilt. Cycles if there are more events. */
const wall = [
  'lg:col-span-4 lg:-rotate-2',
  'lg:col-span-4 lg:mt-24 lg:rotate-1',
  'lg:col-span-4 lg:mt-6 lg:-rotate-1',
  'lg:col-span-3 lg:col-start-2 lg:-mt-10 lg:rotate-2',
  'lg:col-span-4 lg:col-start-7 lg:mt-10 lg:-rotate-1',
  'lg:col-span-4 lg:rotate-1',
]
const tapes = ['left-6 -top-2 -rotate-6', 'right-8 -top-2 rotate-3', 'left-1/2 -top-2 -translate-x-1/2 rotate-1']

function EventCard({ event, index }: { event: BarEvent; index: number }) {
  const d = eventDateParts(event.start)
  return (
    <article className="group relative h-full">
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
        <span aria-hidden="true" className={`tape z-10 ${tapes[index % tapes.length]}`} />
        <Poster event={event} />
      </div>

      <div className="mt-5 flex gap-4">
        <p className="shrink-0 border-r border-coal/30 pr-4 text-center text-coal">
          <span className="label block text-red">{d.weekday}</span>
          <span className="d-cond block text-5xl">{d.day}</span>
          <span className="label block">{d.month}</span>
        </p>
        <div className="min-w-0">
          <h3 className="d-mid text-2xl text-coal">{event.title}</h3>
          <p className="label mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-coal/80">
            <time dateTime={event.start}>{d.time}</time>
            {event.recurring && <span>↻ {event.recurring}</span>}
            {event.admission && <span>{event.admission}</span>}
          </p>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-coal/85">{event.description}</p>
          {event.link && (
            <a
              href={event.link.url}
              target="_blank"
              rel="noreferrer"
              className="label mt-3 inline-flex items-center gap-1.5 text-red underline underline-offset-4"
            >
              {event.link.label}
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          )}
          {event.sample && (
            <p className="label mt-3 inline-block border border-coal/50 px-2 py-1 text-[0.5625rem] text-coal/80">
              Fictional sample listing
            </p>
          )}
        </div>
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
    <section id="events" className="paper relative overflow-hidden px-5 pb-24 pt-20 text-coal md:px-8 lg:pb-36 lg:pt-28">
      <div className="mx-auto max-w-[100rem]">
        <Reveal className="flex items-center gap-4">
          <span className="label">Schedule E</span>
          <span aria-hidden="true" className="h-px flex-1 bg-coal/40" />
          <span className="label">Events + community</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 items-end gap-x-4 gap-y-6 lg:gap-x-8 lg:mt-14">
          <Reveal className="col-span-12 lg:col-span-8">
            <h2 className="d-cond text-[clamp(4.25rem,24vw,10rem)] text-red lg:text-[clamp(10rem,17vw,21rem)]">
              What&rsquo;s
              <br />
              <span className="text-coal">happening</span>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:pb-6" delay={100}>
            <p className="serif-i text-2xl leading-tight lg:text-[1.75rem]">
              DJs, karaoke, drag, bands, and nights that are hard to explain to someone who
              wasn&rsquo;t there.
            </p>
            <a
              href={site.links.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="label group mt-5 inline-flex items-center gap-2 bg-coal px-5 py-3.5 text-bone transition-colors hover:bg-red"
            >
              Real calendar on Instagram
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        {hasSamples && (
          <Reveal className="mt-10 lg:mt-14">
            <p
              role="note"
              className="flex flex-col gap-2 border-2 border-coal bg-acid px-4 py-3 text-coal sm:flex-row sm:items-center sm:gap-5"
            >
              <strong className="d-mid shrink-0 text-xl">Demo content</strong>
              <span className="text-[0.9375rem] leading-snug">
                Every event and flyer below is <strong>made up</strong> to show how this section
                works. None of these nights are real or scheduled at Gracie&rsquo;s. For actual
                events, check the bar&rsquo;s Instagram.
              </span>
            </p>
          </Reveal>
        )}

        {/* Upcoming: swipeable rail on small screens, poster wall on large */}
        <div className="mt-10 flex items-center justify-between lg:mt-16">
          <h3 className="label">Coming up · {upcoming.length}</h3>
          <div className="flex gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous events"
              className="flex h-11 w-11 items-center justify-center border border-coal text-coal active:bg-coal active:text-bone"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="More events"
              className="flex h-11 w-11 items-center justify-center border border-coal text-coal active:bg-coal active:text-bone"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {upcoming.length === 0 ? (
          <p className="serif-i mt-8 text-3xl">
            Nothing on the books right now. Instagram will know before we do.
          </p>
        ) : (
          <ul
            ref={railRef}
            tabIndex={0}
            aria-label="Upcoming events"
            className="no-scrollbar -mx-5 mt-5 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-5 pb-4 pt-4 md:-mx-8 md:px-8 lg:mx-0 lg:mt-8 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20 lg:overflow-visible lg:px-0 lg:pt-6"
          >
            {upcoming.map((event, i) => (
              <li
                key={event.id}
                className={`w-[78vw] max-w-[22rem] shrink-0 snap-center sm:w-[20rem] transition-transform duration-500 lg:w-auto lg:max-w-none lg:hover:rotate-0 lg:focus-within:rotate-0 ${wall[i % wall.length]}`}
              >
                <EventCard event={event} index={i} />
              </li>
            ))}
          </ul>
        )}
        <p className="label mt-2 text-coal/70 lg:hidden">Swipe for more →</p>

        {past.length > 0 && (
          <Reveal className="mt-16 lg:mt-28">
            <h3 className="label">Previously</h3>
            <ul className="mt-3 border-t border-coal/40">
              {past.map((event) => {
                const d = eventDateParts(event.start)
                return (
                  <li
                    key={event.id}
                    className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-coal/40 py-4 text-coal/75"
                  >
                    <time dateTime={event.start} className="label w-24 shrink-0">
                      {d.month} {d.day}
                    </time>
                    <span className="d-mid text-xl line-through decoration-red decoration-2">
                      {event.title}
                    </span>
                    <span className="text-sm">{event.description}</span>
                    {event.sample && <span className="label ml-auto text-[0.5625rem]">Sample</span>}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
