import { images } from '../data/images'
import { site } from '../data/site'
import { Photo } from './Photo'
import { Sticker } from './Sticker'

export function Hero() {
  const credit = images.heroInterior.credit
  return (
    <section id="top" aria-label="Gracie's Tax Bar" className="relative isolate overflow-hidden bg-coal">
      <div className="absolute inset-0 -z-10">
        <Photo id="heroInterior" priority hideTag sizes="100vw" className="h-full w-full" imgClassName="a-photo" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-coal/50" />
      </div>

      <div className="flex min-h-[88svh] flex-col justify-end px-4 pb-24 pt-24 md:px-8 lg:min-h-[100svh] lg:pb-32">
        <p
          className="t-mono a-fade mb-3 inline-flex w-fit rounded-full border border-bone/60 px-3 py-1 text-bone"
          style={{ ['--d' as string]: '150ms' }}
        >
          Phoenix, AZ
        </p>

        <h1 className="relative w-fit text-bone">
          <span
            className="t-cute a-rise block text-[clamp(4.25rem,27vw,10rem)] lg:text-[clamp(10rem,18vw,21rem)]"
            style={{ ['--d' as string]: '200ms' }}
          >
            Gracie&rsquo;s
          </span>
          <span
            className="t-block a-rise absolute -bottom-3 right-0 -rotate-6 bg-pink px-3 pb-1 pt-2 text-[clamp(1.6rem,8.5vw,3rem)] text-coal lg:-bottom-6 lg:right-[-4%] lg:px-4 lg:text-[clamp(2.75rem,4.6vw,5.5rem)]"
            style={{ ['--d' as string]: '380ms' }}
          >
            Tax Bar
          </span>
          <Sticker
            kind="heart"
            r={14}
            className="a-drop absolute -top-6 right-[8%] w-12 md:w-16 lg:-top-10 lg:w-24"
            style={{ ['--d' as string]: '650ms' }}
          />
        </h1>

        <div className="a-fade mt-12 flex flex-wrap gap-3 lg:mt-16" style={{ ['--d' as string]: '500ms' }}>
          <a href="#events" className="btn t-label bg-pink text-coal">
            Events ↘
          </a>
          <a href={site.directionsUrl} target="_blank" rel="noreferrer" className="btn t-label bg-bone text-coal">
            Directions ↗
          </a>
        </div>

        <p className="t-mono absolute bottom-3 left-4 text-[0.5rem] text-bone/60 md:left-8">
          Stock photo{credit ? ` · ${credit.author}` : ''}
        </p>
      </div>
    </section>
  )
}
