import { motion } from 'motion/react'
import Pill from '../bits/Pill'
import { CLUB_APP_URL } from '../lib/appLinks'

const benefits = [
  'Todos tus torneos, canchas e inscritos en una sola pantalla.',
  'Cuadros, grupos y resultados que se arman y actualizan solos.',
  'Créditos claros: pagas por jugador, no por torneo ni por mes forzoso.',
]

export default function ClubShowcase() {
  return (
    <section id="clubes" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-12 sm:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Pill tone="ghost" size="sm">Para clubes</Pill>
          <h2 className="font-extrabold text-white mt-5 mb-4" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
            Tu club,{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}>
              en un solo panel.
            </span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed mb-6 max-w-sm">
            Administra torneos, canchas y jugadores desde un dashboard hecho para organizadores, no para desarrolladores.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {benefits.map((b) => (
              <div key={b} className="flex gap-3 items-start">
                <span className="text-primary text-[15px] mt-0.5 shrink-0">✓</span>
                <span className="text-white/85 text-[15px] leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
          <a
            href={CLUB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-black font-bold text-sm px-6 py-3.5 rounded-full hover:bg-primary-light transition-all duration-200 hover:scale-[1.03] active:scale-95"
            style={{ boxShadow: 'var(--shadow-primary-sm)' }}
          >
            Ingresar a Zetio Club
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <img
            src="/clubs-dashboard.webp"
            alt="Zetio Clubs — panel de administración"
            className="w-full h-auto block rounded-2xl border border-white/8"
            style={{ boxShadow: '0 40px 90px -30px rgba(0,0,0,.7)' }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
