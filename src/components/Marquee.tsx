import { reported, site } from '../data/site'

/**
 * Scrolling ticker of things press has reported at Gracie's, plus the
 * address. Pauses on hover; static under reduced motion. Decorative
 * repeats are hidden from screen readers.
 */
export function Marquee() {
  const items = [...reported, site.address.street]
  const run = (
    <span className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className="t-block px-5 text-[1.75rem] md:text-[2.25rem]">{t}</span>
          <span aria-hidden="true" className="t-cute text-[1.75rem] md:text-[2.25rem]">
            ✶
          </span>
        </span>
      ))}
    </span>
  )
  return (
    <div className="marquee relative overflow-hidden border-y-2 border-coal bg-pink py-2.5 text-coal">
      <p className="sr-only">{items.join(', ')}</p>
      <div aria-hidden="true" className="marquee-track flex w-max">
        {run}
        {run}
      </div>
    </div>
  )
}
