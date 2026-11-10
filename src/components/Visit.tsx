import { ArrowUpRight, MapPin } from 'lucide-react'
import { site } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

function Box({
  n,
  label,
  children,
  className = '',
}: {
  n: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border-b border-bone/40 p-4 lg:p-6 ${className}`}>
      <dt className="label flex gap-2 text-bone/70">
        <span className="text-pink">{n}</span>
        {label}
      </dt>
      <dd className="mt-2.5">{children}</dd>
    </div>
  )
}

export function Visit() {
  return (
    <section id="visit" className="relative isolate overflow-hidden bg-coal px-5 pb-24 pt-20 md:px-8 lg:pb-32 lg:pt-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.1]">
        <Photo id="stickerWall" sizes="100vw" className="h-full w-full" hideTag />
        <div className="absolute inset-0 bg-gradient-to-b from-coal via-transparent to-coal" />
      </div>

      <div className="mx-auto max-w-[100rem]">
        <Reveal className="flex items-center gap-4 text-bone/80">
          <span className="label">Form 711-N</span>
          <span aria-hidden="true" className="h-px flex-1 bg-bone/25" />
          <span className="label">Visit</span>
        </Reveal>

        <Reveal>
          <h2 className="mt-10 text-bone lg:mt-14">
            <span className="d-cond block text-[clamp(4.25rem,23vw,9rem)] lg:text-[clamp(9rem,15.5vw,19rem)]">
              Come as you are.
            </span>
            <span className="d-wide mt-3 block text-[clamp(1.75rem,8.6vw,3.5rem)] text-pink lg:text-right lg:text-[clamp(3rem,5.4vw,7rem)]">
              Stay a while.
            </span>
          </h2>
        </Reveal>

        <Reveal className="mt-12 lg:mt-20">
          <dl className="grid grid-cols-1 border-l border-r border-t border-bone/40 bg-coal/70 backdrop-blur-[2px] md:grid-cols-2 lg:grid-cols-12">
            <Box n="1" label="Name of establishment" className="md:border-r lg:col-span-4">
              <p className="d-mid text-3xl text-bone lg:text-4xl">{site.name}</p>
            </Box>

            <Box n="2" label="Address" className="lg:col-span-5 lg:border-r">
              <address className="d-mid text-3xl not-italic text-bone lg:text-4xl">
                {site.address.street}
                <br />
                {site.address.cityLine}
              </address>
            </Box>

            <div className="border-b border-bone/40 md:col-span-2 lg:col-span-3 lg:row-span-2 lg:flex">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 w-full items-center justify-between gap-4 bg-pink p-5 text-coal transition-colors hover:bg-bone lg:flex-col lg:items-start lg:p-6"
              >
                <MapPin aria-hidden="true" className="h-8 w-8 shrink-0 lg:h-10 lg:w-10" />
                <span className="d-cond flex-1 text-5xl lg:flex-none lg:text-[clamp(3.5rem,5vw,6rem)]">
                  Get
                  <br className="hidden lg:block" /> directions
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 lg:self-end"
                />
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>

            <Box n="3" label="Hours" className="md:border-r lg:col-span-4">
              <p className="d-mid text-2xl text-bone lg:text-3xl">{site.hours.summary}</p>
              <p className="mt-2 text-sm leading-relaxed text-bone/80">{site.hours.note}</p>
            </Box>

            <Box n="4" label="Phone" className="lg:col-span-2 lg:border-r">
              <a href={site.phone.href} className="link-line d-mid text-2xl text-bone lg:text-[1.65rem]">
                {site.phone.display}
              </a>
            </Box>

            <Box n="5" label="Find us online" className="md:col-span-2 lg:col-span-3 lg:border-r">
              <ul className="space-y-1.5">
                <li>
                  <a
                    href={site.links.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-line text-lg text-bone"
                  >
                    Instagram {site.links.instagram.label} ↗
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.official.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-line text-lg text-bone"
                  >
                    {site.links.official.label} ↗
                  </a>
                </li>
              </ul>
            </Box>
          </dl>
          <p className="label mt-4 text-bone/65">
            Hours and phone are from public listings and still need confirming with the bar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
