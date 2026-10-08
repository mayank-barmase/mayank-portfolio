import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../config/siteConfig.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-ink/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-bold text-white" aria-label={`${site.name}, back to top`}>
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-accent to-violet font-mono text-sm text-ink">{site.initials}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:text-accent">{n}</a>
            </li>
          ))}
        </ul>

        <button className="rounded-md p-2 text-slate-200 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-edge bg-ink px-5 pb-4 lg:hidden">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-md py-3 text-slate-200 hover:text-accent">{n}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
