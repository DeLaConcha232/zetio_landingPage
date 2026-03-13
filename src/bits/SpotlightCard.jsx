/**
 * React Bits — SpotlightCard
 * Card with a radial gradient spotlight that follows the mouse.
 * Built with motion/react (motion.dev).
 */
import { useRef, useState } from 'react'

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'var(--color-primary-spotlight)',
}) {
  const cardRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setOpacity(1)
  }

  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 40%)`,
          opacity,
        }}
      />
      {children}
    </div>
  )
}
