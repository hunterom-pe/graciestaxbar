import { images, type ImageId } from '../data/images'

interface PhotoProps {
  id: ImageId
  /** Sizing/positioning classes for the frame. Give it an aspect ratio or a height. */
  className?: string
  /** The `sizes` attribute, so the browser can pick the 800w or 1600w file */
  sizes?: string
  /** Above-the-fold image: load eagerly with high priority */
  priority?: boolean
  /** Hide the "stock" tag (the footer still lists the credit) */
  hideTag?: boolean
  imgClassName?: string
}

/**
 * Renders a photo from the central registry (src/data/images.ts).
 * The frame keeps a dark fill behind the image so layouts and any
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
        className={`absolute inset-0 h-full w-full object-cover text-[0px] ${imgClassName}`}
      />
      {img.placeholder && !hideTag && (
        <span className="t-mono pointer-events-none absolute bottom-1 left-1 bg-coal/70 px-1.5 py-0.5 text-[0.5rem] tracking-[0.1em] text-bone/85">
          stock photo
        </span>
      )}
    </div>
  )
}
