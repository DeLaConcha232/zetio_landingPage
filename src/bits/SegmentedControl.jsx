/**
 * React Bits — SegmentedControl
 * Apple-style segmented switch: an active pill slides between options
 * via a shared layoutId animation instead of a flat color swap.
 */
import { motion } from 'motion/react'

export default function SegmentedControl({ options, value, onChange, className = '' }) {
  return (
    <div
      role="tablist"
      aria-label="Modo de precios"
      className={`inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] p-1 ${className}`}
    >
      {options.map((opt) => {
        const active = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={`relative z-10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
              active ? 'text-black' : 'text-white/55 hover:text-white/80'
            }`}
          >
            {active && (
              <motion.span
                layoutId="pricing-mode-pill"
                className="absolute inset-0 -z-10 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
