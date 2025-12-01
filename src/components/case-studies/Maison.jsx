import { useRef } from "react";
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
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Maison({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The Challenge" },
    { id: "solution", label: "The Solution" },
    { id: "role", label: "My Role" },
    { id: "approach", label: "Design Approach" },
    { id: "impact", label: "Design Impact" },
    { id: "in-progress", label: "In Progress" },
  ];

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
              { label: "Role", value: "Founding Design Engineer" },
              {
                label: "Scope",
                value: "Product Design, Strategy, Frontend Development",
              },
              { label: "Platform", value: "Web & Mobile" },
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
                Maison is a professional networking and community platform for
                the real estate industry. I led the product design to create a
                dedicated space for industry networking while unifying
                fragmented communication tools into a purpose-built solution.
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

            <CaseStudySection title="Dual-Focused Platform">
              <p>
                We designed a dual-focused platform that serves both individual
                real estate professionals and enterprise brokerages, creating
                network effects where each audience strengthens the value for
                the other.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="For Individual Professionals"
              sideBySide={{
                image: {
                  src: "/case_studies/maison/profile.png",
                  alt: "Individual Professionals Solution",
                },
              }}
            >
              <p>
                Professional networking and peer connections, visibility in an
                industry-specific directory, and community building features.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="For Enterprise Brokerages"
              sideBySide={{
                image: {
                  src: "/case_studies/maison/community.png",
                  alt: "Enterprise Brokerages Solution",
                },
                reverse: true,
              }}
            >
              <p>
                Internal communication and team management tools, private
                community spaces replacing scattered Facebook groups and
                WhatsApp channels, streamlined file sharing and collaboration.
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
                I serve as the founding product designer & design engineer for
                Maison, working across the full spectrum of product development
                from initial concept to front-end implementation.
              </p>

              <ul className="takeaways-list">
                <li>
                  <strong>Product design and UX strategy</strong> for both
                  individual and enterprise experiences
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
              infoCardsLayout="info-cards-four"
              infoCards={[
                {
                  number: 1,
                  title: "Research & Discovery",
                  description:
                    "Conducted user research with real estate professionals to map workflows and identify pain points in their fragmented tool ecosystem.",
                },
                {
                  number: 2,
                  title: "Strategic Product Architecture",
                  description:
                    "Designed a dual-sided platform that creates value for both individual professionals and enterprise teams through network effects.",
                },
                {
                  number: 3,
                  title: "Brand & Positioning",
                  description:
                    "Positioned the product as 'Slack for workplace + Discord for gamers = Maison for real estate' to immediately communicate the vision.",
                },
                {
                  number: 4,
                  title: "Enterprise-First Design",
                  description:
                    "Balanced enterprise functionality with individual user approachability, designing for team scalability from day one.",
                },
              ]}
            >
              <p>
                Led end-to-end design from research to launch, balancing
                strategic product thinking with detailed UX and visual design
                execution.
              </p>
            </CaseStudySection>
          </section>

          {/* Design Impact Section */}
          <section
            id="impact"
            ref={(el) => (sectionRefs.current.impact = el)}
            className="case-study-section"
          >
            <Label>Design Impact</Label>

            <CaseStudySection
              title="What We Achieved"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  icon: <Sparkles size={20} />,
                  title: "User Experience",
                  description:
                    "Created an intuitive platform leveraging familiar mental models from Slack/Discord while addressing real estate-specific needs and supporting scalable feature development.",
                },
                {
                  icon: <TrendingUp size={20} />,
                  title: "Business Impact",
                  description:
                    "Established clear product differentiation in a crowded market through dual go-to-market strategy and platform architecture that drives network effects.",
                },
                {
                  icon: <Rocket size={20} />,
                  title: "Product Strategy",
                  description:
                    "Validated industry-specific platform approach versus generic tool adaptation, demonstrating value of purpose-built solutions and foundation for vertical expansion.",
                },
              ]}
              infoCardsLayout="info-cards-three"
            >
              <p>
                The design work created a differentiated platform in a crowded
                market, establishing a strong foundation for both user
                experience and business growth across individual and enterprise
                segments.
              </p>
            </CaseStudySection>
          </section>

          {/* In Progress Section */}
          <section
            id="in-progress"
            ref={(el) => (sectionRefs.current["in-progress"] = el)}
            className="case-study-section"
          >
            <Label>In Progress</Label>

            <CaseStudySection title="Current Status">
              <p>
                Maison is currently in the user testing phase. We're conducting
                structured interviews and usability sessions with real estate
                professionals across 8 key scenarios to validate design
                decisions and identify areas for improvement. This testing will
                inform final refinements before the platform launches to our
                target market.
              </p>
            </CaseStudySection>
          </section>

          {/* More Work Section */}
          <MoreWork currentProjectSlug={currentProjectSlug} onClose={onClose} />
        </div>

        {/* Right Column - Table of Contents */}
        <TableOfContents sections={tocSections} sectionRefs={sectionRefs} />
      </div>
    </div>
  );
}

export default Maison;
