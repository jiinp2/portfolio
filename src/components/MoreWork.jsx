import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./MoreWork.css";

function MoreWork({ currentProjectSlug, onClose }) {
  const navigate = useNavigate();

  // Filter out current project and get other case studies, limit to 3
  const otherProjects = projects
    .filter((project) => project.slug !== currentProjectSlug)
    .slice(0, 3);

  const handleProjectClick = (projectIndex) => {
    const project = projects[projectIndex];
    // Close current case study and navigate to new one
    if (onClose) {
      onClose();
    }
    navigate(`/${project.slug}`);
  };

  return (
    <section className="more-work-section">
      <div className="more-work-content">
        <h2 className="more-work-title">More Work</h2>
        <div className="more-work-grid">
          {otherProjects.map((project) => {
            const projectIndex = projects.findIndex(
              (p) => p.slug === project.slug
            );
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projectIndex}
                isSelected={false}
                onClick={handleProjectClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MoreWork;
