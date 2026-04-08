import { useRef } from "react";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Maison({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "background", label: "Background" },
    { id: "problem", label: "The Problem" },
    { id: "process", label: "Process" },
    { id: "built", label: "What We Built" },
    { id: "technical", label: "Technical Depth" },
    { id: "outcomes", label: "Outcomes" },
    { id: "reflection", label: "Reflection" },
  ];

  return (
    <div className="case-study-overlay maison-case-study">
      <div className="case-study-layout">
        <div className="case-study-left">
          <button className="back-button sticky" onClick={onClose}>
            <span className="back-arrow">←</span> Back
          </button>
        </div>

        <div className="case-study-content">
          <CaseStudyHero
            title="Maison"
            subtitle="A professional network for real estate professionals"
            imageSrc="/case_studies/maison/maison-hero.png"
            imageAlt="Maison Hero"
            infoItems={[
              { label: "Role", value: "Founding Product Designer" },
              {
                label: "Scope",
                value: "Product Design · Frontend Development · Strategy",
              },
              { label: "Timeline", value: "April 2025 – January 2026" },
              { label: "Status", value: "Closed before public launch" },
            ]}
          />

          <div
            className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full"
            role="img"
            aria-label="Project stats: 10 months, 2 pivots, over 20 interviews, 5 features"
          >
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center sm:text-left">
              <div className="text-xs text-text-muted tracking-tight">Timeline</div>
              <div className="mt-1 text-lg font-semibold text-text tracking-tight">
                10 mo
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center sm:text-left">
              <div className="text-xs text-text-muted tracking-tight">Pivots</div>
              <div className="mt-1 text-lg font-semibold text-text tracking-tight">
                2
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center sm:text-left">
              <div className="text-xs text-text-muted tracking-tight">Interviews</div>
              <div className="mt-1 text-lg font-semibold text-text tracking-tight">
                20+
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-center sm:text-left">
              <div className="text-xs text-text-muted tracking-tight">Features</div>
              <div className="mt-1 text-lg font-semibold text-text tracking-tight">
                5
              </div>
            </div>
          </div>

          <section
            id="overview"
            ref={(el) => (sectionRefs.current.overview = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Overview">
              <p>
                Maison is a professional networking platform for real estate
                agents. In a field where reputation and relationships drive
                business, agents had no dedicated space for either.
              </p>
              <p>
                I joined as the founding product designer and worked directly
                with the founder on product direction and hiring. I covered the
                full design scope, from UX strategy and visual design to frontend
                implementation in React.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="background"
            ref={(el) => (sectionRefs.current.background = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Background">
              <p>
                Maison started as a referral-only platform connecting
                homeowners, realtors, and contractors through exclusive geographic
                patches. Platforms like Angi, HomeStars, and Jiffy are built on
                volume and we were building the high-trust alternative. Getting all
                three groups active on a brand new platform wasn&apos;t gaining
                traction fast enough, and we pivoted to focus entirely on agents.
              </p>

              <div
                className="mt-8 w-full flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3"
                role="img"
                aria-label="Phase 1 referral marketplace compared to Phase 2 professional network"
              >
                <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 text-left lg:flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0">
                    Phase 1 · Apr 2025
                  </p>
                  <p className="text-base font-semibold text-text m-0 tracking-tight">
                    Referral marketplace
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed m-0">
                    Homeowners, realtors, and contractors linked through exclusive
                    geographic patches—the high-trust alternative to
                    volume-first marketplaces.
                  </p>
                  <ul className="text-sm text-text-muted leading-relaxed m-0 pl-5 list-disc space-y-1">
                    <li>Agents</li>
                    <li>Homeowners</li>
                    <li>Contractors</li>
                  </ul>
                  <p className="text-sm leading-relaxed m-0 mt-1 rounded-lg border border-red-200/70 bg-red-50 px-3 py-2.5 text-red-950">
                    All three groups needed traction on a new platform; growth
                    wasn&apos;t fast enough to continue.
                  </p>
                </div>

                <div
                  className="hidden lg:flex shrink-0 items-center justify-center px-1 text-text-muted text-2xl font-light select-none"
                  aria-hidden
                >
                  →
                </div>

                <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 text-left lg:flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0">
                    Phase 2 · Mid 2025
                  </p>
                  <p className="text-base font-semibold text-text m-0 tracking-tight">
                    Professional network
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed m-0">
                    Focused on agents only. One platform for directory,
                    communities, messaging, files, and profiles.
                  </p>
                  <ul className="text-sm text-text-muted leading-relaxed m-0 pl-5 list-disc space-y-1">
                    <li>Directory</li>
                    <li>Communities</li>
                    <li>Messaging · Files · Profiles</li>
                  </ul>
                  <p className="text-sm leading-relaxed m-0 mt-1 rounded-lg border border-emerald-200/70 bg-emerald-50 px-3 py-2.5 text-emerald-950">
                    Shipped fully functional. Closed before public launch.
                  </p>
                </div>
              </div>
            </CaseStudySection>
          </section>

          <section
            id="problem"
            ref={(el) => (sectionRefs.current.problem = el)}
            className="case-study-section"
          >
            <CaseStudySection title="The Problem">
              <p>
                Real estate agents felt like their industry was behind. Compared
                to other professions, the tools available to them were generic
                and disconnected. They were managing their work across WhatsApp,
                Facebook groups, email threads, and generic CRMs, none of which
                were built for them. We interviewed 20+ agents and real estate
                influencers across both phases and the ask was consistent: a
                platform built specifically for how they work, network, and grow
                their reputation.
              </p>

              <div
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full max-w-full"
                role="img"
                aria-label="Before: fragmented tools. After: Maison"
              >
                <div className="bg-gray-50 rounded-xl p-5 text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0 mb-2">
                    Before
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed m-0">
                    WhatsApp · Facebook groups · Email · Generic CRMs — tools
                    stitched together, none built for agents.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0 mb-2">
                    After
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed m-0">
                    Maison — one place for networking, reputation, communities,
                    files, and messaging.
                  </p>
                </div>
              </div>
            </CaseStudySection>
          </section>

          <section
            id="process"
            ref={(el) => (sectionRefs.current.process = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Process">
              <p>
                Agents wanted a professional space to build reputation and stay
                connected to peers. We built presence first, a directory and
                profiles so agents could be found and stand out. Then
                communities, because reputation in real estate comes from
                relationships and contribution, not a static page. Messaging and
                file management came last, the everyday utility that would give
                agents a reason to keep coming back.
              </p>

              <div className="mt-8 w-full">
                <div
                  className="w-full flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3"
                  role="img"
                  aria-label="Build order: presence, then engagement, then utility"
                >
                  <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 text-left lg:flex-1 min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0">
                      First
                    </p>
                    <p className="text-base font-semibold text-text m-0 tracking-tight">
                      Presence
                    </p>
                    <ul className="text-sm text-text-muted leading-relaxed m-0 pl-5 list-disc space-y-1">
                      <li>Directory</li>
                      <li>Profiles</li>
                    </ul>
                    <div
                      className="border-t border-gray-200 my-1"
                      aria-hidden
                    />
                    <p className="text-sm text-text-muted leading-relaxed m-0">
                      Agents need to be findable and differentiated before
                      anything else.
                    </p>
                  </div>

                  <div
                    className="hidden lg:flex shrink-0 items-center justify-center px-1 text-text-muted text-2xl font-light select-none"
                    aria-hidden
                  >
                    →
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 text-left lg:flex-1 min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0">
                      Second
                    </p>
                    <p className="text-base font-semibold text-text m-0 tracking-tight">
                      Engagement
                    </p>
                    <ul className="text-sm text-text-muted leading-relaxed m-0 pl-5 list-disc space-y-1">
                      <li>Communities</li>
                    </ul>
                    <div
                      className="border-t border-gray-200 my-1"
                      aria-hidden
                    />
                    <p className="text-sm text-text-muted leading-relaxed m-0">
                      Reputation is built through relationships and contribution,
                      not a static page.
                    </p>
                  </div>

                  <div
                    className="hidden lg:flex shrink-0 items-center justify-center px-1 text-text-muted text-2xl font-light select-none"
                    aria-hidden
                  >
                    →
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 text-left lg:flex-1 min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0">
                      Third
                    </p>
                    <p className="text-base font-semibold text-text m-0 tracking-tight">
                      Utility
                    </p>
                    <ul className="text-sm text-text-muted leading-relaxed m-0 pl-5 list-disc space-y-1">
                      <li>Messaging</li>
                      <li>File management</li>
                    </ul>
                    <div
                      className="border-t border-gray-200 my-1"
                      aria-hidden
                    />
                    <p className="text-sm text-text-muted leading-relaxed m-0">
                      Day-to-day utility to give agents a reason to keep coming
                      back.
                    </p>
                  </div>
                </div>
              </div>
            </CaseStudySection>
          </section>

          <section
            id="built"
            ref={(el) => (sectionRefs.current.built = el)}
            className="case-study-section"
          >
            <CaseStudySection
              title="What We Built"
              image={{
                src: "/case_studies/maison/maison-home.png",
                alt: "Maison home",
              }}
            >
              <p>
                Phase 2 was a full professional network: directory, profiles,
                communities, shared files, and messaging—built so agents could
                work and connect in one place.
              </p>
            </CaseStudySection>
            <CaseStudySection title="Directory">
              <p>
                Professionals could be found by location, language, expertise,
                and role. The goal was to make filtering feel like browsing a
                professional community, not running a database query.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Profiles"
              image={{
                src: "/case_studies/maison/maison-profile.png",
                alt: "Profile page",
              }}
            >
              <p>
                Each professional had a profile with intro, credentials,
                achievements, and links. It served two audiences: peers
                evaluating a collaborator and clients evaluating who to hire. We
                shaped it around how agents present themselves professionally,
                credentials and track record up front, rather than a generic
                social profile layout.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Communities"
              image={{
                src: "/case_studies/maison/maison-community.png",
                alt: "Community page",
              }}
            >
              <p>
                Agents were already running communities on Facebook but the
                platform wasn&apos;t built for their needs. We studied how those
                groups worked and borrowed familiar patterns so the experience
                felt immediately legible. Established agents got a place to build
                visibility. Newer agents got a reason to engage with the field.
              </p>
            </CaseStudySection>
            <CaseStudySection title="File & Resource Management">
              <p>
                Each community had a shared file system with folder trees,
                uploads, and permissions. This was the direct replacement for
                WhatsApp threads where files were getting lost. Agents responded
                well to this during testing and said it fixed something they dealt
                with every day.
              </p>
            </CaseStudySection>
            <CaseStudySection
              title="Messaging"
              image={{
                src: "/case_studies/maison/maison-message.png",
                alt: "Messaging",
              }}
            >
              <p>
                Real-time DMs and group chats with a floating chat UI that
                persisted across the platform. Building in design and code at the
                same time meant edge cases came up fast. Notification logic, read
                states, and unread counts got resolved in the real product rather
                than in mockups.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="technical"
            ref={(el) => (sectionRefs.current.technical = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Technical Depth">
              <p>
                I could take a new feature from wireframe to production in about
                three to four weeks. I built the component library from scratch,
                which gave the engineering team a consistent foundation and kept
                the UI coherent as the product grew. Rather than formal handoffs,
                I&apos;d align on direction through a call or a Linear ticket, let
                the team build a working baseline, then go in directly to
                iterate.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="outcomes"
            ref={(el) => (sectionRefs.current.outcomes = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Outcomes">
              <p>
                Phase 2 shipped fully functional before the company closed.
                Real-time messaging, community moderation, file management, and
                subscription flows were all live in internal testing with agents.
                Maison closed in early 2026 before reaching public launch.
                During testing, agents responded positively to file management
                and the networking features. Finding other professionals and
                staying current with the field were the things they said
                they&apos;d actually use. What we didn&apos;t fully solve was
                habit change. Getting professionals to make it their primary
                tool required more depth than we had time to build.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="reflection"
            ref={(el) => (sectionRefs.current.reflection = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Reflection">
              <p>
                This role pushed me to think beyond design and into product
                strategy. Along the way I developed a stronger sense of the why
                behind decisions, not just the how. I&apos;m looking to build on
                that in my next role.
              </p>
              <p>
                I&apos;m glad I took on a role with real product ownership right
                out of my software engineering diploma. Getting to influence what
                got built, not just design it, and shipping production code at
                the same time pushed me in ways a more defined role wouldn&apos;t
                have.
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

export default Maison;
