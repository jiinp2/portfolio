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
            subtitle="A redesign of the user interface and user flow of the popular eBook and audiobook app."
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
                This project, the final assignment for the UI Design course at
                BrainStation, involved choosing the Kobo mobile application to
                redesign its user interface.
              </p>
            </CaseStudySection>

            <CaseStudySection title="What is Kobo?">
              <p>
                Kobo is a reading platform that offers a wide selection of
                e-books and audiobooks for users to access on their electronic
                devices.
              </p>
            </CaseStudySection>

            <CaseStudySection title="Objective">
              <p>
                The objective of the project was to enhance the app's user
                interface by applying the skills and knowledge acquired
                throughout the course. Additionally, I aimed to improve user
                flows and clarify the application's offerings for users seeking
                a comprehensive e-book and audiobook app.
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
                  <Check className="outcome-icon" size={20} />A redesigned
                  onboarding process to better showcase the app's key features,
                  setting clear expectations.
                </li>
                <li>
                  <Check className="outcome-icon" size={20} />
                  Reorganizing the tab bar and redesigning the hierarchy helps
                  users navigate the app more efficiently, while an updated
                  visual style offers a more modern look.
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

            <CaseStudySection
              title="Competitor Analysis"
              image={{
                src: "/case_studies/kobo/kobo-2.webp",
                alt: "Competitor Analysis",
              }}
            >
              <p>
                A competitor analysis was conducted to better understand the
                e-book and audiobook market and gather insights into user
                expectations in terms of features and flows.
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
                Additional platforms were studied to gain insights into how
                content is organized when there is large number of content to
                choose from. For example, apps like Spotify were examined to see
                how users manage access to two different types of content (music
                and podcasts).
              </p>
            </CaseStudySection>

            <CaseStudySection title="App Analysis">
              <p>
                The app was reviewed in-depth through a heuristic review using
                Jakob Nielson's 10 general principles for interactive design.
                This approach helped identify areas for improvement and ensured
                that the redesign would align with industry standards.
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
                Takeaways based on app store reviews to see how real users felt
                about the app.
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
                Planning the information architecture visually allowed me to map
                out where to move or combine different features and as a
                reference for prioritizing redesigns within the project's scope.
                The goal was to make it easier for users to find what they are
                looking for by improving the app's navigation and organization.
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
                Early ideations were explored through sketches and mid-fidelity
                wireframes of key screens. These helped to iterate on navigation
                and interactions, and refine the information architecture.
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
                This moodboard was created with the goal of using imagery that
                evokes a nostalgic and warm feeling of a local bookshop inspired
                by copy on Kobo's website stating, 'Your favourite local
                bookshop.'
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
                This style guide introduces an updated color palette that
                revitalizes Kobo's current visual language.
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
                The redesigned Kobo app addresses key user pain points through
                improved navigation, enhanced discoverability, and a more
                intuitive user experience.
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
                The redesigned onboarding process introduces users to
                personalization possibilities and the breadth of content
                available. This ensures users are immediately aware of the app's
                capabilities, setting the stage for a tailored and engaging
                experience from the start.
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
                The different subscription plans are outlined upfront. Users can
                choose their preferred genres, enabling the tailored
                recommendations.
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
                The tab bar has been redesigned for improved navigation
                efficiency. Users can also reorganize their Home Screen
                according to their usage patterns.
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
                Users can now effortlessly switch between their eBooks,
                audiobooks, and collections in a unified library interface.
                Simplifying navigation and reducing the cognitive load, making
                it easier for users to manage and access their content.
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
                A new grid view showcases book covers, enabling users to
                visually sift through titles more easily. Accompanied by
                personalized book lists, this design enhances discoverability
                and ensures users can find books that cater to their tastes with
                minimal effort.
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
                Key information about books is displayed above the fold,
                including a clear indication that books cannot be directly
                purchased in the app. This transparency eliminates confusion and
                helps set accurate expectations for the purchasing process.
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
              <p>
                An updated search that allows users to search titles and
                authors.
              </p>
              <p>
                The profile design is a quick concept where users can follow
                each other, view the books they are currently reading, share
                goals and awards, and more.
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
