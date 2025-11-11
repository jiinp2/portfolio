import './ProjectCard.css'

function ProjectCard({ project, index, isSelected, onClick }) {
  return (
    <div className="project-card-wrapper" onClick={() => onClick(index)}>
      <div className={`project-card ${isSelected ? 'selected' : ''}`}>
        <div className="project-preview">
          <div className="preview-placeholder">
            <span className="preview-icon">📄</span>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-date">{project.date}</p>
      </div>
    </div>
  )
}

export default ProjectCard
