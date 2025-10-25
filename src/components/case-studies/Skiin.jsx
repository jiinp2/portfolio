import './Skiin.css'

function Skiin({ onClose }) {
  return (
    <div className="case-study-overlay">
      <div className="case-study-content">
        <button className="back-button" onClick={onClose}>
          ← Back
        </button>
        
        <div className="case-study-header">
          <h1 className="case-study-title">Skiin</h1>
          <p className="case-study-subtitle">Smart clothing technology platform</p>
        </div>

        <div className="case-study-body">
          <section className="case-study-section">
            <h2>Project Overview</h2>
            <p>A revolutionary smart clothing platform that integrates biometric sensors into everyday apparel. Designed to provide users with real-time health and wellness insights through comfortable, washable smart garments.</p>
          </section>

          <section className="case-study-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">IoT Sensors</span>
              <span className="tech-tag">Bluetooth</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Figma</span>
            </div>
          </section>

          <section className="case-study-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              <li>Real-time biometric monitoring</li>
              <li>Seamless mobile app integration</li>
              <li>Washable and durable smart textiles</li>
              <li>Personalized health insights</li>
              <li>Privacy-focused data handling</li>
            </ul>
          </section>

          <section className="case-study-section">
            <h2>Design Process</h2>
            <p>Collaborated closely with textile engineers and health professionals to create an interface that makes complex biometric data accessible and actionable. Focused on creating trust through transparent data visualization and user control.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Skiin
