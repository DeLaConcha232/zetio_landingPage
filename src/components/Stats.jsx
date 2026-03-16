import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import CountUp from '../bits/CountUp'

const stats = [
  { to: 1, suffix: 'k+', label: 'JUGADORES ACTIVOS' },
  { to: 20, suffix: '+', label: 'CLUBES FEDERADOS' },
  { to: 10, suffix: '+', label: 'COACHES CERTIFICADOS' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="stats" ref={ref} className="relative border-y border-primary/20 overflow-hidden">
      {/* Gradient strip background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(153,204,153,0.06) 0%, transparent 50%, rgba(153,204,153,0.04) 100%)' }} />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-50 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(153,204,153,0.07)' }} />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            >
              <p
                className="font-black text-primary tabular-nums mb-1.5"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 3.5rem)', textShadow: '0 0 32px rgba(153,204,153,0.55)' }}
              >
                {isInView ? (
                  <CountUp to={stat.to} suffix={stat.suffix} duration={2} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </p>
              <p className="text-white/40 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.12em] sm:tracking-[0.16em] uppercase leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
