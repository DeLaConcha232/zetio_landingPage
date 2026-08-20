import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { APP_STORE_URL, PLAY_STORE_URL } from '../lib/appLinks'

/**
 * Dropdown button that reveals real App Store / Google Play links.
 * Shared between Navbar and Hero so the download entry point looks/behaves
 * the same everywhere on the site.
 */
export default function StoreDropdown({ label = 'Descargar', size = 'md', className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const sizeClasses = size === 'lg' ? 'text-base px-7 py-4 gap-2.5' : 'text-[13px] px-4.5 py-2 gap-1.5'

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center bg-primary text-black font-bold rounded-full hover:bg-primary-light transition-all duration-200 hover:scale-[1.03] active:scale-95 ${sizeClasses}`}
        style={size === 'lg' ? { boxShadow: 'var(--shadow-primary-sm)' } : undefined}
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`${size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150 text-sm border-b border-white/6"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true"><path d="M3.18 23.76c.3.17.64.22.98.15l12.93-7.47-2.79-2.79-11.12 10.11zM.54 1.25C.2 1.55 0 2.04 0 2.69v18.61c0 .65.2 1.14.55 1.44l.07.06 10.43-10.43v-.24L.61 1.19l-.07.06zM20.6 10.27l-2.79-1.61-3.12 3.12 3.12 3.12 2.81-1.62c.8-.46.8-1.21-.02-1.61zM3.18.23L16.11 7.7 13.32 10.49 2.2.38c.3-.17.66-.2.98-.15z" /></svg>
              Google Play
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
