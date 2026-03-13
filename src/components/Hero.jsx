import { motion } from 'motion/react'
import SplitText from '../bits/SplitText'
import { Play } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* ── Background ── */}
            <div className="absolute inset-0">
                <img
                    src="/imagen2.webp"
                    alt=""
                    fetchPriority="high"
                    decoding="sync"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-110"
                    style={{ filter: 'brightness(0.52)' }}
                />
                {/* Left vignette — keeps text readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent" />
                {/* Bottom fade into next section */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
                {/* Animated orb — top left */}
                <motion.div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(153,204,153,0.18) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.14, 1], opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Animated orb — bottom right */}
                <motion.div
                    className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(153,204,153,0.11) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.8, 0.45] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(153,204,153,0.55) 25%, rgba(153,204,153,0.55) 75%, transparent)' }} />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 w-full">
                {/* Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/12 mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                        animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span className="text-primary text-[11px] font-semibold tracking-[0.18em] uppercase">
                        Nueva Era del Pádel
                    </span>
                </motion.div>

                {/* Title */}
                <h1 className="font-black leading-[1.04] mb-5 sm:mb-7" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)' }}>
                    <span className="block text-white">
                        <SplitText delay={0.25} stagger={0.09}>
                            Zetio: El Pádel
                        </SplitText>
                    </span>
                    <span className="block text-primary">
                        <SplitText delay={0.52} stagger={0.09}>
                            en tus Manos
                        </SplitText>
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    className="text-white/55 text-sm sm:text-base lg:text-lg max-w-full sm:max-w-[400px] leading-relaxed mb-8 sm:mb-11"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.92, ease: 'easeOut' }}
                >
                    Totalmente gratis. Organiza torneos, únete a clubes y entrena con profesionales en la plataforma más avanzada del mercado.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col flex-wrap gap-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 1.15, ease: 'easeOut' }}
                >
                    <section className="flex gap-6 w-full sm:w-auto">
                        <motion.button
                            className="bg-primary text-black font-black px-8 py-3.5 rounded-xl text-sm tracking-wider hover:bg-primary-light transition-colors duration-200 active:scale-95 w-full sm:w-auto relative overflow-hidden"
                            style={{ boxShadow: 'var(--shadow-primary-md)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 rounded-xl"
                                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
                                animate={{ opacity: [0, 0.6, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            EMPIEZA AHORA
                        </motion.button>

                        <button className="group flex items-center justify-center gap-3 text-white border border-white/15 bg-white/[0.04] px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200 w-full sm:w-auto">
                            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                                <Play className="w-3.5 h-3.5 fill-white text-white" />
                            </span>
                            Ver Demo
                        </button>
                    </section>
                    <section className="w-full sm:w-auto">
                        <img src="/componente app store.png" alt="App Store" className="w-auto h-14" />
                    </section>
                </motion.div>
            </div>
        </section>
    )
}
