import { Link } from 'react-router-dom'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'

function TiktokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const productLinks = [
  { label: 'Play', href: '#play' },
  { label: 'Coach', href: '#coach' },
  { label: 'Tour', href: '#tour' },
  { label: 'Shop', to: '/shop' },
]
const legalUsersLinks = [
  { label: 'Privacidad', to: '/privacy' },
  { label: 'Términos', to: '/terms' },
]
const legalClubsLinks = [
  { label: 'Privacidad', to: '/privacyclubs' },
  { label: 'Términos', to: '/termsclubs' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/7">
      {/* Contact CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Contacto</p>
            <h3 className="text-white text-lg font-semibold leading-snug">¿Tienes alguna pregunta?</h3>
            <p className="text-white/40 text-sm mt-1">Escríbenos y te respondemos a la brevedad.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:info@zetio.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/12 border border-primary/25 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              info@zetio.app
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="mailto:soporte@zetio.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/4 border border-white/8 text-white/50 text-sm font-medium hover:text-white/80 hover:bg-white/7 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              soporte@zetio.app
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="flex flex-col sm:flex-row justify-between gap-14">
          {/* Brand */}
          <div className="max-w-60">
            <img src="/brandIcon_claro.svg" alt="Zetio" className="h-4.5 w-auto" />
            <p className="text-white/30 text-sm leading-relaxed mt-6">
              La plataforma líder para la gestión y disfrute de los deportes de raqueta a nivel global.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <div>
              <p className="text-white/22 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Producto</p>
              <ul className="space-y-3">
                {productLinks.map(({ label, href, to }) => (
                  <li key={label}>
                    {to ? (
                      <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{label}</Link>
                    ) : (
                      <a href={href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white/22 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Legal</p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/35 text-[10px] font-semibold tracking-[0.16em] uppercase mb-2.5">Zetio Users</p>
                  <ul className="space-y-3">
                    {legalUsersLinks.map(({ label, to }) => (
                      <li key={label}>
                        <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-white/35 text-[10px] font-semibold tracking-[0.16em] uppercase mb-2.5">Zetio Clubs</p>
                  <ul className="space-y-3">
                    {legalClubsLinks.map(({ label, to }) => (
                      <li key={label}>
                        <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-xs">© {year} Zetio Racket Sports. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            {[
              { icon: <TiktokIcon className="w-3.5 h-3.5" />, label: 'Tiktok', href: 'https://www.tiktok.com/@zetioapp' },
              { icon: <Instagram className="w-3.5 h-3.5" />, label: 'Instagram', href: 'https://www.instagram.com/zetio_oficial/' },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/4 border border-white/6 flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/8 transition-all duration-200"
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
