import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import CaseStudySection from "./components/CaseStudySection";
import Label from "../ui/Label";

const PAGE_TITLE = "Wattpad Text Scenes";

const TEXT_LINK_CLASS =
  "underline underline-offset-2 decoration-current hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 rounded-sm";

function Wattpad({ onClose }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="case-study-overlay">
      <div className="case-study-layout">
        <div className="case-study-left">
          <button
            className="back-button sticky"
            onClick={onClose}
            type="button"
          >
            <span className="back-arrow">←</span> Back
          </button>
        </div>

        <div className="case-study-content">
          <div className="hero-section mb-16">
            <div className="relative z-10 mx-auto mb-5 flex max-w-[560px] items-center justify-between gap-4">
              <h1 className="pointer-events-none m-0 min-w-0 text-xl font-semibold tracking-tight text-default">
                {PAGE_TITLE}
              </h1>
              <a
                href="https://w-prototype.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text transition-colors hover:bg-gray-100 hover:border-gray-300 dark:hover:bg-dark-bg-elevated dark:hover:border-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600"
              >
                <ExternalLink
                  size={16}
                  className="shrink-0"
                  aria-hidden="true"
                />
                Live demo
              </a>
            </div>
            <div className="hero-image-container w-full">
              <div className="hero-card relative aspect-video overflow-hidden bg-[linear-gradient(160deg,#FF9358_0%,#FF7A3A_36%,#FF460D_72%,#C23006_100%)]">
                <img
                  src="/case_studies/wattpad/text-scene.png"
                  alt="Create a text scene editor with a live message preview"
                  className="pointer-events-none absolute inset-0 h-full w-full origin-top-left scale-100 object-cover object-left-top"
                />
              </div>
            </div>
          </div>

          <section id="background" className="case-study-section">
            <Label>Background</Label>
            <CaseStudySection>
              <p>
                This idea started from watching a{" "}
                <a
                  href="https://www.tiktok.com/@ethannku/video/7683541776770026766?is_from_webapp=1&sender_device=pc"
                  className={TEXT_LINK_CLASS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>{" "}
                demonstrating a tutorial called “
                <a
                  href="https://archiveofourown.org/works/6434845/chapters/14729722"
                  className={TEXT_LINK_CLASS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to Make iOS Text Messages on AO3.
                </a>
                ” This tutorial has 4,801 bookmarks and 217k hits on AO3 which
                showcases the popularity of this customization.
              </p>
              <p>
                Messaging is a commonly used narrative device that can be seen
                in many works across all genres. Having to use custom code to
                provide a more immersive experience is a real barrier to entry.
                Many writers opt for workarounds such as using a character’s
                name, colon, and then the message.
              </p>
              <p>
                That had me thinking.{" "}
                <b>
                  What would a more user-friendly solution to emmulating a real
                  life text messaging experience be for Wattpad?
                </b>
              </p>
            </CaseStudySection>
          </section>

          <section id="design-process" className="case-study-section">
            <Label>Design Process</Label>
            <div className="image-container mb-8">
              <img
                src="/case_studies/wattpad/wattpad-current.png"
                alt="Wattpad story editor showing a draft titled The Signal"
              />
            </div>
            <CaseStudySection>
              <p>
                I started with trying to write my own story using Wattpad and
                immediately noticed the in-line photo and video link icons and
                the poll.
              </p>
              <p>
                I can see that it's already intuitive to add photos within the
                story and can see how similarily text scenes could be added in
                the same way.
              </p>
            </CaseStudySection>
          </section>

          <section id="future-considerations" className="case-study-section">
            <Label>Future Considerations</Label>
            <CaseStudySection>
              <p>
                The prototype covers a single scene. A fuller version would need
                to handle longer threads, more than two people in a chat, and
                how a finished scene lands in the story without the writer
                having to clean it up afterward.
              </p>
            </CaseStudySection>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Wattpad;
