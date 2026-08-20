import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

/** PLACEHOLDER copy from the design prototype — review before launch. */
const faqs = [
  ['¿Cuánto cuesta usar Zetio?', 'Zetio es gratis para jugadores. Los clubes y organizadores tienen planes para torneos y gestión.'],
  ['¿Está disponible en mi ciudad?', 'Zetio está disponible en México y sigue creciendo. Si tu club no está, puedes invitarlo desde la app.'],
  ['¿Qué pasa con mis datos?', 'Tu historial y estadísticas son tuyos. No compartimos tu información con terceros.'],
  ['¿Los clubes necesitan equipo especial?', 'No. Con un teléfono y la app, un club puede digitalizar sus torneos el mismo día.'],
  ['¿Necesito saber organizar torneos para usar Tour?', 'No. Tour arma cuadros, grupos y resultados automáticamente; tú solo juegas.'],
]

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-white/7">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-semibold text-white text-[15px] sm:text-base"
      >
        {q}
        <ChevronDown className={`w-4 h-4 text-white/45 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-white/45 text-sm leading-relaxed pb-5 pr-8">{a}</p>
      </motion.div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.h2
        className="font-extrabold text-center text-white mx-auto mb-10"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        Preguntas frecuentes
      </motion.h2>
      <div>
        {faqs.map(([q, a], i) => (
          <FAQItem key={q} q={q} a={a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
        ))}
      </div>
    </section>
  )
}
