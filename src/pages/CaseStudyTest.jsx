import { MessageSquare, Search, Users, Folder } from "lucide-react";
import CaseStudySection from "../components/case-studies/components/CaseStudySection";
import Label from "../components/ui/Label";

function CaseStudyTest() {
  return (
    <div className="case-study-content">
      <h1 className="text-3xl font-bold mb-8">CaseStudySection Component Variants</h1>

      {/* Variant 1: Basic Section with Title and Content */}
      <section className="case-study-section">
        <Label>Variant 1: Basic Section</Label>
        <CaseStudySection title="Basic Section Example">
          <p>
            This is a basic section with just a title and content. It's the
            simplest variant of the CaseStudySection component.
          </p>
        </CaseStudySection>
      </section>

      {/* Variant 2: Section with Info Cards (3 columns) */}
      <section className="case-study-section">
        <Label>Variant 2: Section with Info Cards (3 columns)</Label>
        <CaseStudySection
          title="Info Cards Example"
          infoCards={[
            {
              icon: <MessageSquare size={20} />,
              title: "Card 1",
              description: "This is the first info card with an icon.",
            },
            {
              icon: <Search size={20} />,
              title: "Card 2",
              description: "This is the second info card with an icon.",
            },
            {
              icon: <Users size={20} />,
              title: "Card 3",
              description: "This is the third info card with an icon.",
            },
          ]}
          infoCardsLayout="info-cards-three"
          accentColor="var(--color-maison)"
        >
          <p>
            This section includes info cards displayed in a 3-column grid layout.
          </p>
        </CaseStudySection>
      </section>

      {/* Variant 3: Section with Info Cards (4 columns) */}
      <section className="case-study-section">
        <Label>Variant 3: Section with Info Cards (4 columns)</Label>
        <CaseStudySection
          title="Four Column Info Cards"
          infoCards={[
            {
              number: 1,
              title: "Step One",
              description: "First step in the process.",
            },
            {
              number: 2,
              title: "Step Two",
              description: "Second step in the process.",
            },
            {
              number: 3,
              title: "Step Three",
              description: "Third step in the process.",
            },
            {
              number: 4,
              title: "Step Four",
              description: "Fourth step in the process.",
            },
          ]}
          infoCardsLayout="info-cards-four"
          accentColor="var(--color-maison)"
        >
          <p>This section shows info cards in a 4-column layout.</p>
        </CaseStudySection>
      </section>

      {/* Variant 4: Side-by-Side Layout (Normal) */}
      <section className="case-study-section">
        <Label>Variant 4: Side-by-Side Layout (Normal)</Label>
        <CaseStudySection
          title="Side-by-Side Normal"
          sideBySide={{
            image: {
              src: "/case_studies/maison/profile.png",
              alt: "Profile example",
            },
          }}
        >
          <p>
            This is a side-by-side layout with the image on the left and content
            on the right. On mobile, it stacks vertically with the image below.
          </p>
        </CaseStudySection>
      </section>

      {/* Variant 5: Side-by-Side Layout (Reversed) */}
      <section className="case-study-section">
        <Label>Variant 5: Side-by-Side Layout (Reversed)</Label>
        <CaseStudySection
          title="Side-by-Side Reversed"
          sideBySide={{
            image: {
              src: "/case_studies/maison/community.png",
              alt: "Community example",
            },
            reverse: true,
          }}
        >
          <p>
            This is a reversed side-by-side layout with the content on the left
            and image on the right. On mobile, it stacks vertically with the
            image below.
          </p>
        </CaseStudySection>
      </section>

      {/* Variant 6: Section with Single Image */}
      <section className="case-study-section">
        <Label>Variant 6: Section with Single Image</Label>
        <CaseStudySection
          title="Single Image Example"
          image={{
            src: "/case_studies/maison/maison-hero.png",
            alt: "Single image example",
          }}
        >
          <p>
            This section includes a single full-width image below the content.
          </p>
        </CaseStudySection>
      </section>

      {/* Variant 7: Section with Multiple Images */}
      <section className="case-study-section">
        <Label>Variant 7: Section with Multiple Images</Label>
        <CaseStudySection
          title="Multiple Images Example"
          images={[
            {
              src: "/case_studies/maison/profile.png",
              alt: "Image 1",
            },
            {
              src: "/case_studies/maison/community.png",
              alt: "Image 2",
            },
          ]}
        >
          <p>This section displays multiple images in a grid layout.</p>
        </CaseStudySection>
      </section>

      {/* Variant 8: Section with Photo Grid */}
      <section className="case-study-section">
        <Label>Variant 8: Section with Photo Grid (4 columns)</Label>
        <CaseStudySection
          title="Photo Grid Example"
          photoGrid={[
            {
              src: "/case_studies/maison/profile.png",
              alt: "Grid image 1",
            },
            {
              src: "/case_studies/maison/community.png",
              alt: "Grid image 2",
            },
            {
              src: "/case_studies/maison/maison-hero.png",
              alt: "Grid image 3",
            },
            {
              src: "/case_studies/maison/profile.png",
              alt: "Grid image 4",
            },
          ]}
        >
          <p>
            This section displays images in a 4-column photo grid layout.
          </p>
        </CaseStudySection>
      </section>

      {/* Variant 9: Combined - Info Cards + Image */}
      <section className="case-study-section">
        <Label>Variant 9: Combined - Info Cards + Image</Label>
        <CaseStudySection
          title="Combined Example"
          infoCards={[
            {
              icon: <Folder size={20} />,
              title: "Feature 1",
              description: "Description of feature one.",
            },
            {
              icon: <MessageSquare size={20} />,
              title: "Feature 2",
              description: "Description of feature two.",
            },
          ]}
          infoCardsLayout="info-cards-three"
          image={{
            src: "/case_studies/maison/maison-hero.png",
            alt: "Combined example image",
          }}
        >
          <p>
            This section combines info cards with a single image below them.
          </p>
        </CaseStudySection>
      </section>
    </div>
  );
}

export default CaseStudyTest;

