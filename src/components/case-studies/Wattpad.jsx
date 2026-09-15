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

const WATTPAD_MEDIA_GRADIENT =
  "linear-gradient(160deg, #FF9358 0%, #FF7A3A 36%, #FF460D 72%, #C23006 100%)";

const WATTPAD_MEDIA_FRAME_STYLE = { background: WATTPAD_MEDIA_GRADIENT };

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
        className="relative aspect-[672/562] w-full overflow-hidden rounded-lg bg-[#f3f4f6] p-3"
        aria-live="polite"
      >
        {THEME_SLIDES.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg object-contain transition-opacity duration-500 ${
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
              <div
                className="w-full overflow-hidden rounded-lg pt-4 px-3 pb-0"
                style={WATTPAD_MEDIA_FRAME_STYLE}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src="/case_studies/wattpad/text-scene.png"
                    alt="Create a text scene editor with a live message preview"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <section id="background" className="case-study-section">
            <Label>Background</Label>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                  Where the idea started
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
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
                    ” This tutorial has 4,801 bookmarks and 217k hits on AO3,
                    which says a lot about how much people want this.
                  </p>
                  <p>
                    Messaging is a widely used narrative device that can be seen
                    in many works across genres. Having to stitch together
                    custom code to provide a more immersive experience is a
                    barrier to entry. Many{" "}
                    <a
                      href="https://www.wattpad.com/209376890-formatting-for-text-conversation-texting"
                      className={TEXT_LINK_CLASS}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wattpadders
                    </a>{" "}
                    opt for workarounds such as using a character’s name, colon,
                    and then the message.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                  The question
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    That had me thinking.{" "}
                    <b>
                      What would a more user-friendly solution to emulating
                      real life messaging look like for Wattpad?
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="design-process" className="case-study-section">
            <Label>Design Process</Label>
            <CaseStudySection title="Redesigning the editor">
              <p>
                I started with trying to write my own story using Wattpad and
                noticed the in-line photo and video link icons and the end of
                story poll.
              </p>
              <p>
                It's already easy to add media in the story, and I could see how
                text scenes could work the same way. My first step was to
                redesign the editor to help make my interactive demo more
                realistic.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <div className="image-container">
                  <img
                    src="/case_studies/wattpad/wattpad-current.png"
                    alt="Wattpad story editor showing a draft titled The Signal"
                  />
                </div>
                <div
                  className="image-container"
                  style={WATTPAD_MEDIA_FRAME_STYLE}
                >
                  <img
                    src="/case_studies/wattpad/editor.png"
                    alt="Redesigned Wattpad editor with header image and video controls above the story"
                  />
                </div>
              </div>
            </CaseStudySection>
          </section>

          <section id="designing-one-toolbar" className="case-study-section">
            <div className="mb-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-base font-semibold leading-tight tracking-tight text-text">
                  Designing one toolbar
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    Image, Video, and Poll didn't behave the same way on
                    Wattpad. I unified all of it into one consistent toolbar,
                    Text scene included.
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center rounded-lg bg-[#f3f4f6] p-4">
                <img
                  src="/case_studies/wattpad/toolbar.png"
                  alt="Editor toolbar with Add image, Add video, Text scene, and Poll"
                  className="max-h-[500px] w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </section>

          <section id="text-scene-creator" className="case-study-section">
            <CaseStudySection title="Text scene creator">
              <p>
                This is where writers build the conversation. They set up
                characters, pick a theme, write messages as each person, and
                check a live preview before inserting it into the story.
              </p>
              <div
                className="image-container mt-8"
                style={WATTPAD_MEDIA_FRAME_STYLE}
              >
                <img
                  src="/case_studies/wattpad/text-scene.png"
                  alt="Text scene creator with compose controls and a live message preview"
                />
              </div>
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
                    Writers can match the scene to how the characters would
                    actually text. Blue for iOS, green for SMS, purple for
                    something closer to Discord.
                  </p>
                </div>
              </div>
              <ThemeCarousel />
            </div>
          </section>

          <section id="reorder-scenes" className="case-study-section">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-base font-semibold leading-tight tracking-tight text-text">
                  Reorder scenes
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    Once a text scene is in the story, writers can drag it
                    around like any other block instead of deleting and
                    rebuilding it.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-[78%]">
                <div className="flex w-full items-center justify-center rounded-lg bg-[#f3f4f6] p-3">
                  <video
                    src="/case_studies/wattpad/scene-reorder.mp4"
                    className="w-full rounded-lg object-contain"
                    loop
                    muted
                    playsInline
                    autoPlay
                    aria-label="Reordering text scenes in the editor"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="next-steps" className="case-study-section">
            <Label>Next Steps</Label>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                  Richer chat features
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    The demo left out a lot of chat details, like timestamps, a
                    chatroom title, and sending photos between characters.
                    Those could come in a later pass.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                  More creative tools
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    I keep coming back to the idea of giving Wattpadders more
                    built-in tools for creative control, not just this one.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Wattpad;
