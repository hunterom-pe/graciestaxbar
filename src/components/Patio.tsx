import { ArrowUpRight } from 'lucide-react'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

export function Patio() {
  return (
    <section id="patio" className="relative bg-coal">
      {/* The back door: red light gives way to pink */}
      <div
        aria-hidden="true"
        className="h-28 bg-gradient-to-b from-coal via-red to-pink lg:h-48"
      />

      <div className="relative overflow-hidden bg-pink px-5 pb-24 pt-10 text-coal md:px-8 lg:pb-36 lg:pt-16">
        <div
          aria-hidden="true"
          className="halftone pointer-events-none absolute -right-20 top-0 h-[32rem] w-[32rem] rounded-full opacity-70 [mask-image:radial-gradient(circle,black_30%,transparent_70%)]"
        />

        <div className="relative mx-auto max-w-[100rem]">
          <Reveal className="flex items-center gap-4">
            <span className="label">Schedule D</span>
            <span aria-hidden="true" className="h-px flex-1 bg-coal/40" />
            <span className="label">The patio</span>
          </Reveal>

          <Reveal>
            <h2 className="d-wide mt-10 text-[clamp(2.2rem,10.4vw,4.5rem)] lg:mt-14 lg:text-[clamp(4.5rem,8.2vw,10.5rem)]">
              Out back,
              <br />
              <span className="lg:pl-[12%]">things get</span>
              <br />
              <span className="serif-i font-normal normal-case tracking-normal text-red lg:pl-[4%]">
                interesting.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-8 lg:mt-20 lg:gap-x-8">
            <Reveal as="figure" className="col-span-8 lg:col-span-4">
              <div className="-rotate-2 bg-bone p-2 shadow-[6px_8px_0_rgb(20_16_16_/_0.9)] transition-transform duration-500 hover:rotate-0 lg:p-3">
                <Photo
                  id="patioWall"
                  sizes="(min-width: 1024px) 30vw, 64vw"
                  className="aspect-[4/5] w-full"
                />
              </div>
            </Reveal>

            <Reveal
              className="col-span-12 lg:col-span-4 lg:col-start-6 lg:row-start-1 lg:self-center"
              delay={100}
            >
              <p className="text-xl leading-snug lg:text-2xl">
                Push through the back door and the whole mood changes. Pink walls, furniture that
                doesn&rsquo;t match, and enough room to bring everyone you know.
              </p>
              <p className="mt-4 leading-relaxed text-coal/85">
                It&rsquo;s where the birthday ends up, where the DJ sets up when the sun goes
                down, and where a quick drink turns into last call.
              </p>
              <a
                href="#visit"
                className="label group mt-7 inline-flex items-center gap-3 bg-coal px-6 py-4 text-bone transition-colors hover:bg-red"
              >
                Pull up a chair
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>

            <Reveal
              as="figure"
              className="col-span-7 col-start-6 -mt-24 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:mt-16"
              delay={180}
            >
              <div className="rotate-3 bg-bone p-2 shadow-[6px_8px_0_rgb(20_16_16_/_0.9)] transition-transform duration-500 hover:rotate-0 lg:p-3">
                <Photo
                  id="patioChairs"
                  sizes="(min-width: 1024px) 22vw, 56vw"
                  className="aspect-[3/4] w-full"
                  hideTag
                />
              </div>
            </Reveal>

            <Reveal as="figure" className="col-span-12 lg:col-span-7 lg:col-start-2 lg:mt-10">
              <Photo
                id="patioNight"
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="aspect-[4/3] w-full lg:aspect-[16/9]"
              />
              <figcaption className="label mt-3">Fig. 4 — After dark</figcaption>
            </Reveal>

            <Reveal className="col-span-12 lg:col-span-3 lg:col-start-10 lg:mt-10 lg:self-end" delay={120}>
              <Photo
                id="patioAlley"
                sizes="(min-width: 1024px) 22vw, 0px"
                className="hidden aspect-[3/4] w-full lg:block"
                hideTag
              />
              <ul className="d-mid mt-0 space-y-1 text-2xl lg:mt-6 lg:text-[1.65rem]">
                <li>Birthdays.</li>
                <li>Breakups.</li>
                <li>Bands.</li>
                <li className="text-red">Whatever Tuesday is.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
