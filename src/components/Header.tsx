import { useEffect, useRef, useState } from 'react'
import { nav, site } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  /** Section to jump to once the menu has closed and scrolling is unlocked */
  const pendingRef = useRef<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu if the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Menu open: lock scroll, trap focus, close on Escape, restore focus after.
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      [
        toggle,
        ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? []),
      ].filter(Boolean) as HTMLElement[]

    menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      const href = pendingRef.current
      pendingRef.current = null
      const target = href ? document.querySelector<HTMLElement>(href) : null
      if (!href || !target) {
        toggle?.focus()
        return
      }
      // Jump after the scroll lock is released, and move focus with it.
      requestAnimationFrame(() => {
        history.pushState(null, '', href)
        target.scrollIntoView()
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      })
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[80] bg-bone px-4 py-3 text-coal focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? 'bg-coal/95' : 'bg-transparent'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 md:px-8 lg:h-[4.5rem]">
          <a
            href="#top"
            aria-label={`${site.name}, back to top`}
            className="relative z-[70] flex items-baseline gap-2 text-bone"
          >
            <span className="d-cond text-[1.75rem] leading-none">Gracie&rsquo;s</span>
            <span className="label border border-bone/50 px-1.5 py-0.5 text-[0.5625rem]">
              Tax Bar
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item, i) => {
                const isVisit = item.href === '#visit'
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={
                        isVisit
                          ? 'label inline-block border border-bone px-4 py-2.5 text-bone transition-colors hover:bg-bone hover:text-coal'
                          : 'label group inline-flex items-baseline gap-1.5 py-2 text-bone/85 transition-colors hover:text-bone'
                      }
                    >
                      {!isVisit && (
                        <span className="text-[0.5625rem] text-pink transition-transform group-hover:-translate-y-0.5">
                          0{i + 1}
                        </span>
                      )}
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="label relative z-[70] -mr-2 flex h-11 items-center gap-2 px-2 text-bone lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-0 z-[45] flex flex-col overflow-y-auto bg-red px-5 pb-8 pt-24 lg:hidden"
      >
        <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 opacity-40" />
        <p className="label relative text-bone/80">Form 711-N · Where to?</p>
        <nav aria-label="Mobile" className="relative mt-4">
          <ul className="border-t border-bone/40">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-bone/40">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    pendingRef.current = item.href
                    setOpen(false)
                  }}
                  className="a-rise flex items-baseline justify-between gap-4 py-3 text-bone"
                  style={{ ['--d' as string]: `${60 + i * 55}ms` }}
                >
                  <span className="d-cond text-[clamp(2.75rem,15vw,4.5rem)]">{item.label}</span>
                  <span className="label text-bone/80">Line 0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative mt-auto pt-10">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="label block bg-bone px-5 py-4 text-center text-coal"
          >
            Get directions ↗
          </a>
          <p className="label mt-5 text-bone/85">
            {site.address.street}
            <br />
            {site.address.cityLine}
          </p>
        </div>
      </div>
    </>
  )
}
