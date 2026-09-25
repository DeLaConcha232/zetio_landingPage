import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import Pill from '../bits/Pill'

const PANEL_VH = 90
const PIN_VH = 86
const STEP_MS = 2800

/**
 * CSS-only iPhone bezel for step screens without a real screenshot yet.
 * Real screens render their own <img> full-bleed instead — see `raw` steps below.
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

/** Segmented "Stories"-style progress bar for the active panel's steps. */
function StepProgress({ count, activeStep }) {
  return (
    <div className="flex gap-1.5 mb-5 sm:mb-6" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex-1 h-[3px] rounded-full bg-white/10 overflow-hidden">
          {i < activeStep && <div className="h-full w-full bg-primary rounded-full" />}
          {i === activeStep && (
            <div
              className="h-full bg-primary rounded-full"
              style={{ animation: `story-progress-fill ${STEP_MS}ms linear forwards` }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function StoryPanel({ eyebrow, title, titleAccent, steps, activeStep }) {
  const step = steps[activeStep]
  return (
    <div className="h-full flex flex-col justify-center gap-5 sm:gap-9 px-4 sm:px-6 pt-20 sm:pt-28">
      <div className="text-center shrink-0 relative max-w-5xl mx-auto w-full">
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
        <motion.div
          key={`screen-${activeStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative mx-auto max-w-[320px] sm:max-w-[390px] lg:max-w-[460px] [--phone-h:clamp(270px,50vh,520px)] sm:[--phone-h:min(60vh,560px)] lg:[--phone-h:min(64vh,680px)]"
          style={{ height: 'var(--phone-h)', width: 'auto', aspectRatio: '9 / 19.5' }}
        >
          {step.raw ? step.screen : <PhoneShell tag={eyebrow}>{step.screen}</PhoneShell>}
        </motion.div>

        <div className="relative" style={{ minHeight: 140 }}>
          <StepProgress count={steps.length} activeStep={activeStep} />
          <motion.div
            key={`caption-${activeStep}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="font-bold text-lg sm:text-2xl text-white mb-1.5 sm:mb-2.5" style={{ letterSpacing: '-0.02em' }}>{step.label}</div>
            <div className="text-white/45 text-sm sm:text-[15px] leading-relaxed max-w-sm">{step.body}</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/**
 * Combined scrollytelling section: Play / Coach / Tour live as panels in one
 * pinned viewport. Vertical page scroll drives a continuous horizontal slide
 * between panels (same scrollYProgress-driven approach as before, just on the
 * X axis). Within the active panel, its steps auto-advance on a timer with a
 * Stories-style progress bar instead of depending on further scroll.
 */
export default function StorySection({ stories }) {
  const sectionRef = useRef(null)
  const [activePanel, setActivePanel] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  const sectionHeightVh = stories.length * PANEL_VH + PIN_VH

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${((stories.length - 1) / stories.length) * 100}%`])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const p = Math.min(1, Math.max(0, v))
    const idx = Math.min(stories.length - 1, Math.max(0, Math.round(p * (stories.length - 1))))
    setActivePanel((prev) => (prev === idx ? prev : idx))
  })

  useEffect(() => {
    setActiveStep(0)
    const steps = stories[activePanel].steps
    const timer = setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length)
    }, STEP_MS)
    return () => clearInterval(timer)
  }, [activePanel, stories])

  return (
    <section ref={sectionRef} className="relative mt-6" style={{ height: `calc(${sectionHeightVh}vh)` }}>
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-0 w-1/2 h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(22,194,79,0.10), transparent 70%)' }}
      />

      {/* Invisible anchor targets so existing #play/#coach/#tour links keep working */}
      {stories.map((story, i) => (
        <div
          key={story.id}
          id={story.id}
          aria-hidden="true"
          className="absolute left-0 w-full pointer-events-none"
          style={{ top: `calc(${i / (stories.length - 1)} * (${sectionHeightVh}vh - 100vh))` }}
        />
      ))}

      <div className="sticky top-0 overflow-hidden" style={{ height: `${PIN_VH}vh` }}>
        <motion.div className="flex h-full" style={{ width: `${stories.length * 100}%`, x }}>
          {stories.map((story, i) => (
            <div key={story.id} className="h-full shrink-0" style={{ width: `${100 / stories.length}%` }}>
              <StoryPanel
                eyebrow={story.eyebrow}
                title={story.title}
                titleAccent={story.titleAccent}
                steps={story.steps}
                activeStep={activePanel === i ? activeStep : 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
