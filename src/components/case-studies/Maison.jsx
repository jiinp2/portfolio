import { useState, useEffect, useRef } from "react";
import "./Maison.css";

function Maison({ onClose }) {
  const [activeSection, setActiveSection] = useState("overview");
  const sectionRefs = useRef({});
  const tocListRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The Challenge" },
    { id: "solution", label: "The Solution" },
    { id: "role", label: "My Role" },
    { id: "approach", label: "Approach" },
    { id: "features", label: "Key Features" },
    { id: "impact", label: "Impact & Results" },
    { id: "takeaways", label: "Takeaways" },
  ];

  // Intersection Observer for tracking active section
  useEffect(() => {
    const contentElement = document.querySelector(".case-study-content");
    if (!contentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
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
  }, []);

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
      setActiveSection(sectionId);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="case-study-overlay maison-case-study">
      <div className="case-study-layout">
        {/* Left Column - Back Button */}
        <div className="case-study-left">
          <button className="back-button sticky" onClick={onClose}>
            <span className="back-arrow">←</span> Back
          </button>
        </div>

        {/* Middle Column - Main Content */}
        <div className="case-study-content">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="case-study-title">Maison</h1>
            <p className="case-study-subtitle">
              Professional networking and community platform for real estate
              professionals and brokerages.
            </p>
          </div>

          {/* Project Info Bar */}
          <div className="project-info-bar">
            <div className="info-item">
              <h3>Timeline</h3>
              <p>Ongoing</p>
            </div>
            <div className="info-item">
              <h3>My Role</h3>
              <p>Product Development, Brand Strategy, Content Strategy</p>
            </div>
            <div className="info-item">
              <h3>Platform Type</h3>
              <p>B2B SaaS</p>
            </div>
          </div>

          {/* Overview Section */}
          <section
            id="overview"
            ref={(el) => (sectionRefs.current.overview = el)}
            className="case-study-section"
          >
            <h2>Overview</h2>

            <div className="subsection">
              <p>
                Maison is a professional networking and community platform
                designed specifically for the real estate industry. The platform
                addresses the fragmented communication challenges that real
                estate professionals face by providing a unified space for
                networking, collaboration, and community management.
              </p>
            </div>
          </section>

          {/* The Challenge Section */}
          <section
            id="challenge"
            ref={(el) => (sectionRefs.current.challenge = el)}
            className="case-study-section"
          >
            <h2>The Challenge</h2>

            <div className="subsection">
              <p>
                Real estate professionals and brokerages were struggling with
                scattered communication across multiple platforms. WhatsApp
                groups, Facebook communities, and email threads made it
                difficult to maintain organized conversations, share files
                efficiently, and build meaningful professional connections.
                Brokerages lacked purpose-built tools to manage internal
                communication and foster team cohesion.
              </p>

              <div className="subsection">
                <h3>Key Problems Identified:</h3>
                <ul className="takeaways-list">
                  <li>
                    Fragmented communication across consumer apps not designed
                    for professional use
                  </li>
                  <li>
                    Difficulty discovering and connecting with industry peers
                  </li>
                  <li>
                    No centralized professional directory for real estate
                    professionals
                  </li>
                  <li>Poor file sharing and organization capabilities</li>
                  <li>
                    Lack of dedicated community management tools for brokerages
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Solution Section */}
          <section
            id="solution"
            ref={(el) => (sectionRefs.current.solution = el)}
            className="case-study-section"
          >
            <h2>The Solution</h2>

            <div className="subsection">
              <p>
                Maison provides a dual-focused platform that serves both
                individual real estate professionals and enterprise brokerages:
              </p>

              <div className="subsection">
                <h3>For Individual Professionals:</h3>
                <ul className="takeaways-list">
                  <li>Professional networking and peer connections</li>
                  <li>Visibility in an industry-specific directory</li>
                  <li>
                    Purpose-built community features for real estate workflows
                  </li>
                </ul>
              </div>

              <div className="subsection">
                <h3>For Enterprise Brokerages:</h3>
                <ul className="takeaways-list">
                  <li>Internal communication and team management tools</li>
                  <li>
                    Private community spaces replacing scattered Facebook groups
                    and WhatsApp channels
                  </li>
                  <li>Streamlined file sharing and collaboration</li>
                  <li>Team directory and organizational structure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* My Role Section */}
          <section
            id="role"
            ref={(el) => (sectionRefs.current.role = el)}
            className="case-study-section"
          >
            <h2>My Role</h2>

            <div className="subsection">
              <p>
                As part of the Maison team, I contributed to building the
                platform and establishing the brand identity:
              </p>

              <ul className="takeaways-list">
                <li>
                  <strong>Product Development:</strong> Helped shape the
                  platform's features and user experience around real
                  estate-specific needs
                </li>
                <li>
                  <strong>Brand Strategy:</strong> Developed positioning that
                  clearly differentiates Maison in the professional networking
                  space
                </li>
                <li>
                  <strong>Content & Messaging:</strong> Crafted website copy and
                  value propositions for both individual and enterprise
                  audiences
                </li>
                <li>
                  <strong>Information Architecture:</strong> Designed sitemap
                  and content strategy for the B2B SaaS website
                </li>
              </ul>
            </div>
          </section>

          {/* Approach Section */}
          <section
            id="approach"
            ref={(el) => (sectionRefs.current.approach = el)}
            className="case-study-section"
          >
            <h2>Approach</h2>

            <div className="subsection">
              <h3>1. Understanding the Market</h3>
              <p>
                Researched the unique communication patterns and pain points of
                real estate professionals, identifying the gap between generic
                tools (Slack, Discord) and industry-specific needs.
              </p>
            </div>

            <div className="subsection">
              <h3>2. Dual Product Strategy</h3>
              <p>
                Developed a platform that serves both individual professionals
                seeking networking opportunities and enterprise brokerages
                needing internal communication solutions—creating a flywheel
                effect where both audiences strengthen the platform.
              </p>
            </div>

            <div className="subsection">
              <h3>3. Brand Positioning</h3>
              <p>
                Positioned Maison as "Slack for workplace + Discord for gamers =
                Maison for real estate professionals." This clear, relatable
                positioning immediately communicates the platform's value.
              </p>
            </div>

            <div className="subsection">
              <h3>4. Enterprise Focus</h3>
              <p>
                Prioritized enterprise SaaS features to drive business growth
                while maintaining an approachable platform for individual
                professionals.
              </p>
            </div>
          </section>

          {/* Key Features Section */}
          <section
            id="features"
            ref={(el) => (sectionRefs.current.features = el)}
            className="case-study-section"
          >
            <h2>Key Features Developed</h2>

            <div className="subsection">
              <ul className="takeaways-list">
                <li>Professional directory and discovery</li>
                <li>Secure, organized community spaces</li>
                <li>File sharing and collaboration tools</li>
                <li>Real estate-specific workflows and integrations</li>
                <li>Private brokerage team management</li>
                <li>Industry networking capabilities</li>
              </ul>
            </div>
          </section>

          {/* Impact & Results Section */}
          <section
            id="impact"
            ref={(el) => (sectionRefs.current.impact = el)}
            className="case-study-section"
          >
            <h2>Impact & Results</h2>

            <div className="subsection">
              <h3>Product Impact:</h3>
              <ul className="takeaways-list">
                <li>
                  Created a unified communication solution specifically designed
                  for real estate industry workflows
                </li>
                <li>Eliminated the need for multiple disconnected platforms</li>
                <li>
                  Provided brokerages with dedicated community management
                  capabilities
                </li>
              </ul>
            </div>

            <div className="subsection">
              <h3>Market Position:</h3>
              <ul className="takeaways-list">
                <li>
                  Established clear differentiation in the professional networking
                  space
                </li>
                <li>
                  Positioned as the go-to platform for real estate professionals
                </li>
                <li>
                  Built a product that addresses both individual and enterprise
                  needs
                </li>
              </ul>
            </div>
          </section>

          {/* Takeaways Section */}
          <section
            id="takeaways"
            ref={(el) => (sectionRefs.current.takeaways = el)}
            className="case-study-section"
          >
            <h2>Takeaways</h2>

            <div className="subsection">
              <h3>Industry-Specific Solutions Matter</h3>
              <p>
                Generic communication tools don't address the unique workflows
                and needs of specialized industries. Building for a specific
                vertical creates stronger product-market fit.
              </p>
            </div>

            <div className="subsection">
              <h3>Dual Audience Strategy</h3>
              <p>
                Serving both individual professionals and enterprises creates
                network effects. Professionals want to be where their peers are,
                and brokerages benefit from their teams being on a platform with
                broader industry connections.
              </p>
            </div>

            <div className="subsection">
              <h3>Clear Positioning is Critical</h3>
              <p>
                In a crowded market of communication tools, having a sharp,
                memorable positioning statement helped Maison stand out and
                communicate its unique value.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column - Table of Contents */}
        <div className="case-study-right">
          <nav className="table-of-contents">
            <ul className="toc-list" ref={tocListRef}>
              {tocSections.map((section) => (
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
      </div>
    </div>
  );
}

export default Maison;

