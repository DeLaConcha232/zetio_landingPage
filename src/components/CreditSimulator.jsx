import { useState } from 'react'
import { motion } from 'motion/react'
import Pill from '../bits/Pill'
import { CLUB_APP_URL } from '../lib/appLinks'

/**
 * Precios vigentes — Zetio Club (ver Sección 6, Términos y Condiciones de Clubes).
 * Paquetes de créditos: pago único, sin vencimiento anticipado (12 meses de vigencia).
 * Suscripciones: créditos/mes + N torneos relámpago incluidos/mes según plan.
 * Anual = 10× la tarifa mensual (equivalente a 2 meses sin costo).
 */
const CREDIT_PACKS = [
  { name: 'Pack S', credits: 80, price: 1200 },
  { name: 'Pack M', credits: 200, price: 2800 },
  { name: 'Pack L', credits: 500, price: 6500 },
  { name: 'Pack XL', credits: 1000, price: 12000 },
]

const CREDIT_SUBS = [
  {
    name: 'Inicial',
    credits: 80,
    torneosRelampago: 1,
    monthly: 999,
    annual: { monthlyEquivalent: 833, total: 9990 },
  },
  {
    name: 'Competidor',
    credits: 220,
    torneosRelampago: 2,
    monthly: 2299,
    annual: { monthlyEquivalent: 1916, total: 22990 },
  },
  {
    name: 'Élite',
    credits: 500,
    torneosRelampago: 4,
    monthly: 4999,
    annual: { monthlyEquivalent: 4166, total: 49990 },
  },
]

function bestPackFor(credits) {
  const fit = CREDIT_PACKS.find((p) => p.credits >= credits)
  if (fit) return { label: fit.name, price: fit.price }
  const xl = CREDIT_PACKS[CREDIT_PACKS.length - 1]
  const n = Math.ceil(credits / xl.credits)
  return { label: `${n}× ${xl.name}`, price: xl.price * n }
}
function bestSubFor(credits) {
  return CREDIT_SUBS.find((s) => s.credits >= credits) || CREDIT_SUBS[CREDIT_SUBS.length - 1]
}
function subPrice(sub, billing) {
  return billing === 'anual' ? sub.annual.monthlyEquivalent : sub.monthly
}
const fmt = (n) => '$' + n.toLocaleString('es-MX')

function DashCard({ label, value, sub, accent }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4.5 py-4">
      <div className="text-[11px] text-white/40 mb-2" style={{ letterSpacing: '.1em' }}>{label}</div>
      <div className={`font-extrabold text-2xl ${accent ? 'text-primary' : 'text-white'}`}>{value}</div>
      {sub && <div className="text-xs text-white/40 mt-1">{sub}</div>}
    </div>
  )
}

function BillingToggle({ billing, onChange }) {
  return (
    <div
      role="group"
      aria-label="Ciclo de facturación"
      className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] p-1 shrink-0"
    >
      {['anual', 'mensual'].map((opt) => {
        const active = billing === opt
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt)}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-bold whitespace-nowrap transition-all duration-200 ${
              active ? 'bg-primary text-black' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {opt === 'mensual' ? 'Mensual' : 'Anual'}
            {opt === 'anual' && (
              <span className={active ? 'text-black/70' : 'text-primary'} style={{ fontSize: '10px' }}>
                2 meses gratis
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

function PlanCard({ plan, billing, recommended }) {
  const price = subPrice(plan, billing)
  return (
    <div
      className={`relative rounded-2xl border px-4.5 py-4 ${recommended ? 'border-primary/50' : 'border-white/8'}`}
      style={{ background: recommended ? 'rgba(22,194,79,0.06)' : 'rgba(255,255,255,0.03)' }}
    >
      {recommended && (
        <span
          className="absolute -top-2.5 left-4 rounded-full bg-primary text-black font-extrabold px-2.5 py-1"
          style={{ fontSize: '10px', letterSpacing: '.05em' }}
        >
          RECOMENDADO
        </span>
      )}
      <div className="font-bold text-sm text-white mb-1.5">{plan.name}</div>
      <div className="flex items-baseline gap-1">
        <span className="font-extrabold text-2xl text-white">{fmt(price)}</span>
        <span className="text-xs text-white/40">/mes</span>
      </div>
      {billing === 'anual' && (
        <div className="text-[11px] text-primary mt-1">{fmt(plan.annual.total)}/año</div>
      )}
      <div className="text-xs text-white/50 mt-2.5">{plan.credits} créditos/mes</div>
      <div className="text-xs text-white/70 mt-1 flex items-center gap-1">
        <span aria-hidden="true">⚡</span>
        {plan.torneosRelampago} torneo{plan.torneosRelampago > 1 ? 's' : ''} relámpago incluido{plan.torneosRelampago > 1 ? 's' : ''}/mes
      </div>
    </div>
  )
}

export default function CreditSimulator() {
  const [parejas, setParejas] = useState(16)
  const [billing, setBilling] = useState('anual')
  const credits = parejas * 2
  const isFirstTournamentEligible = parejas <= 8
  const pack = bestPackFor(credits)
  const sub = bestSubFor(credits)

  return (
    <section className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute top-[10%] right-0 w-[45%] h-100 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(22,194,79,0.08), transparent 70%)' }}
      />
      <motion.div
        className="relative text-center mb-11"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Pill tone="ghost" size="sm">Créditos</Pill>
        <h2 className="font-extrabold text-white mx-auto mt-5 mb-3.5 max-w-lg" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
          ¿Cuánto cuesta{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}>
            tu torneo?
          </span>
        </h2>
        <p className="text-white/45 text-[15px] max-w-sm mx-auto">1 crédito = 1 jugador. Una pareja = 2 créditos. Mueve el slider y calcula.</p>
      </motion.div>

      <motion.div
        className="relative rounded-3xl border border-white/8 px-6 sm:px-9 py-9"
        style={{ background: 'linear-gradient(160deg, var(--color-surface), var(--color-surface-dark))' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="flex justify-between items-baseline mb-2">
          <span className="font-bold text-base text-white">Parejas en tu torneo</span>
          <span className="font-extrabold text-3xl text-primary">{parejas}</span>
        </div>
        <input
          type="range"
          min="4"
          max="500"
          step="4"
          value={parejas}
          onChange={(e) => setParejas(Number(e.target.value))}
          className="w-full h-1.5 cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs text-white/40 mt-1.5 mb-7">
          <span>4 parejas</span><span>500 parejas</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4">
          <span className="text-xs text-white/40">Precio de suscripción mostrado:</span>
          <BillingToggle billing={billing} onChange={setBilling} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DashCard label="CRÉDITOS NECESARIOS" value={credits} sub={`${parejas} parejas × 2`} />
          <DashCard label="COSTO ESTIMADO" value={fmt(pack.price)} accent sub={`Con ${pack.label}`} />
          <DashCard
            label="O EN SUSCRIPCIÓN"
            value={`${fmt(subPrice(sub, billing))}/mes`}
            sub={`Plan ${sub.name} · ${sub.credits} créditos/mes · ⚡ ${sub.torneosRelampago} torneo${sub.torneosRelampago > 1 ? 's' : ''} relámpago/mes`}
          />
        </div>

        {isFirstTournamentEligible && (
          <div className="mt-5 px-4.5 py-3.5 rounded-xl text-[13px] text-white" style={{ background: 'rgba(22,194,79,0.08)', border: '1px solid rgba(22,194,79,0.25)' }}>
            🎁 Torneo relámpago de bienvenida: tu primer torneo de hasta 8 parejas es gratis, una sola vez y sin necesidad de suscripción. Para torneos relámpago gratis cada mes, elige un plan de suscripción abajo.
          </div>
        )}

        <div className="mt-8">
          <div className="text-sm font-bold text-white mb-3.5">Compara los planes de suscripción</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CREDIT_SUBS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} billing={billing} recommended={plan.name === sub.name} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href={CLUB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-black font-bold text-base px-8 py-4 rounded-full hover:bg-primary-light transition-all duration-200 hover:scale-[1.03] active:scale-95"
            style={{ boxShadow: 'var(--shadow-primary-sm)' }}
          >
            Crea tu primer torneo ahora
          </a>
        </div>
      </motion.div>
    </section>
  )
}
