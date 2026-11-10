import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { images } from '../data/images'
import { site } from '../data/site'
import { Photo } from './Photo'

export function Hero() {
  const credit = images.heroInterior.credit
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-coal">
      {/* Photo: full-bleed on mobile, a tall right-hand slab on desktop */}
      <div className="absolute inset-0 -z-10 lg:left-[38%]">
        <Photo
          id="heroInterior"
          priority
          hideTag
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="h-full w-full"
          imgClassName="a-photo"
        />
        {/* Legibility washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/55 to-coal/30 lg:bg-gradient-to-r lg:from-coal lg:via-coal/25 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-coal/80 to-transparent lg:block" />
        <div className="absolute inset-0 bg-red/25 mix-blend-multiply" />
      </div>

      {/* Vertical location marker, desktop only */}
      <p
        aria-hidden="true"
        className="label a-fade absolute right-6 top-28 hidden text-bone/80 [writing-mode:vertical-rl] lg:block"
        style={{ ['--d' as string]: '900ms' }}
      >
        711 N 7th Ave — PHX, AZ 85007
      </p>

      <div className="flex min-h-[100svh] flex-col justify-end px-5 pb-8 pt-28 md:px-8 lg:justify-center lg:pb-24 lg:pt-32">
        <p
          className="label a-fade flex items-center gap-3 text-bone/90"
          style={{ ['--d' as string]: '150ms' }}
        >
          <span className="inline-block h-2 w-2 bg-red-hot" />
          {site.city}
        </p>

        <h1 className="mt-4 text-bone lg:mt-6">
          <span
            className="d-cond a-rise block text-[clamp(5.25rem,32.5vw,11rem)] lg:text-[clamp(11rem,23vw,26rem)]"
            style={{ ['--d' as string]: '250ms' }}
          >
            Gracie&rsquo;s
          </span>
          <span
            className="d-wide a-rise mt-2 block text-[clamp(2.1rem,12.4vw,4.25rem)] text-pink lg:ml-[0.08em] lg:mt-3 lg:text-[clamp(3.25rem,7.2vw,8.5rem)]"
            style={{ ['--d' as string]: '400ms' }}
          >
            Tax Bar
          </span>
        </h1>

        <div
          className="a-fade mt-7 max-w-md lg:mt-10 lg:max-w-lg"
          style={{ ['--d' as string]: '650ms' }}
        >
          <p className="serif-i text-[1.6rem] leading-[1.15] text-bone md:text-3xl lg:text-[2.15rem]">
            It used to be a tax office. Now it&rsquo;s the bar the neighborhood actually wants to
            be&nbsp;in.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#events"
              className="label group inline-flex items-center gap-3 bg-bone px-6 py-4 text-coal transition-colors hover:bg-pink"
            >
              What&rsquo;s happening
              <ArrowDown
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-y-1"
              />
            </a>
            <a
              href="#visit"
              className="label group inline-flex items-center gap-2 py-3 text-bone underline decoration-pink decoration-2 underline-offset-8"
            >
              Come hang out
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Form-style strip along the bottom edge */}
        <dl
          className="label a-fade mt-10 grid grid-cols-2 border-t border-bone/30 text-bone/85 sm:grid-cols-3 lg:absolute lg:inset-x-8 lg:bottom-6 lg:mt-0 lg:grid-cols-4"
          style={{ ['--d' as string]: '900ms' }}
        >
          <div className="border-bone/30 py-3 pr-3 sm:border-r">
            <dt className="text-[0.5625rem] text-bone/70">1 · Where</dt>
            <dd>{site.address.street}</dd>
          </div>
          <div className="border-bone/30 py-3 sm:border-r sm:px-3">
            <dt className="text-[0.5625rem] text-bone/70">2 · When</dt>
            <dd>Open late · till 2 AM</dd>
          </div>
          <div className="hidden border-bone/30 py-3 sm:block sm:px-3 lg:border-r">
            <dt className="text-[0.5625rem] text-bone/70">3 · Mood</dt>
            <dd>A little weird</dd>
          </div>
          <div className="col-span-2 hidden py-3 text-right text-bone/70 lg:col-span-1 lg:block">
            <dt className="sr-only">Photo</dt>
            <dd className="text-[0.5625rem]">
              Illustrative stock photo{credit ? ` · ${credit.author} / ${credit.source}` : ''}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
