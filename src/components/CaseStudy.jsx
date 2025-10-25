import './CaseStudy.css'

function CaseStudy({ project, onClose }) {
  return (
    <div className="case-study-overlay">
      <div className="case-study-content">
        <button className="back-button" onClick={onClose}>
          ← Back
        </button>
        <h1 className="case-study-title">{project.name}</h1>
        <div className="case-study-body">
          <p>Case study content goes here...</p>
          <p>This is where the detailed project information, process, and results would be displayed.</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
