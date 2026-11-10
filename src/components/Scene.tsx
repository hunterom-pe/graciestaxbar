import { useState } from 'react'
import type { ImageId } from '../data/images'
import { scene } from '../data/site'
import { Photo } from './Photo'
import { Reveal } from './Reveal'

/**
 * Music, games and personality as one oversized list. On desktop the
 * photo frame follows whichever line is hovered or focused; on small
 * screens it shows a short strip of photos instead.
 */
export function Scene() {
  const [active, setActive] = useState(0)

  return (
    <section id="scene" className="relative bg-coal px-5 pb-24 pt-20 md:px-8 lg:pb-36 lg:pt-28">
      <div className="mx-auto max-w-[100rem]">
        <Reveal className="flex items-center gap-4 text-bone/80">
          <span className="label">Schedule C</span>
          <span aria-hidden="true" className="h-px flex-1 bg-bone/25" />
          <span className="label">Other income</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-10 lg:gap-x-8 lg:mt-16">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="d-mid text-[clamp(2rem,8.5vw,3.25rem)] text-bone lg:text-[clamp(2.75rem,3.6vw,4.5rem)]">
                Things that happen here{' '}
                <span className="serif-i font-normal normal-case text-pink">on a regular basis</span>
              </h2>
            </Reveal>

            <ol className="mt-8 border-t border-bone/25 lg:mt-12">
              {scene.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 50}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className="group flex w-full items-baseline gap-4 border-b border-bone/25 py-4 text-left lg:py-5"
                  >
                    <span className="label w-7 shrink-0 text-bone/60">0{i + 1}</span>
                    <span>
                      <span
                        className={`d-cond block text-[clamp(2.75rem,13vw,4.5rem)] transition-colors duration-300 lg:text-[clamp(4.5rem,6.4vw,8rem)] ${
                          active === i ? 'text-pink lg:text-pink' : 'text-bone lg:text-bone/45'
                        } lg:group-hover:text-pink`}
                      >
                        {item.title}
                      </span>
                      <span className="mt-1.5 block text-[0.9375rem] text-bone/80 lg:text-base">
                        {item.note}
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </ol>
            <p className="label mt-5 max-w-md text-bone/65">
              As written up by local press. Not an official programme; ask the bar what&rsquo;s on.
            </p>
          </div>

          {/* Desktop: sticky frame that swaps with the active line */}
          <div className="col-span-5 hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] rotate-1 bg-coal-2">
                {scene.map((item, i) => (
                  <div
                    key={item.title}
                    aria-hidden={active !== i}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      active === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Photo id={item.image as ImageId} sizes="40vw" className="h-full w-full" />
                  </div>
                ))}
                <span aria-hidden="true" className="tape -top-2 left-10 -rotate-3" />
              </div>
              <p className="label mt-4 text-bone/70">
                Exhibit {String.fromCharCode(65 + active)} — {scene[active].title}
              </p>
            </div>
          </div>

          {/* Small screens: a three-photo strip */}
          <div className="col-span-12 grid grid-cols-3 gap-2 lg:hidden">
            <Photo id="musicVinyl" sizes="33vw" className="aspect-[3/4]" hideTag />
            <Photo id="musicKaraoke" sizes="33vw" className="mt-6 aspect-[3/4]" hideTag />
            <Photo id="photobooth" sizes="33vw" className="aspect-[3/4]" hideTag />
            <p className="label col-span-3 mt-1 text-bone/65">Stock photos · not Gracie&rsquo;s</p>
          </div>
        </div>
      </div>
    </section>
  )
}
