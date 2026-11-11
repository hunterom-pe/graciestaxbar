import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { Sticker } from './Sticker'

export function Inside() {
  return (
    <section id="inside" className="relative overflow-hidden bg-coal px-4 pb-24 pt-16 md:px-8 lg:pb-32 lg:pt-24">
      <div className="mx-auto max-w-[96rem]">
        <Reveal className="relative flex items-end gap-4">
          <h2 className="t-block text-[clamp(3.5rem,16vw,6rem)] text-bone lg:text-[clamp(6rem,9vw,9.5rem)]">
            Inside
          </h2>
          <Sticker kind="arrow" className="mb-3 w-16 rotate-[20deg] text-pink md:w-24" />
        </Reveal>

        <div className="mt-8 grid grid-cols-6 gap-3 md:gap-4 lg:mt-10 lg:grid-cols-12 lg:gap-6">
          {/* The bar */}
          <Reveal as="figure" className="flash col-span-6 lg:col-span-8">
            <Photo
              id="insideBar"
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="aspect-[4/3] w-full lg:aspect-[16/10]"
            />
          </Reveal>

          {/* Tall print, tilted */}
          <Reveal as="figure" className="relative col-span-3 lg:col-span-4 lg:mt-20" delay={100}>
            <div className="snap print rotate-2">
              <span className="tape -top-2 left-1/2 -translate-x-1/2 -rotate-3" />
              <Photo id="tattooBar" sizes="(min-width: 1024px) 30vw, 48vw" className="aspect-[3/4] w-full" />
            </div>
            <Sticker kind="daisy" r={-14} className="absolute -bottom-6 -left-5 w-14 md:w-20" />
          </Reveal>

          {/* Photo booth strips */}
          <Reveal as="figure" className="col-span-3 pt-10 lg:col-span-3 lg:-mt-28 lg:pt-0" delay={160}>
            <div className="snap print -rotate-3">
              <Photo id="boothStrips" sizes="(min-width: 1024px) 22vw, 48vw" className="aspect-[3/4] w-full" />
            </div>
            <figcaption className="t-scrawl mt-3 text-pink">photo booth ♥</figcaption>
          </Reveal>

          {/* Disco ball */}
          <Reveal as="figure" className="relative col-span-3 lg:col-span-3 lg:mt-10" delay={60}>
            <Photo id="discoBall" sizes="(min-width: 1024px) 22vw, 48vw" className="flash aspect-square w-full" />
            <Sticker kind="bolt" r={10} className="absolute -right-2 -top-6 w-10 md:w-14" />
          </Reveal>

          {/* Flyer hallway */}
          <Reveal as="figure" className="col-span-3 self-end lg:col-span-6" delay={120}>
            <Photo
              id="insideFlyers"
              sizes="(min-width: 1024px) 48vw, 48vw"
              className="flash aspect-square w-full lg:aspect-[16/9]"
            />
            <figcaption className="t-scrawl mt-3 text-bone/80">every wall</figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
