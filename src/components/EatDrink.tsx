import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

export function EatDrink() {
  return (
    <section id="eat" className="relative overflow-hidden bg-red px-5 pb-24 pt-20 text-bone md:px-8 lg:pb-32 lg:pt-28">
      <div className="mx-auto max-w-[100rem]">
        <Reveal className="flex items-center gap-4 text-bone/85">
          <span className="label">Schedule B</span>
          <span aria-hidden="true" className="h-px flex-1 bg-bone/35" />
          <span className="label">Food + drinks</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10 lg:mt-16 lg:gap-x-8">
          <Reveal as="figure" className="col-span-9 lg:col-span-4">
            <Photo
              id="drinksPour"
              sizes="(min-width: 1024px) 30vw, 72vw"
              className="aspect-[3/4] w-full"
            />
          </Reveal>

          <div className="col-span-12 lg:col-span-8 lg:pl-6">
            <Reveal>
              <h2>
                <span className="d-wide block text-[clamp(2.1rem,10vw,4rem)] lg:text-[clamp(3.5rem,6.2vw,8rem)]">
                  Cold drinks.
                </span>
                <span className="d-cond mt-2 block text-[clamp(4.5rem,24vw,9rem)] text-coal lg:text-[clamp(8rem,13vw,16rem)]">
                  Hot food.
                </span>
                <span className="serif-i block text-[clamp(2.25rem,10vw,4rem)] leading-none text-pink-soft lg:pl-[30%] lg:text-[clamp(3.5rem,5vw,6rem)]">
                  no fuss.
                </span>
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 lg:mt-14">
              <Reveal className="col-span-12 md:col-span-7" delay={80}>
                <p className="text-lg leading-relaxed lg:text-xl">
                  There&rsquo;s a full bar and a kitchen behind it. The food is bar food, done
                  properly: the kind of thing you order for the table at 11 PM and don&rsquo;t
                  regret.
                </p>
                <p className="mt-4 leading-relaxed text-bone/85">
                  The menu changes, so we&rsquo;re not going to print one here and get it wrong.
                  The bar posts what&rsquo;s current.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={site.links.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="label group inline-flex items-center gap-3 bg-bone px-6 py-4 text-coal transition-colors hover:bg-pink"
                  >
                    See what&rsquo;s on
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href={site.links.official.url}
                    target="_blank"
                    rel="noreferrer"
                    className="label inline-flex items-center gap-3 border border-bone px-6 py-4 text-bone transition-colors hover:bg-bone hover:text-coal"
                  >
                    Official site
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal as="figure" className="col-span-12 md:col-span-5" delay={160}>
                <Photo
                  id="foodCounter"
                  sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
                  className="aspect-[3/2] w-full md:aspect-[4/5] lg:aspect-[4/3]"
                />
                <figcaption className="label mt-3 text-bone/85">
                  Fig. 5 — The kitchen is open
                </figcaption>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
