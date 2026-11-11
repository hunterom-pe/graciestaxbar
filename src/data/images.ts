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
  | 'patioNight'
  | 'drinksPour'
  | 'foodCounter'
  | 'stickerWall'
  | 'boothStrips'
  | 'discoBall'
  | 'punkSinger'
  | 'punkDrink'
  | 'redRoom'
  | 'danceBlur'
  | 'heartNeon'
  | 'cocktails'
  | 'bwFriends'
  | 'lightsBlur'
  | 'flashCouple'
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

  patioNight: {
    id: 'patioNight',
    src: file('patio-night'),
    alt: 'A backyard patio at night with colored string lights, a wooden fence and desert plants.',
    credit: unsplash('Katie Mont', 'TsGl0M8SSE0'),
    placeholder: true,
    focal: '50% 30%',
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
  boothStrips: {
    id: 'boothStrips',
    src: file('booth-strips'),
    alt: 'A hand holding three black-and-white photo booth strips of friends pulling faces.',
    credit: unsplash('Crystal Wen', '3L5XQoJ8xG4'),
    placeholder: true,
    focal: '50% 45%',
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
  punkDrink: {
    id: 'punkDrink',
    src: file('punk-drink'),
    alt: 'A singer tipping back a bottle mid-set under red stage lights.',
    credit: unsplash('Evgeniy Smersh', 'K1iZTRX6YSY'),
    placeholder: true,
    focal: '45% 35%',
  },
  redRoom: {
    id: 'redRoom',
    src: file('red-room'),
    alt: 'Silhouettes of people in a narrow room filled with red light and haze.',
    credit: unsplash('Aleksandr Popov', 'R25Q-pAUeY8'),
    placeholder: true,
  },
  danceBlur: {
    id: 'danceBlur',
    src: file('dance-blur'),
    alt: 'A motion-blurred dance floor streaked with pink and blue light.',
    credit: unsplash('Nereid Ndreu', 'GybIe7Vgtf4'),
    placeholder: true,
  },
  heartNeon: {
    id: 'heartNeon',
    src: file('heart-neon'),
    alt: 'A red neon heart glowing on a dark wall.',
    credit: unsplash('Merch HÜSEY', '8ZfrIcSjizA'),
    placeholder: true,
  },
  cocktails: {
    id: 'cocktails',
    src: file('cocktails'),
    alt: 'Two cocktails held up in a dark room, one orange and one green.',
    credit: unsplash('Sexto Abismo | Ginebra Surrealista', '6w1ZaoZvDuI'),
    placeholder: true,
    focal: '55% 50%',
  },
  bwFriends: {
    id: 'bwFriends',
    src: file('bw-friends'),
    alt: 'Black-and-white flash photo of three friends with drinks against a graffiti wall.',
    credit: unsplash('Illia Horokhovsky', 'RO1P1Xm0ENE'),
    placeholder: true,
    focal: '50% 40%',
  },
  lightsBlur: {
    id: 'lightsBlur',
    src: file('lights-blur'),
    alt: 'Friends outside at night under string lights smeared into streaks by a slow shutter.',
    credit: unsplash('Leonardo Iribe', 'nq9Jo8DWDjU'),
    placeholder: true,
  },
  flashCouple: {
    id: 'flashCouple',
    src: file('flash-couple'),
    alt: 'Point-and-shoot flash photo of two friends outdoors at night under string lights.',
    credit: unsplash('Brooke Balentine', '3clMJdv4g9M'),
    placeholder: true,
    focal: '40% 50%',
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
