/**
 * React Bits — GreenGlow
 * Ambient radial-gradient glow blobs used behind hero/CTA sections.
 */
export default function GreenGlow({ opacity = 0.55, className = '' }) {
  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <div
        className="absolute -top-[12%] left-[10%] w-[46%] h-[52%] rounded-full"
        style={{ background: 'radial-gradient(circle, #18d257 0%, rgba(24,210,87,0) 68%)', filter: 'blur(70px)', opacity }}
      />
      <div
        className="absolute -bottom-[16%] right-[6%] w-[42%] h-[48%] rounded-full"
        style={{ background: 'radial-gradient(circle, #0fae44 0%, rgba(15,174,68,0) 70%)', filter: 'blur(80px)', opacity: opacity * 0.85 }}
      />
      <div
        className="absolute top-[28%] right-[32%] w-[24%] h-[30%] rounded-full"
        style={{ background: 'radial-gradient(circle, #7df59a 0%, rgba(125,245,154,0) 70%)', filter: 'blur(55px)', opacity: opacity * 0.5 }}
      />
    </div>
  )
}
