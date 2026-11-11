import type { ImageId } from '../data/images'
import { Photo } from './Photo'

const frames: ImageId[] = ['punkSinger', 'danceBlur', 'punkDrink', 'redRoom']

/** Sprocket holes along one edge of the strip */
function Sprockets() {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full bg-[length:22px_12px] bg-repeat-x opacity-80"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 5px 3.5px at 11px 6px, var(--color-bone) 98%, transparent 100%)',
      }}
    />
  )
}

/** A strip of 35mm frames from shows: the hand-off into Events. */
export function FilmStrip() {
  return (
    <div className="bg-[#0b0909] px-3 py-3 md:px-6">
      <Sprockets />
      <div className="my-2 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {frames.map((id, i) => (
          <Photo
            key={id}
            id={id}
            sizes="(min-width: 768px) 25vw, 50vw"
            className={`flash aspect-[3/2] ${i % 2 ? 'saturate-[1.15]' : ''}`}
          />
        ))}
      </div>
      <Sprockets />
    </div>
  )
}
