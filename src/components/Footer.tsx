import { placeholderImages } from '../data/images'
import { nav, site } from '../data/site'
import { Edge } from './Edge'
import { Sticker } from './Sticker'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="footer" className="relative bg-coal">
      <Edge color="#FF5FA8" />
      <div className="relative overflow-hidden bg-pink text-coal">
        <div className="relative px-4 pt-10 md:px-8 lg:pt-14">
          <div className="mx-auto flex max-w-[96rem] flex-wrap items-start justify-between gap-x-10 gap-y-8">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-1 gap-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="t-label inline-flex rounded-full border-2 border-coal px-3.5 py-2 transition-colors hover:bg-coal hover:text-pink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="t-label flex flex-wrap gap-x-5 gap-y-2">
              <a href={site.directionsUrl} target="_blank" rel="noreferrer" className="u-link py-1">
                {site.address.street} ↗
              </a>
              <a href={site.phone.href} className="u-link py-1">
                {site.phone.display}
              </a>
              <a href={site.links.instagram.url} target="_blank" rel="noreferrer" className="u-link py-1">
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Concept disclaimer + credits */}
          <div className="mx-auto mt-10 max-w-[96rem] border-t-2 border-coal pt-4">
            <p className="max-w-3xl text-sm leading-relaxed">
              <strong className="t-mono mr-2 bg-coal px-1.5 py-0.5 text-pink">Concept</strong>
              An independent, unsolicited design concept by{' '}
              <a href={site.studio.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                {site.studio.name}
              </a>
              . Not the official website of Gracie&rsquo;s Tax Bar, and not affiliated with or endorsed by the
              business. Photos are temporary stock images and don&rsquo;t show Gracie&rsquo;s. Events are
              fictional samples.
            </p>
            <details className="mt-3 text-sm">
              <summary className="t-mono inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4">
                Photo credits ({placeholderImages.length})
              </summary>
              <ul className="mt-1 columns-1 gap-8 pb-2 sm:columns-2 lg:columns-4">
                {placeholderImages.map((img) =>
                  img.credit ? (
                    <li key={img.id} className="break-inside-avoid py-0.5">
                      <a href={img.credit.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                        {img.credit.author}
                      </a>{' '}
                      / {img.credit.source}
                    </li>
                  ) : null,
                )}
              </ul>
            </details>
            <p className="t-mono mt-3">
              © {year} concept · {site.studio.name}
            </p>
          </div>
        </div>

        {/* Oversized sign-off, cropped by the bottom edge */}
        <div aria-hidden="true" className="relative mt-6 select-none">
          <p className="t-cute whitespace-nowrap pl-[2vw] text-[25vw] leading-[0.8] text-coal">
            Gracie&rsquo;s
          </p>
          <Sticker kind="star" text="TAX BAR" r={-14} className="absolute right-[6vw] top-[6%] w-[18vw] max-w-40" />
        </div>
      </div>
    </footer>
  )
}
