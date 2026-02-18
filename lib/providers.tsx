'use client'

import { ReactLenis } from 'lenis/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1,         // Friction: Lower = Smoother/Heavier feel
        duration: 1.2,     // Duration: Higher = Longer slide
        syncTouch: true,   // ✅ REPLACEMENT for smoothTouch (enables smooth scroll on mobile)
        syncTouchLerp: 0.1 // Vital for mobile parity
      }}
    >
      {children}
    </ReactLenis>
  )
}