/**
 * React Bits — Pill
 * Stadium-shaped tag used for eyebrows/badges across the site.
 * tone: 'mint' (green fill, dark text) | 'dark' (near-black fill) | 'ghost' (outline).
 */
const TONES = {
  mint: 'bg-primary text-black border-transparent',
  dark: 'bg-black/60 text-white border-white/10',
  ghost: 'bg-transparent text-primary border-primary/35',
}
const SIZES = {
  sm: 'text-[11px] px-3.5 py-1.5 tracking-[0.06em]',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-lg px-7 py-3.5',
}

export default function Pill({ children, tone = 'mint', size = 'md', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border font-bold leading-none whitespace-nowrap ${TONES[tone]} ${SIZES[size]} ${className}`}
    >
      {children}
    </span>
  )
}
