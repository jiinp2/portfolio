import './ProjectCard.css'

function ProjectCard({ project, index, isSelected, onClick }) {
  return (
    <div 
      className={`project-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(index)}
    >
      <h2 className="project-title">{project.name}</h2>
      <button className="case-study-button">Read Case Study</button>
    </div>
  )
}

export default ProjectCard
