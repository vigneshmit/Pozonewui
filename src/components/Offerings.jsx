import { useState, useEffect, useRef } from 'react'
import './Offerings.scss'

const Offerings = () => {
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

  const offerings = [
    {
      icon: '💼',
      title: 'Business Process Management',
      description: 'Streamline your business processes with our intelligent automation platform that adapts to your workflow needs.',
      features: ['Process Automation', 'Workflow Design', 'Performance Analytics']
    },
    {
      icon: '📊',
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced analytics and AI-powered recommendations.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
    },
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge AI technology to automate complex tasks and improve operational efficiency.',
      features: ['Smart Automation', 'Machine Learning', 'Natural Language Processing']
    }
  ]

  return (
    <section ref={sectionRef} className="offerings section" id="offerings">
      <div className="container">
        <div className={`offerings-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">POZO Offerings</h2>
          <p className="section-subtitle">
            We're focused on these three key areas where our AI-powered platform can make the biggest impact
          </p>
        </div>

        <div className={`offerings-grid ${isVisible ? 'visible' : ''}`}>
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="offering-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <span>{offering.icon}</span>
                </div>
                <h3 className="card-title">{offering.title}</h3>
              </div>
              
              <p className="card-description">{offering.description}</p>
              
              <ul className="card-features">
                {offering.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="card-button">
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
