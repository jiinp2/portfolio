import { useRef } from "react";
import { Check, X } from "lucide-react";
import Label from "../ui/Label";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Kobo({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  // Table of contents sections
  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "design-research", label: "Design Research" },
    { id: "design-process", label: "Design Process" },
    { id: "final-design", label: "Final Design" },
  ];

  return (
    <div className="case-study-overlay kobo-case-study">
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
            title="Kobo"
            subtitle="A redesign of the Kobo eBook and audiobook app interface and flows."
            imageSrc="/case_studies/kobo/kobo-hero.avif"
            imageAlt="Kobo Hero"
            infoItems={[
              { label: "Role", value: "UI & UX Designer" },
              {
                label: "Scope",
                value: "Design Research, UI & UX Design",
              },
              { label: "Platform", value: "Mobile App (Concept)" },
              { label: "Timeline", value: "Nov - Dec 2021" },
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
                For the final project in BrainStation&apos;s UI Design course, I
                redesigned the Kobo mobile app.
              </p>
            </CaseStudySection>

            <CaseStudySection title="What is Kobo?">
              <p>
                Kobo is a reading app for eBooks and audiobooks across phones
                and other devices.
              </p>
            </CaseStudySection>

            <CaseStudySection title="Objective">
              <p>
                I wanted to tighten the interface and the main flows, and make
                it clearer what the app offers for people looking for eBooks and
                audiobooks in one place.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Outcomes"
              image={{
                src: "/case_studies/kobo/kobo-1.webp",
                alt: "Kobo Outcomes",
              }}
            >
              <ul className="outcomes-list">
                <li>
                  <Check className="outcome-icon" size={20} />A clearer
                  onboarding flow that shows the main features up front.
                </li>
                <li>
                  <Check className="outcome-icon" size={20} />A reworked tab bar
                  and hierarchy so navigation is simpler, plus a more current
                  visual style.
                </li>
              </ul>
              <p>
                This was a course project for BrainStation&apos;s UI Design
                program, not a shipped product, so there&apos;s no usage data.
                The heuristic review and app-store takeaways were the evidence
                for every decision.
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

            <CaseStudySection
              title="Competitor Analysis"
              image={{
                src: "/case_studies/kobo/kobo-2.webp",
                alt: "Competitor Analysis",
              }}
            >
              <p>
                I looked at other eBook and audiobook apps to see what people
                expect from features and flows.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Additional Apps"
              image={{
                src: "/case_studies/kobo/kobo-3.webp",
                alt: "Additional Apps",
              }}
            >
              <p>
                I also studied apps with a lot of content to choose from.
                Spotify was useful for how it handles two content types (music
                and podcasts) in one place.
              </p>
            </CaseStudySection>

            <CaseStudySection title="App Analysis">
              <p>
                I ran a heuristic review of Kobo using Jakob Nielsen&apos;s 10
                usability principles to find what to fix in the redesign.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Key Takeaways"
              image={{
                src: "/case_studies/kobo/kobo-4.webp",
                alt: "Key Takeaways",
              }}
            >
              <ul className="takeaways-list">
                <li>
                  More context should be provided for features to effectively
                  communicate their value.
                </li>
                <li>
                  Offer personalization during onboarding to tailor content for
                  users.
                </li>
                <li>
                  Ensure consistency with features shown online and make
                  different subscription tiers visible.
                </li>
              </ul>
            </CaseStudySection>

            <CaseStudySection
              title="Navigation Key Takeaways"
              image={{
                src: "/case_studies/kobo/kobo-5.webp",
                alt: "Navigation Key Takeaways",
              }}
            >
              <ul className="takeaways-list">
                <li>Clarify the purpose of unclear sections in the app.</li>
                <li>
                  Could combine e-books and audiobooks into one library for
                  simpler navigation.
                </li>
                <li>
                  Can increase customization options to include progress
                  tracking and other relevant features.
                </li>
              </ul>
            </CaseStudySection>

            <div className="subsection">
              <h3 className="text-lg font-semibold text-default mb-4 tracking-tight leading-tight">
                App Store Reviews
              </h3>
              <p>
                Takeaways from app store reviews on how real users felt about
                the app.
              </p>

              <div className="review-categories">
                <div className="review-category">
                  <h4>Confusing Aspects</h4>
                  <ul className="review-list">
                    <li>
                      <X className="review-icon" size={18} />
                      The application is difficult to navigate
                    </li>
                    <li>
                      <X className="review-icon" size={18} />
                      Misunderstandings of how books can be purchased
                    </li>
                  </ul>
                </div>
                <div className="review-category">
                  <h4>Lacks User-Friendliness</h4>
                  <ul className="review-list">
                    <li>
                      <X className="review-icon" size={18} />
                      Accessing various features are not very intuitive
                    </li>
                    <li>
                      <X className="review-icon" size={18} />
                      Frustrations from unresponsiveness
                    </li>
                  </ul>
                </div>
                <div className="review-category">
                  <h4>Missing Features</h4>
                  <ul className="review-list">
                    <li>
                      <X className="review-icon" size={18} />
                      Unable to search books based on author or certain genres
                    </li>
                    <li>
                      <X className="review-icon" size={18} />
                      Book recommendations that are relevant to the user
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section
            id="design-process"
            ref={(el) => (sectionRefs.current["design-process"] = el)}
            className="case-study-section"
          >
            <Label>Design Process</Label>

            <CaseStudySection
              title="Information Architecture"
              image={{
                src: "/case_studies/kobo/kobo-6.webp",
                alt: "Information Architecture Diagram",
              }}
            >
              <p>
                Mapping the information architecture showed where to move or
                combine features, and what to prioritize in scope. The goal was
                simpler navigation so people could find what they need.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Early Wireframes"
              image={{
                src: "/case_studies/kobo/kobo-7.webp",
                alt: "Early Wireframes",
              }}
            >
              <p>
                I explored ideas through sketches and mid-fidelity wireframes of
                key screens, iterating on navigation, interactions, and the
                information architecture.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Moodboard"
              image={{
                src: "/case_studies/kobo/kobo-8.webp",
                alt: "Moodboard",
              }}
            >
              <p>
                The moodboard aimed for a nostalgic, warm local-bookshop feel,
                inspired by Kobo&apos;s own line, &apos;Your favourite local
                bookshop.&apos;
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Style Guide"
              image={{
                src: "/case_studies/kobo/kobo-9.webp",
                alt: "Style Guide",
              }}
            >
              <p>
                The style guide updates the color palette while staying
                recognizable as Kobo.
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

            <CaseStudySection>
              <p>
                The redesign focuses on clearer navigation, easier discovery,
                and flows that are simpler to follow.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Introducing Key Features"
              sideBySide={{
                image: {
                  src: "/case_studies/kobo/kobo-10.webp",
                  alt: "Onboarding Screens",
                },
                reverse: true,
              }}
            >
              <p>
                Onboarding introduces personalization and the range of content
                available, so people know what the app can do from the start.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Subscriptions & User Preferences"
              sideBySide={{
                image: {
                  src: "/case_studies/kobo/kobo-11.webp",
                  alt: "Subscriptions & Preferences Screens",
                },
                reverse: false,
              }}
            >
              <p>
                Subscription plans show up front. Users can pick preferred
                genres so recommendations fit them.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Redesigned Tab Bar & Home Screen Customization"
              image={{
                src: "/case_studies/kobo/kobo-12.webp",
                alt: "Tab Bar & Home Screen Customization",
              }}
            >
              <p>
                The tab bar is reworked for clearer navigation. Users can also
                reorder the Home screen to match how they use the app.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Combined eBook & Audiobook Library"
              sideBySide={{
                image: {
                  src: "/case_studies/kobo/kobo-13.webp",
                  alt: "Combined Library Screens",
                },
                reverse: true,
              }}
            >
              <p>
                eBooks, audiobooks, and collections live in one library, so
                switching between them is simpler.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Easier to Find & Choose Books"
              sideBySide={{
                image: {
                  src: "/case_studies/kobo/kobo-14.webp",
                  alt: "Discover Screens",
                },
                reverse: false,
              }}
            >
              <p>
                A grid of covers makes browsing titles faster, with personalized
                lists to help people find books that fit them.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Context At-A-Glance"
              sideBySide={{
                image: {
                  src: "/case_studies/kobo/kobo-15.webp",
                  alt: "Book Detail Screens",
                },
                reverse: true,
              }}
            >
              <p>
                Key book details sit above the fold, including a clear note that
                books can&apos;t be purchased in-app, so expectations are set
                early.
              </p>
            </CaseStudySection>

            <CaseStudySection
              title="Search & Profile"
              sideBySide={{
                image: {
                  src: "/case_studies/kobo/kobo-16.webp",
                  alt: "Search & Profile Screens",
                },
                reverse: false,
              }}
            >
              <p>Search covers titles and authors.</p>
              <p>
                The profile is a quick concept for following people, seeing what
                they&apos;re reading, and sharing goals and awards.
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

export default Kobo;
