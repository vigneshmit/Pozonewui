import { useState, useEffect, useRef } from 'react'
import './CallToAction.scss'

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Setup in 60 seconds',
      color: '#f59e0b'
    },
    {
      icon: '💰',
      title: 'Save 40% Costs',
      description: 'Guaranteed ROI in 30 days',
      color: '#10b981'
    },
    {
      icon: '🚀',
      title: '10X Growth',
      description: 'Scale without limits',
      color: '#7c3aed'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: '99.99% uptime guarantee',
      color: '#06b6d4'
    }
  ]

  return (
    <section className={`call-to-action ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <div className="cta-header">
            <h2 className="cta-title">
              🚀 Ready to <span className="highlight">10X Your Business</span> Growth?
            </h2>
            <p className="cta-subtitle">
              Join <strong>100,000+ successful businesses</strong> already using POZO to
              <span className="highlight-text">automate everything</span>,
              <span className="highlight-text">cut costs by 40%</span>, and
              <span className="highlight-text">scale like never before!</span>
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  '--accent-color': benefit.color
                }}
              >
                <div className="benefit-icon">
                  <span>{benefit.icon}</span>
                </div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-actions">
            <div className="primary-cta">
              <button className="btn btn-primary btn-large cta-primary-btn">
                <span className="btn-text">🚀 START FREE TRIAL NOW</span>
                <span className="btn-subtext">No credit card • Instant access</span>
                <div className="btn-glow"></div>
              </button>
              <p className="cta-note">⚡ <strong>Join 100K+ businesses</strong> • Setup in 60 seconds</p>
            </div>

            <div className="secondary-cta">
              <button className="btn btn-outline btn-large cta-secondary-btn">
                <span className="btn-icon">🎥</span>
                <span className="btn-text">WATCH LIVE DEMO</span>
                <span className="btn-subtext">See results in 2 minutes</span>
              </button>
              <p className="cta-note">💡 <strong>See 10X growth</strong> • Real customer results</p>
            </div>
          </div>

          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>30-Day Money-Back Guarantee</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span>Setup Support Included</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span>24/7 Customer Support</span>
            </div>
          </div>

          <div className="urgency-banner">
            <div className="urgency-content">
              <div className="urgency-icon">⚡</div>
              <div className="urgency-text">
                <strong>Limited Time:</strong> Get 2 months free with annual plans. Offer ends soon!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="cta-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
