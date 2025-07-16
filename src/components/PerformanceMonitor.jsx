import { useEffect } from 'react'
import { getOptimizedAnimationConfig } from '../utils/performance'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime)
        })
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      new PerformanceObserver((entryList) => {
        let clsValue = 0
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log('CLS:', clsValue)
      }).observe({ entryTypes: ['layout-shift'] })
    }

    // Apply performance optimizations based on device
    const applyOptimizations = () => {
      const config = getOptimizedAnimationConfig()
      
      // Disable animations for low-end devices
      if (!config.enableComplexAnimations) {
        document.documentElement.style.setProperty('--animation-duration', '0s')
      }
      
      // Reduce particles for mobile
      if (!config.enableParticles) {
        const particles = document.querySelectorAll('.floating-particle, .particle')
        particles.forEach(particle => {
          particle.style.display = 'none'
        })
      }
      
      // Disable blur effects for low-end devices
      if (!config.enableBlur) {
        document.documentElement.style.setProperty('--blur-amount', '0px')
      }
    }

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = performance.memory
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        })
      }
    }

    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      observeWebVitals()
      applyOptimizations()
      
      // Monitor memory every 30 seconds in development
      if (process.env.NODE_ENV === 'development') {
        const memoryInterval = setInterval(monitorMemory, 30000)
        return () => clearInterval(memoryInterval)
      }
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor
