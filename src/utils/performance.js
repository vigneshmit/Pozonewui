// Performance optimization utilities

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for resize events
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Check if device prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Check if device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768
}

// Check if device is low-end (based on hardware concurrency)
export const isLowEndDevice = () => {
  return navigator.hardwareConcurrency <= 2
}

// Optimize animations based on device capabilities
export const getOptimizedAnimationConfig = () => {
  const isLowEnd = isLowEndDevice()
  const mobile = isMobile()
  const reducedMotion = prefersReducedMotion()

  return {
    enableParticles: !isLowEnd && !mobile && !reducedMotion,
    enableComplexAnimations: !isLowEnd && !reducedMotion,
    animationDuration: reducedMotion ? 0 : (isLowEnd ? 0.3 : 0.6),
    particleCount: isLowEnd ? 3 : mobile ? 5 : 8,
    enableBlur: !isLowEnd && !mobile,
    enableGradientAnimations: !isLowEnd && !reducedMotion
  }
}

// Lazy load images
export const lazyLoadImage = (img, src) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.src = src
        img.classList.add('loaded')
        observer.unobserve(img)
      }
    })
  })
  observer.observe(img)
}

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link')
  fontLink.rel = 'preload'
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
  fontLink.as = 'style'
  document.head.appendChild(fontLink)
}

// Memory cleanup for components
export const cleanupComponent = (timers = [], observers = []) => {
  timers.forEach(timer => clearTimeout(timer))
  observers.forEach(observer => observer.disconnect())
}

// Optimize scroll performance
export const optimizeScroll = () => {
  let ticking = false
  
  const updateScrollPosition = () => {
    // Update scroll-dependent elements
    ticking = false
  }
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
    }
  }
  
  return requestTick
}

// Check if element is in viewport (faster than IntersectionObserver for simple checks)
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Batch DOM updates
export const batchDOMUpdates = (updates) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update())
  })
}

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now()
  const result = fn()
  const end = performance.now()
  console.log(`${name} took ${end - start} milliseconds`)
  return result
}

export default {
  debounce,
  throttle,
  prefersReducedMotion,
  isMobile,
  isLowEndDevice,
  getOptimizedAnimationConfig,
  lazyLoadImage,
  preloadCriticalResources,
  cleanupComponent,
  optimizeScroll,
  isInViewport,
  batchDOMUpdates,
  measurePerformance
}
