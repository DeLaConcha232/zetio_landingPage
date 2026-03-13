import { Link } from 'react-router-dom'
import { Twitter, Instagram } from 'lucide-react'

function ZetioLogo() {
  return (
    <picture className="cursor-pointer select-none">
      <img src="/brandIcon_claro.svg" alt="Zetio Logo" className="w-32 h-auto" />
    </picture>
  )
}

const productLinks = ['Funciones', 'Precios', 'App Mobile']
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
          <div className="max-w-[240px]">
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
                {productLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
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
      <div className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-xs">
            © 2024 Zetio Padel Software. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: <Twitter className="w-3.5 h-3.5" />, label: 'Twitter' },
              { icon: <Instagram className="w-3.5 h-3.5" />, label: 'Instagram' },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.08] transition-all duration-200"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
