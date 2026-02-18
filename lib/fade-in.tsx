'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  fullWidth?: boolean
}

export default function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  fullWidth = false
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" }) // Triggers when 10% of element is visible

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        filter: "blur(10px)" // The "Premium" Blur Effect
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: "blur(0px)"
      } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom "Apple-like" easing curve
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}