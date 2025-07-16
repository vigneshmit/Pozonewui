import { useState, useEffect } from 'react'
import './Hero.scss'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
            <div className="hero-badge">
              <span>SIMPLE • POZO • SMART • SECURE</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Transform Your Business</span>
              <span className="title-line highlight">with AI-Powered Innovation</span>
              <span className="title-accent">🚀 The Future is Now</span>
            </h1>

            <p className="hero-subtitle">
              <span className="subtitle-item">⚡ Lightning Fast</span>
              <span className="subtitle-item">🤖 AI-Powered</span>
              <span className="subtitle-item">💰 Cost Effective</span>
            </p>

            <p className="hero-description">
              Join <strong>100,000+ businesses</strong> already using POZO to
              <span className="highlight-text">automate operations</span>,
              <span className="highlight-text">reduce costs by 40%</span>, and
              <span className="highlight-text">scale effortlessly</span>.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary btn-large hero-cta-primary">
                <span className="btn-text">🚀 START FREE TRIAL</span>
                <span className="btn-subtext">No credit card required</span>
                <div className="btn-glow"></div>
              </button>

              <button className="btn btn-glass btn-large hero-cta-secondary">
                <span className="btn-icon">▶️</span>
                <span className="btn-text">WATCH DEMO</span>
                <span className="btn-subtext">2 min overview</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
            <div className="visual-container">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="chart-area">
                    <div className="chart-bars">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className={`chart-bar bar-${i + 1}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-value">$24.5K</div>
                      <div className="stat-label">Revenue</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">1,247</div>
                      <div className="stat-label">Users</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">89%</div>
                      <div className="stat-label">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <div className="card-icon">📊</div>
                  <div className="card-text">Analytics</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🤖</div>
                  <div className="card-text">AI Powered</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">⚡</div>
                  <div className="card-text">Fast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
