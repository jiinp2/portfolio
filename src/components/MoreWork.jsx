import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function MoreWork({ currentProjectSlug, onClose }) {
  const navigate = useNavigate();
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  const otherProjects = useMemo(
    () =>
      projects.filter(({ slug }) => slug !== currentProjectSlug),
    [currentProjectSlug],
  );

  const marqueeProjects = useMemo(
    () => [...otherProjects, ...otherProjects],
    [otherProjects],
  );

  const handleProjectClick = (projectIndex) => {
    const project = projects[projectIndex];
    if (onClose) {
      onClose();
    }
    navigate(`/${project.slug}`);
  };

  return (
    <section className="mt-20 pt-20 border-t border-border w-full max-md:mt-16 max-md:pt-16">
      <div className="w-full p-0">
        <h3 className="w-full text-left text-base font-semibold text-text m-0 mb-4 tracking-tight leading-tight">
          More Work
        </h3>
        <div
          className="more-work-marquee max-md:-mx-4 max-md:px-4"
          data-paused={isTouchPaused ? "true" : "false"}
          onTouchStart={() => setIsTouchPaused(true)}
          onTouchEnd={() => setIsTouchPaused(false)}
          onTouchCancel={() => setIsTouchPaused(false)}
        >
          <div className="more-work-marquee-track">
            {marqueeProjects.map((project, idx) => {
              const projectIndex = projects.findIndex(
                (p) => p.slug === project.slug,
              );
              return (
                <div
                  key={`${project.slug}-${idx}`}
                  className="more-work-marquee-item"
                  aria-hidden={idx >= otherProjects.length}
                >
                  <ProjectCard
                    project={project}
                    index={projectIndex}
                    isSelected={false}
                    onClick={handleProjectClick}
                    useShortDescription
                    isMoreWork
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreWork;
