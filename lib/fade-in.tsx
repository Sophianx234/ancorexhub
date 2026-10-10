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
        filter: "blur(10px)", // The "Premium" Blur Effect
        scale: 0.95           // Never animate from 0 or just position, slight scale adds depth
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: "blur(0px)",
        scale: 1
      } : {}}
      transition={{
        duration: 0.7, // Slightly faster for snappier feeling
        delay: delay,
        ease: [0.23, 1, 0.32, 1] // Strong ease-out from Emil's design engineering rules
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}