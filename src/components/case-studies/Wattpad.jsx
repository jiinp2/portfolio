import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import CaseStudySection from "./components/CaseStudySection";
import Label from "../ui/Label";

const PAGE_TITLE = "Wattpad Text Scenes";

const TEXT_LINK_CLASS =
  "underline underline-offset-2 decoration-current hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 rounded-sm";

const THEME_SLIDES = [
  {
    src: "/case_studies/wattpad/blue.png",
    alt: "Blue theme text scene preview",
  },
  {
    src: "/case_studies/wattpad/green.png",
    alt: "Green theme text scene preview",
  },
  {
    src: "/case_studies/wattpad/purple.png",
    alt: "Purple theme text scene with character initials",
  },
];

const SIDE_BY_SIDE_PROSE_CLASS =
  "[&>p]:text-sm [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:max-w-[560px] [&>p]:mx-auto [&>p]:block [&>p]:text-left";

function ThemeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % THEME_SLIDES.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto w-[78%]">
      <div
        className="relative aspect-[672/562] w-full overflow-hidden rounded-xl bg-[#f3f4f6] p-3"
        aria-live="polite"
      >
        {THEME_SLIDES.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-xl object-contain transition-opacity duration-500 ${
              slideIndex === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            aria-hidden={slideIndex !== index}
          />
        ))}
      </div>
      <div
        className="mt-3 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Message themes"
      >
        {THEME_SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={slideIndex === index}
            aria-label={slide.alt}
            className={`h-2 w-2 cursor-pointer rounded-full p-0 transition-colors ${
              slideIndex === index
                ? "bg-text"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-neutral-600 dark:hover:bg-neutral-500"
            }`}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
}

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
                Messaging is a widely used narrative device that can be seen in
                many works across all genres. Having to stitch together custom
                code to provide a more immersive experience is a real barrier to
                entry. Many writers opt for workarounds such as using a
                character’s name, colon, and then the message.
              </p>
              <p>
                That had me thinking.{" "}
                <b>
                  What would a more user-friendly solution to emmulating real
                  life messaging look like for Wattpad?
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
                the end of story poll.
              </p>
              <p>
                I can see that it's already intuitive to add photos within the
                story and can see how similarily text scenes could be inserted
                the same way.
              </p>
              <p>
                My first step was to redesign the editor to help make my
                interactive demo more realistic.
              </p>
              <div className="image-container mt-8 mb-8">
                <img
                  src="/case_studies/wattpad/editor.png"
                  alt="Redesigned Wattpad editor with header image and video controls above the story"
                />
              </div>
            </CaseStudySection>
          </section>

          <section id="inserting-a-text-scene" className="case-study-section">
            <CaseStudySection
              title="Inserting a text scene"
              sideBySide={{
                reverse: true,
                image: {
                  src: "/case_studies/wattpad/toolbar.png",
                  alt: "Editor toolbar with Add image, Add video, Text scene, and Poll",
                },
              }}
            >
              <p>
                Text scene sits in the same row as Add image, Add video, and
                Poll. It should feel like another thing you can drop into the
                story, not a separate mode. The NEW label is there so writers
                notice it the first time.
              </p>
            </CaseStudySection>
          </section>

          <section id="message-themes" className="case-study-section">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-base font-semibold leading-tight tracking-tight text-text">
                  Message themes
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    I added themes for the messages, Blue is iOS, green is SMS,
                    and purple is similar to Discord.
                  </p>
                </div>
              </div>
              <ThemeCarousel />
            </div>
          </section>

          <section id="future-considerations" className="case-study-section">
            <Label>Future Considerations</Label>
            <CaseStudySection>
              <p>
                There were a lot of chat options that were left out in the demo
                like timestamps, a chatroom title, what if the characters send
                photos to each other, that could be implemented in future
                iterations.
              </p>
              <p>
                I think the concept of having an arsenal of different tools to
                help Wattpadders have more creative control is a interesting
                idea to explore.
              </p>
            </CaseStudySection>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Wattpad;
