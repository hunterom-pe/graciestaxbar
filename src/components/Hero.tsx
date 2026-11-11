import { images } from '../data/images'
import { site } from '../data/site'
import { Photo } from './Photo'
import { Sticker } from './Sticker'

export function Hero() {
  const credit = images.heroInterior.credit
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-coal">
      <div className="absolute inset-0 -z-10">
        <Photo
          id="heroInterior"
          priority
          hideTag
          sizes="100vw"
          className="h-full w-full"
          imgClassName="a-photo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/35 to-coal/40" />
      </div>

      {/* Photobooth strip, stuck on the right (desktop) */}
      <div
        aria-hidden="true"
        className="a-drop booth absolute right-[6%] top-24 hidden w-[12.5rem] grid-rows-4 lg:grid xl:w-[14rem]"
        style={{ rotate: '5deg', ['--d' as string]: '700ms' }}
      >
        <Photo id="insideStools" hideTag sizes="14rem" className="aspect-[4/3]" />
        <Photo id="heartNeon" hideTag sizes="14rem" className="aspect-[4/3]" />
        <Photo id="patioWall" hideTag sizes="14rem" className="aspect-[4/3]" />
        <Photo id="insideDetail" hideTag sizes="14rem" className="aspect-[4/3]" />
        <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />
      </div>

      <Sticker
        kind="star"
        text="PHX"
        r={-12}
        className="a-drop absolute right-5 top-24 w-20 md:w-24 lg:right-[22%] lg:top-[60%] lg:w-28"
        style={{ ['--d' as string]: '900ms' }}
      />
      <Sticker
        kind="heart"
        r={14}
        className="a-drop absolute bottom-[38%] right-[8%] hidden w-16 md:block lg:bottom-auto lg:right-[24%] lg:top-28 lg:w-20"
        style={{ ['--d' as string]: '1050ms' }}
      />

      <div className="flex min-h-[100svh] flex-col justify-end px-4 pb-6 pt-24 md:px-8 md:pb-10">
        <p className="t-mono a-fade mb-4 text-bone" style={{ ['--d' as string]: '200ms' }}>
          {site.city.replace('Arizona', 'AZ')}
        </p>

        <h1 className="relative text-bone">
          <span
            className="t-cute a-rise block text-[clamp(4.25rem,27vw,10rem)] lg:text-[clamp(10rem,19vw,22rem)]"
            style={{ ['--d' as string]: '250ms' }}
          >
            Gracie&rsquo;s
          </span>
          <span
            className="t-block a-rise mt-1 inline-block -rotate-2 bg-pink px-3 pb-1 pt-2 text-[clamp(2.2rem,12vw,4rem)] text-coal lg:ml-[0.4em] lg:mt-0 lg:px-4 lg:text-[clamp(3.5rem,6vw,7rem)]"
            style={{ ['--d' as string]: '420ms' }}
          >
            Tax Bar
          </span>
        </h1>

        <div
          className="a-fade mt-8 flex flex-wrap items-end justify-between gap-6"
          style={{ ['--d' as string]: '650ms' }}
        >
          <div className="flex flex-wrap gap-3">
            <a href="#events" className="btn t-label bg-pink text-coal">
              Events
            </a>
            <a href="#find" className="btn t-label bg-bone text-coal">
              Find us
            </a>
          </div>
          <p className="t-mono text-[0.5625rem] text-bone/70">
            Stock photo{credit ? ` · ${credit.author}` : ''}
          </p>
        </div>
      </div>
    </section>
  )
}
