import './Work.css'

function Work() {
  return (
    <div className="work">
      <div className="work-container">
        {/* Hero Section */}
        <section className="work-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-greeting">Hi! 👋</h1>
              <p className="hero-description">
                Currently at <strong>Maison</strong> designing + coding a community platform for realtors.
              </p>
            </div>
          </div>
        </section>

        {/* Project Showcases */}
        <section className="project-showcases">
          <div className="project-showcase">
            <div className="project-info">
              <div className="project-header">
                <h2 className="project-title">
                  Rabbu Portfolio
                  <span className="lock-icon">🔒</span>
                </h2>
                <p className="project-meta">DRIP DESIGN / 2022 - 2023</p>
                <p className="project-description">
                  A platform where investors can find and evaluate profitable investment properties.
                </p>
              </div>
            </div>
            <div className="project-visual">
              <div className="project-placeholder">
                <span className="placeholder-text">Project Mockup</span>
              </div>
            </div>
          </div>

          <div className="project-showcase">
            <div className="project-info">
              <div className="project-header">
                <h2 className="project-title">
                  Investment Analytics
                  <span className="lock-icon">🔒</span>
                </h2>
                <p className="project-meta">FREELANCE / 2023 - 2024</p>
                <p className="project-description">
                  Advanced analytics dashboard for real estate investment tracking and performance monitoring.
                </p>
              </div>
            </div>
            <div className="project-visual">
              <div className="project-placeholder">
                <span className="placeholder-text">Project Mockup</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work
