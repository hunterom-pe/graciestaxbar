import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { Edge } from './Edge'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { Sticker } from './Sticker'

export function FindUs() {
  return (
    <section id="find" className="relative bg-red">
      <Edge color="#141010" />
      <div className="relative isolate overflow-hidden bg-coal px-4 pb-20 pt-12 md:px-8 lg:pb-28 lg:pt-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.14]">
          <Photo id="stickerWall" sizes="100vw" className="h-full w-full" hideTag />
        </div>

        <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <h2 className="t-cute text-[clamp(4.5rem,22vw,8rem)] text-pink lg:text-[clamp(7rem,10vw,11rem)]">
              find us
            </h2>
            <address className="t-block mt-6 text-[clamp(2.4rem,11vw,4rem)] not-italic text-bone lg:text-[clamp(3.5rem,5.2vw,5.75rem)]">
              {site.address.street}
              <br />
              {site.address.cityLine}
            </address>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn t-label mt-8 bg-pink text-[1rem] text-coal"
            >
              Directions
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
              <span className="sr-only">(opens Google Maps)</span>
            </a>
          </Reveal>

          <Reveal className="relative lg:col-span-4 lg:col-start-9 lg:self-end" delay={120}>
            <Sticker kind="bolt" r={-8} className="absolute -top-16 right-2 w-12 lg:-top-24 lg:w-16" />
            <dl className="divide-y-2 divide-bone/20 border-y-2 border-bone/20">
              <div className="py-4">
                <dt className="t-mono text-bone/70">Hours</dt>
                <dd className="t-label mt-1 text-xl text-bone">{site.hours.summary}</dd>
                <dd className="mt-1 text-sm text-bone/75">{site.hours.note}</dd>
              </div>
              <div className="py-4">
                <dt className="t-mono text-bone/70">Phone</dt>
                <dd className="mt-1">
                  <a href={site.phone.href} className="t-label u-link text-xl text-bone">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="t-mono text-bone/70">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={site.links.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="t-label u-link text-xl text-bone"
                  >
                    {site.links.instagram.label} ↗
                  </a>
                </dd>
              </div>
            </dl>
            <p className="t-mono mt-3 text-[0.5625rem] text-bone/60">
              Hours + phone from public listings, not yet confirmed by the bar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
