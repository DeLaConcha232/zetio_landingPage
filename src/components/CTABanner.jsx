import { motion } from 'motion/react'
import GreenGlow from '../bits/GreenGlow'
import { APP_STORE_URL, PLAY_STORE_URL } from '../lib/appLinks'

export default function CTABanner() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 text-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[110%] h-[140%] pointer-events-none"
        style={{
          backgroundImage: 'url(/gradient-2.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          mixBlendMode: 'screen',
          filter: 'blur(4px)',
        }}
      />
      <GreenGlow opacity={0.32} />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(22,194,79,0.06), transparent)' }}
      />

      <motion.div
        className="relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img src="/zetio-icon.webp" alt="Zetio" className="w-22 h-22 rounded-[20px] mx-auto" width="88" height="88" />

        <h2
          className="font-extrabold text-white mt-8 mb-4"
          style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)', letterSpacing: '-0.035em' }}
        >
          Tu próximo partido{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}>
            empieza aquí.
          </span>
        </h2>
        <p className="text-white/45 text-base sm:text-lg mb-9">Play, Coach y Tour — gratis, en una sola app.</p>

        <div className="flex items-center gap-4 justify-center flex-wrap">
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
        </div>
      </motion.div>
    </section>
  )
}
