/**
 * React Bits — SplitText
 * Splits text into words and animates each word sliding up on mount.
 * Built with motion/react (motion.dev).
 */
import { motion } from 'motion/react'

export default function SplitText({
  children,
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = 0.7,
}) {
  const words = String(children).split(' ')

  return (
    <span className={`inline ${className}`} aria-label={children}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block pr-[0.22em]"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
