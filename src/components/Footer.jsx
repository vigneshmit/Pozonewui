import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="background-pattern"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <div className="logo-shape"></div>
                  <div className="logo-shape"></div>
                  <div className="logo-shape"></div>
                </div>
                <span className="logo-text">POZO</span>
              </div>
              
              <p className="footer-description">
                Empowering businesses with AI-powered automation and intelligent workflows. 
                Transform your operations with POZO's comprehensive platform.
              </p>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">GET STARTED</h4>
                <ul className="link-list">
                  <li><a href="#signup" className="footer-link">Sign up</a></li>
                  <li><a href="#demo" className="footer-link">Get Demo</a></li>
                  <li><a href="#pricing" className="footer-link">Pricing</a></li>
                  <li><a href="#docs" className="footer-link">Documentation</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">COMPANY</h4>
                <ul className="link-list">
                  <li><a href="#about" className="footer-link">About Us</a></li>
                  <li><a href="#careers" className="footer-link">Careers</a></li>
                  <li><a href="#blog" className="footer-link">Blog</a></li>
                  <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4 className="link-title">RESOURCES</h4>
                <ul className="link-list">
                  <li><a href="#help" className="footer-link">Help Center</a></li>
                  <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#terms" className="footer-link">Terms of Service</a></li>
                  <li><a href="#security" className="footer-link">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-apps">
            <h4 className="apps-title">Download Our Apps</h4>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <div className="app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="app-text">
                  <div className="app-store">Download on the</div>
                  <div className="app-name">App Store</div>
                </div>
              </a>
              
              <a href="#" className="app-button">
                <div className="app-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.496 12l2.202-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="app-text">
                  <div className="app-store">Get it on</div>
                  <div className="app-name">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} POZO. All Rights Reserved.</p>
          </div>
          
          <div className="footer-contact">
            <a href="tel:+1234567890" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +1 234 567 890
            </a>
            
            <a href="mailto:hello@pozo.com" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              hello@pozo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
