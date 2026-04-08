import { useRef } from "react";
import MoreWork from "../MoreWork";
import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudySection from "./components/CaseStudySection";
import TableOfContents from "./components/TableOfContents";

function Maison({ onClose, currentProjectSlug }) {
  const sectionRefs = useRef({});

  const tocSections = [
    { id: "overview", label: "Overview" },
    { id: "evolution", label: "How We Got Here" },
    { id: "problem", label: "The Problem" },
    { id: "role", label: "My Role" },
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

          <section
            id="overview"
            ref={(el) => (sectionRefs.current.overview = el)}
            className="case-study-section"
          >
            <CaseStudySection title="Overview">
              <p>
                Maison is a professional networking platform for real estate
                agents. I was the founding product designer, working directly
                with the founder over 10 months. There was no PM, no design
                system, and no established roadmap when I joined. Product
                decisions were made between me and the founder.
              </p>
              <p>The company went through two pivots before closing in early 2026.</p>
            </CaseStudySection>
          </section>

          <section
            id="evolution"
            ref={(el) => (sectionRefs.current.evolution = el)}
            className="case-study-section"
          >
            <CaseStudySection title="How We Got Here">
              <p>
                We didn&apos;t start with the right idea. The first product
                required agents, homeowners, and contractors to all be active on
                the platform at the same time, and getting one group without the
                others meant nobody saw value. We went back to the drawing board
                and talked to agents directly. What kept coming up was
                fragmentation. Not any single missing feature, but the exhaustion
                of stitching together tools that were never built for them.
              </p>

              <div
                className="mt-8 w-full flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3"
                role="img"
                aria-label="Phase 1 renovation marketplace compared to Phase 2 professional network"
              >
                <div className="bg-gray-50 rounded-xl p-5 flex flex-col gap-3 text-left lg:flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted m-0">
                    Phase 1 · Apr 2025
                  </p>
                  <p className="text-base font-semibold text-text m-0 tracking-tight">
                    Renovation marketplace
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed m-0">
                    Referral platform connecting homeowners to vetted contractors
                    via agents. Contractors assigned to geographic patches.
                  </p>
                  <ul className="text-sm text-text-muted leading-relaxed m-0 pl-5 list-disc space-y-1">
                    <li>Agents</li>
                    <li>Homeowners</li>
                    <li>Contractors</li>
                  </ul>
                  <p className="text-sm leading-relaxed m-0 mt-1 rounded-lg border border-red-200/70 bg-red-50 px-3 py-2.5 text-red-950">
                    All three groups needed to be active at once. Too many moving
                    parts before anyone saw value.
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
                Real estate professionals cobble together at least three tools
                to do what one platform should handle: finding peers,
                coordinating with their team, sharing resources, and building
                their professional reputation. None of those tools were built
                with them in mind.
              </p>
              <p>
                The design challenge wasn't feature parity. It was earning
                trust from professionals who had already tried generic tools
                and abandoned them. The product had to feel purpose-built from
                the first screen, or it wouldn't get a second look.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="role"
            ref={(el) => (sectionRefs.current.role = el)}
            className="case-study-section"
          >
            <CaseStudySection title="My Role">
              <p>
                As the founding product designer, I owned the full design
                surface: UX strategy, information architecture, visual design,
                brand, and frontend implementation in Next.js and React. There
                was no design team to hand off to. I shipped production UI
                alongside the engineers.
              </p>
              <p>
                For brand, we anchored to a visual language familiar from
                LinkedIn (professional density, restrained colour) then pushed
                it toward something more purpose-built for real estate. The
                goal was immediate legibility: professionals should land on it
                and recognise what kind of product it was without being told.
              </p>
              <p>
                I was also in the room for both pivot decisions, helping frame
                what the product should become before any wireframes were
                drawn.
              </p>
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
                Phase 2 was a full professional network with five core
                surfaces.
              </p>
            </CaseStudySection>
            <CaseStudySection title="Directory">
              <p>
                The entry point to the platform. Professionals could be found
                by location, language, expertise, and role. The design challenge
                was making filtering feel lightweight, more like browsing a
                professional community than running a database query.
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
                Each professional had their own profile page: intro,
                achievements, links, and credentials. The page served two
                audiences, peers evaluating a potential collaborator and future
                clients evaluating who to hire. The information hierarchy had
                to work for both without being optimized for either.
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
                Professionals could create or join communities, public or
                private, discoverable or invite-only. Each community had its
                own posts, files, events, and member roles. Established
                professionals had a reason to build on the platform. Newer
                agents had a reason to join.
              </p>
              <p>
                Designing the permission system, owner, admin, moderator,
                member, meant thinking carefully about what each role could see
                and do without making the UI feel like enterprise software.
              </p>
            </CaseStudySection>
            <CaseStudySection title="File & Resource Management">
              <p>
                Each community had a shared file system: folder trees, uploads,
                permissions. This was the direct replacement for WhatsApp
                threads where files were getting lost. The design had to feel
                familiar enough that professionals would trust it with real
                documents.
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
                persisted across the platform. Designing for read state,
                unread counts, and notification logic surfaced edge cases that
                only emerge when you're simultaneously designing and building.
                What does "read" mean in a group thread? When does a
                notification badge clear? Those decisions had to be resolved in
                code, not just in mockups.
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
                Working in Next.js and React meant I could move from wireframe
                to production in days. I owned the full frontend: server
                components, client interactivity, and UI state. I built the
                component library from scratch with defined variants, which
                gave the engineering team a stable UI foundation and kept
                visual consistency across surfaces as the product evolved.
              </p>
              <p>
                I avoided a formal handoff process. I'd align on direction
                through a call or a Linear ticket, let the team build a
                working baseline, then go in directly to iterate. It kept the
                feedback loop tight and meant design decisions got tested in
                the real product, not in a prototype.
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
                Maison closed before public launch. By that point Phase 2 was
                fully functional: real-time messaging, community moderation,
                file management, and subscription flows were all live and
                being tested internally with a small group of agents.
              </p>
              <p>
                The fragmentation problem resonated with every agent we spoke
                to across roughly 15 interviews spanning both phases. The
                harder problem was habit change: getting professionals to make
                Maison their primary tool rather than a parallel tab required
                depth and daily utility we didn't have time to build. We
                validated the problem. We didn't get to the tipping point.
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
                Working at a startup as a founding team member taught me more
                than I expected. Without a defined process or team to lean on,
                I had to figure out what the product needed and how to move it
                forward at the same time.
              </p>
              <p>
                <strong>What I'd do differently:</strong> start with research.
                A few conversations with agents before Phase 1 would have
                surfaced the fragmentation problem weeks earlier.
              </p>
              <p>
                <strong>What I took from it:</strong> I'm glad I took on a
                role with real product ownership right out of my software
                engineering diploma. Shaping what got built, not just designing
                it, and shipping production code at the same time pushed me in
                ways a more defined role wouldn't have.
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
