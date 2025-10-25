import './ScrollIndicators.css'

function ScrollIndicators({ projects, activeProject, onProjectClick, isVisible = true }) {
  if (!isVisible) return null

  return (
    <div className="scroll-indicators">
      <div className="indicator-dots">
        {projects.map((project, index) => (
          <button 
            key={index}
            className={`indicator-dot ${activeProject === index ? 'active' : ''}`}
            onClick={() => onProjectClick(index)}
            aria-label={project.label}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollIndicators
