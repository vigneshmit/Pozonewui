import { useState, useEffect, lazy, Suspense } from 'react'
import { preloadCriticalResources, getOptimizedAnimationConfig } from './utils/performance'
import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import PerformanceMonitor from './components/PerformanceMonitor'
import ThemeToggle from './components/ThemeToggle'
import ScrollToTop from './components/ScrollToTop'

// Lazy load components for better performance
const TrustMetrics = lazy(() => import('./components/TrustMetrics'))
const Offerings = lazy(() => import('./components/Offerings'))
const IndustrySolutions = lazy(() => import('./components/IndustrySolutions'))
const Values = lazy(() => import('./components/Values'))
const Features = lazy(() => import('./components/Features'))
const CustomerStories = lazy(() => import('./components/CustomerStories'))
const CallToAction = lazy(() => import('./components/CallToAction'))
const FAQ = lazy(() => import('./components/FAQ'))
const VideoSection = lazy(() => import('./components/VideoSection'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload critical resources for better performance
    preloadCriticalResources()

    // Get optimized animation config based on device
    const animConfig = getOptimizedAnimationConfig()
    document.documentElement.style.setProperty('--animation-duration', `${animConfig.animationDuration}s`)

    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <PerformanceMonitor />  
      <Header />
      <Hero />  
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <TrustMetrics />
        <Offerings />
        <IndustrySolutions />
        <Values />
        <Features />
        <CustomerStories />
        {/* <Pricing /> */}
        <CallToAction />
        <FAQ />
        <VideoSection />
        <Footer />
      </Suspense>
      <ThemeToggle />
      <ScrollToTop />
    </div>
  )
}

export default App
