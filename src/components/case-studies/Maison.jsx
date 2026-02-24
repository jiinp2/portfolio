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
    { id: "context", label: "Overview" },
    { id: "evolution", label: "How We Got Here" },
    { id: "problem", label: "The Problem" },
    { id: "role", label: "My Role" },
    { id: "approach", label: "Design Approach" },
    { id: "challenges", label: "Design Challenges" },
    { id: "survived", label: "What Stayed Consistent" },
    { id: "learned", label: "What I Learned" },
    { id: "next", label: "Status" },
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
            subtitle="A trust and verification platform for real estate professionals"
            imageSrc="/case_studies/maison/maison-hero.png"
            imageAlt="Maison Hero"
            infoItems={[
              { label: "Role", value: "Founding Design Engineer" },
              {
                label: "Scope",
                value: "Product Design, Strategy, Frontend Development",
              },
              { label: "Platform", value: "Web & Mobile" },
              { label: "Timeline", value: "April 2025–January 2026" },
            ]}
          />

          {/* Context Section */}
          <section
            id="context"
            ref={(el) => (sectionRefs.current.context = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Overview">
              <p>
                Real estate transactions run on personal referrals with no way
                to verify whether that trust is warranted. We built Maison to
                fix that: verified professional profiles with transaction
                history, licenses, and reviews for agents and adjacent
                professionals.
              </p>
              <p>
                I was the founding designer and design engineer. We closed in
                early 2026 when funding ran out, before public launch.
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
              title="How we got here"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  number: 1,
                  title: "Phase 1: Renovation Marketplace",
                  description:
                    "April 2025. Agents needed better ways to refer clients to contractors. We lacked domain expertise and underestimated the complexity of managing deals between unfamiliar parties.",
                },
                {
                  number: 2,
                  title: "Phase 2: Professional Community",
                  description:
                    "Mid 2025. We built networking tools to replace fragmented WhatsApp groups and Facebook communities. Too scattered. No clear core value.",
                },
                {
                  number: 3,
                  title: "Phase 3: Trust & Verification",
                  description:
                    "Late 2025 to January 2026. A team member used a personally recommended agent that performed poorly. There was no way to verify the agent's track record beforehand. We pivoted to verified profiles with transaction history, licenses, and reviews. Think Carfax for real estate agents, extended to lawyers, photographers, and stagers.",
                },
              ]}
            >
              <p>We didn't start with the right idea.</p>
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
                Real estate runs on word-of-mouth but word-of-mouth can't be
                audited. Agents manage their professional networks across
                WhatsApp, Facebook groups, and email with no single source
                of truth.
              </p>
              <p>
                How do you surface verified information without overwhelming
                the person making the decision?
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
              <p>I worked across design and implementation:</p>
              <ul className="takeaways-list">
                <li>Product design and UX strategy</li>
                <li>Brand identity and visual design</li>
                <li>Information architecture</li>
                <li>Frontend development in React</li>
                <li>Product strategy, including pivot decisions</li>
              </ul>
              <p>
                I contributed to where the product went, not just how it looked.
              </p>
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
                <strong>Research:</strong> The founder ran 20+ interviews with
                real estate professionals. I worked from recordings and shared
                notes to make design decisions. Three patterns held
                consistently: professionals distrust platforms that feel
                salesy, credibility signals matter more than features, and most
                agents were managing their network across at least three tools.
              </p>
              <p>
                <strong>Architecture:</strong> The platform served two
                audiences: professionals building their reputation and
                consumers evaluating who to work with. Same underlying data,
                different information hierarchies. I designed the architecture
                to serve both without compromising either.
              </p>
              <p>
                <strong>Execution:</strong> Wireframe to high-fidelity to coded
                prototype in days. Working in React meant I thought through
                implementation constraints as I designed, not after. Reusable
                components kept iteration fast without starting over each time.
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
              title="Design Challenges"
              accentColor="var(--color-maison)"
              infoCards={[
                {
                  title: "Verification without overwhelm",
                  description:
                    "Pulling credentials from MLS data and third-party APIs created an immediate question: how much information actually builds trust versus adds noise? I was working toward the minimum signal set that changes a user's confidence level.",
                },
                {
                  title: "Dual audiences, one profile",
                  description:
                    "An agent and a consumer look at the same profile with different needs. Getting the information hierarchy right for both, without building two separate products, was the central problem in phase three.",
                },
              ]}
            >
              <p>Key challenges in phase three:</p>
            </CaseStudySection>
          </section>

          {/* What Survived Every Pivot Section */}
          <section
            id="survived"
            ref={(el) => (sectionRefs.current.survived = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="What stayed consistent"
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
              <p>Three pivots, same foundation:</p>
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
                  title: "Attach to problems, not solutions",
                  description:
                    "The UI changed three times. The underlying user needs didn't.",
                },
                {
                  title: "Implementation fluency changes how you design",
                  description:
                    "Knowing React meant fewer surprises at handoff and faster iteration with engineers.",
                },
                {
                  title: "Ask why before how",
                  description:
                    "Participating in pivot decisions, not just executing them, changed how I think about product work.",
                },
                {
                  title: "Iterate on real feedback",
                  description:
                    "We built before we fully understood workflows in phase one. By phase three we were testing before building.",
                },
              ]}
            >
              <p>Key lessons from nine months of designing through ambiguity:</p>
            </CaseStudySection>

            <CaseStudySection title="Reflection">
              <p>
                <strong>What I'd do differently:</strong> Deeper research
                before building. We would have found the right problem faster.
              </p>
              <p>
                <strong>What I'm proud of:</strong> Design quality held through
                three pivots, and I had a seat at the product table throughout.
              </p>
            </CaseStudySection>
          </section>

          {/* What's Next Section */}
          <section
            id="next"
            ref={(el) => (sectionRefs.current.next = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Status">
              <p>
                Structured testing was underway across eight scenarios when the
                company closed. The Carfax framing resonated immediately with
                professionals. The verification layer generated the most
                questions in interviews. The dual-audience architecture held up
                in testing.
              </p>
              <p>
                Unresolved: the right balance between data richness and privacy
                on profiles, and scope of community features at launch.
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
