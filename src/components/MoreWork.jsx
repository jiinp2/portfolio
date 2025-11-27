import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

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
    <section className="mt-20 pt-20 border-t border-gray-200 w-full max-md:mt-16 max-md:pt-16">
      <div className="w-full p-0">
        <h2 className="text-2xl font-semibold text-text m-0 mb-12 tracking-tight leading-tight text-left max-md:text-xl max-md:mb-8">More Work</h2>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-6 [&_.group:hover_img]:transform-none">
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
