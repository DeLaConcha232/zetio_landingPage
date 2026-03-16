/**
 * React Bits — Tilt
 * 3D perspective tilt on mouse-move. Perfect for device/product mockups.
 * Rests back to flat on mouse-leave with a smooth spring-like transition.
 */
import { useRef } from 'react'

export default function Tilt({
  children,
  className = '',
  tiltMaxAngle = 10,
  perspective = 1100,
  scale = 1.03,
}) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    // Normalize to -0.5 … 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(${perspective}px) rotateX(${-y * tiltMaxAngle * 2}deg) rotateY(${x * tiltMaxAngle * 2}deg) scale3d(${scale},${scale},${scale})`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (el) {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.45s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
