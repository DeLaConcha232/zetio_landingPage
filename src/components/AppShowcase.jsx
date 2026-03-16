import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Tilt from '../bits/Tilt'

/**
 * To display the real screenshots, add the images to /public/screens/:
 *   /public/screens/modules.webp   — "Escoge tu mejor opción" screen
 *   /public/screens/play.webp      — Zetio Play home (torneo activo)
 *   /public/screens/historial.webp — Historial / ranking final
 */
const screens = [
  {
    id: 'modules',
    src: '/screens/modulos.webp',
    // Gradient shown while / if image hasn't been added yet
    fallback: 'linear-gradient(170deg, #0e2210 0%, #0a0a0a 55%, #091409 100%)',
    skeletonAccent: '#1a3a1a',
    label: 'Escoge tu módulo',
    caption: 'Play · Torneos · Coach',
    featured: false,
    rotate: -5,
  },
  {
    id: 'play',
    src: '/screens/zetioplay.webp',
    fallback: 'linear-gradient(170deg, #0a1a0a 0%, #0a0a0a 50%, #0a0f0a 100%)',
    skeletonAccent: '#1f4020',
    label: 'Zetio Play',
    caption: 'Torneos al instante',
    featured: true,
    rotate: 0,
  },
  {
    id: 'historial',
    src: '/screens/zetioplayHistorial.webp',
    fallback: 'linear-gradient(170deg, #0a0a0a 0%, #0e200e 50%, #0a0a0a 100%)',
    skeletonAccent: '#163016',
    label: 'Historial',
    caption: 'Stats y ranking final',
    featured: false,
    rotate: 5,
  },
]

/* ─── Phone frame + fallback skeleton ───────────────────────────── */
function PhoneFrame({ screen }) {
  const { src, fallback, skeletonAccent, label, featured } = screen
  const w = featured ? 240 : 198
  const h = featured ? 490 : 404

  return (
    <div
      style={{
        position: 'relative',
        width: `${w}px`,
        height: `${h}px`,
        borderRadius: '40px',
        border: `${featured ? '8px' : '7px'} solid #1c1c1c`,
        background: fallback,
        overflow: 'hidden',
        boxShadow: featured
          ? '0 30px 90px rgba(0,0,0,0.75), 0 0 50px rgba(153,204,153,0.18), 0 0 120px rgba(153,204,153,0.06), inset 0 0 0 1px rgba(255,255,255,0.05)'
          : '0 20px 60px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.03)',
        flexShrink: 0,
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: 'absolute',
          top: '11px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '74px',
          height: '23px',
          background: '#000',
          borderRadius: '12px',
          zIndex: 20,
        }}
      />

      {/* Skeleton pattern visible until/unless image loads */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          padding: '52px 14px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Top bar skeleton */}
        <div style={{ height: '14px', width: '55%', borderRadius: '7px', background: skeletonAccent, opacity: 0.6 }} />
        {/* Content blocks */}
        <div style={{ height: '56px', borderRadius: '12px', background: skeletonAccent, opacity: 0.45, marginTop: '4px' }} />
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ flex: 1, height: '44px', borderRadius: '10px', background: skeletonAccent, opacity: 0.35 }} />
          <div style={{ flex: 1, height: '44px', borderRadius: '10px', background: skeletonAccent, opacity: 0.35 }} />
        </div>
        <div style={{ height: '44px', borderRadius: '10px', background: skeletonAccent, opacity: 0.28 }} />
        {/* Brand mark */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', opacity: 0.3 }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#99CC99' }} />
          <div style={{ height: '10px', width: '40px', borderRadius: '5px', background: '#99CC99' }} />
        </div>
      </div>

      {/* Real screenshot — overlays skeleton once loaded */}
      <img
        src={src}
        alt={label}
        loading="lazy"
        decoding="async"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 10,
        }}
      />

      {/* Subtle inner glow at top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(153,204,153,0.06) 0%, transparent 100%)',
          zIndex: 15,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

/* ─── Section ───────────────────────────────────────────────────── */
export default function AppShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="app-showcase"
      ref={ref}
      className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* ── Section header ── */}
      <motion.div
        className="text-center mb-14 md:mb-20"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div
            className="h-px w-8 bg-primary"
            style={{ boxShadow: '0 0 12px rgba(153,204,153,0.7)' }}
          />
          <span className="text-primary/60 text-sm font-bold tracking-[0.22em] uppercase">
            La App
          </span>
          <div
            className="h-px w-8 bg-primary"
            style={{ boxShadow: '0 0 12px rgba(153,204,153,0.7)' }}
          />
        </div>

        <h2
          className="font-black text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(1.85rem, 4.2vw, 3rem)' }}
        >
          Así se siente tener{' '}
          <span
            style={{
              background: 'var(--gradient-primary-shine)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            todo bajo control.
          </span>
        </h2>

        <p className="text-white/45 text-lg max-w-lg mx-auto leading-relaxed">
          Diseñada para que pases menos tiempo organizando y más tiempo jugando.
        </p>
      </motion.div>

      {/* ── Phone mockups ── */}
      <div className="flex items-end justify-center gap-4 sm:gap-6 lg:gap-10">
        {screens.map((screen, i) => {
          const isCenter = screen.featured
          return (
            <motion.div
              key={screen.id}
              className={[
                'flex flex-col items-center gap-4',
                isCenter ? 'flex' : 'hidden sm:flex',
              ].join(' ')}
              initial={{
                opacity: 0,
                y: isCenter ? 48 : 72,
                rotate: screen.rotate,
              }}
              animate={
                isInView
                  ? {
                      opacity: isCenter ? 1 : 0.72,
                      y: isCenter ? 0 : 28, // side phones sit lower
                      rotate: screen.rotate,
                    }
                  : {}
              }
              transition={{
                duration: 0.85,
                delay: 0.1 + i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Tilt tiltMaxAngle={isCenter ? 8 : 6} scale={1.03}>
                <PhoneFrame screen={screen} />
              </Tilt>

              {/* Label below phone */}
              <div className="text-center" style={{ marginTop: isCenter ? 0 : -16 }}>
                <p className="text-white/65 text-md font-bold tracking-[0.14em] uppercase">
                  {screen.label}
                </p>
                <p className="text-white/30 text-sm mt-0.5">{screen.caption}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ── Ambient glow under phones ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '180px',
          background:
            'radial-gradient(ellipse at center bottom, rgba(153,204,153,0.09) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}
