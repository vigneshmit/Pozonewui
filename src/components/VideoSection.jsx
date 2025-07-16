import { useState, useEffect, useRef } from 'react'
import './VideoSection.scss'

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
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

  const handlePlayClick = () => {
    setIsPlaying(true)
    // In a real app, you would trigger video playback here
    setTimeout(() => setIsPlaying(false), 3000) // Demo: reset after 3 seconds
  }

  return (
    <section ref={sectionRef} className="video-section section">
      <div className="video-background">
        <div className="background-gradient"></div>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className={`video-content ${isVisible ? 'visible' : ''}`}>
          <div className="video-header">
            <h2 className="video-title">What's Pozo ? How Does it Work</h2>
            <p className="video-subtitle">
              Discover how POZO transforms your business operations with AI-powered automation 
              and intelligent workflows in just a few minutes.
            </p>
          </div>
          
          <div className="video-player">
            <div className={`video-thumbnail ${isPlaying ? 'playing' : ''}`}>
              <div className="thumbnail-overlay">
                <button 
                  className={`play-button ${isPlaying ? 'playing' : ''}`}
                  onClick={handlePlayClick}
                  aria-label="Play video"
                >
                  <div className="play-icon">
                    {isPlaying ? (
                      <div className="loading-spinner">
                        <div className="spinner"></div>
                      </div>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                  <div className="play-ripple"></div>
                </button>
                
                <div className="video-info">
                  <div className="video-duration">3:45</div>
                  <div className="video-quality">HD</div>
                </div>
              </div>
              
              <div className="thumbnail-image">
                <div className="mock-video-content">
                  <div className="video-frame">
                    <div className="frame-header">
                      <div className="frame-title">POZO Platform Demo</div>
                      <div className="frame-controls">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="frame-content">
                      <div className="demo-dashboard">
                        <div className="dashboard-sidebar">
                          <div className="sidebar-item active">Dashboard</div>
                          <div className="sidebar-item">Analytics</div>
                          <div className="sidebar-item">Automation</div>
                          <div className="sidebar-item">Reports</div>
                        </div>
                        <div className="dashboard-main">
                          <div className="main-header">
                            <h3>Welcome to POZO</h3>
                            <div className="header-stats">
                              <div className="stat">
                                <div className="stat-value">98%</div>
                                <div className="stat-label">Efficiency</div>
                              </div>
                              <div className="stat">
                                <div className="stat-value">$2.4M</div>
                                <div className="stat-label">Saved</div>
                              </div>
                            </div>
                          </div>
                          <div className="main-chart">
                            <div className="chart-bars">
                              {[...Array(6)].map((_, i) => (
                                <div key={i} className={`chart-bar bar-${i + 1}`}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="video-features">
              <div className="feature-tag">
                <span className="tag-icon">⚡</span>
                <span className="tag-text">Quick Setup</span>
              </div>
              <div className="feature-tag">
                <span className="tag-icon">🎯</span>
                <span className="tag-text">Easy to Use</span>
              </div>
              <div className="feature-tag">
                <span className="tag-icon">🚀</span>
                <span className="tag-text">Powerful Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
