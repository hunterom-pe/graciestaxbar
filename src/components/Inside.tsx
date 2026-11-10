import { Photo } from './Photo'
import { Reveal } from './Reveal'

const itemized = [
  'Red light, all night',
  'One long bar',
  'Booths you sink into',
  'Stickers on every surface',
  'Decor nobody can explain',
]

export function Inside() {
  return (
    <section id="inside" className="relative bg-coal px-5 pb-24 pt-20 md:px-8 lg:pb-40 lg:pt-32">
      <div className="mx-auto max-w-[100rem]">
        <Reveal className="flex items-center gap-4 text-bone/80">
          <span className="label">Schedule A</span>
          <span aria-hidden="true" className="h-px flex-1 bg-bone/25" />
          <span className="label">The room</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10 lg:mt-16 lg:gap-x-8">
          {/* Headline: two voices, deliberately misaligned */}
          <Reveal className="col-span-12 lg:col-span-7">
            <h2 className="text-bone">
              <span className="d-cond block text-[clamp(4.75rem,25vw,9rem)] lg:text-[clamp(9rem,14.5vw,17rem)]">
                A little
                <br />
                weird.
              </span>
              <span className="serif-i -mt-1 block pl-[18%] text-[clamp(2.75rem,13vw,5rem)] leading-none text-pink lg:-mt-4 lg:pl-[32%] lg:text-[clamp(5rem,7.5vw,9rem)]">
                A lot of heart.
              </span>
            </h2>
          </Reveal>

          <Reveal className="col-span-12 self-end lg:col-span-4 lg:col-start-9 lg:pb-4" delay={120}>
            <p className="text-lg leading-relaxed text-bone/90 lg:text-xl">
              Walk in off 7th Avenue and your eyes need a minute. Everything is red. The bar runs
              most of the room, the booths have seen things, and there isn&rsquo;t a bare surface
              in the place.
            </p>
            <p className="mt-4 text-base leading-relaxed text-bone/75">
              Nobody designed it to look this way. It just kept accumulating, the way good bars
              do.
            </p>
          </Reveal>

          <div className="col-span-12 lg:col-span-8">
          {/* Photo cluster */}
          <Reveal as="figure">
            <Photo
              id="insideBar"
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="aspect-[4/3] w-full lg:aspect-[16/10]"
              imgClassName="transition-transform duration-[1200ms] hover:scale-[1.03]"
            />
            <figcaption className="label mt-3 flex justify-between gap-4 text-bone/70">
              <span>Fig. 1 — The long bar, mid-evening</span>
              <span className="hidden sm:inline">Line 01</span>
            </figcaption>
          </Reveal>

          {/* Itemized list */}
          <Reveal className="mt-14 hidden lg:ml-[9%] lg:mr-[12%] lg:mt-20 lg:block">
            <p className="label text-pink">Itemized</p>
            <ul className="mt-3 border-t border-bone/25">
              {itemized.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-bone/25 py-3 lg:py-4"
                >
                  <span className="label w-6 shrink-0 text-bone/60">{i + 1}</span>
                  <span className="d-mid text-xl text-bone md:text-2xl lg:text-3xl">{item}</span>
                  <span aria-hidden="true" className="label ml-auto text-red-hot">
                    ✕
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-4 lg:block lg:pt-24">
            <Reveal as="figure" className="col-span-7 lg:-ml-24" delay={100}>
              <Photo
                id="insideStools"
                sizes="(min-width: 1024px) 30vw, 58vw"
                className="aspect-[3/4] w-full ring-1 ring-coal lg:shadow-[0_0_0_10px_var(--color-coal)]"
              />
              <figcaption className="label mt-3 text-bone/70">Fig. 2 — Good seats</figcaption>
            </Reveal>
            <Reveal as="figure" className="col-span-5 pt-10 lg:ml-auto lg:mt-10 lg:w-3/5 lg:pt-0" delay={200}>
              <Photo
                id="insideDetail"
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="aspect-[3/4] w-full"
                hideTag
              />
              <figcaption className="label mt-3 text-bone/70">Fig. 3 — No idea</figcaption>
            </Reveal>
          </div>

          {/* Itemized list */}
          <Reveal className="col-span-12 lg:hidden">
            <p className="label text-pink">Itemized</p>
            <ul className="mt-3 border-t border-bone/25">
              {itemized.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-bone/25 py-3 lg:py-4"
                >
                  <span className="label w-6 shrink-0 text-bone/60">{i + 1}</span>
                  <span className="d-mid text-xl text-bone md:text-2xl lg:text-3xl">{item}</span>
                  <span aria-hidden="true" className="label ml-auto text-red-hot">
                    ✕
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
