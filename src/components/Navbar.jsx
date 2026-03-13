import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Torneos', 'Clubes', 'Coaches']

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
        <button
          className="hidden md:block bg-primary text-black font-bold px-5 py-2.5 rounded-lg text-sm tracking-wide hover:bg-primary-light transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ boxShadow: 'var(--shadow-primary-sm)' }}
        >
          Descargar App
        </button>

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
            className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-5 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/65 hover:text-white text-sm font-medium py-3 border-b border-white/[0.05] last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="bg-primary text-black font-bold px-5 py-3 rounded-lg text-sm w-full mt-2 active:scale-95 transition-transform">
              Descargar App
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
