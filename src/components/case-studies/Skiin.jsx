import { useRef } from "react";
import { Check } from "lucide-react";
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Skiin({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "design-research", label: "Design Research" },
    { id: "final-design", label: "Final Design" },
  ];

  return (
    <div className="case-study-overlay skiin-case-study">
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
            title="Skiin"
            subtitle="Innovating wellness through real-time tracking and sensory textiles."
            imageSrc="/case_studies/skiin/hero.avif"
            imageAlt="Skiin Hero"
            infoItems={[
              { label: "Role", value: "UI & UX Designer" },
              {
                label: "Scope",
                value: "Design Research, UI & UX Design",
              },
              { label: "Platform", value: "Mobile App & Wearable Device" },
              { label: "Timeline", value: "Feb - Aug 2021" },
            ]}
          />

          {/* Overview Section */}
          <section
            id="overview"
            ref={(el) => (sectionRefs.current.overview = el)}
            className="case-study-section"
          >
            <Label>Overview</Label>

            <CaseStudySection title="Introduction">
              <p>
                As a part of OCAD University's internship program I interned at
                Myant, a wearable technology company that specializes in
                textiles knitted with sensors. My primary focus was on Myant's
                in-house product, Skiin, although my responsibilities extended
                to external client projects as well.
              </p>
            </CaseStudySection>

            <CaseStudySection title="What Is Skiin?">
              <p>
                Skiin consists of bio-sensing garments that work in tandem with
                a mobile application, offering users real-time insights into
                their wellness. Sensors collect and track health data over time,
                which can be shared with a user's circle of care.
              </p>
              <p>
                <a
                  href="https://www.myanthealth.com/"
                  className="external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product Page ↗
                </a>
              </p>
            </CaseStudySection>

            <CaseStudySection title="My Responsibilities">
              <p>
                For Skiin, my responsibilities included ideating and wireframing
                the application's communication and mood logging features,
                aiming to enhance user interaction and emotional tracking.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Outcomes"
              image={{
                src: "/case_studies/skiin/1.avif",
                alt: "Skiin Outcomes",
              }}
            >
              <ul className="outcomes-list">
                <li>
                  <Check className="outcome-icon" size={20} />
                  Designed the user flow and high-fidelity wireframes for
                  Skiin's communication features and mood logging feature.
                </li>
              </ul>
            </CaseStudySection>
          </section>

          {/* Design Research Section */}
          <section
            id="design-research"
            ref={(el) => (sectionRefs.current["design-research"] = el)}
            className="case-study-section"
          >
            <Label>Design Research</Label>

            <CaseStudySection title="Existing Research">
              <p>
                To understand Skiin's users and their needs, I relied on
                existing research conducted by the design and research team.
                This included a combination of user surveys, interviews, and
                focus groups. I analyzed research findings to inform design
                decisions.
              </p>
            </CaseStudySection>

            <CaseStudySection title="Key Takeaways">
              <ul className="takeaways-list">
                <li>
                  Users highly value products that integrate seamlessly into
                  their daily lives and deliver precise wellness insights.
                </li>
                <li>
                  Users expressed a desire for a product that motivates them to
                  maintain healthy habits.
                </li>
                <li>
                  The team identified the need to differentiate by focusing on
                  the unique benefits of textile technology.
                </li>
              </ul>
            </CaseStudySection>

            <CaseStudySection title="Competitive Research">
              <p>
                Before ideation, I conducted an analysis of competing products,
                focusing on their visual design elements and user journeys, to
                identify opportunities for enhancing the Skiin experience.
              </p>
            </CaseStudySection>
          </section>

          {/* Final Design Section */}
          <section
            id="final-design"
            ref={(el) => (sectionRefs.current["final-design"] = el)}
            className="case-study-section"
          >
            <Label>Final Design</Label>

            <CaseStudySection
              title="Communication Features"
              image={{
                src: "/case_studies/skiin/2.webp",
                alt: "Communication Features Screens",
              }}
            >
              <p>
                Enhancing remote connection through Skiin's in-app messaging and
                video calling.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Staying in the Loop"
              sideBySide={{
                image: {
                  src: "/case_studies/skiin/3.avif",
                  alt: "Status Bar Screens",
                },
                reverse: true,
              }}
            >
                  <p>
                    Within group chats, each member has a status bar that
                    provides a quick view on their current health.
                  </p>
            </CaseStudySection>

            <CaseStudySection
              title="In-Depth Updates"
              sideBySide={{
                image: {
                  src: "/case_studies/skiin/4.webp",
                  alt: "In-Depth Updates Screens",
                },
                reverse: false,
              }}
            >
                  <p>
                    The status bar can be expanded to view user location and
                    more detailed metrics over time.
                  </p>
            </CaseStudySection>

            <CaseStudySection
              title="Mood Logging"
              image={{
                src: "/case_studies/skiin/5.webp",
                alt: "Mood Logging Screens",
              }}
            >
              <p>
                Enhancing remote connection through Skiin's in-app messaging and
                video calling.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Mood Logging Flow"
              image={{
                src: "/case_studies/skiin/6.webp",
                alt: "Mood Logging Flow",
              }}
            >
              <p>
                Users can select their mood on a scale of 1-5, add the date,
                include a note on what they did that day, and tag factors that
                influenced their mood.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Patterns Over Time"
              image={{
                src: "/case_studies/skiin/7.avif",
                alt: "Patterns Over Time Screens",
              }}
            >
              <p>
                By viewing mood logs on a daily, weekly, or monthly basis, users
                can identify reoccurring patterns and understand how they are
                affected by their daily activities.
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

export default Skiin;
