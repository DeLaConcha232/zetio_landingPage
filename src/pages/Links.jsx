import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Globe, Home, Instagram, ArrowRight } from 'lucide-react'
import Pill from '../bits/Pill'
import { APP_STORE_URL, PLAY_STORE_URL, CLUB_APP_URL } from '../lib/appLinks'

function AppleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}
function AndroidIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.3.17.64.22.98.15l12.93-7.47-2.79-2.79-11.12 10.11zM.54 1.25C.2 1.55 0 2.04 0 2.69v18.61c0 .65.2 1.14.55 1.44l.07.06 10.43-10.43v-.24L.61 1.19l-.07.06zM20.6 10.27l-2.79-1.61-3.12 3.12 3.12 3.12 2.81-1.62c.8-.46.8-1.21-.02-1.61zM3.18.23L16.11 7.7 13.32 10.49 2.2.38c.3-.17.66-.2.98-.15z" />
    </svg>
  )
}
function TiktokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const LINKS = [
  { label: 'Sitio web oficial', sub: 'zetio.app', icon: Globe, to: '/' },
  { label: 'Portal Clubes', sub: 'Gestión y reservas', icon: Home, href: CLUB_APP_URL },
  { label: 'Descargar para iOS', sub: 'App Store', icon: AppleIcon, href: APP_STORE_URL },
  { label: 'Descargar para Android', sub: 'Google Play', icon: AndroidIcon, href: PLAY_STORE_URL },
  { label: 'Instagram', sub: '@zetio.app', icon: Instagram, href: 'https://www.instagram.com/zetio_oficial/' },
  { label: 'TikTok', sub: '@zetio.app', icon: TiktokIcon, href: 'https://www.tiktok.com/@zetioapp' },
]

function LinkRow({ label, sub, icon: Icon, href, to, index }) {
  const inner = (
    <>
      <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-[13px] bg-primary/12 border border-primary/24 text-primary-light">
        <Icon className="w-[18px] h-[18px]" />
      </span>
      <span className="flex flex-col gap-0.5 min-w-0 flex-1">
        <span className="font-bold text-[15.5px] text-white leading-tight" style={{ letterSpacing: '-0.01em' }}>{label}</span>
        <span className="text-[12.5px] font-medium text-white/40 leading-tight">{sub}</span>
      </span>
      <ArrowRight className="w-4 h-4 text-white/25 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
    </>
  )
  const className =
    'group flex items-center gap-4 px-4.5 py-4 rounded-2xl border border-white/9 bg-black/40 backdrop-blur-md min-h-[72px] transition-all duration-300 hover:-translate-y-0.75 hover:border-primary/55 hover:bg-white/[0.04] hover:shadow-[0_18px_38px_-18px_rgba(22,194,79,0.5)] active:scale-[0.99]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {to ? (
        <Link to={to} className={className}>{inner}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
      )}
    </motion.div>
  )
}

export default function Links() {
  const year = new Date().getFullYear()

  return (
    <div className="relative min-h-screen min-h-[100svh] bg-bg flex justify-center px-5 pt-16 pb-12 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-[25%] -left-[20%] w-[140%] h-[120%] pointer-events-none"
        style={{
          backgroundImage: 'url(/gradient-3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.34,
          mixBlendMode: 'screen',
          filter: 'blur(24px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[440px] flex flex-col gap-8.5">
        <motion.div
          className="flex flex-col items-center text-center gap-4.5"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/zetio-icon.webp"
            alt="Zetio"
            className="w-21 h-21 rounded-[22px]"
            style={{ boxShadow: '0 26px 64px -20px rgba(22,194,79,0.5)' }}
          />
          <img src="/brandIcon_claro.svg" alt="Zetio" className="h-6 w-auto mt-0.5" />
          <p className="text-white/45 text-[15px] leading-relaxed max-w-[320px]">
            El sistema completo de deportes de raqueta. Organiza, juega, mejora.
          </p>
          <Pill tone="ghost" size="sm">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Gratis para jugadores
          </Pill>
        </motion.div>

        <div className="flex flex-col gap-3">
          {LINKS.map((link, i) => (
            <LinkRow key={link.label} {...link} index={i} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-[12.5px] text-white/35 pt-1.5">
          <span>© {year} Zetio</span>
          <span className="opacity-60">·</span>
          <span>zetio.app</span>
        </div>
      </div>
    </div>
  )
}
