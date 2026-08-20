import { motion } from 'motion/react'
import CountUp from '../bits/CountUp'

const stats = [
  { value: 1000, suffix: '+', label: 'Jugadores activos' },
  { value: 20, suffix: '+', label: 'Clubes federados' },
  { value: 10, suffix: '+', label: 'Coaches certificados' },
]

export default function TrustStats() {
  return (
    <section className="relative max-w-3xl mx-auto px-4 sm:px-6 -mt-4 sm:-mt-8 pb-8">
      <motion.div
        className="grid grid-cols-3 divide-x divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center py-5 px-2">
            <div className="font-extrabold text-2xl sm:text-3xl text-primary" style={{ letterSpacing: '-0.02em' }}>
              <CountUp to={s.value} suffix={s.suffix} duration={1.6} />
            </div>
            <div className="text-white/40 text-[11px] sm:text-xs mt-1 tracking-wide">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
