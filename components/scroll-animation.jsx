'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ScrollAnimation({ 
  children, 
  className, 
  threshold = 0.1,
  duration = 500,
  delay = 0,
  direction = 'up'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  useEffect(() => {
    if (!ref.current) return
    
    const el = ref.current
    
    if (isInView) {
      el.style.transform = 'translateY(0) translateX(0)'
      el.style.opacity = '1'
    }
  }, [isInView])

  // Set initial state based on direction
  const initialStyles = {
    opacity: 0,
    transform: 
      direction === 'up' ? 'translateY(50px)' :
      direction === 'down' ? 'translateY(-50px)' :
      direction === 'left' ? 'translateX(50px)' :
      direction === 'right' ? 'translateX(-50px)' : '',
    transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`
  }

  return (
    <div
      ref={ref}
      style={initialStyles}
      className={cn(className)}
    >
      {children}
    </div>
  )
}