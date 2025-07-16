import { useState, useEffect, useRef } from 'react'
import './CustomerStories.scss'

const CustomerStories = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStory, setActiveStory] = useState(0)
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const stories = [
    {
      company: 'TechFlow Solutions',
      industry: 'Software Development',
      logo: '💻',
      testimonial: 'POZO transformed our project management completely. We reduced delivery time by 40% and improved client satisfaction dramatically.',
      author: 'Sarah Chen',
      position: 'CTO',
      metrics: {
        improvement: '40%',
        metric: 'Faster Delivery'
      },
      color: '#6366f1'
    },
    {
      company: 'GreenLeaf Restaurants',
      industry: 'Food & Beverage',
      logo: '🍃',
      testimonial: 'The restaurant management features helped us streamline operations across 15 locations. Order accuracy improved by 95%.',
      author: 'Marcus Rodriguez',
      position: 'Operations Director',
      metrics: {
        improvement: '95%',
        metric: 'Order Accuracy'
      },
      color: '#10b981'
    },
    {
      company: 'MediCare Plus',
      industry: 'Healthcare',
      logo: '🏥',
      testimonial: 'Patient management became effortless. We now handle 3x more appointments with the same staff and zero scheduling conflicts.',
      author: 'Dr. Emily Watson',
      position: 'Chief Medical Officer',
      metrics: {
        improvement: '3x',
        metric: 'More Appointments'
      },
      color: '#06b6d4'
    },
    {
      company: 'RetailMax Chain',
      industry: 'Retail',
      logo: '🛍️',
      testimonial: 'Inventory management across 50 stores is now seamless. We reduced stockouts by 80% and increased revenue by 25%.',
      author: 'James Thompson',
      position: 'VP Operations',
      metrics: {
        improvement: '25%',
        metric: 'Revenue Growth'
      },
      color: '#8b5cf6'
    }
  ]

  return (
    <section className={`customer-stories ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Real Success Stories from <span className="highlight">Real Businesses</span>
          </h2>
          <p className="section-subtitle">
            See how companies like yours are transforming their operations with POZO
          </p>
        </div>

        <div className="stories-container">
          <div className="story-navigation">
            {stories.map((story, index) => (
              <button
                key={index}
                className={`story-nav-item ${activeStory === index ? 'active' : ''}`}
                onClick={() => setActiveStory(index)}
                style={{ '--accent-color': story.color }}
              >
                <div className="company-logo" style={{ backgroundColor: story.color }}>
                  <span>{story.logo}</span>
                </div>
                <div className="company-info">
                  <h4>{story.company}</h4>
                  <p>{story.industry}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="story-content">
            <div className="story-card" style={{ '--accent-color': stories[activeStory].color }}>
              <div className="story-header">
                <div className="company-badge">
                  <div className="company-logo-large" style={{ backgroundColor: stories[activeStory].color }}>
                    <span>{stories[activeStory].logo}</span>
                  </div>
                  <div className="company-details">
                    <h3>{stories[activeStory].company}</h3>
                    <p>{stories[activeStory].industry}</p>
                  </div>
                </div>
                <div className="metrics-badge">
                  <div className="metric-value">{stories[activeStory].metrics.improvement}</div>
                  <div className="metric-label">{stories[activeStory].metrics.metric}</div>
                </div>
              </div>

              <blockquote className="testimonial">
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                  </svg>
                </div>
                <p>{stories[activeStory].testimonial}</p>
              </blockquote>

              <div className="author-info">
                <div className="author-avatar">
                  <span>{stories[activeStory].author.charAt(0)}</span>
                </div>
                <div className="author-details">
                  <h4>{stories[activeStory].author}</h4>
                  <p>{stories[activeStory].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Write Your Success Story?</h3>
            <p>Join thousands of businesses already transforming with POZO</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <span>Start Free Trial</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-outline">
                <span>View All Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
