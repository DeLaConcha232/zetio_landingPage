import { motion } from 'motion/react'
import SpotlightCard from '../bits/SpotlightCard'

/** PLACEHOLDER copy from the design prototype — swap for real testimonials before launch. */
const items = [
  { q: 'Por fin dejamos de discutir quién iba ganando. Zetio lleva la cuenta por nosotros.', n: 'Diego Ramírez', r: 'Jugador' },
  { q: 'Manejar mi agenda con mis alumnos ahora es más fácil y llevan registro de sus avances', n: 'Fernanda Ruiz', r: 'Coach' },
  { q: 'Armé un torneo de 32 parejas en una tarde, cuadro incluido.', n: 'Iván Torres', r: 'Organizador de torneos' },
]

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.h2
        className="font-extrabold text-center text-white mx-auto mb-12"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        Ya lo están jugando
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <SpotlightCard className="rounded-2xl border border-white/8 h-full p-7" spotlightColor="var(--color-primary-spotlight-xs)">
              <div className="text-white text-[15px] leading-relaxed mb-6">&ldquo;{it.q}&rdquo;</div>
              <div className="font-bold text-sm text-white">{it.n}</div>
              <div className="text-xs text-white/40 mt-0.5">{it.r}</div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
