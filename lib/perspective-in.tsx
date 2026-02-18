'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  fullWidth?: boolean
}

export default function PerspectiveIn({ 
  children, 
  className = "", 
  delay = 0, 
  fullWidth = false 
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <div 
      ref={ref} 
      className={className}
      // CRITICAL: perspective creates the 3D depth
      style={{ perspective: "1000px", width: fullWidth ? "100%" : "auto" }}
    >
      <motion.div
        initial={{ 
          opacity: 0, 
          rotateX: 30, // Tilted back 30 degrees
          y: 60,       // Pushed down
          scale: 0.9   // Slightly smaller
        }}
        animate={isInView ? { 
          opacity: 1, 
          rotateX: 0,  // Stands up straight
          y: 0, 
          scale: 1 
        } : {}}
        transition={{
          type: "spring",
          stiffness: 200, // Slightly looser spring for a "heavy" feel
          damping: 20,    // No bouncing, just a solid "thud" into place
          mass: 1.2,      // Adds weight
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}