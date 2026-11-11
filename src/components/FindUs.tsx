import { ArrowUpRight } from 'lucide-react'
import { placeholderImages } from '../data/images'
import { nav, site } from '../data/site'
import { Edge } from './Edge'

const year = new Date().getFullYear()

/** Visit info and site footer in one compact block. */
export function FindUs() {
  return (
    <footer id="find" className="relative bg-pink">
      <Edge color="#141010" />
      <div className="bg-coal px-4 pb-6 pt-8 text-bone md:px-8 lg:pt-12">
        <div className="mx-auto grid max-w-[90rem] gap-x-10 gap-y-8 lg:grid-cols-12">
          {/* Where + how to get there */}
          <div className="lg:col-span-5">
            <h2 className="t-cute text-[clamp(3rem,14vw,4.25rem)] text-pink lg:text-[clamp(4.25rem,5.5vw,6rem)]">find us</h2>
            <address className="t-block mt-3 text-[clamp(1.6rem,7.5vw,2.25rem)] not-italic lg:text-[2.6rem]">
              {site.address.street}
              <br />
              {site.address.cityLine}
            </address>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={site.directionsUrl} target="_blank" rel="noreferrer" className="btn t-label bg-pink text-coal">
                Directions
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href={site.links.instagram.url} target="_blank" rel="noreferrer" className="btn t-label bg-bone text-coal">
                Instagram
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Practical details */}
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 self-end lg:col-span-4 lg:grid-cols-1">
            <div className="col-span-2 lg:col-span-1">
              <dt className="t-mono text-bone/65">Hours</dt>
              <dd className="t-label mt-1 text-base">{site.hours.summary}</dd>
              <dd className="mt-0.5 text-sm text-bone/75">{site.hours.note}</dd>
            </div>
            <div>
              <dt className="t-mono text-bone/65">Phone</dt>
              <dd className="mt-1">
                <a href={site.phone.href} className="t-label u-link text-base">
                  {site.phone.display}
                </a>
              </dd>
            </div>
            <div>
              <dt className="t-mono text-bone/65">Menu</dt>
              <dd className="mt-1">
                <a href={site.links.official.url} target="_blank" rel="noreferrer" className="t-label u-link break-all text-sm lg:text-base">
                  {site.links.official.label} ↗
                </a>
              </dd>
            </div>
          </dl>

          <nav aria-label="Footer" className="self-end lg:col-span-3">
            <ul className="flex flex-wrap gap-1.5 lg:justify-end">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="t-label inline-flex min-h-11 items-center rounded-full border-2 border-bone/40 px-3.5 transition-colors hover:border-pink hover:text-pink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Concept disclaimer + credits */}
        <div className="mx-auto mt-8 flex max-w-[90rem] flex-col gap-2 border-t border-bone/20 pt-4 text-xs leading-relaxed text-bone/75 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <p className="max-w-3xl">
            <strong className="t-mono mr-2 bg-pink px-1.5 py-0.5 text-coal">Concept</strong>
            An independent design concept by{' '}
            <a href={site.studio.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
              {site.studio.name}
            </a>
            , not the official site of Gracie&rsquo;s Tax Bar and not affiliated with the business. Photos are
            temporary stock images and don&rsquo;t show Gracie&rsquo;s. Events are fictional samples. Hours and
            phone are from public listings, not confirmed by the bar.
          </p>
          <div className="shrink-0">
            <details>
              <summary className="t-mono inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4">
                Photo credits ({placeholderImages.length})
              </summary>
              <ul className="pb-2 lg:text-right">
                {placeholderImages.map((img) =>
                  img.credit ? (
                    <li key={img.id}>
                      <a href={img.credit.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                        {img.credit.author}
                      </a>{' '}
                      / {img.credit.source}
                    </li>
                  ) : null,
                )}
              </ul>
            </details>
            <p className="t-mono">© {year} concept · {site.studio.name}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
