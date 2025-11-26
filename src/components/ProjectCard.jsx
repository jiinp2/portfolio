import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

function ProjectCard({ project, index, isSelected, onClick }) {
  return (
    <div className="project-card-wrapper" onClick={() => onClick(index)}>
      <div className={`project-card ${isSelected ? "selected" : ""}`}>
        <div className="project-preview" data-slug={project.slug}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="preview-image"
            />
          ) : (
            <div className="preview-placeholder">
              <span className="preview-icon">📄</span>
            </div>
          )}
        </div>
      </div>
      <div className="project-info">
        <div className="project-title-wrapper">
          <h3 className="project-title">
            {project.name}
            {project.url && (
              <ExternalLink className="external-link-icon" size={14} />
            )}
          </h3>
          <p className="project-date">{project.date}</p>
        </div>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
