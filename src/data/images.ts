/**
 * Central image registry.
 *
 * Every photograph on the site is looked up here by its semantic id, so
 * swapping stock for real photos of Gracie's never touches a component:
 *
 *   1. Drop the new files in /public/images (ideally 800w + 1600w WebP).
 *   2. Point `src.sm` / `src.lg` at them and rewrite `alt`.
 *   3. Set `placeholder: false` and update (or remove) `credit`.
 *   4. Nudge `focal` if the crop lands badly. It is a CSS object-position.
 *
 * While `placeholder` is true the site shows a small "stock photo" tag on
 * the image and lists the credit in the footer.
 */

export type ImageId =
  | 'heroInterior'
  | 'insideBar'
  | 'patioNight'
  | 'discoBall'
  | 'punkSinger'
  | 'cocktails'
  | 'tots'
  | 'tattooBar'

export interface SiteImage {
  id: ImageId
  src: { sm: string; lg: string }
  alt: string
  credit?: { author: string; source: string; url: string }
  /** true = temporary stock image that does NOT depict Gracie's */
  placeholder: boolean
  /** CSS object-position, e.g. "50% 30%" */
  focal?: string
}

const file = (name: string) => ({
  sm: `/images/${name}-800.webp`,
  lg: `/images/${name}-1600.webp`,
})

const unsplash = (author: string, slug: string) => ({
  author,
  source: 'Unsplash',
  url: `https://unsplash.com/photos/${slug}`,
})

export const images: Record<ImageId, SiteImage> = {
  heroInterior: {
    id: 'heroInterior',
    src: file('hero-interior'),
    alt: 'A red-lit bar room crowded with mismatched stools, tangled string lights and old monitors hanging from the ceiling.',
    credit: unsplash('Maksim Shutov', 'PpmFfn9PjNI'),
    placeholder: true,
    focal: '50% 62%',
  },
  insideBar: {
    id: 'insideBar',
    src: file('inside-bar'),
    alt: 'Silhouettes of people gathered at a long bar washed in deep red light.',
    credit: unsplash('Edward Xu', 'Cg-Jyy7kEjY'),
    placeholder: true,
    focal: '55% 45%',
  },






  patioNight: {
    id: 'patioNight',
    src: file('patio-night'),
    alt: 'A backyard patio at night with colored string lights, a wooden fence and desert plants.',
    credit: unsplash('Katie Mont', 'TsGl0M8SSE0'),
    placeholder: true,
    focal: '50% 30%',
  },







  discoBall: {
    id: 'discoBall',
    src: file('disco-ball'),
    alt: 'A red and pink mirror ball sitting on a metal shelf.',
    credit: unsplash('Theodor Tietze', 'FM_r4FF9sdQ'),
    placeholder: true,
    focal: '50% 55%',
  },
  punkSinger: {
    id: 'punkSinger',
    src: file('punk-singer'),
    alt: 'Black-and-white fisheye shot of a singer yelling into a microphone, band behind him.',
    credit: unsplash('Evgeniy Smersh', 'KbuS9-JWQRw'),
    placeholder: true,
    focal: '40% 40%',
  },




  cocktails: {
    id: 'cocktails',
    src: file('cocktails'),
    alt: 'Two cocktails held up in a dark room, one orange and one green.',
    credit: unsplash('Sexto Abismo | Ginebra Surrealista', '6w1ZaoZvDuI'),
    placeholder: true,
    focal: '55% 50%',
  },


  tots: {
    id: 'tots',
    // Supplied photo, 548px wide: one file serves both sizes (no upscaling).
    src: { sm: '/images/tots.webp', lg: '/images/tots.webp' },
    alt: 'A bowl of golden, crispy tater tots.',
    placeholder: true,
  },

  tattooBar: {
    id: 'tattooBar',
    src: file('tattoo-bar'),
    alt: 'A woman with a tattooed back on a stool at a sticker-covered bar.',
    credit: unsplash('Jessica Christian', 'IReYkVmvhtc'),
    placeholder: true,
    focal: '50% 35%',
  },
}

export const placeholderImages = Object.values(images).filter((i) => i.placeholder)
