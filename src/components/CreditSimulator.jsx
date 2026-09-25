import { useState } from 'react'
import { motion } from 'motion/react'
import Pill from '../bits/Pill'
import { CLUB_APP_URL } from '../lib/appLinks'
import { bestPackFor, bestSubFor, subPrice, fmt } from '../lib/pricing'

function DashCard({ label, value, sub, accent }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4.5 py-4">
      <div className="text-[11px] text-white/40 mb-2" style={{ letterSpacing: '.1em' }}>{label}</div>
      <div className={`font-extrabold text-2xl ${accent ? 'text-primary' : 'text-white'}`}>{value}</div>
      {sub && <div className="text-xs text-white/40 mt-1">{sub}</div>}
    </div>
  )
}

export function BillingToggle({ billing, onChange }) {
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

        <div
          className="relative rounded-2xl border border-primary/25 px-5 py-5 mb-6 flex items-center justify-between gap-4"
          style={{ background: 'linear-gradient(135deg, rgba(22,194,79,0.14), rgba(22,194,79,0.03))' }}
        >
          <div>
            <div className="text-[11px] text-white/50 mb-1.5" style={{ letterSpacing: '.1em' }}>JUGADORES EN TU TORNEO</div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-4xl text-primary">{credits}</span>
              <span className="text-sm text-white/50">jugadores</span>
            </div>
          </div>
          <div className="text-right text-xs text-white/40 leading-relaxed">
            {parejas} parejas × 2<br />= {credits} créditos
          </div>
        </div>

        <div className="text-xs font-bold text-white/50 mb-3" style={{ letterSpacing: '.06em' }}>ASÍ LO PUEDES PAGAR</div>

        <div className="hidden sm:flex sm:items-center sm:justify-between gap-2.5 mb-4">
          <span className="text-xs text-white/40">Ciclo de la suscripción:</span>
          <BillingToggle billing={billing} onChange={setBilling} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DashCard label="PAGO ÚNICO" value={fmt(pack.price)} accent sub={`Con ${pack.label} · ${credits} jugadores`} />

          <div className="flex sm:hidden items-center justify-between gap-2.5">
            <span className="text-xs text-white/40">Ciclo de la suscripción:</span>
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>

          <DashCard
            label="O EN SUSCRIPCIÓN"
            value={`${fmt(subPrice(sub, billing))}/mes`}
            sub={`Plan ${sub.name} · ${sub.credits} jugadores/mes · ⚡ ${sub.torneosRelampago} torneo${sub.torneosRelampago > 1 ? 's' : ''} relámpago gratuito${sub.torneosRelampago > 1 ? 's' : ''}/mes`}
          />
        </div>

        {isFirstTournamentEligible && (
          <div className="mt-5 px-4.5 py-3.5 rounded-xl text-[13px] text-white" style={{ background: 'rgba(22,194,79,0.08)', border: '1px solid rgba(22,194,79,0.25)' }}>
            🎁 Torneo relámpago de bienvenida: tu primer torneo de hasta 8 parejas es gratis, una sola vez y sin necesidad de suscripción. Para torneos relámpago gratis cada mes, elige un plan de suscripción abajo.
          </div>
        )}

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
