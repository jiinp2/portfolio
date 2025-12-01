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
            subtitle="A platform where short-term rental investors can manage their properties and track performance."
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
                Rabbu approached Drip Design to help design their short-term
                rental (STR) platform by incorporating tools they had previously
                launched as well as newer features that will help short-term
                rental investors find and manage property investments.
              </p>
              <p className="text-base leading-relaxed text-muted mb-6">
                This case study follows the work for Rabbu Portfolio and Rabbu
                Marketplace can be found here.
              </p>
            </CaseStudySection>

            <CaseStudySection title="What is Rabbu Portfolio?">
              <p className="text-base leading-relaxed text-muted mb-6">
                Is a part of Rabbu's STR platform where users can manage their
                property investments from performance evaluation, rental
                activity, and statements.
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
                End-to-end design and launch of Rabbu's Portfolio platform,
                enhancing the STR management experience.
              </p>
              <p className="text-base leading-relaxed text-muted mb-6">
                Revitalized the user interface for cohesion with Rabbu
                Marketplace.
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
                Utilizing hypothetical user journeys provided by Rabbu, we aimed
                to define user needs and desired outcomes.
              </p>
              <p className="text-base leading-relaxed text-muted mb-6">
                Our goal would be to transition from idealized user journeys to
                more realistic and user-tested versions through future
                iterations.
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
                This journey outlines the process of a new Rabbu Portfolio user,
                from initial discovery to successful property management.
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
                This journey outlines the process of how an experienced user who
                finds success with utilizing Portfolio decides to search and
                onboard additional properties they have found on Rabbu
                Marketplace.
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
                Rabbu decided to transition to a unified account system
                facilitated seamless access to both Marketplace and Portfolio,
                enhancing user interaction across Rabbu services.
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
                Defining how users will interact with different Rabbu services
                throughout their journey helped with creating transitions
                between products.
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
                  description: "Easy access to property related financial statements.",
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
                Reviews, Activity, Pricing, and Statements, providing users
                comprehensive oversight over their investment properties.
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
                title="Comprehensive Performance Insights"
                image={{
                  src: "/case_studies/rabbu_portofolio/5.avif",
                  alt: "Comprehensive Performance Insights",
                }}
              >
                <p className="text-base leading-relaxed text-muted mb-6">
                  Delivers real-time and customizable insights of financial and
                  operational metrics, empowering investors to make data-driven
                  decisions.
                </p>
              </CaseStudySection>

              <CaseStudySection
                title="Streamlined Property Booking Management"
                sideBySide={{
                  image: {
                    src: "/case_studies/rabbu_portofolio/6.webp",
                    alt: "Streamlined Property Booking Management",
                  },
                  reverse: false,
                }}
              >
                <p className="text-base leading-relaxed text-muted m-0">
                    Simplifies booking management by displaying bookings across
                    all properties and listing platforms.
                  </p>
              </CaseStudySection>

              <CaseStudySection
                title="Real-Time Property Activity Tracker"
                sideBySide={{
                  image: {
                    src: "/case_studies/rabbu_portofolio/7.webp",
                    alt: "Real-Time Property Activity Tracker",
                  },
                  reverse: true,
                }}
              >
                <p className="text-base leading-relaxed text-muted m-0">
                    Provides real-time updates to property happenings, elevating
                    guest satisfaction through proactive property management.
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
