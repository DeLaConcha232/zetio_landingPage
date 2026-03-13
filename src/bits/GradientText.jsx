/**
 * React Bits — GradientText
 * Text with an animated gradient shimmer effect.
 * Built with motion/react (motion.dev).
 */
import { motion } from 'motion/react'

export default function GradientText({ children, className = '', animate = true }) {
  return (
    <span
      className={`relative inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: animate
          ? 'var(--gradient-primary)'
          : 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
        backgroundSize: animate ? '200% auto' : '100% auto',
      }}
    >
      {animate ? (
        <motion.span
          className="absolute inset-0 bg-clip-text text-transparent"
          style={{
            backgroundImage: 'var(--gradient-primary)',
            backgroundSize: '200% auto',
          }}
          animate={{ backgroundPosition: ['0% center', '200% center'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          {children}
        </motion.span>
      ) : null}
      <span style={{ opacity: animate ? 0 : 1 }}>{children}</span>
      {!animate && children}
    </span>
  )
}
