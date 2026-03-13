/**
 * React Bits — BlurText
 * Text fades in while un-blurring, optionally sliding from a direction.
 * Built with motion/react (motion.dev).
 */
import { motion } from 'motion/react'

export default function BlurText({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const yMap = { up: 16, down: -16, none: 0 }
  const yFrom = yMap[direction] ?? 0

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ filter: 'blur(14px)', opacity: 0, y: yFrom }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.span>
  )
}
