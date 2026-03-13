import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28 mx-4 sm:mx-6 my-8 rounded-3xl">
      {/* ── Gradient mesh background ── */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #0e1a0e 0%, #0d150d 40%, #0a0a0a 70%, #0a0a0a 100%)',
        }}
      />
      {/* Green radial orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(153,204,153,0.22) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(153,204,153,0.15) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      {/* Border with glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ border: '1px solid rgba(153,204,153,0.20)', boxShadow: 'inset 0 0 80px rgba(153,204,153,0.05)' }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(153,204,153,0.6) 30%, rgba(153,204,153,0.6) 70%, transparent)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/35 bg-primary/10 mb-7"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary text-[11px] font-semibold tracking-[0.18em] uppercase">
            100% Gratuito · Sin tarjeta de crédito
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-black leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-white">¿Listo para llevar </span>
          <span
            style={{
              background: 'var(--gradient-primary-shine)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            tu pádel al siguiente nivel?
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
        >
          Únete a más de 10,000 jugadores que ya gestionan sus torneos, estadísticas y reservas desde Zetio.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.34, ease: 'easeOut' }}
        >
          <motion.button
            className="relative flex items-center gap-2.5 bg-primary text-black font-black px-8 py-4 rounded-xl text-sm tracking-wider overflow-hidden w-full sm:w-auto"
            style={{ boxShadow: 'var(--shadow-primary-lg)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer */}
            <motion.span
              className="absolute inset-0"
              style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            />
            DESCARGA LA APP
            <ArrowRight className="w-4 h-4 relative z-10" />
          </motion.button>

          <button className="text-white/60 hover:text-white text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition-all duration-200">
            Ver cómo funciona →
          </button>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['Sin anuncios', 'Sin comisiones', 'iOS & Android', 'Actualización constante'].map((pill) => (
            <span
              key={pill}
              className="text-white/35 text-[11px] font-semibold tracking-[0.1em] px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03]"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
