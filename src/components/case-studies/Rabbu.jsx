import { useRef } from "react";
import {
  LayoutDashboard,
  Calendar,
  Calculator,
  BarChart,
  Home,
} from "lucide-react";
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Rabbu({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  const tocSections = [
    { id: "introduction", label: "Introduction" },
    { id: "process", label: "Process" },
    { id: "solution", label: "Solution" },
    { id: "impact", label: "Impact" },
  ];

  return (
    <div className="case-study-overlay rabbu-case-study">
      <div className="case-study-layout">
        <div className="case-study-left flex items-start pt-8">
          <button
            className="back-button sticky cursor-pointer"
            onClick={onClose}
          >
            <span className="back-arrow">←</span> Back
          </button>
        </div>

        <div className="case-study-content">
          <CaseStudyHero
            title="Rabbu"
            subtitle="A unified platform for short-term rental investors"
            imageSrc="/case_studies/rabbu_portofolio/hero.webp"
            imageAlt="Rabbu Hero"
            infoItems={[
              { label: "Role", value: "UI & UX Designer" },
              {
                label: "Scope",
                value: "Design Research, UI & UX Design",
              },
              { label: "Company", value: "Drip Design" },
              { label: "Timeline", value: "March 2022 – February 2023" },
            ]}
          />

          <section
            id="introduction"
            ref={(el) => (sectionRefs.current.introduction = el)}
            className="case-study-section mb-12"
          >
            <Label>Introduction</Label>
            <CaseStudySection title="Overview">
              <p>
                Rabbu had built useful tools for short-term rental investors:
                revenue calculators, market data, and portfolio management. The
                tools worked individually but the experience of using them was
                fragmented and functionally confusing. There was no shared
                visual language, no clear way to move between them, and no
                single place to bring it all together.
              </p>
              <p>
                Rabbu approached Drip Design to fix that. I was the designer
                responsible for the project for the full year I was at Drip,
                working directly with their product managers, data analysts,
                and prerecorded user research to understand what the platform
                needed to become.
              </p>
            </CaseStudySection>
            <CaseStudySection title="Project Scope">
              <p>
                Three layers of work defined the project: redesigning existing
                tools that were functionally confusing, introducing new
                features that filled gaps in the investor journey, and
                unifying everything into one coherent platform with a shared
                visual system.
              </p>
            </CaseStudySection>
            <CaseStudySection title="The Problem">
              <p>
                Short-term rental investors need to move fluidly between
                researching a market, evaluating a property, acquiring it, and
                managing it afterward. Rabbu had tools for most of those jobs,
                but they were hard to use, visually inconsistent, and
                disconnected from each other. The platform felt less
                trustworthy than the data inside it deserved.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="process"
            ref={(el) => (sectionRefs.current.process = el)}
            className="case-study-section mb-12"
          >
            <Label>Process</Label>
            <CaseStudySection title="Discovery">
              <p>
                Before redesigning anything, I spent time understanding where
                the current experience was breaking down. Rabbu shared
                prerecorded user sessions and I had regular touchpoints with
                their product managers and data analysts throughout the
                project. Users understood what the tools were for but found
                them difficult to navigate and struggled to see how they
                connected.
              </p>
              <p>
                I also benchmarked competing platforms including Airbnb,
                Zillow, Awning, and AirDNA to understand what investors
                expected from tools in this space and where Rabbu had room to
                differentiate.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Design System"
              photoGrid={[
                {
                  src: "/case_studies/rabbu_marketplace/market-8.webp",
                  alt: "Design system components",
                },
                {
                  src: "/case_studies/rabbu_marketplace/market-9.webp",
                  alt: "Expanded palette",
                },
              ]}
            >
              <p>
                Rabbu came in with a font and a color palette used across
                their marketing and ads. From that starting point I expanded
                the palette for product use, built a component library, and
                established UI patterns that could scale across the full
                platform. The system developed alongside the product rather
                than as a separate phase, so every component was grounded in
                a real design problem rather than built speculatively.
              </p>
              <p>
                Translating a marketing visual language into a product UI
                system was one of the more nuanced parts of the project.
                Marketing assets are designed to attract. Product UI has to
                guide. The decisions about what carried over and what needed
                rethinking shaped the system throughout.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Information Architecture"
              image={{
                src: "/case_studies/rabbu_portofolio/8.webp",
                alt: "Unified account matrix and user journey",
              }}
            >
              <p>
                With multiple tools being redesigned and a new feature being
                added, getting the information architecture right was the most
                time-consuming part of the project. Marketplace and Portfolio
                served different jobs: Marketplace was for finding and
                evaluating properties to acquire, Portfolio was for managing
                ones you already owned. But investors moved between them as
                their relationship with Rabbu deepened, so the connection
                between them had to feel intentional.
              </p>
              <p>
                I mapped the user journey across both products to define how
                navigation, account state, and data should flow between them.
                That work led to Rabbu One, a unified account system giving
                investors seamless access to everything from a single login.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="solution"
            ref={(el) => (sectionRefs.current.solution = el)}
            className="case-study-section mb-12"
          >
            <Label>Solution</Label>
            <CaseStudySection
              title="Marketplace"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  icon: <Calculator size={20} />,
                  title: "Revenue Estimates",
                  description: "Redesigned for clarity.",
                },
                {
                  icon: <BarChart size={20} />,
                  title: "Market Data",
                  description: "Redesigned for clarity.",
                },
                {
                  icon: <Home size={20} />,
                  title: "Properties for Sale",
                  description: "Net new feature for browsing on-market properties.",
                },
              ]}
              image={{
                src: "/case_studies/rabbu_marketplace/market-1.webp",
                alt: "Marketplace overview",
              }}
            >
              <p>
                Marketplace was the acquisition side of the platform,
                redesigned and expanded into three tools: Revenue Estimates,
                Market Data, and Properties for Sale.
              </p>
              <p>
                Revenue Estimates and Market Data were existing tools
                redesigned for clarity. The original versions were
                functionally confusing, so the redesign focused on making the
                data easier to read and the interactions more intuitive.
                Properties for Sale was a net new feature, giving investors a
                place to browse on-market properties with underwriting
                provided by Rabbu directly in the platform.
              </p>
              <p>
                The goal was making the three tools feel like one research
                experience. Each informed the next: you'd estimate revenue for
                an address, understand the market around it, then find
                properties that matched your criteria.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Investment tools"
              image={{
                src: "/case_studies/rabbu_marketplace/market-10.webp",
                alt: "Investment return calculator",
              }}
            >
              <p>
                Two additional features supported the acquisition decision.
                The investment return calculator let investors determine the
                equity required to acquire a property and estimate potential
                earnings with custom financial inputs. The high-performance
                property comparison tool let investors evaluate properties
                based on their own goals, whether cash flow or long-term
                appreciation.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Freemium model"
              image={{
                src: "/case_studies/rabbu_marketplace/market-9.webp",
                alt: "Freemium paywall state",
              }}
            >
              <p>
                A key decision on Marketplace was how to handle access tiers.
                We compared free trial versus freemium and landed on freemium
                because it aligned with Rabbu's goal of growing their user base
                organically. The design challenge was making the value of
                upgrading feel clear without degrading the free experience.
                Users could still run estimates and browse properties. Premium
                unlocked deeper comparables and advanced filtering, surfaced at
                the right moments rather than behind a hard wall.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Portfolio"
              accentColor="var(--color-rabbu)"
              infoCards={[
                {
                  icon: <LayoutDashboard size={20} />,
                  title: "Dashboard",
                  description: "Customizable snapshot to orient at a glance.",
                },
                {
                  icon: <Calendar size={20} />,
                  title: "Properties, Calendar, Reviews, Activity, Pricing, Statements",
                  description: "Dense information made navigable.",
                },
              ]}
              infoCardsLayout="info-cards-four"
              image={{
                src: "/case_studies/rabbu_portofolio/4.avif",
                alt: "Portfolio dashboard",
              }}
            >
              <p>
                Portfolio was the management side of the platform, redesigned
                for clarity across Dashboard, Properties, Calendar, Reviews,
                Activity, Pricing, and Statements. The redesign focused on
                making a dense amount of information feel navigable without
                losing depth.
              </p>
              <p>
                The dashboard became a customizable snapshot so investors could
                orient at a glance and drill into what mattered. The activity
                feed and reviews section surfaced guest updates proactively,
                reducing the need to dig through each property individually.
                Pricing and statements gave investors direct access to
                financials without having to leave the platform.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Properties and calendar view"
              image={{
                src: "/case_studies/rabbu_portofolio/6.webp",
                alt: "Properties and calendar view",
              }}
            >
              <p>
                Bookings and property status displayed across multiple
                properties.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="impact"
            ref={(el) => (sectionRefs.current.impact = el)}
            className="case-study-section mb-12"
          >
            <Label>Impact</Label>
            <CaseStudySection title="Results">
              <p>
                The MVP launched in October 2022. Within one month the platform
                had 33,000 unique users running estimates and 2,000 accounts
                created. Rabbu went from a collection of fragmented, hard to
                use tools to a unified platform with a shared visual language,
                consistent navigation, and a single account system tying it
                all together.
              </p>
            </CaseStudySection>
            <CaseStudySection title="Reflection">
              <p>
                This project taught me that redesigning existing products is a
                different challenge than building new ones. You're working
                with established user expectations and existing functionality,
                so every change has to be justified, not just aesthetically but
                functionally.
              </p>
              <p>
                Building the design system from a marketing visual language
                also shaped how I think about product UI. The decisions about
                what to carry over and what to rethink were some of the most
                important ones on the project. A shared system that everyone
                understood made the rest of the work move faster and stay
                consistent.
              </p>
            </CaseStudySection>
          </section>

          <MoreWork currentProjectSlug={currentProjectSlug} onClose={onClose} />
        </div>

        <TableOfContents sections={tocSections} sectionRefs={sectionRefs} />
      </div>
    </div>
  );
}

export default Rabbu;
