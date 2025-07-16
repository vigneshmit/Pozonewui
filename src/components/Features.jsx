import { useState, useEffect, useRef } from 'react'
import './Features.scss'

const Features = () => {
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

  const features = [
    {
      icon: '🎯',
      title: 'Strategic Planning',
      description: 'Advanced strategic planning tools for business growth'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Comprehensive analytics and reporting capabilities'
    },
    {
      icon: '🔄',
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation'
    },
    {
      icon: '💰',
      title: 'Financial Management',
      description: 'Complete financial oversight and management tools'
    },
    {
      icon: '📈',
      title: 'Performance Tracking',
      description: 'Real-time performance monitoring and optimization'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Enhanced collaboration tools for distributed teams'
    }
  ]

  return (
    <section ref={sectionRef} className="features section">
      <div className="container">
        <div className={`features-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            A comprehensive suite of tools designed to transform your business operations
          </p>
        </div>

        <div className={`features-grid ${isVisible ? 'visible' : ''}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
                <div className="icon-bg"></div>
              </div>
              
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              <div className="feature-hover-effect">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
