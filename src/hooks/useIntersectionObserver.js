import { useState, useEffect, useRef } from 'react'

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef(null)

  const defaultOptions = {
    threshold: 0.3,
    rootMargin: '0px',
    triggerOnce: true,
    ...options
  }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If already triggered and triggerOnce is true, don't observe again
    if (hasTriggered && defaultOptions.triggerOnce) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setIsVisible(isIntersecting)
        
        if (isIntersecting && defaultOptions.triggerOnce) {
          setHasTriggered(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasTriggered, defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce])

  return [elementRef, isVisible]
}

export default useIntersectionObserver
