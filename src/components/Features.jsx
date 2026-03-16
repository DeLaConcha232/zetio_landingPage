import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import SpotlightCard from '../bits/SpotlightCard'

function SectionTag({ label }) {
    return (
        <span className="text-primary/60 text-[10px] font-bold tracking-[0.22em] uppercase mb-1 block">
            {label}
        </span>
    )
}

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            delay: i * 0.14,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
}

export default function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="features" ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
            {/* ── Section header ── */}
            <motion.div
                className="flex items-center gap-5 mb-14"
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                <div className="h-px w-10 bg-primary" style={{ boxShadow: '0 0 12px rgba(153,204,153,0.7)' }} />
                <h2 className="text-white font-black text-base tracking-[0.2em] uppercase">
                    Experiencia Elite
                </h2>
            </motion.div>

            {/* ── Cards grid ── */}
            <div className="flex flex-col gap-4">
                {/* Row 1: two cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card — Mini Torneos */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <SpotlightCard className="relative rounded-2xl overflow-hidden h-64 sm:h-72 bg-surface border border-primary/15 group cursor-pointer glow-border transition-all duration-300 hover:border-primary/30">
                            <img
                                src="/imagenAmigos.webp"
                                alt="Mini torneos con amigos"
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                                <SectionTag label="Social" />
                                <h3 className="text-white font-black text-2xl sm:text-[1.55rem] leading-tight mb-2 sm:mb-3">
                                    Mini Torneos<br />con Amigos
                                </h3>
                                <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                                    Organiza partidas rápidas con tus amigos. Lleva el marcador punto a punto en tiempo real y genera estadísticas automáticas.
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Card — Torneos de Clubes */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <SpotlightCard className="relative rounded-2xl overflow-hidden h-64 sm:h-72 bg-surface border border-primary/15 group cursor-pointer glow-border transition-all duration-300 hover:border-primary/30">
                            <img
                                src="/imagenbg.webp"
                                alt="Torneos de clubes oficiales"
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                                <SectionTag label="Oficial (PROXIMAMENTE)" />
                                <h3 className="text-white font-black text-2xl sm:text-[1.55rem] leading-tight mb-2 sm:mb-3">
                                    Torneos<br />de Clubes
                                </h3>
                                <p className="text-white/45 text-sm leading-relaxed">
                                    Inscríbete en competiciones oficiales, consulta rankings y avanza en el cuadro eliminatorio profesional.
                                </p>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>

                {/* Row 2: Coach card — full width */}
                <motion.div
                    custom={2}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <SpotlightCard
                        className="relative rounded-2xl overflow-hidden bg-surface border border-primary/20 cursor-pointer glow-border transition-all duration-300 hover:border-primary/40"
                        spotlightColor="var(--color-primary-spotlight-md)"
                    >
                        {/* Background image */}
                        <img
                            src="/imagencoach.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 transition-all duration-700"
                        />
                        {/* Left-to-right fade — keeps text readable, reveals image on the right */}
                        <div className="absolute inset-0 bg-linear-to-r from-surface via-surface/90 to-surface/25" />
                        {/* Subtle green glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[80px] pointer-events-none" style={{ background: 'var(--color-primary-spotlight-xs)' }} />

                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-8 sm:p-10">
                            <div className="flex-1">
                                <SectionTag label="Rendimiento (PROXIMAMENTE)" />
                                <h3 className="text-white font-black text-3xl sm:text-4xl mt-2 mb-4">
                                    Coach Profesional
                                </h3>
                                <p className="text-white/45 text-sm leading-relaxed max-w-lg">
                                    Reserva, encuentra y conecta con clases particulares con instructores certificados. Recibe planes de entrenamiento personalizados basados en tus estadísticas de juego e indicaciones registradas por tu coach.
                                </p>
                            </div>

                            {/* Avatars */}
                            {/* <div className="flex flex-col items-center gap-2 shrink-0">
                                <div className="flex -space-x-3.5">
                                    {[
                                        { initials: 'MC', bg: '#1a3a1a' },
                                        { initials: 'AL', bg: '#1f4020' },
                                        { initials: 'SR', bg: '#163016' },
                                    ].map(({ initials, bg }) => (
                                        <div
                                            key={initials}
                                            aria-label={`Coach ${initials}`}
                                            style={{
                                                width: 52,
                                                height: 52,
                                                borderRadius: '50%',
                                                background: bg,
                                                border: '2px solid var(--color-surface)',
                                                outline: '1px solid rgba(153,204,153,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '13px',
                                                fontWeight: 700,
                                                color: '#99CC99',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {initials}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-white/35 text-xs font-semibold tracking-wide">+50 Coaches</span>
                            </div> */}
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    )
}
