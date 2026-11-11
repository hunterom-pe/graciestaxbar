import { ArrowUpRight } from 'lucide-react'
import { useMemo } from 'react'
import { eventDateParts, events, FEATURED_COUNT, isThisWeek, splitEvents, type BarEvent } from '../data/events'
import { site } from '../data/site'
import { Poster } from './Poster'
import { Sticker } from './Sticker'

const tilt = ['-rotate-2', 'rotate-2 mt-8 lg:mt-16', '-rotate-1']

function Featured({ event, index }: { event: BarEvent; index: number }) {
  const d = eventDateParts(event.start)
  const soon = isThisWeek(event)
  return (
    <li className={`group transition-transform duration-500 hover:rotate-0 focus-within:rotate-0 ${tilt[index % tilt.length]}`}>
      <article>
        <div className="relative transition-transform duration-500 group-hover:-translate-y-1.5">
          <span aria-hidden="true" className="tape -top-2 left-1/2 -translate-x-1/2 rotate-2" />
          <Poster event={event} />
          {soon && (
            <Sticker kind="star" text="THIS WEEK" r={-10} className="absolute -left-3 -top-5 z-10 w-16 lg:-left-6 lg:-top-7 lg:w-24" />
          )}
        </div>
        <h3 className="t-block mt-3 text-[1.15rem] text-coal lg:mt-4 lg:text-[1.75rem]">{event.title}</h3>
        <p className="t-mono mt-0.5 text-coal/80">
          <time dateTime={event.start}>
            {d.weekday} {d.month} {d.day} · {d.time}
          </time>
          {soon && <span className="sr-only">, this week</span>}
        </p>
      </article>
    </li>
  )
}

export function Events() {
  const featured = useMemo(() => splitEvents(events).upcoming.slice(0, FEATURED_COUNT), [])
  const hasSamples = featured.some((e) => e.sample)

  return (
    <section id="events" aria-labelledby="events-title" className="relative bg-pink px-4 pb-16 pt-6 text-coal md:px-8 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-[90rem] gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="flex flex-wrap items-end justify-between gap-4 lg:col-span-4 lg:flex-col lg:items-start lg:justify-start lg:pt-16">
          <h2 id="events-title" className="leading-none">
            <span className="t-cute block text-[clamp(3.25rem,15vw,4.5rem)] lg:text-[clamp(4.5rem,6.5vw,7rem)]">events</span>
          </h2>
          <a href={site.links.instagram.url} target="_blank" rel="noreferrer" className="btn t-label bg-coal text-bone">
            All events
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          {hasSamples && (
            <p role="note" className="t-mono w-full rounded-sm bg-lime px-2.5 py-1.5 text-coal lg:mt-2 lg:w-auto">
              Demo · sample events, not real listings
            </p>
          )}
        </div>

        {featured.length === 0 ? (
          <p className="t-label lg:col-span-8 lg:pt-16">Nothing listed here yet. Check Instagram.</p>
        ) : (
          <ul aria-label="Featured events" className="grid grid-cols-2 gap-4 sm:gap-8 lg:col-span-8 lg:gap-12 xl:gap-16">
            {featured.map((event, i) => (
              <Featured key={event.id} event={event} index={i} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
