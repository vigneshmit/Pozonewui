import { useState, useEffect, useRef } from 'react'
import './Values.scss'

const Values = () => {
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

  return (
    <section ref={sectionRef} className="values section">
      <div className="values-background">
        <div className="background-pattern"></div>
      </div>
      
      <div className="container">
        <div className="values-content">
          <div className={`values-text ${isVisible ? 'visible' : ''}`}>
            <div className="values-badge">
              <span>VALUES OF</span>
            </div>
            
            <h2 className="values-title">POZO</h2>
            
            <p className="values-description">
              POZO brings software designed for billing processes by 
              providing comprehensive, all-in-one cloud integration 
              that streamlines your business operations.
            </p>
            
            <div className="values-features">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>Lightning Fast</h4>
                  <p>Process data at incredible speeds with our optimized infrastructure</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div className="feature-content">
                  <h4>Enterprise Security</h4>
                  <p>Bank-grade security with end-to-end encryption and compliance</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🌐</div>
                <div className="feature-content">
                  <h4>Global Scale</h4>
                  <p>Scalable infrastructure that grows with your business needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`values-visual ${isVisible ? 'visible' : ''}`}>
            <div className="software-mockup">
              <div className="mockup-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="window-title">POZO Dashboard</div>
                </div>
                
                <div className="window-content">
                  <div className="sidebar">
                    <div className="nav-item active">📊 Dashboard</div>
                    <div className="nav-item">💰 Billing</div>
                    <div className="nav-item">👥 Customers</div>
                    <div className="nav-item">📈 Analytics</div>
                    <div className="nav-item">⚙️ Settings</div>
                  </div>
                  
                  <div className="main-content">
                    <div className="content-header">
                      <h3>Revenue Overview</h3>
                      <div className="header-actions">
                        <button className="action-btn">Export</button>
                        <button className="action-btn primary">New Invoice</button>
                      </div>
                    </div>
                    
                    <div className="metrics-grid">
                      <div className="metric-card">
                        <div className="metric-value">$127.5K</div>
                        <div className="metric-label">Total Revenue</div>
                        <div className="metric-change positive">+12.5%</div>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">2,847</div>
                        <div className="metric-label">Active Users</div>
                        <div className="metric-change positive">+8.2%</div>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">94.2%</div>
                        <div className="metric-label">Success Rate</div>
                        <div className="metric-change positive">+2.1%</div>
                      </div>
                    </div>
                    
                    <div className="chart-container">
                      <div className="chart-header">
                        <h4>Monthly Performance</h4>
                      </div>
                      <div className="chart">
                        <div className="chart-line">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className={`chart-point point-${i + 1}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="floating-notifications">
                <div className="notification notification-1">
                  <div className="notification-icon">✅</div>
                  <div className="notification-text">Payment processed successfully</div>
                </div>
                <div className="notification notification-2">
                  <div className="notification-icon">📧</div>
                  <div className="notification-text">Invoice sent to client</div>
                </div>
                <div className="notification notification-3">
                  <div className="notification-icon">🎯</div>
                  <div className="notification-text">Goal achieved: 100% uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
