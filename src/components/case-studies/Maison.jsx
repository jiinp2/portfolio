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
              { label: "Role", value: "Founding Design Engineer" },
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
                Real estate professionals have no professional home. Deals get
                coordinated over WhatsApp, referrals happen through Facebook
                groups, and files get lost in email threads. Every tool they
                rely on was built for someone else.
              </p>
              <p>
                Maison was built to fix that. I joined as the founding design
                engineer and spent nine months designing and building a dedicated
                platform for real estate professionals — through two major pivots
                before the company closed in early 2026.
              </p>
            </CaseStudySection>
          </section>

          <section
            id="evolution"
            ref={(el) => (sectionRefs.current.evolution = el)}
            className="case-study-section"
          >
            <CaseStudySection title="How We Got Here">
              <p>We didn't start with the right idea.</p>
              <p>
                <strong>Phase 1 — Renovation Marketplace</strong> (April 2025)
                <br />
                We built tooling for agents to refer clients to contractors. It
                failed quickly. The referral relationship required trust that
                didn't exist between strangers on a new platform, and the domain
                knowledge needed to vet contractors was deeper than we
                anticipated. We were solving a distribution problem without
                addressing the underlying trust gap.
              </p>
              <div className="mt-4 mb-6 max-w-[560px] mx-auto">
                <div className="w-full bg-[#f3f4f6] rounded-xl p-4 flex items-center justify-center">
                  <img
                    src="/case_studies/maison/maison-phase-1.png"
                    alt="Maison Phase 1 — Renovation Marketplace"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
              <p>
                <strong>Phase 2 — Professional Network</strong> (Mid 2025)
                <br />
                Scrapping the marketplace forced us to go back to the agents
                themselves. What consistently surfaced in those conversations
                was fragmentation — not any single missing feature, but the
                exhaustion of stitching together five different tools for tasks
                that should happen in one place. We built that platform: a
                directory, communities, messaging, file management, and
                professional profiles.
              </p>
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
                The design challenge wasn't feature parity — it was earning
                trust from professionals who had already tried generic tools and
                abandoned them. The product had to feel purpose-built from the
                first screen, or it wouldn't get a second look.
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
                As the founding design engineer, I owned the full design
                surface — UX strategy, information architecture, visual design,
                brand, and frontend implementation in Next.js and React. There
                was no design team to hand off to; I shipped production UI
                alongside the engineers.
              </p>
              <p>
                For brand, we made a deliberate choice to anchor to a visual
                language familiar from LinkedIn — professional density, restrained
                colour — then pushed it toward something more purpose-built for
                real estate. The goal was immediate legibility: professionals
                should land on it and recognise what kind of product it was
                without being told.
              </p>
              <p>
                Beyond execution, I was part of the strategic layer: I was in
                the room for both pivot decisions, helping frame what the
                product should become before a single wireframe was drawn. That
                combination — being able to think through strategy and then
                build the thing — defined how I worked throughout.
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
                persisted across the platform. Designing for read state, unread
                counts, and notification logic surfaced edge cases that only
                emerge when you're simultaneously designing and building: what
                does "read" mean in a group thread? When does a notification
                badge clear? Those decisions had to be resolved in code, not
                just in Figma.
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
                component library from scratch — React components with defined
                variants — which gave the engineering team a stable UI
                foundation and kept visual consistency across surfaces as the
                product evolved. On backend systems — real-time messaging,
                payments, file storage — I worked closely with the engineering
                team, shaping requirements and refining once a baseline was
                live.
              </p>
              <p>
                I deliberately avoided a formal handoff process. I'd align on
                direction through a call or a Linear ticket, let the team build
                a working baseline, then go in directly to iterate from there.
                It kept the feedback loop tight and meant design decisions could
                be tested in the real product, not in a prototype.
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
                fully functional — real-time messaging, community moderation,
                file management, and subscription flows were all live and being
                tested internally with a small group of agents.
              </p>
              <p>
                The fragmentation problem resonated with every agent we spoke
                to — across roughly 15 interviews spanning both phases. The harder problem was habit change: getting professionals
                to make Maison their primary tool, rather than a parallel tab,
                required depth and daily utility we didn't have time to build.
                We validated the problem. We didn't get to the tipping point.
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
                Working through two pivots taught me to attach to problems
                rather than solutions. The UI changed completely between
                phases. The core frustration agents had with their tools
                didn't. That's the thing worth protecting.
              </p>
              <p>
                <strong>What I'd do differently:</strong> front-load research.
                A few structured conversations with agents before Phase 1 would
                have surfaced the fragmentation problem weeks earlier and saved
                us from building the wrong thing first.
              </p>
              <p>
                <strong>What I'm proud of:</strong> I had a real seat at the
                table for both pivots — helping shape what the product became,
                not just executing someone else's direction. Design quality held
                through every change, and when the company closed we had
                something genuinely finished. That's rare in a startup that
                pivoted twice.
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
