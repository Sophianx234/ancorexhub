'use client'

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface StatCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function StatCounter({ target, suffix = "", duration = 2, className = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth physical deceleration curve
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {count}
      {suffix}
    </span>
  );
}

export default StatCounter;
