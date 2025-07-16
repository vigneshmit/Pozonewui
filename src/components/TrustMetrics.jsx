import { useState, useEffect, useCallback } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import './TrustMetrics.scss'

const TrustMetrics = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 })
  const [counts, setCounts] = useState({
    businesses: 0,
    years: 0,
    accuracy: 0,
    countries: 0
  })

  const finalCounts = {
    businesses: 100000,
    years: 14,
    accuracy: 99.9,
    countries: 25
  }

  const animateCounters = useCallback(() => {
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        businesses: Math.floor(finalCounts.businesses * progress),
        years: Math.floor(finalCounts.years * progress),
        accuracy: Math.floor(finalCounts.accuracy * progress * 10) / 10,
        countries: Math.floor(finalCounts.countries * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepTime)
  }, [finalCounts])

  useEffect(() => {
    if (isVisible) {
      animateCounters()
    }
  }, [isVisible, animateCounters])

  const metrics = [
    {
      icon: '🚀',
      count: counts.businesses.toLocaleString(),
      suffix: '+',
      label: 'Businesses Powered',
      description: 'Growing rapidly',
      color: '#7c3aed'
    },
    {
      icon: '⚡',
      count: counts.years,
      suffix: '+',
      label: 'Years of Innovation',
      description: 'Cutting-edge tech',
      color: '#06b6d4'
    },
    {
      icon: '🎯',
      count: counts.accuracy,
      suffix: '%',
      label: 'Success Rate',
      description: 'Proven results',
      color: '#f59e0b'
    },
    {
      icon: '🌟',
      count: counts.countries,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global impact',
      color: '#ef4444'
    }
  ]

  return (
    <section className={`trust-metrics ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            🌟 Trusted by <span className="highlight">Industry Leaders</span> Worldwide
          </h2>
          <p className="section-subtitle">
            Join the innovation revolution! See why forward-thinking businesses choose POZO for cutting-edge solutions and exceptional results
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                '--accent-color': metric.color
              }}
            >
              <div className="metric-icon">
                <span>{metric.icon}</span>
              </div>
              <div className="metric-content">
                <div className="metric-number">
                  <span className="count">{metric.count}</span>
                  <span className="suffix">{metric.suffix}</span>
                </div>
                <h3 className="metric-label">{metric.label}</h3>
                <p className="metric-description">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-badges">
          <div className="badge">
            <span className="badge-icon">🔒</span>
            <span>Enterprise Security</span>
          </div>
          <div className="badge">
            <span className="badge-icon">☁️</span>
            <span>Cloud Powered</span>
          </div>
          <div className="badge">
            <span className="badge-icon">📱</span>
            <span>Mobile Ready</span>
          </div>
          <div className="badge">
            <span className="badge-icon">🤖</span>
            <span>AI Enhanced</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustMetrics
