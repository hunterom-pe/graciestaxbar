import { useEffect, useRef, useState } from 'react'
import { nav, site } from '../data/site'
import { Sticker } from './Sticker'
import { Wordmark } from './Wordmark'

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
        className="t-label sr-only z-[80] bg-bone px-4 py-3 text-coal focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? 'bg-coal/95' : 'bg-transparent'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <a href="#top" aria-label={`${site.name}, back to top`} className="relative z-[70] text-bone">
            <Wordmark />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const isFind = item.href === '#find'
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={
                        isFind
                          ? 't-label ml-3 inline-flex rounded-full bg-bone px-4 py-2.5 text-coal transition-colors hover:bg-pink'
                          : 't-label inline-flex rounded-full px-3.5 py-2.5 text-bone transition-colors hover:bg-bone/10 hover:text-pink'
                      }
                    >
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
            className={`t-label relative z-[70] -mr-1 flex h-11 items-center rounded-full px-4 min-[360px]:px-5 transition-colors lg:hidden ${
              open ? 'bg-coal text-bone' : 'bg-bone text-coal'
            }`}
          >
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
        className="fixed inset-0 z-[45] flex flex-col overflow-y-auto bg-pink px-4 pb-8 pt-24 text-coal lg:hidden"
      >
        <Sticker kind="daisy" className="a-drop absolute right-5 top-24 w-16" r={12} />
        <nav aria-label="Mobile" className="relative">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    pendingRef.current = item.href
                    setOpen(false)
                  }}
                  className="a-rise block py-1.5"
                  style={{ ['--d' as string]: `${50 + i * 50}ms` }}
                >
                  <span
                    className={`${i % 2 ? 't-cute pl-6' : 't-block'} block text-[clamp(2.9rem,14vw,4.75rem)]`}
                  >
                    {item.label}
                  </span>
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
            className="btn t-label w-full justify-center bg-bone text-coal"
          >
            Directions ↗
          </a>
          <p className="t-mono mt-5 text-coal/85">
            {site.address.street}, {site.address.cityLine}
          </p>
        </div>
      </div>
    </>
  )
}
