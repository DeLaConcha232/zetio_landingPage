import { motion } from 'motion/react'
import SplitText from '../bits/SplitText'
import GreenGlow from '../bits/GreenGlow'
import Pill from '../bits/Pill'
import { APP_STORE_URL, PLAY_STORE_URL } from '../lib/appLinks'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 pt-32 pb-16">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute -top-[20%] -left-[15%] w-[130%] h-[140%] pointer-events-none"
        style={{
          backgroundImage: 'url(/gradient-3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          mixBlendMode: 'screen',
          filter: 'blur(20px)',
        }}
      />
      <GreenGlow opacity={0.25} />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(22,194,79,0.13))' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Pill tone="ghost" size="sm">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            El único sistema completo de deportes de raqueta
          </Pill>
        </motion.div>

        <h1
          className="font-extrabold leading-[1.15] mt-6 max-w-4xl text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.25rem)', letterSpacing: '-0.04em' }}
        >
          <span className="block">
            <SplitText delay={0.25} stagger={0.05}>
              Los deportes de raqueta están cambiando.
            </SplitText>
          </span>
          <span
            className="block bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}
          >
            <SplitText delay={0.45} stagger={0.05}>
              Esto es apenas el comienzo.
            </SplitText>
          </span>
        </h1>

        <motion.p
          className="text-white/45 text-base sm:text-lg max-w-lg leading-relaxed mt-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: 'easeOut' }}
        >
          Organiza partidos, registra resultados y mejora con datos reales. Play, Coach y Tour en una sola plataforma. Completamente gratis.
        </motion.p>

        <motion.div
          className="flex items-center gap-3.5 flex-wrap justify-center mt-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: 'easeOut' }}
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80 active:opacity-60"
            aria-label="Descargar en App Store"
          >
            <img src="/app-store.webp" alt="Disponible en App Store" className="w-auto h-14" width="168" height="56" />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80 active:opacity-60"
            aria-label="Descargar en Google Play"
          >
            <img src="/play-store.webp" alt="Disponible en Google Play" className="w-auto h-14" width="190" height="56" />
          </a>
          <a
            href="#como-funciona"
            className="border border-white/12 text-white font-semibold text-base px-7 py-4 rounded-full hover:bg-white/5 transition-colors duration-200"
          >
            Ver cómo funciona
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
