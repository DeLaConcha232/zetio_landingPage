import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GreenGlow from '../bits/GreenGlow'
import Pill from '../bits/Pill'

export default function Shop() {
  return (
    <div className="bg-bg text-white min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <section className="relative pt-40 sm:pt-44 pb-14 px-4 sm:px-6 text-center overflow-hidden">
          <GreenGlow opacity={0.22} />
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <Pill tone="ghost" size="sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Shop oficial
            </Pill>
            <h1
              className="font-extrabold text-white mx-auto mt-6 max-w-xl"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)', letterSpacing: '-0.03em' }}
            >
              Viste tu juego,{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}>
                dentro y fuera de la cancha.
              </span>
            </h1>
            <p className="text-white/45 text-base leading-relaxed mx-auto mt-4 max-w-sm">
              Playeras, accesorios y medallas oficiales de Zetio
            </p>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Pill tone="mint" size="lg">Próximamente disponible para compra</Pill>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
