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

  const ImagePlaceholder = ({ snippet, caption }) => (
    <p className="mt-4 mb-4 text-sm text-text-muted italic border-l-2 border-gray-200 pl-4">
      [ UI SNIPPET: {snippet} ]
      <br />
      <span className="not-italic">{caption}</span>
    </p>
  );

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
                Maison was an attempt to fix that. I joined as the founding
                design engineer and spent nine months designing and building a
                dedicated platform for real estate professionals, through two
                major pivots before the company closed in early 2026.
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
                We built tooling for agents to refer clients to contractors. We
                underestimated the domain expertise required and how little
                trust existed between unfamiliar parties.
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
                We scrapped the marketplace and reframed the problem. The real
                pain wasn't referrals, it was fragmentation. Agents had no
                single place to find peers, share resources, or build their
                professional presence. We built that.
              </p>
              <p>
                <strong>Phase 3 — Trust & Verification</strong> (Late 2025)
                <br />
                In the final weeks we began exploring verified credentials as a
                trust layer on top of the network. Transaction history,
                licenses, reviews. The company closed in January 2026 before
                designs matured.
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
                Real estate professionals juggle at least three tools to do
                what one platform should handle: finding peers, communicating
                with their team, sharing resources, and building their
                reputation. None of those tools were built with them in mind.
              </p>
              <p>
                The design challenge was building something with enough depth
                to replace those tools, without the complexity that makes
                professionals distrust platforms built for them.
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
                As the founding design engineer I worked across the full
                product: UX strategy, information architecture, visual design,
                brand identity, and frontend implementation in Next.js and
                React. I was involved in pivot decisions throughout, not just
                executing direction but helping shape where the product went.
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
              <ImagePlaceholder
                snippet="Directory with filters"
                caption="Show the browse experience and filter system"
              />
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
                to work for both without being optimized for neither.
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
                unread counts, and message types surfaced a lot of edge cases
                that only become clear when you're building the thing yourself.
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
                to coded prototype in days. I owned the frontend implementation,
                server components, client interactivity, and UI state, working
                closely with the engineering team on backend systems like
                real-time messaging, payments, and file storage. Design and
                engineering rarely had a formal handoff. I'd share direction
                through calls and Linear tickets, the team would build a
                baseline, and I'd go in directly to refine and iterate from
                there.
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
                Maison closed before public launch. Phase 2 produced a
                complete, working product. Real-time messaging, community
                moderation, file management, and subscription flows were all
                live and being tested internally.
              </p>
              <p>
                The fragmentation problem resonated immediately with every
                agent we spoke to. Where we ran out of time was depth, giving
                professionals enough reason to make it their primary tool
                rather than another tab to check.
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
                didn't.
              </p>
              <p>
                <strong>What I'd do differently:</strong> deeper research before
                Phase 1. We would have found the right problem faster.
              </p>
              <p>
                <strong>What I'm proud of:</strong> design quality held through
                every pivot, the product was genuinely complete by the time we
                closed, and I had a real seat at the table for every strategic
                decision.
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
