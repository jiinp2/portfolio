import { useRef } from "react";
import {
  MessageSquare,
  Search,
  Users,
  Folder,
  Building,
} from "lucide-react";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Maison({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  // Table of contents sections
  const tocSections = [
    { id: "context", label: "Context" },
    { id: "evolution", label: "The Evolution" },
    { id: "problem", label: "The Problem" },
    { id: "role", label: "My Role" },
    { id: "approach", label: "Design Approach" },
    { id: "challenges", label: "Current Design Challenges" },
    { id: "survived", label: "What Survived Every Pivot" },
    { id: "learned", label: "What I Learned" },
    { id: "next", label: "What's Next" },
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
              { label: "Role", value: "Founding Product Designer" },
              {
                label: "Scope",
                value: "Product Design, Strategy, Frontend Development",
              },
              { label: "Platform", value: "Web & Mobile" },
              { label: "Timeline", value: "2024–2026 (Work in Progress)" },
            ]}
          />

          {/* Context Section */}
          <section
            id="context"
            ref={(el) => (sectionRefs.current.context = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Context">
              <p>
                This documents an early-stage startup's journey toward
                product-market fit, including three strategic pivots based on
                user feedback. We're currently in user testing before launch.
              </p>
            </CaseStudySection>
          </section>

          {/* The Evolution Section */}
          <section
            id="evolution"
            ref={(el) => (sectionRefs.current.evolution = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="The Evolution"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  number: 1,
                  title: "Phase 1: Renovation Marketplace",
                  description:
                    "Early 2024. Initial hypothesis: real estate agents needed better ways to refer clients to renovation contractors. What we learned: We lacked domain expertise and underestimated the complexity of managing collaborative deals.",
                },
                {
                  number: 2,
                  title: "Phase 2: Professional Community",
                  description:
                    "Mid 2024–2025. Pivot: Real estate professionals needed tools for networking and collaboration. We built community spaces, directories, and messaging to replace fragmented WhatsApp groups and Facebook communities. What we learned: Too scattered. We were solving too many problems without a clear core value proposition.",
                },
                {
                  number: 3,
                  title: "Phase 3: Trust & Verification",
                  description:
                    "2026–Present. A team member worked with a friend's agent referral that went poorly. Despite the personal recommendation, there was no way to verify the agent's track record beforehand. Current direction: Build verified professional profiles with transaction history, licenses, and reviews—like Carfax for real estate agents. This extends to adjacent professionals: lawyers, photographers, stagers.",
                },
              ]}
            >
              <p>
                Three strategic pivots based on user feedback and market
                validation.
              </p>
            </CaseStudySection>
          </section>

          {/* The Problem Section */}
          <section
            id="problem"
            ref={(el) => (sectionRefs.current.problem = el)}
            className="case-study-section"
          >
            <CaseStudySection title="The Problem">
              <p>
                Real estate runs on word-of-mouth referrals, but there's no
                evidence-based system to verify an agent's trustworthiness before
                engaging. Professionals also struggle with scattered communication
                across multiple platforms.
              </p>
              <p>
                Core challenge: How do we build trust through verified
                information while creating space for professional networking?
              </p>
            </CaseStudySection>
          </section>

          {/* My Role Section */}
          <section
            id="role"
            ref={(el) => (sectionRefs.current.role = el)}
            className="case-study-section"
          >
            <CaseStudySection title="My Role">
              <p>
                Founding product designer working from
                concept to front-end implementation.
              </p>
              <ul className="takeaways-list">
                <li>Product design and UX strategy</li>
                <li>Brand identity and visual design</li>
                <li>Information architecture</li>
                <li>Frontend development (React)</li>
                <li>Cross-functional collaboration with engineering and business</li>
              </ul>
            </CaseStudySection>
          </section>

          {/* Design Approach Section */}
          <section
            id="approach"
            ref={(el) => (sectionRefs.current.approach = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Design Approach">
              <p>
                <strong>Research:</strong> Conducted ongoing interviews with 20+
                real estate professionals to validate direction and identify pain
                points.
              </p>
              <p>
                <strong>Architecture:</strong> Designed a dual-sided platform
                serving both individuals and enterprise brokerages. The
                architecture balances current verification needs with future
                community features.
              </p>
              <p>
                <strong>Rapid execution:</strong> Wireframe → high-fidelity →
                coded prototype within days. Built reusable React components to
                iterate quickly without formal design systems.
              </p>
              <p>
                <strong>Strategic contribution:</strong> Participated in product
                strategy decisions, including the recent pivot. I voice opinions
                when I disagree but trust the team's collective direction.
              </p>
            </CaseStudySection>
          </section>

          {/* Current Design Challenges Section */}
          <section
            id="challenges"
            ref={(el) => (sectionRefs.current.challenges = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="Current Design Challenges"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  title: "Verification infrastructure",
                  description:
                    "Designing profiles that surface verified credentials from MLS data and third-party APIs. Balancing data richness with privacy and determining which trust signals matter most.",
                },
                {
                  title: "Dual audiences",
                  description:
                    "Creating experiences for both professionals showcasing expertise and consumers researching agents. Different users need different information hierarchies.",
                },
                {
                  title: "Trust without overwhelm",
                  description:
                    "Finding the minimum viable information needed to build confidence.",
                },
              ]}
            >
              <p>Key design challenges I'm solving:</p>
            </CaseStudySection>
          </section>

          {/* What Survived Every Pivot Section */}
          <section
            id="survived"
            ref={(el) => (sectionRefs.current.survived = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="What Survived Every Pivot"
              accentColor="var(--color-maison)"
              infoCardsLayout="info-cards-four"
              infoCards={[
                {
                  title: "Clean, professional aesthetic",
                  description:
                    "Appropriate for the industry that values credibility and trustworthiness.",
                },
                {
                  title: "Core patterns",
                  description:
                    "Profiles, directory, and messaging have been foundational since the beginning.",
                },
                {
                  title: "Component reusability",
                  description:
                    "Allowing fast iteration without sacrificing quality.",
                },
                {
                  title: "User-first mindset",
                  description:
                    "Focus on real user needs over assumed solutions.",
                },
              ]}
            >
              <p>
                Through three strategic shifts, certain elements remained
                consistent:
              </p>
            </CaseStudySection>
          </section>

          {/* What I Learned Section */}
          <section
            id="learned"
            ref={(el) => (sectionRefs.current.learned = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="What I Learned"
              accentColor="var(--color-maison)"
              infoCardsLayout="info-cards-four"
              infoCards={[
                {
                  title: "Designing in ambiguity",
                  description:
                    "Stay attached to problems, not solutions. The UI changes constantly, but user needs remain.",
                },
                {
                  title: "Speed + quality",
                  description:
                    "Moving fast taught me to design for implementation. My coding background helps me work closely with engineers and think through constraints early.",
                },
                {
                  title: "Strategic thinking",
                  description:
                    'I learned to ask "why" before "how" and advocate for users in product discussions.',
                },
                {
                  title: "Real iteration",
                  description:
                    "Pivoting based on actual user feedback taught me the difference between theoretical user-centered design and responding to what users tell you.",
                },
              ]}
            >
              <p>Key lessons from designing through multiple pivots:</p>
            </CaseStudySection>

            <CaseStudySection title="Reflection">
              <p>
                <strong>What I'd do differently:</strong> Earlier user research
                could have accelerated our learning. We built features before
                deeply understanding workflows.
              </p>
              <p>
                <strong>What I'm proud of:</strong> Maintaining quality through
                constant change and contributing to strategy, not just
                execution.
              </p>
            </CaseStudySection>
          </section>

          {/* What's Next Section */}
          <section
            id="next"
            ref={(el) => (sectionRefs.current.next = el)}
            className="case-study-section"
          >
            <CaseStudySection title="What's Next">
              <p>
                Currently conducting structured user testing across eight
                scenarios to validate decisions before launch. Immediate
                priorities: refining profiles, solving verification challenges,
                planning community features for phase two.
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
