import { useState, useEffect, useRef } from "react";
import {
  Check,
  X,
  Layers,
  Users,
  Zap,
  TrendingUp,
  Calculator,
  BarChart,
  Home,
  BookOpen,
  Search,
  DollarSign,
  Settings,
  ArrowUp,
} from "lucide-react";
import InfoCard from "../ui/InfoCard";
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";

function RabbuMarketplace({ onClose, currentProjectSlug }) {
  const [activeSection, setActiveSection] = useState("overview");
  const sectionRefs = useRef({});
  const tocListRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "design-research", label: "Design Research" },
    { id: "design-process", label: "Design Process" },
    { id: "final-design", label: "Final Design" },
    { id: "design-system", label: "Design System" },
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

    // Use requestAnimationFrame for smoother updates
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
    <div className="case-study-overlay rabbu-marketplace-case-study">
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
            title="Rabbu Marketplace"
            subtitle="A platform where investors can find and evaluate profitable investment properties."
            imageSrc="/case_studies/rabbu_marketplace/market-hero.webp"
            imageAlt="Rabbu Marketplace Hero"
            infoItems={[
              { label: "Team", value: "Rabbu (3 PMs), Drip Design (2 Designers)" },
              { label: "Role", value: "Design Research, UI & UX Design" },
              { label: "Timeline", value: "Mar 2022 - Feb 2023" },
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
                Rabbu engaged Drip Design to enhance their short-term rental
                (STR) platform. The collaboration focused on integrating
                existing tools and introducing new features to assist investors
                in finding and managing properties effectively.
              </p>
              <p>
                This case study follows the work for Rabbu Marketplace and Rabbu
                Portfolio can be found here.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Outcomes"
              image={{
                src: "/case_studies/rabbu_marketplace/market-1.webp",
                alt: "Rabbu Marketplace Outcomes 1",
              }}
              images={[
                {
                  src: "/case_studies/rabbu_marketplace/market-2.webp",
                  alt: "Rabbu Marketplace Outcomes 2",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-3.webp",
                  alt: "Rabbu Marketplace Outcomes 3",
                },
              ]}
            >
              <ul className="outcomes-list">
                <li>
                  <Check className="outcome-icon" size={20} />
                  Creation of a holistic platform of tools for assessing and
                  acquiring successful short-term rentals.
                </li>
                <li>
                  <Check className="outcome-icon" size={20} />
                  MVP launched in October 2022, within one month the platform
                  had 33,000+ unique users who ran estimates, and 2,000+
                  accounts were created. The project delivered a unified
                  platform of tools for property acquisition and management.
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

            <CaseStudySection title="The Short-term Rental Space">
              <p>
                The STR industry is experiencing growth with the rise of
                platforms like Airbnb and VRBO. There is an opportunity for a
                new platform that can assist new to experienced investors in
                finding, acquiring, and managing properties.
              </p>
            </CaseStudySection>

            <div className="subsection">
              <h3 className="text-lg font-semibold text-default mb-4 tracking-tight leading-tight">Landscape Review</h3>
              <p>
                We benchmarked relevant and competing platforms to understand
                user expectations in functionality and common interaction
                patterns.
              </p>
              <div className="competitor-grid">
                <div className="competitor-item">
                  <img
                    src="/case_studies/rabbu_marketplace/market-4.webp"
                    alt="Airbnb"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="competitor-item">
                  <img
                    src="/case_studies/rabbu_marketplace/market-5.webp"
                    alt="Zillow"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="competitor-item">
                  <img
                    src="/case_studies/rabbu_marketplace/market-6.webp"
                    alt="Awning"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="competitor-item">
                  <img
                    src="/case_studies/rabbu_marketplace/market-7.webp"
                    alt="AirDNA"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>

            <CaseStudySection
              title="Previous Design Analysis"
              image={{
                src: "/case_studies/rabbu_marketplace/market-8.webp",
                alt: "Previous Design Analysis",
              }}
            >
              <p>
                We evaluated Rabbu's launched tools to better understand product
                features to identify improvements when integrating them into a
                holistic platform.
              </p>
            </CaseStudySection>
          </section>

          {/* Design Process Section */}
          <section
            id="design-process"
            ref={(el) => (sectionRefs.current["design-process"] = el)}
            className="case-study-section"
          >
            <Label>Design Process</Label>

            <CaseStudySection
              title="Hypothetical User Journey"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  number: 1,
                  title: "Learning",
                  description: "A user researches STRs, reading about our services, and discovering free tools we offer.",
                },
                {
                  number: 2,
                  title: "Research",
                  description: "Delving deeper into STRs, using Rabbu for revenue calculations and discovering tools for understanding the market.",
                },
                {
                  number: 3,
                  title: "Investment",
                  description: "The user, now familiar with potential revenue and the market looks to invest in an STR, exploring the out marketplace.",
                },
                {
                  number: 4,
                  title: "Operation",
                  description: "After acquiring an STR, the user is lead to Rabbu's property management services.",
                },
                {
                  number: 5,
                  title: "Expansion",
                  description: "Pleased with the success of their first STR, the user looks to invest in more properties.",
                },
              ]}
              infoCardsLayout="info-cards-journey"
            >
              <p>
                During our regular meetings with the Rabbu team we were aligned
                with their ideal user journey, which helped with informing the
                platform's navigation. Although hypothetical this journey is
                informed by Rabbu's interactions and user interviews with
                customers thus far.
              </p>
            </CaseStudySection>

            <div className="subsection">
              <h3 className="text-lg font-semibold text-default mb-4 tracking-tight leading-tight">Free Trial vs. Freemium</h3>
              <p>
                We compared two models for user engagement prior to users
                committing to a full subscription. The Free Trial model provided
                a limited-time access to all features, and in contrast, the
                Freemium model offered fully free features with the option for
                users to upgrade to premium for advanced features.
              </p>

              <div className="comparison-section">
                <h4>General Trends</h4>
                <p>
                  This is a comparison of general trends when it comes to
                  comparing the two options.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-column">
                    <h5>Free Trial</h5>
                    <ul className="comparison-list">
                      <li className="pro">
                        <Check className="comparison-icon pro-icon" size={18} />
                        Yields higher activation rates, attracting actively
                        searching users.
                      </li>
                      <li className="pro">
                        <Check className="comparison-icon pro-icon" size={18} />
                        Achieves higher conversion from free to paid due to
                        urgency.
                      </li>
                      <li className="con">
                        <X className="comparison-icon con-icon" size={18} />
                        Demands more marketing outreach, reducing resource
                        efficiency.
                      </li>
                    </ul>
                  </div>
                  <div className="comparison-column">
                    <h5>Freemium</h5>
                    <ul className="comparison-list">
                      <li className="pro">
                        <Check className="comparison-icon pro-icon" size={18} />
                        Allows self-paced conversion, gradually highlighting
                        premium features.
                      </li>
                      <li className="pro">
                        <Check className="comparison-icon pro-icon" size={18} />
                        Results in a higher volume of free accounts.
                      </li>
                      <li className="pro">
                        <Check className="comparison-icon pro-icon" size={18} />
                        Improves resource efficiency by reducing the need for
                        aggressive marketing campaigns.
                      </li>
                      <li className="con">
                        <X className="comparison-icon con-icon" size={18} />
                        May lead to lower activation rates without immediate
                        pressure to explore all features.
                      </li>
                      <li className="con">
                        <X className="comparison-icon con-icon" size={18} />
                        Improves resource efficiency but can reduce direct
                        revenue increase.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <CaseStudySection
              title="Motivations For Choosing Freemium"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  icon: <Layers size={20} />,
                  title: "Multiple Features for User Exploration",
                  description: "The platform will offer a mix of free and paid features. The free features will still provide users with significant value, as demonstrated by the successful utilization of Rabbu's previously launched tools.",
                },
                {
                  icon: <Users size={20} />,
                  title: "Goal of Increasing User Base",
                  description: "A freemium model is effective when the objective is to expand the user base by attracting more free accounts.",
                },
                {
                  icon: <Zap size={20} />,
                  title: "Resource Efficiency and User Outreach",
                  description: "Rabbu aims to enhance resource efficiency and explore alternative methods, moving away from the intensive user outreach efforts employed thus far through direct sales teams.",
                },
                {
                  icon: <TrendingUp size={20} />,
                  title: "Gradual Activation of Paid Tiers",
                  description: "Frequent users can take their time to explore the platform before deciding to upgrade. This flexibility ideally contributes to more organic and sustainable user growth.",
                },
              ]}
            />

            <CaseStudySection
              title="Designing for Freemium"
              image={{
                src: "/case_studies/rabbu_marketplace/market-9.webp",
                alt: "Freemium Design Example",
              }}
            >
              <p>
                Adopting the freemium model influenced our designs, we
                determined that it would be important to communicate the added
                benefits of subscribing to a premium account and doing so needs
                to be a seamless process.
              </p>
              <p>
                In the example below the user is still able to see the ratings,
                average daily rate, revenue, etc. for this property but will
                need to subscribe to see more comparable listings and additional
                advanced features.
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
              title="Rabbu Marketplace"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  icon: <Calculator size={20} />,
                  title: "Revenue Estimates",
                  description: "Users can run revenue estimates for any US address based on data that utilizes nearby rentals.",
                },
                {
                  icon: <BarChart size={20} />,
                  title: "Market Data",
                  description: "Users can access real-time and historical rental statistic trends in any given area.",
                },
                {
                  icon: <Home size={20} />,
                  title: "Properties for Sale",
                  description: "Users can view on-market properties and easily filter investment opportunities based on their own criteria.",
                },
              ]}
              infoCardsLayout="info-cards-three"
              image={{
                src: "/case_studies/rabbu_marketplace/market-10.webp",
                alt: "Rabbu Marketplace",
              }}
            >
              <p>
                Rabbu Marketplace is composed of three different sections,
                Revenue Estimates, Market Data, and Properties for Sale.
              </p>
            </CaseStudySection>
          </section>

          {/* Key Features Section */}
          <section
            id="key-features"
            ref={(el) => (sectionRefs.current["key-features"] = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="Investment Return Calculator"
              sideBySide={{
                image: {
                  src: "/case_studies/rabbu_marketplace/market-11.webp",
                  alt: "Investment Return Calculator",
                },
                reverse: true,
              }}
            >
              <p>
                A tool for investors to determine equity required to acquire
                a property as well as estimated potential earnings. This
                calculator can be personalized with custom financial
                information.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Identifying High-Performance Investments"
              sideBySide={{
                image: {
                  src: "/case_studies/rabbu_marketplace/market-12.webp",
                  alt: "Identifying High-Performance Investments",
                },
                reverse: true,
              }}
            >
              <p>
                Investors can efficiently compare properties based on their
                investment goals such as cash flow vs. long term property
                appreciation. As well as access to Rabbu's property
                recommendations.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="View On-Market Rental Properties"
              sideBySide={{
                image: {
                  src: "/case_studies/rabbu_marketplace/market-13.webp",
                  alt: "View On-Market Rental Properties",
                },
                reverse: true,
              }}
            >
              <p>
                Investors can browse properties to invest in with
                underwriting provided by Rabbu.
              </p>
            </CaseStudySection>
          </section>

          {/* Design System Section */}
          <section
            id="design-system"
            ref={(el) => (sectionRefs.current["design-system"] = el)}
            className="case-study-section"
          >
            <Label>Design System</Label>

            <CaseStudySection
              title="Early Stage Design System"
              images={[
                {
                  src: "/case_studies/rabbu_marketplace/market-14.webp",
                  alt: "Design System Components 1",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-15.webp",
                  alt: "Design System Components 2",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-16.webp",
                  alt: "Design System Components 3",
                },
              ]}
            >
              <p>
                Recognizing the need for a cohesive and consistent design
                approach, this system aims to streamline the design process,
                ensure consistency across the platform, and facilitate smoother
                handoffs to the client.
              </p>
            </CaseStudySection>
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

export default RabbuMarketplace;
