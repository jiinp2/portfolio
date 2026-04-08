import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function MoreWork({ currentProjectSlug, onClose }) {
  const navigate = useNavigate();
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeoutRef = useRef(null);

  // Filter out current project and show all others
  const otherProjects = useMemo(
    () => projects.filter((project) => project.slug !== currentProjectSlug),
    [currentProjectSlug]
  );

  // Duplicate list for seamless marquee loop
  const marqueeProjects = useMemo(
    () => [...otherProjects, ...otherProjects],
    [otherProjects]
  );

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        window.clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const pauseForUserInteraction = () => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) {
      window.clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = window.setTimeout(() => {
      setIsUserInteracting(false);
    }, 2500);
  };

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
        <div
          className="more-work-marquee max-md:-mx-4 max-md:px-4"
          data-paused={isUserInteracting ? "true" : "false"}
          onPointerDown={pauseForUserInteraction}
          onTouchStart={pauseForUserInteraction}
          onWheel={pauseForUserInteraction}
        >
          <div className="more-work-marquee-track [&_.group:hover_img]:transform-none">
            {marqueeProjects.map((project, idx) => {
            const projectIndex = projects.findIndex(
              (p) => p.slug === project.slug
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
