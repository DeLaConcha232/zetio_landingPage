import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

function TiktokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

function ZetioLogo() {
  return (
    <picture className="cursor-pointer select-none">
      <img src="/brandIcon_claro.svg" alt="Zetio Logo" className="w-32 h-auto" />
    </picture>
  )
}

const productLinks = [
  { label: 'Funciones', href: '#features' },
  { label: 'Precios', href: '#stats' },
  { label: 'App Mobile', href: '#app-showcase' },
]
const legalLinks = [
  { label: 'Privacidad', to: '/privacy' },
  { label: 'Términos', to: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/15">
      {/* Top glow line */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(153,204,153,0.45) 30%, rgba(153,204,153,0.45) 70%, transparent)' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between gap-14">
          {/* Brand */}
          <div className="max-w-60">
            <ZetioLogo />
            <p className="text-white/30 text-sm leading-relaxed mt-6">
              La plataforma líder para la gestión y disfrute del pádel a nivel global.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 sm:gap-16">
            <div>
              <p className="text-white/22 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                Producto
              </p>
              <ul className="space-y-3">
                {productLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white/22 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                Legal
              </p>
              <ul className="space-y-3">
                {legalLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-xs">
            © 2024 Zetio Padel Software. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: <TiktokIcon className="w-3.5 h-3.5" />, label: 'Tiktok', href: 'https://www.tiktok.com/@zetioapp' },
              { icon: <Instagram className="w-3.5 h-3.5" />, label: 'Instagram', href: 'https://www.instagram.com/zetioapp/' },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/8 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
