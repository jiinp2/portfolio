import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import "./ProjectCarousel.css";

function ProjectCarousel({
  projects,
  onProjectClick,
  scrollContainerRef: externalRef,
}) {
  const internalRef = useRef(null);
  const scrollContainerRef = externalRef || internalRef;
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const hasMovedRef = useRef(false);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [projects]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth =
      container.querySelector(".project-card-wrapper")?.offsetWidth || 300;
    const scrollAmount = cardWidth + 32; // card width + gap
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    // Don't start drag if clicking on a button or link
    if (e.target.closest("button") || e.target.closest("a")) return;

    setIsDragging(true);
    hasMovedRef.current = false;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
    // Temporarily disable pointer events on cards to prevent clicks
    const cards = scrollContainerRef.current.querySelectorAll(
      ".project-card-wrapper"
    );
    cards.forEach((card) => {
      card.style.pointerEvents = "none";
    });
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    hasMovedRef.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "";
      // Re-enable pointer events on cards
      const cards = scrollContainerRef.current.querySelectorAll(
        ".project-card-wrapper"
      );
      cards.forEach((card) => {
        card.style.pointerEvents = "";
      });
    }
  };

  const handleMouseUp = (e) => {
    const wasDragging = hasMovedRef.current;
    setIsDragging(false);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "";
      // Re-enable pointer events on cards after a short delay if we dragged
      const cards = scrollContainerRef.current.querySelectorAll(
        ".project-card-wrapper"
      );
      if (wasDragging) {
        // Keep pointer events disabled briefly to prevent click
        setTimeout(() => {
          cards.forEach((card) => {
            card.style.pointerEvents = "";
          });
          hasMovedRef.current = false;
        }, 100);
      } else {
        cards.forEach((card) => {
          card.style.pointerEvents = "";
        });
        hasMovedRef.current = false;
      }
    }
  };

  const handleClick = (e) => {
    // Prevent card click if we just dragged
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  };

  const handleCardClick = (index) => {
    // Only call onProjectClick if we didn't drag
    if (!hasMovedRef.current) {
      onProjectClick(index);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    const moved = Math.abs(walk) > 5; // Threshold to distinguish drag from click
    if (moved) {
      hasMovedRef.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="project-carousel">
      {!externalRef && (
        <>
          <button
            className={`carousel-button carousel-button-left ${
              !canScrollLeft ? "disabled" : ""
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className={`carousel-button carousel-button-right ${
              !canScrollRight ? "disabled" : ""
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      <div
        className="carousel-container"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <div className="carousel-track">
          {projects.map((project, index) => {
            const projectIndex = projects.findIndex(
              (p) => p.slug === project.slug
            );
            return (
              <div
                key={projectIndex}
                className="carousel-item"
                onClick={(e) => {
                  if (hasMovedRef.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                  }
                }}
              >
                <ProjectCard
                  project={project}
                  index={projectIndex}
                  isSelected={false}
                  onClick={handleCardClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
