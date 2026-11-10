import { placeholderImages } from '../data/images'
import { nav, site } from '../data/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-red text-bone">
      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative px-5 pt-16 md:px-8 lg:pt-24">
        <div className="mx-auto grid max-w-[100rem] grid-cols-12 gap-x-4 gap-y-10 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-5">
            <p className="serif-i text-4xl leading-[1.05] lg:text-6xl">
              No deductions.
              <br />
              No pretense.
              <br />
              See you tonight.
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-6 lg:col-span-2 lg:col-start-7">
            <h2 className="label text-bone/75">Sections</h2>
            <ul className="mt-3 space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-line inline-block py-1.5 text-lg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-2">
            <h2 className="label text-bone/75">Find it</h2>
            <address className="mt-3 text-lg not-italic leading-snug">
              {site.address.street}
              <br />
              {site.address.cityLine}
            </address>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={site.directionsUrl} target="_blank" rel="noreferrer" className="link-line inline-block py-1.5 text-lg">
                  Directions ↗
                </a>
              </li>
              <li>
                <a href={site.phone.href} className="link-line inline-block py-1.5 text-lg">
                  {site.phone.display}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <h2 className="label text-bone/75">Follow</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a href={site.links.instagram.url} target="_blank" rel="noreferrer" className="link-line inline-block py-1.5 text-lg">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href={site.links.official.url} target="_blank" rel="noreferrer" className="link-line inline-block py-1.5 text-lg">
                  Official site ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Concept disclaimer + credits */}
        <div className="mx-auto mt-14 max-w-[100rem] border-t border-bone/40 pt-5 lg:mt-20">
          <p className="max-w-3xl text-sm leading-relaxed text-bone/90">
            <strong className="label mr-2 bg-bone px-1.5 py-0.5 text-coal">Concept</strong>
            This is an independent, unsolicited design concept by{' '}
            <a href={site.studio.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
              {site.studio.name}
            </a>
            . It is not the official website of Gracie&rsquo;s Tax Bar and is not affiliated with
            or endorsed by the business. Photographs are temporary stock images and do not show
            Gracie&rsquo;s. Events shown are fictional samples.
          </p>

          <details className="mt-4 text-sm text-bone/85">
            <summary className="label inline-flex min-h-11 cursor-pointer items-center underline underline-offset-4">
              Photo credits ({placeholderImages.length})
            </summary>
            <ul className="mt-2 columns-1 gap-8 pb-2 sm:columns-2 lg:columns-3">
              {placeholderImages.map((img) =>
                img.credit ? (
                  <li key={img.id} className="break-inside-avoid py-1">
                    <a href={img.credit.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                      {img.credit.author}
                    </a>{' '}
                    / {img.credit.source}
                  </li>
                ) : null,
              )}
            </ul>
          </details>
        </div>
      </div>

      <p className="label relative mt-10 px-5 text-bone/85 md:px-8">
        © {year} concept · {site.studio.name} · Phoenix, AZ
      </p>

      {/* Oversized sign-off, cropped by the bottom edge */}
      <p
        aria-hidden="true"
        className="d-cond relative mt-4 select-none whitespace-nowrap text-center text-[34vw] leading-[0.74] text-coal lg:text-[27vw]"
      >
        Gracie&rsquo;s
      </p>
    </footer>
  )
}
