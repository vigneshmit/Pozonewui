import { useState, useEffect, useRef } from 'react'
import './IndustrySolutions.scss'

const IndustrySolutions = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState(0)
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

  const industries = [
    {
      icon: '🏪',
      title: 'Retail & E-commerce',
      description: 'Complete POS, inventory management, and online store integration',
      features: ['Smart Inventory', 'Multi-channel Sales', 'Customer Analytics', 'Loyalty Programs'],
      color: '#6366f1'
    },
    {
      icon: '🍽️',
      title: 'Restaurant & Food',
      description: 'Kitchen management, order tracking, and delivery optimization',
      features: ['Order Management', 'Kitchen Display', 'Delivery Tracking', 'Menu Analytics'],
      color: '#8b5cf6'
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'Patient management, appointment scheduling, and billing',
      features: ['Patient Records', 'Appointment System', 'Billing & Insurance', 'Compliance'],
      color: '#06b6d4'
    },
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'Production planning, quality control, and supply chain management',
      features: ['Production Planning', 'Quality Control', 'Supply Chain', 'Asset Management'],
      color: '#10b981'
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Student management, course planning, and performance tracking',
      features: ['Student Portal', 'Course Management', 'Grade Tracking', 'Parent Communication'],
      color: '#f59e0b'
    },
    {
      icon: '💼',
      title: 'Professional Services',
      description: 'Project management, time tracking, and client billing',
      features: ['Project Tracking', 'Time Management', 'Client Portal', 'Invoice Generation'],
      color: '#ef4444'
    }
  ]

  return (
    <section className={`industry-solutions ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Tailored Solutions for <span className="highlight">Every Industry</span>
          </h2>
          <p className="section-subtitle">
            From retail to healthcare, our platform adapts to your specific business needs
          </p>
        </div>

        <div className="industries-container">
          <div className="industries-tabs">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`industry-tab ${activeIndustry === index ? 'active' : ''}`}
                onClick={() => setActiveIndustry(index)}
                style={{ '--accent-color': industry.color }}
              >
                <span className="tab-icon">{industry.icon}</span>
                <span className="tab-title">{industry.title}</span>
              </button>
            ))}
          </div>

          <div className="industry-content">
            <div className="content-card">
              <div className="card-header">
                <div className="industry-icon" style={{ backgroundColor: industries[activeIndustry].color }}>
                  <span>{industries[activeIndustry].icon}</span>
                </div>
                <div className="industry-info">
                  <h3 className="industry-title">{industries[activeIndustry].title}</h3>
                  <p className="industry-description">{industries[activeIndustry].description}</p>
                </div>
              </div>

              <div className="features-grid">
                {industries[activeIndustry].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="cta-section">
                <button className="btn btn-primary">
                  <span>Explore Solution</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn btn-secondary">
                  <span>Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-cta">
          <div className="cta-content">
            <h3>Don't see your industry?</h3>
            <p>Our platform is highly customizable and can be tailored to any business model</p>
            <button className="btn btn-outline">
              <span>Contact Our Experts</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySolutions
