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
  | 'insideStools'
  | 'insideDetail'
  | 'insideFlyers'
  | 'patioWall'
  | 'patioChairs'
  | 'patioAlley'
  | 'patioNight'
  | 'musicVinyl'
  | 'musicKaraoke'
  | 'photobooth'
  | 'drinksPour'
  | 'foodCounter'
  | 'stickerWall'

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
  insideStools: {
    id: 'insideStools',
    src: file('inside-stools'),
    alt: 'Two people talking on chrome stools at a bar glowing orange-red.',
    credit: unsplash('ysla oliveira', 'm_4t8U66sDU'),
    placeholder: true,
    focal: '60% 70%',
  },
  insideDetail: {
    id: 'insideDetail',
    src: file('inside-detail'),
    alt: 'An odd ceramic figurine sitting on a glossy bar top under red light.',
    credit: unsplash('Ruben Mavarez', '2blOmfBN4b0'),
    placeholder: true,
    focal: '50% 45%',
  },
  insideFlyers: {
    id: 'insideFlyers',
    src: file('inside-flyers'),
    alt: 'A narrow hallway papered floor to ceiling with flyers, lit red.',
    credit: unsplash('Julien', 'nYN6Zz17SxQ'),
    placeholder: true,
  },
  patioWall: {
    id: 'patioWall',
    src: file('patio-wall'),
    alt: 'A hot pink stucco wall with a white window and potted flowers in hard sunlight.',
    credit: unsplash('Intrepid', 'Cd_qLC1VLUw'),
    placeholder: true,
    focal: '50% 40%',
  },
  patioChairs: {
    id: 'patioChairs',
    src: file('patio-chairs'),
    alt: 'Two pink folding chairs on a checkered floor beneath a wall of colorful flyers.',
    credit: unsplash('Sou Jest', '6WnSVVZiJLI'),
    placeholder: true,
    focal: '50% 55%',
  },
  patioAlley: {
    id: 'patioAlley',
    src: file('patio-alley'),
    alt: 'Sunlight cutting across a magenta wall toward a small table and a potted tree.',
    credit: unsplash('Michael Michael', 'Y327GKM51JE'),
    placeholder: true,
    focal: '50% 60%',
  },
  patioNight: {
    id: 'patioNight',
    src: file('patio-night'),
    alt: 'A backyard patio at night with colored string lights, a wooden fence and desert plants.',
    credit: unsplash('Katie Mont', 'TsGl0M8SSE0'),
    placeholder: true,
    focal: '50% 30%',
  },
  musicVinyl: {
    id: 'musicVinyl',
    src: file('music-vinyl'),
    alt: 'Close-up of a red vinyl record spinning on a turntable.',
    credit: unsplash('Thiago Zanutigh', '860Mi6hEPJc'),
    placeholder: true,
  },
  musicKaraoke: {
    id: 'musicKaraoke',
    src: file('music-karaoke'),
    alt: 'A vertical red neon sign spelling KARAOKE against a dark window.',
    credit: unsplash('Carl Tronders', 'ZWfeR8wAT7Q'),
    placeholder: true,
  },
  photobooth: {
    id: 'photobooth',
    src: file('photobooth'),
    alt: 'An old-fashioned photo booth with a red curtain, covered in photo strips.',
    credit: unsplash('Atif Haiqal', '7PMrMnH_LTQ'),
    placeholder: true,
  },
  drinksPour: {
    id: 'drinksPour',
    src: file('drinks-pour'),
    alt: 'A dark beer being poured from a tap into a glass held in a warm, dim bar.',
    credit: unsplash('Wenceslao Moya grondona de luca', 'oGF1LA_q84Q'),
    placeholder: true,
    focal: '50% 40%',
  },
  foodCounter: {
    id: 'foodCounter',
    src: file('food-counter'),
    alt: 'People eating and drinking at a dim counter while cooks work behind it.',
    credit: unsplash('Georgi Kalaydzhiev', '-OtDccXrn6U'),
    placeholder: true,
  },
  stickerWall: {
    id: 'stickerWall',
    src: file('sticker-wall'),
    alt: 'A dark wall completely covered in layered stickers and marker tags.',
    credit: unsplash('Max van den Oetelaar', 'uymG7UVPXpI'),
    placeholder: true,
  },
}

export const placeholderImages = Object.values(images).filter((i) => i.placeholder)
