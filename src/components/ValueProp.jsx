import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import SpotlightCard from '../bits/SpotlightCard'
import { Star, Zap, Users } from 'lucide-react'

const freeFeatures = [
  { label: 'SIN LÍMITES' },
  { label: 'MULTI-CLUB' },
  { label: 'STATS PRO' },
  { label: 'IA INTEGRADA' },
]

const highlights = [
  {
    icon: <Zap className="w-4 h-4" />,
    title: 'Interfaz Ultra Rápida',
    description: 'Juega en menos de 3 clics. Sin esperas, sin errores.',
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: 'Juegos rapidos',
    description: 'Encuentra amigos y toma el control del juego desde la palma de tu mano.',
  },
]

export default function ValueProp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* ── Left: GRATIS card ── */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SpotlightCard
            className="bg-surface border border-primary/25 rounded-2xl p-6 sm:p-10 glow-border"
            spotlightColor="var(--color-primary-spotlight-lg)"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-[90px] pointer-events-none" style={{ background: 'rgba(153,204,153,0.12)' }} />

            {/* Star icon */}
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-primary/15 border border-primary/35 flex items-center justify-center mb-5 sm:mb-7" style={{ boxShadow: '0 0 20px rgba(153,204,153,0.25)' }}>
              <Star className="w-7 h-7 text-primary fill-primary" />
            </div>

            {/* Title */}
            <div className="mb-5">
              <p className="text-white/50 font-bold text-xs tracking-[0.25em] uppercase mb-0.5">
                TOTALMENTE
              </p>
              <p
                className="font-black italic leading-none"
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 3.5rem)',
                  background: 'var(--gradient-primary-shine)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                GRATIS
              </p>
            </div>

            {/* Description */}
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-sm">
              Sin cuotas mensuales ni comisiones ocultas. Nuestra misión es democratizar el acceso al pádel profesional para todos los jugadores.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {freeFeatures.map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-2.5 bg-primary/6 border border-primary/20 rounded-xl px-4 py-3 hover:border-primary/40 hover:bg-primary/9 transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" style={{ boxShadow: '0 0 6px rgba(153,204,153,0.8)' }} />
                  <span className="text-white/70 text-xs font-semibold tracking-widest">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ── Right: text ── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.72, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:pl-6"
        >
          <h2
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Lleva tu nivel al siguiente juego
          </h2>

          <p className="text-white/45 text-sm leading-relaxed mb-10">
            Hemos diseñado Zetio para ser la navaja suiza del jugador de pádel. Desde la gestión de pistas hasta el análisis de rendimiento post-partido, todo está optimizado para que solo te preocupes de entrar a la pista.
          </p>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.16, ease: 'easeOut' }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 text-primary mt-0.5" style={{ boxShadow: '0 0 14px rgba(153,204,153,0.20)' }}>
                  {h.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{h.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
