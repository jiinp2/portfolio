import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FileText, Mail } from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import ProjectCard from "../components/ProjectCard";
import TabSection from "../components/TabSection";
import PageToggle from "../components/PageToggle";
import { projects } from "../data/projects";

const SIDEBAR_TEXT_TRANSITION =
  "transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

const TIMELINE_ROW_CLASS =
  "grid grid-cols-[1fr_2fr] gap-2 items-start max-md:gap-2";

const TIMELINE_YEAR_CLASS = `text-sm text-text-light font-normal ${SIDEBAR_TEXT_TRANSITION}`;

const TIMELINE_TITLE_CLASS = `text-sm font-medium text-text ${SIDEBAR_TEXT_TRANSITION}`;

const TIMELINE_ORG_CLASS = `text-sm text-text-light font-normal ${SIDEBAR_TEXT_TRANSITION}`;

const SOCIAL_PILL_CLASS =
  "inline-flex items-center gap-2 py-2 px-4 bg-gray-100 text-text-muted rounded-full no-underline text-sm font-medium transition-all duration-200 hover:bg-gray-200 hover:text-text";

const EXPERIENCE_ENTRIES = [
  { period: "2025/26", title: "Founding Product Designer", place: "Maison" },
  { period: "2022/23", title: "Product Designer", place: "Drip Design" },
  {
    period: "2020",
    title: "UI Design & UX Research Intern",
    place: "Myant",
  },
];

const EDUCATION_ENTRIES = [
  {
    period: "2025",
    title: "Software Engineering",
    place: "BrainStation",
  },
  {
    period: "2022",
    title: "Design System",
    place: "Memorisely",
  },
  {
    period: "2021",
    title: "Industrial Design",
    place: "OCADU",
  },
];

const SOCIAL_LINKS = [
  { href: "/JiinPark_Resume.pdf", label: "Resume", kind: "file" },
  {
    href: "https://www.linkedin.com/in/jiinnoh/",
    label: "LinkedIn",
    kind: "image",
    imageSrc: "/home/linkedin.png",
    imageAlt: "LinkedIn",
  },
  {
    href: "https://github.com/jiinp2",
    label: "GitHub",
    kind: "image",
    imageSrc: "/home/github.png",
    imageAlt: "GitHub",
  },
  { href: "mailto:jiinpark.work@gmail.com", label: "Email", kind: "mail" },
];

const SECTION_HEADING_CLASS = `text-sm font-medium text-text tracking-wide leading-tight m-0 ${SIDEBAR_TEXT_TRANSITION}`;

function setBodyScrollLocked(locked) {
  document.body.style.overflow = locked ? "hidden" : "auto";
}

function TimelineTabPanel({ entries }) {
  return (
    <div className="mb-0">
      <div className="mb-10 last:mb-0 max-md:gap-2">
        <div className="flex flex-col gap-6">
          {entries.map(({ period, title, place }) => (
            <div key={`${period}-${place}`} className={TIMELINE_ROW_CLASS}>
              <span className={TIMELINE_YEAR_CLASS}>{period}</span>
              <div className="flex flex-col gap-2">
                <div className={TIMELINE_TITLE_CLASS}>{title}</div>
                <div className={TIMELINE_ORG_CLASS}>{place}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Work() {
  const navigate = useNavigate();
  const { projectSlug } = useParams();
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return (savedTab === "skills" ? "experience" : savedTab) || "experience";
  });
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const openCaseStudy = (projectIndex) => {
    const project = projects[projectIndex];
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(`/${project.slug}`);
    setSelectedProject(projectIndex);
    setIsCaseStudyOpen(true);
    setBodyScrollLocked(true);
  };

  const closeCaseStudy = () => {
    navigate("/");
    setIsCaseStudyOpen(false);
    setSelectedProject(null);
    setBodyScrollLocked(false);
  };

  useEffect(() => {
    if (projectSlug) {
      const projectIndex = projects.findIndex((p) => p.slug === projectSlug);
      if (projectIndex !== -1) {
        setSelectedProject(projectIndex);
        setIsCaseStudyOpen(true);
        setBodyScrollLocked(true);
      }
    } else {
      setIsCaseStudyOpen(false);
      setSelectedProject(null);
      setBodyScrollLocked(false);
    }
  }, [projectSlug]);

  const selectedProjects = projects.filter(
    (project) => project.category === "case-studies",
  );

  const additionalProjects = [...projects]
    .filter((project) => project.category === "misc")
    .sort((a, b) => (b.date < a.date ? -1 : 1));

  return (
    <div
      className={`grid grid-cols-[minmax(320px,380px)_1fr] h-screen w-screen transition-[grid-template-columns] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:h-auto max-md:grid-cols-1 ${
        isCaseStudyOpen ? "grid-cols-1" : ""
      }`}
    >
      <aside
        className={`bg-surface p-16 border-r border-border text-text h-auto overflow-y-auto overflow-x-hidden [scrollbar-gutter:stable] transition-[background-color,border-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:relative max-md:w-screen max-md:min-h-auto max-md:h-auto max-md:p-8 max-md:border-r-0 max-md:border-b max-md:border-b-border max-md:order-1 max-md:overflow-visible max-md:overflow-y-visible max-md:[scrollbar-gutter:auto] max-sm:p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600 ${
          isCaseStudyOpen
            ? "max-md:transform max-md:-translate-x-full max-md:opacity-0 max-md:transition-[transform,opacity] max-md:duration-[800ms] max-md:ease-[cubic-bezier(0.4,0,0.2,1)]"
            : ""
        }`}
      >
        <div className="w-full max-md:max-w-none max-md:text-left">
          <div className="mb-10 max-md:mb-8">
            <div className="flex items-center justify-between gap-4 max-md:mb-6">
              <Link
                to="/"
                className="w-20 h-20 rounded-full bg-surface-muted flex items-center justify-center mb-6 max-md:mb-0 overflow-hidden cursor-pointer no-underline transition-[background-color,transform] duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02]"
              >
                <img
                  src="/home/jiin_profile.png"
                  alt="Jiin Park"
                  className="h-full w-full rounded-full object-cover dark:hidden"
                />
                <img
                  src="/home/jiin_ac.png"
                  alt="Jiin Park"
                  className="hidden h-full w-full rounded-full object-cover dark:block"
                />
              </Link>
              <div className="hidden max-md:block">
                <PageToggle onToggle={toggleTheme} />
              </div>
            </div>
            <h1
              className={`text-xl font-semibold text-text mb-2 tracking-tight leading-tight ${SIDEBAR_TEXT_TRANSITION} max-md:text-xl max-sm:text-xl`}
            >
              Jiin Park
            </h1>
            <p
              className={`text-base text-text-light mb-3 font-normal ${SIDEBAR_TEXT_TRANSITION} max-md:text-base max-md:mb-3 max-sm:text-base`}
            >
              Product Designer
            </p>
            <p
              className={`text-sm text-text-muted leading-relaxed mb-0 ${SIDEBAR_TEXT_TRANSITION} last:mb-0`}
            >
              Hi, I'm a product designer who's owned end-to-end scope at
              early-stage startups, from UX strategy to shipping production
              code as a founding design hire.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap mb-10 max-md:mb-8">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={SOCIAL_PILL_CLASS}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.kind === "file" && (
                  <FileText size={16} className="flex-shrink-0 text-current" />
                )}
                {item.kind === "mail" && (
                  <Mail size={16} className="flex-shrink-0 text-current" />
                )}
                {item.kind === "image" && (
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-4 h-4 flex-shrink-0 object-contain"
                  />
                )}
                {item.label}
              </a>
            ))}
          </div>

          <TabSection activeTab={activeTab} onTabChange={setActiveTab}>
            {activeTab === "experience" && (
              <TimelineTabPanel entries={EXPERIENCE_ENTRIES} />
            )}
            {activeTab === "education" && (
              <TimelineTabPanel entries={EDUCATION_ENTRIES} />
            )}
          </TabSection>
        </div>
      </aside>

      <main
        className="overflow-y-auto h-screen p-16 w-full bg-surface-page text-text transition-[background-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:ml-0 max-md:h-auto max-md:p-8 max-md:order-2 max-sm:p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-600"
      >
        <div className="mb-8 flex justify-end">
          <div className="max-md:hidden shrink-0">
            <PageToggle onToggle={toggleTheme} />
          </div>
        </div>

        <section>
          <h2 className={`${SECTION_HEADING_CLASS} mb-8 max-md:mb-6`}>
            Selected Projects
          </h2>
          <div className="grid grid-cols-3 gap-10 w-full max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-6">
            {selectedProjects.map((project) => {
              const originalIndex = projects.findIndex(
                (p) => p.name === project.name,
              );
              return (
                <ProjectCard
                  key={originalIndex}
                  project={project}
                  index={originalIndex}
                  isSelected={selectedProject === originalIndex}
                  onClick={openCaseStudy}
                />
              );
            })}
          </div>
        </section>

        {additionalProjects.length > 0 ? (
          <section className="mt-20 max-md:mt-16">
            <h2 className={`${SECTION_HEADING_CLASS} mb-8 max-md:mb-6`}>
              Additional Work
            </h2>
            <div className="grid grid-cols-3 gap-10 w-full max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-6">
              {additionalProjects.map((project) => {
                const originalIndex = projects.findIndex(
                  (p) => p.slug === project.slug,
                );
                return (
                  <ProjectCard
                    key={originalIndex}
                    project={project}
                    index={originalIndex}
                    isSelected={selectedProject === originalIndex}
                    onClick={openCaseStudy}
                    useStandardPreview
                  />
                );
              })}
            </div>
          </section>
        ) : null}
      </main>

      {isCaseStudyOpen && selectedProject !== null && (
        <CaseStudy
          project={projects[selectedProject]}
          onClose={closeCaseStudy}
        />
      )}
    </div>
  );
}

export default Work;
