import type { ImageId } from '../data/images'
import { Edge } from './Edge'
import { Photo } from './Photo'
import { Sticker } from './Sticker'

/** Small pill label stuck onto a photo */
function Tag({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`t-label absolute z-20 rounded-full px-3 py-1.5 shadow-[3px_3px_0_var(--color-coal)] ${className}`}>
      {children}
    </span>
  )
}

const strip: ImageId[] = ['discoBall', 'punkSinger', 'cocktails']

/**
 * Inside → out back as one photo composition. The dark half runs into
 * the pink half; prints and the booth strip overlap the seams so it
 * reads as one spread rather than two sections.
 */
export function Scene() {
  return (
    <div className="relative">
      {/* INSIDE: dark */}
      <section id="inside" aria-label="Inside" className="relative z-10 bg-coal px-4 md:px-8">
        <div className="relative mx-auto max-w-[90rem]">
          {/* Photobooth strip, crossing up into the hero */}
          <div
            aria-hidden="true"
            className="booth snap relative z-30 -mt-16 ml-auto grid w-[78%] max-w-[22rem] -rotate-2 grid-cols-3 lg:absolute lg:-top-56 lg:right-0 lg:mt-0 lg:w-[11.5rem] lg:grid-cols-1 lg:rotate-3"
          >
            {strip.map((id) => (
              <Photo key={id} id={id} hideTag sizes="(min-width: 1024px) 12rem, 26vw" className="aspect-[4/3]" />
            ))}
            <span className="tape -top-2.5 left-1/2 -translate-x-1/2 rotate-2" />
          </div>

          <div className="grid grid-cols-12 gap-3 pt-5 lg:gap-6 lg:pt-16">
            <figure className="flash relative col-span-12 lg:col-span-8">
              <Tag className="-top-3 left-3 bg-bone text-coal">Inside</Tag>
              <Photo id="insideBar" sizes="(min-width: 1024px) 62vw, 100vw" className="aspect-[4/3] w-full md:aspect-[16/9] lg:aspect-[16/10]" />
            </figure>

            {/* Tall print hanging over the seam into the pink */}
            <figure className="relative z-20 col-span-6 col-start-7 -mb-24 -mt-[5.5rem] md:col-span-4 md:-mt-16 md:col-start-9 lg:col-span-4 lg:col-start-9 lg:-mb-40 lg:mt-24">
              <div className="snap print rotate-3">
                <span className="tape -top-2 left-1/2 -translate-x-1/2 -rotate-3" />
                <Photo id="tattooBar" sizes="(min-width: 1024px) 30vw, 48vw" className="aspect-[3/4] w-full" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* OUT BACK: pink */}
      <section id="outback" aria-label="Out back" className="relative bg-coal">
        <Edge color="#FF5FA8" />
        <div className="relative bg-pink px-4 pb-5 pt-4 md:px-8 md:pb-10 lg:pb-16">
          <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-3 lg:gap-6">
            <figure className="flash relative col-span-12 mt-8 md:mt-10 lg:col-span-7 lg:mt-0">
              <Tag className="-top-3 left-3 bg-coal text-pink">Out Back</Tag>
              <Photo
                id="patioNight"
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="aspect-[4/3] w-full border-2 border-coal md:aspect-[16/9] lg:aspect-[16/10]"
              />
            </figure>

            <figure className="relative col-span-7 -mt-14 md:col-span-5 lg:col-span-4 lg:col-start-8 lg:mt-48">
              <div className="snap print -rotate-3">
                <span className="tape -top-2 left-6 -rotate-6" />
                <Photo id="flashCouple" sizes="(min-width: 1024px) 30vw, 56vw" className="aspect-[4/3] w-full" />
              </div>
              <Sticker kind="daisy" r={-12} className="absolute -right-6 -top-8 w-14 lg:-right-10 lg:w-20" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}
