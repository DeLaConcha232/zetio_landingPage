/**
 * Precios vigentes — Zetio Club (ver Sección 6, Términos y Condiciones de Clubes).
 * Paquetes de créditos: pago único, sin vencimiento anticipado (12 meses de vigencia).
 * Suscripciones: créditos/mes + N torneos relámpago incluidos/mes según plan.
 * Anual = 10× la tarifa mensual (equivalente a 2 meses sin costo).
 */
export const CREDIT_PACKS = [
  { name: 'Pack S', credits: 80, price: 1200 },
  { name: 'Pack M', credits: 200, price: 2800 },
  { name: 'Pack L', credits: 500, price: 6500 },
  { name: 'Pack XL', credits: 1000, price: 12000 },
]

export const CREDIT_SUBS = [
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

export function bestPackFor(credits) {
  const fit = CREDIT_PACKS.find((p) => p.credits >= credits)
  if (fit) return { label: fit.name, price: fit.price }
  const xl = CREDIT_PACKS[CREDIT_PACKS.length - 1]
  const n = Math.ceil(credits / xl.credits)
  return { label: `${n}× ${xl.name}`, price: xl.price * n }
}
export function bestSubFor(credits) {
  return CREDIT_SUBS.find((s) => s.credits >= credits) || CREDIT_SUBS[CREDIT_SUBS.length - 1]
}
export function subPrice(sub, billing) {
  return billing === 'anual' ? sub.annual.monthlyEquivalent : sub.monthly
}
export const fmt = (n) => '$' + n.toLocaleString('es-MX')
