/**
 * Business facts and links.
 *
 * `verified` records whether a fact was confirmed against an official
 * Gracie's source. As of this build the official site (graciestaxbar.com)
 * could not be loaded (its TLS certificate was expired), so everything
 * beyond the address comes from third-party listings and local press.
 * Confirm each item with the owners, then flip `verified` to true.
 */

export const site = {
  name: "Gracie's Tax Bar",
  shortName: "Gracie's",
  city: 'Downtown Phoenix, Arizona',

  address: {
    street: '711 N 7th Ave',
    cityLine: 'Phoenix, AZ 85007',
    // Provided in the project brief and matched by multiple listings.
    verified: true,
  },

  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Gracie%27s+Tax+Bar%2C+711+N+7th+Ave%2C+Phoenix%2C+AZ+85007',

  phone: {
    display: '(602) 366-0111',
    href: 'tel:+16023660111',
    // From third-party listings only.
    verified: false,
  },

  hours: {
    // Sources disagree on opening time (4 PM vs 5 PM weekdays, 2 PM weekends)
    // and on whether Monday is open. All agree on a 2 AM close.
    summary: 'Open late · till 2 AM',
    note: 'Opening times vary. Check Instagram before you go.',
    verified: false,
  },

  links: {
    official: { label: 'graciestaxbar.com', url: 'https://graciestaxbar.com/' },
    instagram: {
      label: '@graciestaxbar',
      url: 'https://www.instagram.com/graciestaxbar/',
      // Handle seen in press photo credits; not confirmed with the bar.
      verified: false,
    },
  },

  studio: { name: 'Hunter Made', url: 'https://huntermade.studio' },
} as const

export const nav = [
  { label: 'Inside', href: '#inside' },
  { label: 'Out Back', href: '#outback' },
  { label: 'Events', href: '#events' },
  { label: 'Find Us', href: '#find' },
] as const
