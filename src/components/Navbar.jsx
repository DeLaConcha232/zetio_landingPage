import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { APP_STORE_URL, PLAY_STORE_URL, CLUB_APP_URL } from '../lib/appLinks'
import StoreDropdown from './StoreDropdown'

const navLinks = [
  { label: 'Play', href: '#play' },
  { label: 'Coach', href: '#coach' },
  { label: 'Tour', href: '#tour' },
]

function ZetioLogo() {
  return (
    <Link to="/" className="flex items-center shrink-0 select-none">
      <img src="/brandIcon_claro.svg" alt="Zetio" className="h-4.5 w-auto" />
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sectionHref = (hash) => (onHome ? hash : `/${hash}`)

  return (
    <motion.div
      className="fixed left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
      style={{ top: scrolled ? 10 : 18 }}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav
        className={`w-full flex items-center justify-between gap-4 rounded-full border border-white/10 bg-bg/90 backdrop-blur-xl transition-[max-width,padding,box-shadow] duration-300 ${
          scrolled ? 'max-w-[680px] px-2 py-2 shadow-[0_16px_40px_-14px_rgba(0,0,0,.75)]' : 'max-w-[760px] px-2.5 py-2.5 shadow-[0_12px_32px_-12px_rgba(0,0,0,.6)]'
        }`}
      >
        <div className="pl-3">
          <ZetioLogo />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={sectionHref(link.href)}
              className="text-white/85 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Link to="/shop" className="text-white/85 hover:text-white text-sm font-medium transition-colors duration-200">
            Shop
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5 pr-1">
          <a
            href={CLUB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary font-bold text-[13px] px-4.5 py-2 rounded-full hover:bg-primary/10 transition-colors duration-200 whitespace-nowrap"
          >
            Ingresar a Club
          </a>
          <StoreDropdown />
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-1.5 mr-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-[calc(100%+10px)] left-4 right-4 bg-[#050705] backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-5 flex flex-col gap-1 shadow-[0_16px_40px_-14px_rgba(0,0,0,.85)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={sectionHref(link.href)}
                className="text-white/70 hover:text-white text-sm font-medium py-3 border-b border-white/6 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/shop"
              className="text-white/70 hover:text-white text-sm font-medium py-3 border-b border-white/6 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <a
              href={CLUB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium py-3 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Ingresar a Club
            </a>
            <div className="flex gap-3 mt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-black font-bold py-3 rounded-full text-sm active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                iOS
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 border border-primary/50 text-primary font-bold py-3 rounded-full text-sm active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M3.18 23.76c.3.17.64.22.98.15l12.93-7.47-2.79-2.79-11.12 10.11zM.54 1.25C.2 1.55 0 2.04 0 2.69v18.61c0 .65.2 1.14.55 1.44l.07.06 10.43-10.43v-.24L.61 1.19l-.07.06zM20.6 10.27l-2.79-1.61-3.12 3.12 3.12 3.12 2.81-1.62c.8-.46.8-1.21-.02-1.61zM3.18.23L16.11 7.7 13.32 10.49 2.2.38c.3-.17.66-.2.98-.15z" /></svg>
                Android
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
