import { useState, useEffect, useRef } from 'react'
import './FAQ.scss'

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

  const faqs = [
    {
      question: "How quickly can I get started with POZO?",
      answer: "You can get started with POZO in under 5 minutes! Simply sign up for your free trial, and our setup wizard will guide you through the initial configuration. Most businesses are up and running within the same day."
    },
    {
      question: "Is my data secure with POZO?",
      answer: "Absolutely! We use enterprise-grade security with 256-bit SSL encryption, regular security audits, and comply with industry standards including GDPR and SOC 2. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee."
    },
    {
      question: "Can POZO integrate with my existing tools?",
      answer: "Yes! POZO integrates with over 100+ popular business tools including accounting software, CRM systems, payment processors, and more. We also provide API access for custom integrations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 chat support, email support, phone support for premium plans, extensive documentation, video tutorials, and dedicated account managers for enterprise customers."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. We also offer a 30-day money-back guarantee if you're not completely satisfied with POZO."
    },
    {
      question: "Do you offer training for my team?",
      answer: "Absolutely! We provide comprehensive onboarding, live training sessions, recorded tutorials, and ongoing support to ensure your team gets the most out of POZO. Enterprise customers get dedicated training sessions."
    },
    {
      question: "How does pricing work?",
      answer: "Our pricing is transparent and scales with your business. We offer monthly and annual plans with significant savings on annual subscriptions. All plans include core features with advanced features available on higher tiers."
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes! POZO has native mobile apps for both iOS and Android, allowing you to manage your business operations on the go. The mobile app syncs seamlessly with the web platform."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className={`faq ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-subtitle">
            Got questions? We've got answers. Find everything you need to know about POZO.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="question-text">{faq.question}</span>
                  <div className="question-icon">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={activeIndex === index ? 'rotated' : ''}
                    >
                      <path 
                        d="M6 9l6 6 6-6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                
                <div className={`faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="help-card">
              <div className="help-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="help-content">
                <h3>Still have questions?</h3>
                <p>Our support team is here to help you 24/7</p>
                <button className="btn btn-primary">
                  <span>Contact Support</span>
                </button>
              </div>
            </div>

            <div className="resource-links">
              <h4>Helpful Resources</h4>
              <ul>
                <li>
                  <a href="#docs">
                    <span>📚</span>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#tutorials">
                    <span>🎥</span>
                    Video Tutorials
                  </a>
                </li>
                <li>
                  <a href="#community">
                    <span>👥</span>
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#webinars">
                    <span>🎓</span>
                    Live Webinars
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
