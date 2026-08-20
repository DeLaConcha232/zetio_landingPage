import { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import Pill from '../bits/Pill'

const STEP_VH = 46
const PIN_VH = 86

/**
 * CSS-only iPhone bezel used for the mock screens (Tour, which has no real
 * screenshots yet). Real screens (Play/Coach) render their own <img> full-bleed
 * instead — see `raw` steps below.
 */
export function PhoneShell({ tag, children }) {
  return (
    <div
      className="mx-auto w-full h-full rounded-[44px] relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        border: '8px solid #0a0a0a',
        boxShadow: '0 50px 100px -30px rgba(0,0,0,.6), inset 0 0 0 1.5px rgba(255,255,255,.08)',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[34%] h-5.5 bg-[#0a0a0a] rounded-b-2xl z-10" />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex items-center gap-2 px-5 pt-8.5 pb-3.5" style={{ background: '#a8dca6', color: '#08170c' }}>
          <span className="font-bold text-[13px]">zetio</span>
          <span className="font-medium text-[13px] opacity-70">{tag}</span>
        </div>
        <div className="flex-1 p-4 overflow-hidden text-white/90" style={{ background: '#121712' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function StoryDivider() {
  return (
    <div aria-hidden="true" className="flex items-center max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex-1 h-px bg-white/7" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary mx-4 shrink-0" />
      <div className="flex-1 h-px bg-white/7" />
    </div>
  )
}

/**
 * Generic scrollytelling module: a sticky-pinned phone + caption pair that
 * cross-fades between `steps` as the section scrolls past. Driven by
 * motion/react's useScroll (scroll-linked progress) instead of a manual
 * rAF + getBoundingClientRect loop.
 */
export default function StoryModule({ id, eyebrow, title, titleAccent, steps }) {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const raw = Math.min(0.999, Math.max(0, v)) * steps.length
    const idx = Math.min(steps.length - 1, Math.floor(raw))
    setActive((prev) => (prev === idx ? prev : idx))
  })

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative mt-6"
      style={{ height: `calc(${steps.length * STEP_VH}vh + ${PIN_VH}vh)` }}
    >
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-0 w-1/2 h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(22,194,79,0.10), transparent 70%)' }}
      />

      <div
        className="sticky top-0 flex flex-col justify-center gap-5 sm:gap-9 max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28"
        style={{ height: `${PIN_VH}vh` }}
      >
        <div className="text-center shrink-0 relative">
          <Pill tone="ghost" size="sm">{eyebrow}</Pill>
          <h2
            className="font-extrabold text-white mx-auto mt-3 sm:mt-4 max-w-lg"
            style={{ fontSize: 'clamp(1.4rem, 3.6vw, 2.6rem)', letterSpacing: '-0.03em' }}
          >
            {title}{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary-light), var(--color-primary))' }}>
              {titleAccent}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[0.9fr_1fr] gap-4 sm:gap-14 items-center relative w-full max-w-3xl mx-auto shrink-0">
          <div
            className="relative mx-auto max-w-[190px] sm:max-w-[260px] lg:max-w-[300px] [--phone-h:clamp(170px,30vh,320px)] sm:[--phone-h:min(46vh,420px)] lg:[--phone-h:min(50vh,480px)]"
            style={{ height: 'var(--phone-h)', width: 'auto', aspectRatio: '9 / 19.5' }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: active === i ? 1 : 0 }}
              >
                {s.raw ? s.screen : <PhoneShell tag={eyebrow}>{s.screen}</PhoneShell>}
              </div>
            ))}
          </div>

          <div className="relative" style={{ minHeight: 140 }}>
            {steps.map((s, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 right-0 transition-all duration-500"
                style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'translateY(0)' : 'translateY(16px)' }}
              >
                <div className="font-bold text-xs text-primary mb-2 sm:mb-3" style={{ letterSpacing: '.14em' }}>
                  0{i + 1}/{steps.length}
                </div>
                <div className="font-bold text-lg sm:text-2xl text-white mb-1.5 sm:mb-2.5" style={{ letterSpacing: '-0.02em' }}>{s.label}</div>
                <div className="text-white/45 text-sm sm:text-[15px] leading-relaxed max-w-sm">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
