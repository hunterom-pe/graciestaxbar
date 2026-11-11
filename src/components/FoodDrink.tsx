import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
import { Edge } from './Edge'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { Sticker } from './Sticker'

export function FoodDrink() {
  return (
    <section id="food" className="relative bg-paper">
      <Edge color="#8C252C" />
      <div className="relative overflow-hidden bg-red px-4 pb-24 pt-12 text-bone md:px-8 lg:pb-28 lg:pt-16">
        <div className="mx-auto grid max-w-[96rem] grid-cols-6 gap-3 md:gap-4 lg:grid-cols-12 lg:gap-6">
          <Reveal className="col-span-6 lg:col-span-12">
            <h2 className="flex flex-wrap items-baseline gap-x-4">
              <span className="t-block text-[clamp(3.5rem,17vw,6rem)] lg:text-[clamp(6rem,9vw,9.5rem)]">Food</span>
              <span className="t-cute text-[clamp(3.25rem,15vw,5.5rem)] text-blush lg:text-[clamp(5.5rem,8vw,8.5rem)]">
                + drink
              </span>
            </h2>
          </Reveal>

          <Reveal as="figure" className="flash col-span-6 lg:col-span-6" delay={60}>
            <Photo
              id="cocktails"
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[3/2] w-full border-2 border-coal"
            />
          </Reveal>

          <Reveal as="figure" className="relative col-span-3 lg:col-span-3 lg:-mt-16" delay={120}>
            <div className="snap print rotate-2">
              <span className="tape -top-2 left-1/2 -translate-x-1/2 rotate-3" />
              <Photo id="drinksPour" sizes="(min-width: 1024px) 22vw, 48vw" className="aspect-[3/4] w-full" />
            </div>
          </Reveal>

          <Reveal className="col-span-3 flex flex-col justify-between gap-6 lg:col-span-3" delay={180}>
            <Photo
              id="foodCounter"
              sizes="(min-width: 1024px) 22vw, 48vw"
              className="flash aspect-square w-full border-2 border-coal"
            />
            <div className="relative">
              <Sticker kind="heart" r={-12} className="absolute -right-1 -top-14 w-12 md:w-16" />
              <p className="t-mono text-bone/85">Full bar · kitchen</p>
              <p className="t-label mt-3">Menu</p>
              <div className="mt-2 flex flex-col items-start gap-2.5">
                <a
                  href={site.links.official.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn t-label bg-bone text-coal"
                >
                  Website
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href={site.links.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn t-label bg-pink text-coal"
                >
                  Instagram
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
