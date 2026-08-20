import { motion } from 'motion/react'
import SpotlightCard from '../bits/SpotlightCard'
import Pill from '../bits/Pill'

function Icon({ children, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

const ICONS = {
  chat: <path d="M4 5h16v11H8l-4 4V5Z" />,
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.2" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" />
    </>
  ),
  pulse: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  bolt: <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4a3 3 0 0 0 3 5" />
      <path d="M17 6h3a3 3 0 0 1-3 5" />
      <path d="M12 15v3" />
      <path d="M9 21h6" />
    </>
  ),
}

const problems = [
  { icon: 'chat', title: 'Cada partido es un caos de chats', body: 'Grupos que nadie lee, faltas de último momento, nadie sabe quién confirmó.' },
  { icon: 'grid', title: 'Los torneos se arman a mano', body: 'Cuadros, categorías y resultados anotados uno por uno, partido tras partido.' },
  { icon: 'pulse', title: 'Juegas sin saber si mejoras', body: 'Ganas o pierdes, pero no queda ni un winner ni un error registrado.' },
]

const solutions = [
  { name: 'Play', tag: 'ORGANIZA Y JUEGA', href: '#play', icon: 'bolt', body: 'Crea retas, confirma jugadores y arma tu tabla sin salir del chat.' },
  { name: 'Coach', tag: 'MIDE CADA GOLPE', href: '#coach', icon: 'target', body: 'Registra winners y errores en vivo y descubre qué golpe te suma puntos.' },
  { name: 'Tour', tag: 'COMPITE EN SERIO', href: '#tour', icon: 'trophy', body: 'Cuadros, resultados en vivo y ranking automático para tus torneos.' },
]

export default function ProblemSolution() {
  return (
    <>
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] max-w-full h-100 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(22,194,79,0.08), transparent 70%)' }}
        />
        <motion.h2
          className="relative font-extrabold text-center text-white mx-auto max-w-xl mb-12 sm:mb-14"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Los deportes de raqueta todavía se organizan a la antigua
        </motion.h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6">
          {problems.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <SpotlightCard className="glow-border rounded-2xl border border-white/8 h-full p-9" spotlightColor="var(--color-primary-spotlight-sm)">
                <div className="text-primary mb-6">
                  <Icon>{ICONS[c.icon]}</Icon>
                </div>
                <div className="font-bold text-xl text-white leading-snug mb-3">{c.title}</div>
                <div className="text-white/45 text-[15px] leading-relaxed">{c.body}</div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-16 sm:py-24 overflow-hidden text-center">
        <div
          aria-hidden="true"
          className="absolute -top-[20%] -left-[15%] w-[130%] h-[140%] pointer-events-none"
          style={{
            backgroundImage: 'url(/gradient-3.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
            mixBlendMode: 'screen',
            filter: 'blur(20px)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Pill tone="mint" size="sm">La solución</Pill>
            <h2
              className="font-extrabold text-white mx-auto max-w-xl mt-6 mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', letterSpacing: '-0.03em' }}
            >
              Un sistema.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}>
                Tres formas de jugar.
              </span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed max-w-md mx-auto mb-12">
              Play, Coach y Tour comparten un mismo perfil, un mismo historial y una misma comunidad.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {solutions.map((b, i) => (
              <motion.a
                key={b.name}
                href={b.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="glow-border flex flex-col items-center gap-3.5 rounded-2xl border border-white/8 px-7 py-11 hover:border-primary/30 transition-colors duration-200"
                style={{ background: 'linear-gradient(160deg, var(--color-surface), var(--color-surface-dark))' }}
              >
                <div className="text-primary">
                  <Icon size={32}>{ICONS[b.icon]}</Icon>
                </div>
                <div className="font-extrabold text-2xl text-white">{b.name}</div>
                <div className="text-[11px] tracking-[0.16em] text-white/40">{b.tag}</div>
                <div className="text-sm text-white/45 leading-relaxed mt-1">{b.body}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
