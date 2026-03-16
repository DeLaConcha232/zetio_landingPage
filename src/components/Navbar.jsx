import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { APP_STORE_URL, PLAY_STORE_URL } from '../lib/appLinks'

const navLinks = ['Torneos', 'Clubes', 'Coaches']

function StoreDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    if (!open) return
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="hidden md:flex items-center gap-1.5 bg-primary text-black font-bold px-5 py-2.5 rounded-lg text-sm tracking-wide hover:bg-primary-light transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ boxShadow: 'var(--shadow-primary-sm)' }}
        aria-expanded={open}
      >
        Descargar App
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 mt-2 w-48 bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150 text-sm border-b border-white/6"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M3.18 23.76c.3.17.64.22.98.15l12.93-7.47-2.79-2.79-11.12 10.11zM.54 1.25C.2 1.55 0 2.04 0 2.69v18.61c0 .65.2 1.14.55 1.44l.07.06 10.43-10.43v-.24L.61 1.19l-.07.06zM20.6 10.27l-2.79-1.61-3.12 3.12 3.12 3.12 2.81-1.62c.8-.46.8-1.21-.02-1.61zM3.18.23L16.11 7.7 13.32 10.49 2.2.38c.3-.17.66-.2.98-.15z"/></svg>
              Google Play
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ZetioLogo() {
  return (
    <picture className="cursor-pointer select-none">
      <img src="/brandIcon_claro.svg" alt="Zetio Logo" className="w-28 h-auto" />
    </picture>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-white/6'
          : 'bg-transparent'
      }`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <ZetioLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/55 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <StoreDropdown />

        {/* Mobile burger */}
        <button
          className="md:hidden text-white/65 hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/6 px-4 py-5 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/65 hover:text-white text-sm font-medium py-3 border-b border-white/5 last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-black font-bold py-3 rounded-lg text-sm active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                iOS
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 border border-primary/50 text-primary font-bold py-3 rounded-lg text-sm active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M3.18 23.76c.3.17.64.22.98.15l12.93-7.47-2.79-2.79-11.12 10.11zM.54 1.25C.2 1.55 0 2.04 0 2.69v18.61c0 .65.2 1.14.55 1.44l.07.06 10.43-10.43v-.24L.61 1.19l-.07.06zM20.6 10.27l-2.79-1.61-3.12 3.12 3.12 3.12 2.81-1.62c.8-.46.8-1.21-.02-1.61zM3.18.23L16.11 7.7 13.32 10.49 2.2.38c.3-.17.66-.2.98-.15z"/></svg>
                Android
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
