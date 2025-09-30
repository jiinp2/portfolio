import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        {/* Left - Name/Logo */}
        <div className="logo-section">
          <Link to="/" className="logo">
            Jiin Park
          </Link>
        </div>

        {/* Middle - Pill Navigation */}
        <nav className="pill-nav">
          <Link 
            to="/" 
            className={`pill-nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Work
          </Link>
          <Link 
            to="/aside" 
            className={`pill-nav-link ${location.pathname === '/aside' ? 'active' : ''}`}
          >
            Aside
          </Link>
          <Link 
            to="/about" 
            className={`pill-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </nav>

        {/* Right - Resume Button */}
        <div className="resume-section">
          <a 
            href="/JiinPark_Resume_Portfolio.pdf" 
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
