import { Edge } from './Edge'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { Sticker } from './Sticker'

export function OutBack() {
  return (
    <section id="outback" className="relative bg-coal">
      <Edge color="#FF5FA8" />
      <div className="relative overflow-hidden bg-pink px-4 pb-16 pt-10 text-coal md:px-8 lg:pb-20 lg:pt-14">
        <div aria-hidden="true" className="halftone pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full opacity-60 [mask-image:radial-gradient(circle,black_35%,transparent_70%)]" />

        <div className="relative mx-auto grid max-w-[96rem] grid-cols-6 gap-3 md:gap-4 lg:grid-cols-12 lg:gap-6">
          <Reveal className="col-span-6 lg:col-span-5 lg:row-start-1">
            <h2 className="t-cute text-[clamp(5rem,26vw,9rem)] lg:text-[clamp(8rem,13vw,15rem)]">
              out
              <br />
              <span className="pl-[0.6em]">back</span>
            </h2>
          </Reveal>

          {/* Big night shot */}
          <Reveal as="figure" className="flash col-span-6 lg:col-span-7 lg:row-span-2 lg:row-start-1" delay={80}>
            <Photo
              id="patioNight"
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="aspect-[4/3] w-full border-2 border-coal lg:aspect-[5/4]"
            />
          </Reveal>

          {/* Streaky lights */}
          <Reveal as="figure" className="flash col-span-6 lg:col-span-5 lg:row-start-2 lg:self-end" delay={120}>
            <Photo
              id="lightsBlur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[3/2] w-full border-2 border-coal"
            />
          </Reveal>

          {/* Flash print */}
          <Reveal as="figure" className="relative col-span-3 lg:col-span-4 lg:col-start-2 lg:-mt-6" delay={60}>
            <div className="snap print -rotate-3">
              <span className="tape -top-2 left-6 -rotate-6" />
              <Photo id="flashCouple" sizes="(min-width: 1024px) 30vw, 48vw" className="aspect-[4/3] w-full" />
            </div>
          </Reveal>

          {/* B&W print */}
          <Reveal as="figure" className="relative col-span-3 pt-8 lg:col-span-4 lg:col-start-7 lg:mt-12 lg:pt-0" delay={140}>
            <div className="snap print rotate-2">
              <span className="tape -top-2 right-6 rotate-6" />
              <Photo id="bwFriends" sizes="(min-width: 1024px) 30vw, 48vw" className="aspect-[4/3] w-full" />
            </div>
            <Sticker kind="star" text="♥" r={14} className="absolute -right-3 -top-4 w-14 md:w-20" />
          </Reveal>

          {/* Pink chairs, small */}
          <Reveal as="figure" className="relative hidden lg:col-span-2 lg:col-start-11 lg:-mt-20 lg:block lg:self-start" delay={200}>
            <Photo id="patioChairs" sizes="(min-width: 1024px) 15vw, 48vw" className="flash aspect-[3/4] w-full border-2 border-coal" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
