/**
 * React Bits — CountUp
 * Animated number counter triggered when element enters viewport.
 * Built with motion/react (motion.dev).
 */
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

export default function CountUp({
  from = 0,
  to,
  suffix = '',
  duration = 2,
  className = '',
}) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      // Ease-out quartic
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
