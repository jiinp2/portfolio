import { useRef } from "react";
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import InfoCard from "../ui/InfoCard";
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function RabbuPortfolio({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "outcomes", label: "Outcomes" },
    { id: "design-research", label: "Design Research" },
    { id: "design-process", label: "Design Process" },
    { id: "final-design", label: "Final Design" },
  ];

  return (
    <div className="case-study-overlay rabbu-portfolio-case-study">
      <div className="case-study-layout">
        {/* Left Column - Back Button */}
        <div className="case-study-left flex items-start pt-8">
          <button
            className="back-button sticky cursor-pointer"
            onClick={onClose}
          >
            <span className="back-arrow">←</span> Back
          </button>
        </div>

        {/* Middle Column - Main Content */}
        <div className="case-study-content">
          {/* Hero Section */}
          <CaseStudyHero
            title="Rabbu Portfolio"
            subtitle="Where short-term rental investors manage properties and track performance."
            imageSrc="/case_studies/rabbu_portofolio/hero.webp"
            imageAlt="Rabbu Portfolio Hero"
            infoItems={[
              { label: "Role", value: "UI & UX Designer" },
              {
                label: "Scope",
                value: "Design Research, UI & UX Design",
              },
              { label: "Platform", value: "Web & Mobile" },
              { label: "Timeline", value: "Mar 2022 - Feb 2023" },
            ]}
          />

          {/* Overview Section */}
          <section
            id="overview"
            ref={(el) => (sectionRefs.current.overview = el)}
            className="case-study-section mb-12"
          >
            <Label>Overview</Label>

            <CaseStudySection title="Introduction">
              <p className="text-base leading-relaxed text-muted mb-6">
                Rabbu came to Drip Design to redesign their short-term rental
                platform. They wanted their existing tools and newer features in
                one place so investors could find and manage properties more
                easily.
              </p>
              <p className="text-base leading-relaxed text-muted mb-6">
                This case study covers Portfolio. Marketplace is a separate case
                study.
              </p>
            </CaseStudySection>

            <CaseStudySection title="What is Rabbu Portfolio?">
              <p className="text-base leading-relaxed text-muted mb-6">
                Rabbu Portfolio is where investors manage their short-term
                rentals: performance, rental activity, and statements.
              </p>
            </CaseStudySection>
          </section>

          {/* Outcomes Section */}
          <section
            id="outcomes"
            ref={(el) => (sectionRefs.current.outcomes = el)}
            className="case-study-section mb-12"
          >
            <Label>Outcomes</Label>

            <CaseStudySection
              image={{
                src: "/case_studies/rabbu_portofolio/1.webp",
                alt: "Rabbu Portfolio Outcomes 1",
              }}
              images={[
                {
                  src: "/case_studies/rabbu_portofolio/3.webp",
                  alt: "Rabbu Portfolio Outcomes 3",
                },
                {
                  src: "/case_studies/rabbu_portofolio/2.webp",
                  alt: "Rabbu Portfolio Outcomes 2",
                },
              ]}
            >
              <p className="text-base leading-relaxed text-muted mb-6">
                We designed and launched Portfolio end to end.
              </p>
              <p className="text-base leading-relaxed text-muted mb-6">
                We also reworked the UI so it felt consistent with Marketplace.
              </p>
            </CaseStudySection>
          </section>

          {/* Design Research Section */}
          <section
            id="design-research"
            ref={(el) => (sectionRefs.current["design-research"] = el)}
            className="case-study-section mb-12"
          >
            <Label>Design Research</Label>

            <CaseStudySection title="Early Stage Hypothetical User Journeys">
              <p className="text-base leading-relaxed text-muted mb-6">
                Rabbu gave us hypothetical user journeys to start from. We used
                them to sketch needs and outcomes, knowing we&apos;d replace the
                idealized versions with tested ones later.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="New User Journey"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  number: 1,
                  title: "Discovery",
                  description: "Investors looking for an online platform to manage their first investment discovers Rabbu Portfolio.",
                },
                {
                  number: 2,
                  title: "Expert Consultation",
                  description: "The investor is provided a walkthrough by a Rabbu expert, who demonstrates the platform's efficient property management system.",
                },
                {
                  number: 3,
                  title: "Seamless Onboarding",
                  description: "The investor signs a property management contract with Rabbu, officially onboarding their property to the platform.",
                },
                {
                  number: 4,
                  title: "Portfolio Management",
                  description: "The investor monitors their performance and financials, leading to their first successful investment.",
                },
              ]}
              infoCardsLayout="info-cards-four"
            >
              <p className="text-base leading-relaxed text-muted mb-8">
                How a new investor finds Portfolio and gets their first property
                running.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Experienced User Journey"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  number: 1,
                  title: "Strategic Expansion",
                  description: "The investor is aware of Rabbu Marketplace, a platform where they can search for properties to expand their short-term rental portfolio.",
                },
                {
                  number: 2,
                  title: "Market Analysis",
                  description: "They deep-dive into potential properties. Utilizing Marketplace tools to assess investment viability.",
                },
                {
                  number: 3,
                  title: "Informed Investments",
                  description: "After thorough analysis and consultation with Rabbu experts, the investor selects an additional property to invest in.",
                },
                {
                  number: 4,
                  title: "Scalable Management",
                  description: "The investor manages their short-term rentals all-in-one place, easing operations across multiple properties.",
                },
              ]}
              infoCardsLayout="info-cards-four"
            >
              <p className="text-base leading-relaxed text-muted mb-8">
                How someone already using Portfolio expands into more properties
                through Marketplace.
              </p>
            </CaseStudySection>
          </section>

          {/* Design Process Section */}
          <section
            id="design-process"
            ref={(el) => (sectionRefs.current["design-process"] = el)}
            className="case-study-section mb-12"
          >
            <Label>Design Process</Label>

            <CaseStudySection title="Rabbu One">
              <p className="text-base leading-relaxed text-muted mb-6">
                Rabbu moved to a unified account so people could move between
                Marketplace and Portfolio without separate logins.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Unified Account Matrix"
              image={{
                src: "/case_studies/rabbu_portofolio/8.webp",
                alt: "Unified Account Matrix",
              }}
            >
              <p className="text-base leading-relaxed text-muted mb-6">
                Mapping how people move between Rabbu products made the handoffs
                between them clearer.
              </p>
            </CaseStudySection>
          </section>

          {/* Final Design Section */}
          <section
            id="final-design"
            ref={(el) => (sectionRefs.current["final-design"] = el)}
            className="case-study-section mb-12"
          >
            <Label>Final Design</Label>

            <CaseStudySection
              title="Rabbu Portfolio"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  icon: <LayoutDashboard size={20} />,
                  title: "Dashboard",
                  description: "A customizable snapshot of property trends.",
                },
                {
                  icon: <Calendar size={20} />,
                  title: "Properties & Calendar",
                  description: "Displays property statuses and booking details.",
                },
                {
                  icon: <MessageSquare size={20} />,
                  title: "Reviews & Activity Feed",
                  description: "Keeps property owners updated on guest feedback and property activities.",
                },
                {
                  icon: <DollarSign size={20} />,
                  title: "Pricing & Statements",
                  description: "Financial statements for each property.",
                },
              ]}
              infoCardsLayout="info-cards-four"
              image={{
                src: "/case_studies/rabbu_portofolio/4.avif",
                alt: "Rabbu Portfolio",
              }}
            >
              <p className="text-base leading-relaxed text-muted mb-8">
                The platform is organized into Dashboard, Properties, Calendar,
                Reviews, Activity, Pricing, and Statements so investors can see
                what&apos;s going on across their properties.
              </p>
            </CaseStudySection>
          </section>

          {/* Key Features Section */}
          <section
            id="key-features"
            ref={(el) => (sectionRefs.current["key-features"] = el)}
            className="case-study-section mb-12"
          >
            <div className="key-features mt-6">
              <CaseStudySection
                title="Performance insights"
                image={{
                  src: "/case_studies/rabbu_portofolio/5.avif",
                  alt: "Performance insights",
                }}
              >
                <p className="text-base leading-relaxed text-muted mb-6">
                  Real-time, customizable view of financial and operational
                  metrics so investors can decide what to do next.
                </p>
              </CaseStudySection>

              <CaseStudySection
                title="Booking management"
                sideBySide={{
                  image: {
                    src: "/case_studies/rabbu_portofolio/6.webp",
                    alt: "Booking management",
                  },
                  reverse: false,
                }}
              >
                <p className="text-base leading-relaxed text-muted m-0">
                  Bookings across all properties and listing platforms in one
                  place.
                </p>
              </CaseStudySection>

              <CaseStudySection
                title="Property activity"
                sideBySide={{
                  image: {
                    src: "/case_studies/rabbu_portofolio/7.webp",
                    alt: "Property activity",
                  },
                  reverse: true,
                }}
              >
                <p className="text-base leading-relaxed text-muted m-0">
                  Live updates on what&apos;s happening at each property, so
                  owners can respond sooner.
                </p>
              </CaseStudySection>
            </div>
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

export default RabbuPortfolio;
