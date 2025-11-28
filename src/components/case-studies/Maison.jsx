import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Search,
  Users,
  Folder,
  Building,
  Sparkles,
  TrendingUp,
  Rocket,
} from "lucide-react";
import InfoCard from "../ui/InfoCard";
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";

function Maison({ onClose, currentProjectSlug }) {
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
    { id: "approach", label: "Design Approach" },
    { id: "impact", label: "Design Impact" },
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
          <CaseStudyHero
            title="Maison"
            subtitle="Building Community Infrastructure for Real Estate Professionals"
            imageSrc="/case_studies/maison/maison-hero.png"
            imageAlt="Maison Hero"
            infoItems={[
              { label: "Team", value: "Maison" },
              {
                label: "Role",
                value: "UI & UX Design, Product Strategy, Frontend Development",
              },
              { label: "Timeline", value: "2025 (WIP)" },
            ]}
          />

          {/* Overview Section */}
          <section
            id="overview"
            ref={(el) => (sectionRefs.current.overview = el)}
            className="case-study-section"
          >
            <Label>Overview</Label>

            <CaseStudySection title="About Maison">
              <p>
                Maison is a professional networking and community platform
                designed specifically for the real estate industry. I led the
                product design and brand development for a platform that unifies
                fragmented communication tools into a purpose-built solution for
                real estate professionals and brokerages.
              </p>
            </CaseStudySection>
          </section>

          {/* The Challenge Section */}
          <section
            id="challenge"
            ref={(el) => (sectionRefs.current.challenge = el)}
            className="case-study-section"
          >
            <Label>The Challenge</Label>

            <CaseStudySection
              title="Communication Challenges"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  icon: <MessageSquare size={20} />,
                  title: "Fragmented communication",
                  description:
                    "Across consumer apps not designed for professional use",
                },
                {
                  icon: <Search size={20} />,
                  title: "Discovery barriers",
                  description:
                    "Preventing professionals from connecting with industry peers",
                },
                {
                  icon: <Users size={20} />,
                  title: "No centralized directory",
                  description: "For real estate professionals",
                },
                {
                  icon: <Folder size={20} />,
                  title: "Poor file management",
                  description:
                    "With inadequate sharing and organization capabilities",
                },
                {
                  icon: <Building size={20} />,
                  title: "Missing enterprise tools",
                  description: "For brokerage community management",
                },
              ]}
              infoCardsLayout="info-cards-three"
            >
              <p>
                Real estate professionals and brokerages were struggling with
                scattered communication across multiple platforms. WhatsApp
                groups, Facebook communities, and email threads made it
                difficult to maintain organized conversations, share files
                efficiently, and build meaningful professional connections.
                Brokerages lacked purpose-built tools to manage internal
                communication and foster team cohesion.
              </p>
            </CaseStudySection>
          </section>

          {/* The Solution Section */}
          <section
            id="solution"
            ref={(el) => (sectionRefs.current.solution = el)}
            className="case-study-section"
          >
            <Label>The Solution</Label>

            <CaseStudySection
              title="Dual-Focused Platform"
              infoCards={[
                {
                  image: "/case_studies/maison/individual-professionals.png",
                  imageAlt: "Individual Professionals Solution",
                  title: "For Individual Professionals",
                  description:
                    "Professional networking and peer connections, visibility in an industry-specific directory, and purpose-built community features for real estate workflows.",
                },
                {
                  image: "/case_studies/maison/enterprise-brokerages.png",
                  imageAlt: "Enterprise Brokerages Solution",
                  title: "For Enterprise Brokerages",
                  description:
                    "Internal communication and team management tools, private community spaces replacing scattered Facebook groups and WhatsApp channels, streamlined file sharing and collaboration, and team directory and organizational structure.",
                },
              ]}
            >
              <p>
                I designed a dual-focused platform that serves both individual
                real estate professionals and enterprise brokerages, creating
                network effects where each audience strengthens the value for
                the other.
              </p>
            </CaseStudySection>
          </section>

          {/* My Role Section */}
          <section
            id="role"
            ref={(el) => (sectionRefs.current.role = el)}
            className="case-study-section"
          >
            <Label>My Role</Label>

            <CaseStudySection title="My Contributions">
              <p>
                I served as the product designer and design engineer for Maison,
                working across the full spectrum of product development from
                initial concept to implementation.
              </p>

              <ul className="takeaways-list">
                <li>
                  <strong>Product design and UX strategy</strong> for both
                  individual and enterprise experiences
                </li>
                <li>
                  <strong>Design system development</strong> and component
                  architecture
                </li>
                <li>
                  <strong>Brand identity and visual design</strong>
                </li>
                <li>
                  <strong>Information architecture and user flows</strong>
                </li>
                <li>
                  <strong>Website design and content strategy</strong>
                </li>
                <li>
                  <strong>Cross-functional collaboration</strong> with
                  engineering and business teams
                </li>
              </ul>
            </CaseStudySection>
          </section>

          {/* Design Approach Section */}
          <section
            id="approach"
            ref={(el) => (sectionRefs.current.approach = el)}
            className="case-study-section"
          >
            <Label>Design Approach</Label>

            <CaseStudySection
              title="Design Methodology"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  number: 1,
                  title: "Research & Discovery",
                  description:
                    "Conducted user research with real estate professionals to understand their workflows and pain points. Mapped the fragmented tool landscape to identify opportunities for consolidation.",
                },
                {
                  number: 2,
                  title: "Strategic Product Architecture",
                  description:
                    "Designed a dual-sided platform strategy that serves both individual professionals and enterprise teams. Created a system where both audiences strengthen the platform's value through network effects.",
                },
                {
                  number: 3,
                  title: "Brand & Positioning",
                  description:
                    "Developed the brand identity and positioning strategy: 'Slack for workplace + Discord for gamers = Maison for real estate professionals.' This clear positioning helped stakeholders and users immediately understand the product vision.",
                },
                {
                  number: 4,
                  title: "Enterprise-First Design",
                  description:
                    "Prioritized enterprise features and workflows while maintaining an approachable experience for individual users. Designed for scalability and team management from the ground up.",
                },
              ]}
            />
          </section>

          {/* Design Impact Section */}
          <section
            id="impact"
            ref={(el) => (sectionRefs.current.impact = el)}
            className="case-study-section"
          >
            <Label>Design Impact</Label>

            <CaseStudySection
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  icon: <Sparkles size={20} />,
                  title: "User Experience",
                  description:
                    "Created an intuitive platform that feels familiar (leveraging mental models from Slack/Discord) while addressing real estate-specific needs. Designed for both power users (brokerages managing large teams) and casual users (individual professionals networking). Built a scalable design system that supports rapid feature development.",
                },
                {
                  icon: <TrendingUp size={20} />,
                  title: "Business Impact",
                  description:
                    "Established clear product differentiation in a crowded communication tools market. Enabled dual go-to-market strategy through thoughtful product architecture. Created a platform that drives network effects between individual and enterprise users.",
                },
                {
                  icon: <Rocket size={20} />,
                  title: "Product Strategy",
                  description:
                    "Validated industry-specific platform approach vs. generic tool adaptation. Demonstrated value of purpose-built solutions for vertical markets. Built foundation for expansion into adjacent real estate professional tools.",
                },
              ]}
              infoCardsLayout="info-cards-three"
            />
          </section>

          {/* More Work Section */}
          <MoreWork currentProjectSlug={currentProjectSlug} onClose={onClose} />
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
