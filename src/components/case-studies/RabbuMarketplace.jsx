import { useRef } from "react";
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
import TableOfContents from "./components/TableOfContents";

function RabbuMarketplace({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "design-research", label: "Design Research" },
    { id: "design-process", label: "Design Process" },
    { id: "final-design", label: "Final Design" },
    { id: "design-system", label: "Design System" },
  ];

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
            subtitle="Where investors find and evaluate investment properties."
            imageSrc="/case_studies/rabbu_marketplace/market-hero.webp"
            imageAlt="Rabbu Marketplace Hero"
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
            className="case-study-section"
          >
            <Label>Overview</Label>

            <CaseStudySection title="Introduction">
              <p>
                Rabbu came to Drip Design to improve their short-term rental
                platform. We folded existing tools into one place and added
                features to help investors find and manage properties.
              </p>
              <p>
                This case study covers Marketplace. Portfolio is a separate case
                study.
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
                  A set of tools for assessing and buying short-term rentals.
                </li>
                <li>
                  <Check className="outcome-icon" size={20} />
                  MVP launched in October 2022. Within a month, 33,000+ unique
                  users ran estimates and 2,000+ accounts were created.
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
                Short-term rentals were growing with Airbnb and VRBO. Newer and
                experienced investors still needed better ways to find, buy, and
                manage properties.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Landscape Review"
              photoGrid={[
                {
                  src: "/case_studies/rabbu_marketplace/market-4.webp",
                  alt: "Airbnb",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-5.webp",
                  alt: "Zillow",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-6.webp",
                  alt: "Awning",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-7.webp",
                  alt: "AirDNA",
                },
              ]}
            >
              <p>
                We looked at competing products to see what people already
                expected and which patterns were familiar.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Previous Design Analysis"
              image={{
                src: "/case_studies/rabbu_marketplace/market-8.webp",
                alt: "Previous Design Analysis",
              }}
            >
              <p>
                We reviewed Rabbu&apos;s existing tools to see what to keep and
                what to fix when bringing them into one product.
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
                  description: "The user, now familiar with potential revenue and the market looks to invest in an STR, exploring our marketplace.",
                },
                {
                  number: 4,
                  title: "Operation",
                  description: "After acquiring an STR, the user is led to Rabbu's property management services.",
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
                In meetings with Rabbu, we aligned on an ideal user journey that
                shaped the navigation. It&apos;s hypothetical, but grounded in
                their customer conversations and interviews so far.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Free Trial vs. Freemium"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  title: "Free Trial",
                  listItems: [
                    {
                      icon: <Check size={18} />,
                      text: "Yields higher activation rates, attracting actively searching users.",
                      type: "pro",
                    },
                    {
                      icon: <Check size={18} />,
                      text: "Achieves higher conversion from free to paid due to urgency.",
                      type: "pro",
                    },
                    {
                      icon: <X size={18} />,
                      text: "Demands more marketing outreach, reducing resource efficiency.",
                      type: "con",
                    },
                  ],
                },
                {
                  title: "Freemium",
                  listItems: [
                    {
                      icon: <Check size={18} />,
                      text: "Allows self-paced conversion, gradually highlighting premium features.",
                      type: "pro",
                    },
                    {
                      icon: <Check size={18} />,
                      text: "Results in a higher volume of free accounts.",
                      type: "pro",
                    },
                    {
                      icon: <Check size={18} />,
                      text: "Improves resource efficiency by reducing the need for aggressive marketing campaigns.",
                      type: "pro",
                    },
                    {
                      icon: <X size={18} />,
                      text: "May lead to lower activation rates without immediate pressure to explore all features.",
                      type: "con",
                    },
                    {
                      icon: <X size={18} />,
                      text: "Improves resource efficiency but can reduce direct revenue increase.",
                      type: "con",
                    },
                  ],
                },
              ]}
            >
              <p>
                Before a full subscription, we compared a free trial (all
                features for a limited time) with freemium (some features free,
                upgrade for the rest).
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Motivations For Choosing Freemium"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  icon: <Layers size={20} />,
                  title: "Room to explore",
                  description: "Free and paid features side by side. Free still has to be useful, which matched how people already used Rabbu's earlier tools.",
                },
                {
                  icon: <Users size={20} />,
                  title: "Growing the user base",
                  description: "Freemium made sense if the goal was more free accounts first.",
                },
                {
                  icon: <Zap size={20} />,
                  title: "Less reliance on sales outreach",
                  description: "Rabbu wanted a lighter model than relying so hard on direct sales.",
                },
                {
                  icon: <TrendingUp size={20} />,
                  title: "Time to upgrade",
                  description: "People can explore before paying, which should support steadier growth.",
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
                Freemium shaped the UI. Premium benefits had to be clear, and
                upgrading had to feel simple.
              </p>
              <p>
                In the example below, the user can still see ratings, average
                daily rate, revenue, and more. Subscribing unlocks comparable
                listings and advanced features.
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
                  description: "Run revenue estimates for any US address using nearby rental data.",
                },
                {
                  icon: <BarChart size={20} />,
                  title: "Market Data",
                  description: "Real-time and historical rental trends for a given area.",
                },
                {
                  icon: <Home size={20} />,
                  title: "Properties for Sale",
                  description: "On-market listings, filterable by investment criteria.",
                },
              ]}
              infoCardsLayout="info-cards-three"
              image={{
                src: "/case_studies/rabbu_marketplace/market-10.webp",
                alt: "Rabbu Marketplace",
              }}
            >
              <p>
                Marketplace has three sections: Revenue Estimates, Market Data,
                and Properties for Sale.
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
                Estimate equity needed and potential earnings. Investors can
                plug in their own numbers.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Comparing investments"
              sideBySide={{
                image: {
                  src: "/case_studies/rabbu_marketplace/market-12.webp",
                  alt: "Comparing investments",
                },
                reverse: true,
              }}
            >
              <p>
                Compare properties by goals like cash flow vs. long-term
                appreciation, plus Rabbu&apos;s recommendations.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="On-market rentals"
              sideBySide={{
                image: {
                  src: "/case_studies/rabbu_marketplace/market-13.webp",
                  alt: "On-market rentals",
                },
                reverse: true,
              }}
            >
              <p>Browse properties with underwriting from Rabbu.</p>
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
                We needed a consistent system so the product felt like one
                product and handoffs to the client were cleaner.
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

export default RabbuMarketplace;
