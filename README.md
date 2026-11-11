# Gracie's Tax Bar — website redesign concept

An unsolicited redesign concept for [Gracie's Tax Bar](https://graciestaxbar.com/), 711 N 7th Ave, Phoenix, AZ 85007, by [Hunter Made](https://huntermade.studio).

**This is not the official Gracie's website.** It is not affiliated with or endorsed by the business. The photography is temporary stock and the events are fictional samples.

## Repository

- GitHub: [hunterom-pe/graciestaxbar](https://github.com/hunterom-pe/graciestaxbar)
- Default branch: `main`
- Netlify: https://gracies-tax-bar.netlify.app (deploys from `main`)
- Checkpoints: `v1-concept` (first, tax-form direction) and `v2-zine` (seven-section pink zine). `git checkout <tag>` to see either.

## Run it locally

Requires Node 22 (see `.nvmrc`).

```bash
git clone https://github.com/hunterom-pe/graciestaxbar.git
cd graciestaxbar
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run lint     # oxlint
npm run preview  # serve the production build locally
```

Stack: React 19, TypeScript, Vite, Tailwind CSS v4, lucide-react. No animation library; motion is CSS plus one small IntersectionObserver wrapper.

## Art direction (v3)

Indie sleaze × queer-punk zine × alternative nightlife. One short, continuous page in **four moments**, about 60% shorter than v2 at the same viewport sizes:

1. **Hero:** red-lit photo, the wordmark, "Phoenix, AZ", and two actions: Events and Directions.
2. **Inside → Out Back:** one photo composition. Dark red runs into pink; a photobooth strip and tilted prints overlap the seams. Labels only.
3. **Events:** exactly two featured flyers (`FEATURED_COUNT` in `src/data/events.ts`, 3 maximum), name + date + time, one "All events" link, a one-line demo note.
4. **Find us:** address, directions, Instagram, hours, phone, menu link, footer nav, disclaimer and photo credits in one block.

No taglines, no descriptive paragraphs, no tax-form styling, no activities list, no past events.

- **Type:** Fraunces italic (soft + wonky axes) for the wordmark and a few headings; condensed Bricolage Grotesque for labels and UI; Anybody inside the flyers; IBM Plex Mono for utility text.
- **Colour:** near-black, deep red, hot pink, warm ivory. Lime, electric blue and orange appear only in flyers and stickers.
- **Graphic kit:** photobooth strip, taped prints, torn-paper edges, three SVG stickers (star, heart, daisy).
- **Motion:** short entrance fades and sticker drops; photos straighten and flash on hover; buttons press. All entrance animation is off under `prefers-reduced-motion`.

## Where things live

```
src/
  data/
    site.ts       business facts, links, nav
    images.ts     every photo: file, alt text, credit, placeholder flag, focal point
    events.ts     event data, FEATURED_COUNT, upcoming + "this week" logic
  components/
    Header.tsx    fixed nav + full-screen pink mobile menu
    Wordmark.tsx  small header lockup
    Hero.tsx      moment 1
    Scene.tsx     moment 2: inside → out back photo composition
    Events.tsx    moment 3: two featured flyers
    Poster.tsx    SVG sample flyers (seven designs available)
    FindUs.tsx    moment 4: visit info + footer
    Sticker.tsx   SVG stickers
    Edge.tsx      torn-paper edge
    Photo.tsx     responsive image wrapper driven by images.ts
  index.css       design tokens (@theme), type voices, textures, motion
public/images/    optimized WebP photos, 800w and 1600w of each
```

## Replacing the stock photos

Every photo is temporary. All eight are free-licence Unsplash images, credited in the footer and in `src/data/images.ts`. None of them show Gracie's.

To swap one for a real photo:

1. Export two WebP files, 800px and 1600px wide, into `public/images/`.
2. In `src/data/images.ts`, point that entry's `src` at the new files and rewrite `alt`.
3. Set `placeholder: false`. The small "stock photo" tag and the footer credit for that image disappear.
4. If the crop is off, adjust `focal` (a CSS `object-position` value such as `"50% 30%"`).

Layout never needs to change: components ask for images by id (`<Photo id="heroInterior" />`).

Once every image is real, also remove the stock-photo sentence from the footer disclaimer and the hero caption.

## Updating events

The two listings in `src/data/events.ts` are made up. To publish real ones:

1. Replace the array entries. `start` is an ISO date-time with the Phoenix offset, e.g. `"2027-01-15T21:00:00-07:00"`.
2. Set `sample: false`. When the featured events aren't samples, the lime "Demo" note and the flyer "Sample" tags go away.
3. For real flyer art, set `flyer: "/flyers/whatever.webp"`; the image replaces the generated SVG poster. Otherwise pick one of the seven `poster` designs in `Poster.tsx`.
4. Only fill in `admission` and `link` when they're confirmed.

The homepage shows the next `FEATURED_COUNT` (2) upcoming events; past events drop off automatically and anything within seven days gets a "This week" sticker. The full calendar belongs on the bar's Instagram or a future CMS; this array is the only thing a feed needs to produce.

## What still needs confirming with the bar

The official site could not be loaded while this was built (its TLS certificate had expired), so facts come from third-party listings and local press. In `src/data/site.ts` each is marked `verified: true/false`.

| Item | Status |
| --- | --- |
| Address, 711 N 7th Ave | Matches the brief and multiple listings |
| Phone, (602) 366-0111 | Third-party listings only |
| Hours | Listings disagree on opening time and on Mondays; all say 2 AM close. The site says "Open late · till 2 AM" and tells people to check |
| Instagram, @graciestaxbar | Handle from press photo credits; link not confirmed |
| Kitchen and full bar | Reported by local press. No menu items or prices are shown |
| Interior and patio descriptions | From the project brief |

No parking details, cover charges, age policies or specials are stated anywhere.

## Deploying (GitHub → Netlify)

The repo is connected to Netlify at https://gracies-tax-bar.netlify.app; pushes to `main` deploy automatically.

### Netlify settings

These are in `netlify.toml`, so Netlify picks them up on its own when the repo is connected:

| Setting | Value |
| --- | --- |
| Base directory | *(empty, repo root)* |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Production branch | `main` (set in the Netlify UI; it can't go in `netlify.toml`) |
| Node.js version | 22 (`NODE_VERSION` in `netlify.toml`) |
| Environment variables | none needed |

`netlify.toml` also sets response headers: `X-Robots-Tag: noindex, nofollow`, `nosniff`, a referrer policy, and long-lived caching for `/assets/*` (hashed) and one-week caching for `/images/*`.

There's no SPA redirect rule. The site is a single page and all navigation is `#anchor` links, so nothing needs rewriting to `index.html`. Add one only if real routes (e.g. `/events`) are introduced later.

### Connecting the repo (one-time, already done)

1. Netlify → **Add new site** → **Import an existing project** → **GitHub**.
2. Authorize Netlify for the `hunterom-pe/graciestaxbar` repo.
3. Confirm the settings above are pre-filled, and that the production branch is `main`.
4. **Before sharing the URL**, turn on password protection (see below).
5. Deploy.

### How deployments work after that

- Every push to `main` triggers a production build and deploy.
- Pull requests get their own deploy-preview URL, which is handy for showing changes before merging.
- A build that fails (TypeScript error, broken import) never replaces the live site; Netlify keeps serving the last good deploy.

### Keeping it private

The site sends `noindex, nofollow` three ways: a `<meta name="robots">` tag, the `X-Robots-Tag` header, and `robots.txt` with `Disallow: /`. That only asks search engines to stay away; anyone with the URL can still open it. Until the owners have seen it, turn on Netlify's site password protection (Site configuration → Access & security), which may require a paid plan, or share only an unguessable deploy-preview URL.

### Concept protections (do not remove without sign-off)

- Footer disclaimer identifying this as an independent Hunter Made concept, not affiliated with the bar
- `noindex, nofollow` meta tag, `X-Robots-Tag` header, `robots.txt`
- "stock photo" tags on images, a stock-photo credit in the hero, and footer photo credits
- "Demo" note in Events and a "Sample" tag on every made-up flyer
- "Not confirmed by the bar" note on hours and phone (in the footer disclaimer)

## Remaining manual steps

1. Connect the repo in Netlify and enable password protection (above).
2. Confirm hours, phone and the Instagram handle with the bar, then update `src/data/site.ts`.
3. graciestaxbar.com currently fails to load (expired TLS certificate). The "Official site" links point there; keep or remove them depending on whether the bar fixes it.
4. Replace stock photos and sample events when real material is available.
5. Once there's a final domain, make `og:image` in `index.html` an absolute URL and consider a purpose-made share image.
