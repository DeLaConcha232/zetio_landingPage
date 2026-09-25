import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Zap } from 'lucide-react'
import Pill from '../bits/Pill'
import SegmentedControl from '../bits/SegmentedControl'
import { BillingToggle } from './CreditSimulator'
import { CREDIT_PACKS, CREDIT_SUBS, subPrice, fmt } from '../lib/pricing'
import { CLUB_APP_URL } from '../lib/appLinks'

function PricingPlanCard({ plan, billing, recommended, index }) {
  const price = subPrice(plan, billing)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative rounded-3xl border px-7 py-8 flex flex-col ${recommended ? 'border-primary/50' : 'border-white/8'}`}
      style={{
        background: recommended
          ? 'linear-gradient(160deg, rgba(22,194,79,0.10), rgba(22,194,79,0.02))'
          : 'linear-gradient(160deg, var(--color-surface), var(--color-surface-dark))',
      }}
    >
      {recommended && (
        <span
          className="absolute -top-3 left-7 rounded-full bg-primary text-black font-extrabold px-3 py-1.5"
          style={{ fontSize: '10px', letterSpacing: '.06em' }}
        >
          RECOMENDADO
        </span>
      )}
      <div className="font-bold text-lg text-white mb-1">{plan.name}</div>
      <div className="flex items-baseline gap-1.5 mt-3 mb-1">
        <span className="font-extrabold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.02em' }}>
          {fmt(price)}
        </span>
        <span className="text-sm text-white/40">/mes</span>
      </div>
      {billing === 'anual' ? (
        <div className="text-[13px] text-primary mb-5">{fmt(plan.annual.total)} facturado al año</div>
      ) : (
        <div className="mb-5 h-[13px]" />
      )}
      <div className="h-px bg-white/8 my-1" />
      <div
        className="rounded-xl px-4 py-3.5 mt-5"
        style={{ background: recommended ? 'rgba(22,194,79,0.14)' : 'rgba(255,255,255,0.04)' }}
      >
        <div className="flex items-baseline gap-1.5">
          <span className="font-extrabold text-2xl text-primary">{plan.credits}</span>
          <span className="text-sm text-white/70">jugadores/mes</span>
        </div>
        <div className="text-[11px] text-white/35 mt-0.5">{plan.credits} créditos incluidos</div>
      </div>
      <div className="flex items-center gap-2.5 text-[14px] text-white/80 mt-4">
        <Zap className="w-4 h-4 text-primary shrink-0" />
        {plan.torneosRelampago} torneo{plan.torneosRelampago > 1 ? 's' : ''} relámpago gratuito{plan.torneosRelampago > 1 ? 's' : ''} incluido{plan.torneosRelampago > 1 ? 's' : ''}/mes
      </div>
    </motion.div>
  )
}

function CreditPackCard({ pack, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="rounded-2xl border border-white/8 px-5 py-6 text-center"
      style={{ background: 'linear-gradient(160deg, var(--color-surface), var(--color-surface-dark))' }}
    >
      <div className="font-bold text-sm text-white/70 mb-3">{pack.name}</div>
      <div className="font-extrabold text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', letterSpacing: '-0.02em' }}>
        {fmt(pack.price)}
      </div>
      <div className="pt-3 border-t border-white/8">
        <div className="font-extrabold text-primary text-lg">{pack.credits} jugadores</div>
        <div className="text-[11px] text-white/35 mt-0.5">{pack.credits} créditos</div>
      </div>
    </motion.div>
  )
}

const MODES = [
  { value: 'subs', label: 'Suscripción' },
  { value: 'packs', label: 'Paquetes de créditos' },
]

export default function PricingPlans() {
  const [mode, setMode] = useState('subs')
  const [billing, setBilling] = useState('anual')

  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-0 w-[45%] h-100 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(22,194,79,0.08), transparent 70%)' }}
      />

      <motion.div
        className="relative text-center mb-11"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Pill tone="ghost" size="sm">Precios</Pill>
        <h2
          className="font-extrabold text-white mx-auto mt-5 mb-3.5 max-w-lg"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}
        >
          Elige cómo{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}
          >
            quieres pagar
          </span>
        </h2>
        <p className="text-white/45 text-[15px] max-w-sm mx-auto">
          1 crédito = 1 jugador. Paquetes de un solo pago o suscripción mensual, con jugadores y torneos incluidos cada mes.
        </p>
      </motion.div>

      <motion.div
        className="relative flex justify-center mb-9"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        <SegmentedControl options={MODES} value={mode} onChange={setMode} />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {mode === 'subs' ? (
            <>
              <div className="flex justify-center mb-8">
                <BillingToggle billing={billing} onChange={setBilling} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {CREDIT_SUBS.map((plan, i) => (
                  <PricingPlanCard
                    key={plan.name}
                    plan={plan}
                    billing={billing}
                    recommended={plan.name === 'Competidor'}
                    index={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CREDIT_PACKS.map((pack, i) => (
                  <CreditPackCard key={pack.name} pack={pack} index={i} />
                ))}
              </div>
              <p className="text-center text-xs text-white/35 mt-6">Créditos válidos por 12 meses desde su compra.</p>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="text-center mt-11">
        <a
          href={CLUB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-primary text-black font-bold text-base px-8 py-4 rounded-full hover:bg-primary-light transition-all duration-200 hover:scale-[1.03] active:scale-95"
          style={{ boxShadow: 'var(--shadow-primary-sm)' }}
        >
          Empieza tu club en Zetio
        </a>
      </div>
    </section>
  )
}
