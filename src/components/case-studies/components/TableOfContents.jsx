import { useState, useEffect, useRef } from "react";

function TableOfContents({ sections, sectionRefs }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const tocListRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const isScrollingRef = useRef(false);

  // Intersection Observer for tracking active section
  useEffect(() => {
    const contentElement = document.querySelector(".case-study-content");
    if (!contentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update active section while programmatically scrolling
        if (isScrollingRef.current) return;

        let maxRatio = 0;
        let activeEntry = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });

        if (activeEntry) {
          setActiveSection(activeEntry.target.id);
        }
      },
      {
        root: contentElement,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  // Update indicator position
  useEffect(() => {
    if (!tocListRef.current || !indicatorRef.current) return;

    const updateIndicator = () => {
      const activeButton = tocListRef.current.querySelector(
        `button[data-section-id="${activeSection}"]`
      );
      if (activeButton && indicatorRef.current) {
        const buttonRect = activeButton.getBoundingClientRect();
        const navRect =
          indicatorRef.current.parentElement.getBoundingClientRect();
        const top = buttonRect.top - navRect.top + buttonRect.height / 2;
        setIndicatorStyle({
          top: `${top}px`,
        });
      }
    };

    const rafId = requestAnimationFrame(() => {
      updateIndicator();
    });

    return () => cancelAnimationFrame(rafId);
  }, [activeSection]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      // Set flag to prevent intersection observer from updating during scroll
      isScrollingRef.current = true;
      setActiveSection(sectionId);

      const contentElement = document.querySelector(".case-study-content");
      if (!contentElement) return;

      let lastScrollTop = contentElement.scrollTop;
      let scrollEndTimer = null;

      const checkScrollEnd = () => {
        const currentScrollTop = contentElement.scrollTop;
        
        if (Math.abs(currentScrollTop - lastScrollTop) < 1) {
          // Scroll has stopped
          isScrollingRef.current = false;
          if (scrollEndTimer) {
            clearInterval(scrollEndTimer);
            scrollEndTimer = null;
          }
        } else {
          lastScrollTop = currentScrollTop;
        }
      };

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Check for scroll end every 100ms
      scrollEndTimer = setInterval(checkScrollEnd, 100);

      // Fallback: re-enable after a longer timeout (for very long scrolls)
      setTimeout(() => {
        isScrollingRef.current = false;
        if (scrollEndTimer) {
          clearInterval(scrollEndTimer);
        }
      }, 2000);
    }
  };

  return (
    <div className="case-study-right">
      <nav className="table-of-contents">
        <ul className="toc-list" ref={tocListRef}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                data-section-id={section.id}
                className={`toc-item ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className="toc-indicator"
          ref={indicatorRef}
          style={indicatorStyle}
        />
      </nav>
    </div>
  );
}

export default TableOfContents;

