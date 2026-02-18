'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function PopIn({ 
  children, 
  className = "", 
  delay = 0 
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: 0.9,       // Start slightly smaller (not too small)
        y: 50,            // Start further down
        filter: "blur(10px)" // The "Fast Motion" blur effect
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        filter: "blur(0px)" 
      } : {}}
      transition={{
        type: "spring",
        stiffness: 400,   // Snappy tension (feels fast)
        damping: 25,      // Controlled settle (feels heavy)
        mass: 1.2,        // Adds weight to the object
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}