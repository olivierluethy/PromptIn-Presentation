"use client"

import { useEffect, useRef } from "react"
import { trackScrollDepth } from "@/lib/analytics"

export function ScrollTracker() {
  const trackedDepths = useRef<Set<number>>(new Set())
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      const depths = [25, 50, 75, 100]
      
      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackScrollDepth(depth)
          trackedDepths.current.add(depth)
        }
      })
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return null
}
