import { useRef } from "react";
import { Check } from "lucide-react";
import Label from "../ui/Label";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Skiin({ onClose }) {
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
            subtitle="Wellness tracking through bio-sensing garments and a companion app."
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
                Through OCAD University&apos;s internship program, I interned at
                Myant, a wearable tech company that knits sensors into textiles.
                My main focus was Skiin, Myant&apos;s in-house product, with some
                work on external client projects as well.
              </p>
            </CaseStudySection>

            <CaseStudySection title="What Is Skiin?">
              <p>
                Skiin is bio-sensing garments paired with a mobile app. Sensors
                collect health data over time and surface it in real time.
                People can also share that data with their circle of care.
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
                On Skiin, I ideated and wireframed the communication and mood
                logging features.
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
                  Designed the user flows and high-fidelity wireframes for
                  Skiin&apos;s communication and mood logging features.
                </li>
              </ul>
              <p>
                These features shipped in the Skiin app, so users could log and
                track mood over time.
              </p>
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
                To understand Skiin&apos;s users, I worked from research the
                design and research team had already done: surveys, interviews,
                and focus groups. I used those findings to guide design
                decisions.
              </p>
            </CaseStudySection>

            <CaseStudySection title="Key Takeaways">
              <ul className="takeaways-list">
                <li>
                  People want products that fit into daily life and give clear
                  wellness insights.
                </li>
                <li>
                  They also want something that helps them stick with healthy
                  habits.
                </li>
                <li>
                  The team wanted to stand out by leaning into what textile
                  sensing can do that other wearables can&apos;t.
                </li>
              </ul>
            </CaseStudySection>

            <CaseStudySection title="Competitive Research">
              <p>
                Before ideating, I looked at competing products, their visuals
                and user journeys, for opportunities to improve Skiin.
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
                In-app messaging and video calling so people can stay connected
                remotely.
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
                In group chats, each member has a status bar with a quick view
                of their current health.
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
                Expanding the status bar shows location and more detailed
                metrics over time.
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
                A way to log mood and related context alongside the sensor data.
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
                Users pick a mood from 1–5, add a date, note what they did that
                day, and tag factors that influenced how they felt.
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
                Viewing mood logs by day, week, or month helps people spot
                patterns and how daily activities affect them.
              </p>
            </CaseStudySection>
          </section>

        </div>

        {/* Right Column - Table of Contents */}
        <TableOfContents sections={tocSections} sectionRefs={sectionRefs} />
      </div>
    </div>
  );
}

export default Skiin;
