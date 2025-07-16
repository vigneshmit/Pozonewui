import { useState, useEffect } from 'react'
import './Header.scss'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-shape"></div>
              <div className="logo-shape"></div>
              <div className="logo-shape"></div>
            </div>
            <span className="logo-text">POZO</span>
          </div>

          {/* Navigation */}
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#industries" className="nav-link">INDUSTRIES</a>
              </li>
              <li className="nav-item">
                <a href="#offerings" className="nav-link">OFFERINGS</a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
              </li>
            </ul>
          </nav>

          {/* Action buttons */}
          <div className="header-actions">
            <a href="#store" className="btn btn-secondary">POZO STORE</a>
            <a href="#signin" className="btn btn-primary">SIGN IN</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
