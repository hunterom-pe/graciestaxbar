import { images, type ImageId } from '../data/images'

interface PhotoProps {
  id: ImageId
  /** Sizing/positioning classes for the frame. Give it an aspect ratio or a height. */
  className?: string
  /** The `sizes` attribute, so the browser can pick the 800w or 1600w file */
  sizes?: string
  /** Above-the-fold image: load eagerly with high priority */
  priority?: boolean
  /** Hide the "stock photo" tag (the footer still lists the credit) */
  hideTag?: boolean
  imgClassName?: string
}

/**
 * Renders a photo from the central registry (src/data/images.ts).
 * The frame keeps a dark tint behind the image so the layout and any
 * overlaid text still read if the file fails to load.
 */
export function Photo({
  id,
  className = '',
  sizes = '100vw',
  priority = false,
  hideTag = false,
  imgClassName = '',
}: PhotoProps) {
  const img = images[id]
  return (
    <div className={`relative overflow-hidden bg-coal-2 ${className}`}>
      <img
        src={img.src.lg}
        srcSet={`${img.src.sm} 800w, ${img.src.lg} 1600w`}
        sizes={sizes}
        alt={img.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        style={{ objectPosition: img.focal ?? '50% 50%' }}
        className={`absolute inset-0 h-full w-full object-cover text-bone/60 ${imgClassName}`}
      />
      {img.placeholder && !hideTag && (
        <span className="label pointer-events-none absolute bottom-0 left-0 bg-coal/75 px-2 py-1 text-[0.5625rem] text-bone/80">
          Stock photo · not Gracie&rsquo;s
        </span>
      )}
    </div>
  )
}
