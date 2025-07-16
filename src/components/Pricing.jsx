import { useState, useEffect, useRef } from 'react'
import './Pricing.scss'

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
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

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 5 users',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        '10GB storage',
        'Standard integrations'
      ],
      popular: false,
      color: '#6366f1'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        '100GB storage',
        'API access',
        'Advanced integrations',
        'Multi-location support'
      ],
      popular: true,
      color: '#8b5cf6'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited users',
        'Custom reporting',
        '24/7 phone support',
        'Dedicated account manager',
        'Unlimited storage',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      color: '#06b6d4'
    }
  ]

  const getPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12
    const annualCost = plan.annualPrice
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100)
  }

  return (
    <section className={`pricing ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Simple, <span className="highlight">Transparent Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>

          <div className="billing-toggle">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`toggle-switch ${isAnnual ? 'annual' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
              Annual
              <span className="savings-badge">Save up to 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ 
                '--accent-color': plan.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-pricing">
                <div className="price-display">
                  <span className="currency">$</span>
                  <span className="amount">{getPrice(plan)}</span>
                  <span className="period">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && (
                  <div className="savings-info">
                    Save {getSavings(plan)}% annually
                  </div>
                )}
              </div>

              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <div className="feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`plan-cta ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <div className="guarantee-section">
            <div className="guarantee-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="guarantee-content">
              <h3>30-Day Money-Back Guarantee</h3>
              <p>Try POZO risk-free. If you're not completely satisfied, get a full refund within 30 days.</p>
            </div>
          </div>

          <div className="contact-sales">
            <h3>Need a custom solution?</h3>
            <p>Contact our sales team for enterprise pricing and custom features</p>
            <button className="btn btn-secondary">
              <span>Contact Sales</span>
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

export default Pricing
