import './Kobo.css'

function Kobo({ onClose }) {
  return (
    <div className="case-study-overlay">
      <div className="case-study-content">
        <button className="back-button" onClick={onClose}>
          ← Back
        </button>
        
        <div className="case-study-header">
          <h1 className="case-study-title">Kobo</h1>
          <p className="case-study-subtitle">Digital reading platform redesign</p>
        </div>

        <div className="case-study-body">
          <section className="case-study-section">
            <h2>Project Overview</h2>
            <p>A comprehensive redesign of the Kobo digital reading platform, focusing on improving user experience and accessibility for readers of all ages and technical abilities.</p>
          </section>

          <section className="case-study-section">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <span className="tech-tag">Figma</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">CSS Modules</span>
              <span className="tech-tag">Storybook</span>
            </div>
          </section>

          <section className="case-study-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              <li>Improved book discovery and recommendations</li>
              <li>Enhanced reading experience with better typography</li>
              <li>Accessibility improvements for screen readers</li>
              <li>Streamlined library management</li>
              <li>Cross-platform consistency</li>
            </ul>
          </section>

          <section className="case-study-section">
            <h2>Design Process</h2>
            <p>Conducted extensive user research with readers across different demographics to understand pain points in the current experience. Focused on creating a more intuitive interface that reduces cognitive load and makes reading more enjoyable.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Kobo
