import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left - Name/Logo */}
        <div className="logo-section">
          <span className="logo">
            Jiin Park
          </span>
        </div>

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
