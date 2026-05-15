import { useState, useEffect, useRef } from "react";

const CASE_STUDY_SCROLL_ROOT_SELECTOR = ".case-study-content";

const TOC_INTERSECTION_ROOT_MARGIN = "-20% 0px -60% 0px";
const TOC_INTERSECTION_THRESHOLDS = [
  0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
];

const SCROLL_STOP_POLL_INTERVAL_MS = 100;
/** Clears programmatic-scroll guard even if polling never sees a stationary frame. */
const SCROLL_GUARD_RELEASE_AFTER_MS = 2000;

function findStrongestIntersectingEntry(entries) {
  let highestRatio = 0;
  let best = null;
  for (const entry of entries) {
    if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
      highestRatio = entry.intersectionRatio;
      best = entry;
    }
  }
  return best;
}

function TableOfContents({ sections, sectionRefs }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const tocListRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const contentRoot = document.querySelector(CASE_STUDY_SCROLL_ROOT_SELECTOR);
    if (!contentRoot) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) {
        return;
      }

      const best = findStrongestIntersectingEntry(entries);
      if (best) {
        setActiveSection(best.target.id);
      }
    }, {
      root: contentRoot,
      rootMargin: TOC_INTERSECTION_ROOT_MARGIN,
      threshold: TOC_INTERSECTION_THRESHOLDS,
    });

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  useEffect(() => {
    if (!tocListRef.current || !indicatorRef.current) {
      return;
    }

    const updateIndicatorPosition = () => {
      const activeButton = tocListRef.current.querySelector(
        `button[data-section-id="${activeSection}"]`,
      );
      if (activeButton && indicatorRef.current) {
        const buttonRect = activeButton.getBoundingClientRect();
        const navRect =
          indicatorRef.current.parentElement.getBoundingClientRect();
        const top = buttonRect.top - navRect.top + buttonRect.height / 2;
        setIndicatorStyle({ top: `${top}px` });
      }
    };

    const frameId = requestAnimationFrame(updateIndicatorPosition);
    return () => cancelAnimationFrame(frameId);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const target = sectionRefs.current[sectionId];
    if (!target) {
      return;
    }

    isScrollingRef.current = true;
    setActiveSection(sectionId);

    const scrollRoot = document.querySelector(CASE_STUDY_SCROLL_ROOT_SELECTOR);
    if (!scrollRoot) {
      return;
    }

    let lastScrollTop = scrollRoot.scrollTop;
    let pollIntervalId = null;

    const pollForScrollStopped = () => {
      const currentScrollTop = scrollRoot.scrollTop;
      if (Math.abs(currentScrollTop - lastScrollTop) < 1) {
        isScrollingRef.current = false;
        if (pollIntervalId !== null) {
          clearInterval(pollIntervalId);
          pollIntervalId = null;
        }
      } else {
        lastScrollTop = currentScrollTop;
      }
    };

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    pollIntervalId = setInterval(
      pollForScrollStopped,
      SCROLL_STOP_POLL_INTERVAL_MS,
    );

    setTimeout(() => {
      isScrollingRef.current = false;
      if (pollIntervalId !== null) {
        clearInterval(pollIntervalId);
      }
    }, SCROLL_GUARD_RELEASE_AFTER_MS);
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
