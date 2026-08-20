import { motion } from 'motion/react'

const steps = [
  { n: '01', title: 'Crea tu perfil', body: 'Gratis, en menos de un minuto.' },
  { n: '02', title: 'Juega y registra', body: 'Cada partido suma a tu historial.' },
  { n: '03', title: 'Mejora y compite', body: 'Datos reales, torneos reales.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(22,194,79,0.07), transparent 70%)' }}
      />
      <motion.h2
        className="relative font-extrabold text-center text-white mx-auto mb-12 sm:mb-14"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        Cómo funciona
      </motion.h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
          >
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 font-extrabold text-primary text-base">
              {s.n}
            </div>
            <div className="font-bold text-xl text-white mb-2">{s.title}</div>
            <div className="text-white/40 text-[15px]">{s.body}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
