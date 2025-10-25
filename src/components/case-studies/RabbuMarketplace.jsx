import './RabbuMarketplace.css'

function RabbuMarketplace({ onClose }) {
  return (
    <div className="case-study-overlay">
      <div className="case-study-content">
        <button className="back-button" onClick={onClose}>
          ← Back
        </button>
        
        <div className="case-study-header">
          <h1 className="case-study-title">Rabbu Marketplace</h1>
          <p className="case-study-subtitle">E-commerce platform for sustainable products</p>
        </div>

        <div className="case-study-body">
          <section className="case-study-section">
            <h2>Project Overview</h2>
            <p>A comprehensive e-commerce platform focused on sustainable and eco-friendly products. Designed to provide users with an intuitive shopping experience while promoting environmental consciousness.</p>
          </section>

          <section className="case-study-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Stripe</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </section>

          <section className="case-study-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              <li>Product catalog with filtering and search</li>
              <li>Secure payment processing</li>
              <li>User authentication and profiles</li>
              <li>Sustainability impact tracking</li>
              <li>Mobile-responsive design</li>
            </ul>
          </section>

          <section className="case-study-section">
            <h2>Design Process</h2>
            <p>Focused on creating a trustworthy and user-friendly interface that makes sustainable shopping accessible. The design emphasizes product imagery, clear sustainability information, and streamlined checkout process.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RabbuMarketplace
