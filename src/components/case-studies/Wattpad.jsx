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

const WATTPAD_MEDIA_WIDTH_CLASS = "w-full md:mx-auto md:w-[78%]";

const JOURNEY_STEPS = [
  {
    number: 1,
    title: "In the part",
    description:
      "Writer is mid-draft and wants to add a text conversation in the story.",
  },
  {
    number: 2,
    title: "Pick Text scene",
    description:
      "Same insert row as image, video, and poll, so it feels like another story block.",
  },
  {
    number: 3,
    title: "Build the conversation",
    description:
      "Theme, characters, and messages come together with a live preview before anything hits the page.",
  },
  {
    number: 4,
    title: "Drop it in",
    description:
      "The scene inserts into the part as content they can keep writing around.",
  },
  {
    number: 5,
    title: "Adjust while editing",
    description:
      "As the plot shifts, they can move scenes instead of rebuilding them.",
  },
];

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
    <div className={WATTPAD_MEDIA_WIDTH_CLASS}>
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
            <div className="relative z-10 mx-auto mb-5 max-w-[560px]">
              <h1 className="pointer-events-none m-0 min-w-0 text-xl font-semibold tracking-tight text-default">
                {PAGE_TITLE}
              </h1>
              <p className="case-study-subtitle m-0 mt-1 text-base font-normal leading-relaxed text-light">
                A conceptual feature for Wattpad
              </p>
              <a
                href="https://w-prototype.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text transition-colors hover:bg-gray-100 hover:border-gray-300 dark:hover:bg-dark-bg-elevated dark:hover:border-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600"
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
                    which says a lot about how much people want this. Writers on
                    Wattpad run into the same problem, just with fewer tools to
                    work with.
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
                      What would a more user-friendly solution to emulating real
                      life messaging look like for Wattpad?
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="design-process" className="case-study-section">
            <Label>Design Process</Label>
            <div className="mb-24 w-full max-w-none">
              <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                User journey
              </h3>
              <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                <p>
                  Before UI, I wrote out the flow I wanted writers to stay in:
                  create a text scene without leaving the part editor or
                  learning a new mode.
                </p>
              </div>
              <ol className="mt-8 flex list-none flex-col gap-8 p-0 md:flex-row md:items-start md:gap-10">
                {JOURNEY_STEPS.map((step) => (
                  <li key={step.number} className="min-w-0 flex-1">
                    <h4 className="m-0 mb-2 text-left text-base font-semibold leading-tight tracking-tight text-text">
                      <span className="text-[#FF460D]">{step.number}. </span>
                      {step.title}
                    </h4>
                    <p className="m-0 text-left text-sm leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <CaseStudySection title="Mocking the editor">
              <p>
                I started with trying to write my own story using Wattpad and
                noticed the in-line photo and video link icons and the end of
                story poll.
              </p>
              <p>
                It's already easy to add media in the story, and I could see how
                text scenes could work the same way. I mocked the editor shell
                so the prototype felt native to Wattpad, not like a separate
                tool dropped on top.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <div className={WATTPAD_MEDIA_WIDTH_CLASS}>
                  <div className="image-container">
                    <img
                      src="/case_studies/wattpad/wattpad-current.png"
                      alt="Wattpad story editor showing a draft titled The Signal"
                      className="max-h-[520px] w-full object-contain object-top"
                    />
                  </div>
                </div>
                <div className={WATTPAD_MEDIA_WIDTH_CLASS}>
                  <div
                    className="image-container"
                    style={WATTPAD_MEDIA_FRAME_STYLE}
                  >
                    <img
                      src="/case_studies/wattpad/editor.png"
                      alt="Redesigned Wattpad editor with header image and video controls above the story"
                      className="max-h-[520px] w-full object-contain object-top"
                    />
                  </div>
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
              <div className={`mt-8 ${WATTPAD_MEDIA_WIDTH_CLASS}`}>
                <div
                  className="image-container"
                  style={WATTPAD_MEDIA_FRAME_STYLE}
                >
                  <img
                    src="/case_studies/wattpad/text-scene.png"
                    alt="Text scene creator with compose controls and a live message preview"
                    className="max-h-[520px] w-full object-contain object-top"
                  />
                </div>
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
              <div className={WATTPAD_MEDIA_WIDTH_CLASS}>
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

          <section id="mobile" className="case-study-section">
            <CaseStudySection title="Designed for mobile readers">
              <p>
                Most Wattpad reading happens on phone, so text scenes needed to
                work there too. On smaller screens, Make and Preview split into
                tabs so writers can build a conversation without cramming two
                panels onto one screen, and inserted scenes still read clearly
                in the part.
              </p>
              <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="flex w-full items-center justify-center rounded-lg bg-[#f3f4f6] p-3">
                  <img
                    src="/case_studies/wattpad/mobile-1.png"
                    alt="Mobile part editor with an inserted Batman and Robin text scene"
                    className="w-full max-h-[520px] rounded-lg object-contain object-top"
                  />
                </div>
                <div className="flex w-full items-center justify-center rounded-lg bg-[#f3f4f6] p-3">
                  <img
                    src="/case_studies/wattpad/mobile-2.png"
                    alt="Mobile text scene creator with Make and Preview tabs"
                    className="w-full max-h-[520px] rounded-lg object-contain object-top"
                  />
                </div>
              </div>
            </CaseStudySection>
          </section>

          <section id="next-steps" className="case-study-section">
            <Label>Next Steps</Label>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                  Validate with writers
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    If I were on the Wattpad team, I’d validate this flow with
                    writers before locking the interaction model. I’d want to
                    know whether toolbar insert and live preview feel natural
                    mid-draft.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mx-auto mb-4 block max-w-[560px] text-left text-base font-semibold leading-tight tracking-tight text-text">
                  Richer chat features
                </h3>
                <div className={SIDE_BY_SIDE_PROSE_CLASS}>
                  <p>
                    The demo left out a lot of chat details, like timestamps, a
                    chatroom title, sending photos between characters, and being
                    able to edit the scene later.
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
