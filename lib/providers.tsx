'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

function SmoothScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        // If clicking # or #top, scroll to the very top smoothly
        if (href === '#' || href === '#top' || href === '#!') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.2 });
          return;
        }

        try {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            // Offset -80 ensures section titles are not hidden beneath the fixed 80px navbar
            lenis.scrollTo(element as HTMLElement, { offset: -80, duration: 1.2 });
          }
        } catch {
          // If invalid selector, fallback to default behavior
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [lenis]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1,         // Friction: Lower = Smoother/Heavier feel
        duration: 1.2,     // Duration: Higher = Longer slide
        syncTouch: true,   // Enables smooth scroll on mobile
        syncTouchLerp: 0.1 // Mobile parity
      }}
    >
      <SmoothScrollHandler />
      {children}
    </ReactLenis>
  )
}