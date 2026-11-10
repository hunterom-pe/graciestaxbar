# Gracie's Tax Bar — website redesign concept

An unsolicited redesign concept for [Gracie's Tax Bar](https://graciestaxbar.com/), 711 N 7th Ave, Phoenix, AZ 85007, by [Hunter Made](https://huntermade.studio).

**This is not the official Gracie's website.** It is not affiliated with or endorsed by the business. The photography is temporary stock and the events are fictional samples.

## Repository

- GitHub: [hunterom-pe/graciestaxbar](https://github.com/hunterom-pe/graciestaxbar)
- Default branch: `main`

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

## Where things live

```
src/
  data/
    site.ts       business facts, links, nav, the "things that happen here" list
    images.ts     every photo: file, alt text, credit, placeholder flag, focal point
    events.ts     event listings + upcoming/past logic
  components/
    Header.tsx    fixed nav + full-screen mobile menu
    Hero.tsx
    Inside.tsx    "A little weird. A lot of heart."
    EatDrink.tsx
    Scene.tsx     music / karaoke / photo booth list with swapping photo
    Patio.tsx
    Events.tsx    poster wall (desktop) / swipe rail (mobile) / past list
    Poster.tsx    the six sample flyers, drawn in SVG
    Visit.tsx     address, hours, phone, directions
    Footer.tsx    links, concept disclaimer, photo credits
    Photo.tsx     responsive image wrapper driven by images.ts
    Reveal.tsx    scroll-in fade
  index.css       design tokens (@theme), type voices, textures, motion
public/images/    optimized WebP photos, 800w and 1600w of each
```

## Replacing the stock photos

Every photo is temporary. All sixteen are free-licence Unsplash images, credited in the footer and in `src/data/images.ts`. None of them show Gracie's.

To swap one for a real photo:

1. Export two WebP files, 800px and 1600px wide, into `public/images/`.
2. In `src/data/images.ts`, point that entry's `src` at the new files and rewrite `alt`.
3. Set `placeholder: false`. The "Stock photo · not Gracie's" tag and the footer credit for that image disappear.
4. If the crop is off, adjust `focal` (a CSS `object-position` value such as `"50% 30%"`).

Layout never needs to change: components ask for images by id (`<Photo id="heroInterior" />`).

Once every image is real, also remove the stock-photo sentence from the footer disclaimer and the hero caption.

## Updating events

All six listings in `src/data/events.ts` are made up. To publish real ones:

1. Replace the array entries. `start` is an ISO date-time with the Phoenix offset, e.g. `"2027-01-15T21:00:00-07:00"`.
2. Set `sample: false`. When no entry is a sample, the green "Demo content" banner and the per-event "Fictional sample listing" tags go away.
3. For real flyer art, set `flyer: "/flyers/whatever.webp"`; the image replaces the generated SVG poster.
4. Only fill in `admission` and `link` when they're confirmed.

Events move from "Coming up" to "Previously" automatically once they end. The sample entries use dates relative to today so the demo never looks stale; real entries should use fixed dates.

The component only needs an array of `BarEvent` objects, so a CMS, Google Calendar feed or a JSON file can replace the hard-coded list later without touching the UI.

## What still needs confirming with the bar

The official site could not be loaded while this was built (its TLS certificate had expired), so facts come from third-party listings and local press. In `src/data/site.ts` each is marked `verified: true/false`.

| Item | Status |
| --- | --- |
| Address, 711 N 7th Ave | Matches the brief and multiple listings |
| Phone, (602) 366-0111 | Third-party listings only |
| Hours | Listings disagree on opening time and on Mondays; all say 2 AM close. The site says "Late afternoon to 2 AM" and tells people to check |
| Instagram, @graciestaxbar | Handle from press photo credits; link not confirmed |
| "Used to be a tax office" | Reported by local press |
| Kitchen and full bar | Reported by local press. No menu items or prices are shown |
| DJs, karaoke, live music, drag and burlesque, photo booth, movie projections | Reported by local press; labelled as such on the page |
| Interior and patio descriptions | From the project brief |

No parking details, cover charges, age policies or specials are stated anywhere.

## Deploying (GitHub → Netlify)

The code is on GitHub. It is **not yet connected to Netlify**; that step is done from your Netlify account.

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

### Connecting the repo (one-time, manual)

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
- "Stock photo · not Gracie's" tags and footer photo credits
- "Demo content" banner and "Sample" / "Fictional sample listing" labels on every made-up event
- "Still need confirming" note under hours and phone

## Remaining manual steps

1. Connect the repo in Netlify and enable password protection (above).
2. Confirm hours, phone and the Instagram handle with the bar, then update `src/data/site.ts`.
3. graciestaxbar.com currently fails to load (expired TLS certificate). The "Official site" links point there; keep or remove them depending on whether the bar fixes it.
4. Replace stock photos and sample events when real material is available.
5. Once there's a final domain, make `og:image` in `index.html` an absolute URL and consider a purpose-made share image.
