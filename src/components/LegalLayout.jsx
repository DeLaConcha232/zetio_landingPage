/**
 * Shared layout wrapper for legal pages (Privacy / Terms).
 * Renders a centred content column with a sticky back-to-top feel.
 */
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'

function ZetioLogo() {
    return (
        <Link to="/" className="flex items-center gap-2.5 select-none">
            <picture className="cursor-pointer select-none">
                <img src="/brandIcon_claro.svg" alt="Zetio Logo" className="w-28 h-auto" />
            </picture>
        </Link>
    )
}

export default function LegalLayout({ badge, title, updated, children }) {
    return (
        <div className="bg-bg text-white min-h-screen">
            {/* ── Top bar ── */}
            <header className="border-b border-white/6 bg-bg/95 backdrop-blur-xl sticky top-0 z-40">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
                    <ZetioLogo />
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </div>
            </header>

            {/* ── Hero header ── */}
            <motion.div
                className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-10 border-b border-white/6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <span className="inline-block text-primary text-[11px] font-bold tracking-[0.22em] uppercase mb-4">
                    {badge}
                </span>
                <h1 className="text-white font-black text-3xl sm:text-4xl leading-tight mb-3">
                    {title}
                </h1>
                <p className="text-white/35 text-sm">
                    Última actualización: <span className="text-white/55">{updated}</span>
                </p>
            </motion.div>

            {/* ── Content ── */}
            <motion.main
                className="max-w-3xl mx-auto px-4 sm:px-6 py-12 pb-24"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            >
                <div className="legal-content space-y-10">
                    {children}
                </div>
            </motion.main>
        </div>
    )
}

/**
 * Reusable section block used inside legal pages.
 */
export function LegalSection({ number, title, children }) {
    return (
        <section>
            <h2 className="flex items-baseline gap-3 text-white font-bold text-lg sm:text-xl mb-4">
                <span className="text-primary/50 font-black text-sm tracking-widest">{String(number).padStart(2, '0')}.</span>
                {title}
            </h2>
            <div className="text-white/55 text-sm sm:text-base leading-relaxed space-y-3 pl-8">
                {children}
            </div>
        </section>
    )
}
