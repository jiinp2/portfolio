import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ExternalLink, FileText, Mail } from "lucide-react";
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

const WORK_FILTER_OPTIONS = [
  { id: "case-studies", label: "Case Studies" },
  { id: "misc", label: "Explorative" },
];

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
  const [activeFilter, setActiveFilter] = useState("case-studies");
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
      document.documentElement.classList.add("dark-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.body.classList.remove("dark-mode");
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

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter,
  );

  const explorativeProjects =
    activeFilter === "misc"
      ? [...filteredProjects].sort((a, b) => (b.date < a.date ? -1 : 1))
      : [];

  return (
    <div
      className={`grid grid-cols-[minmax(320px,380px)_1fr] h-screen w-screen transition-[grid-template-columns] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:h-auto max-md:grid-cols-1 ${
        isCaseStudyOpen ? "grid-cols-1" : ""
      }`}
    >
      <aside
        className={`bg-white p-16 border-r border-gray-100 h-auto overflow-y-auto overflow-x-hidden [scrollbar-gutter:stable] transition-[background-color,border-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:relative max-md:w-screen max-md:min-h-auto max-md:h-auto max-md:p-8 max-md:border-r-0 max-md:border-b max-md:border-b-gray-100 max-md:order-1 max-md:overflow-visible max-md:overflow-y-visible max-md:[scrollbar-gutter:auto] max-sm:p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 ${
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
                className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 max-md:mb-0 overflow-hidden cursor-pointer no-underline transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02]"
              >
                <img
                  src={
                    isDarkMode ? "/home/jiin_ac.png" : "/home/jiin_profile.png"
                  }
                  alt="Jiin Park"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/home/jiin_profile.png";
                  }}
                />
              </Link>
              <div className="hidden max-md:block">
                <PageToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
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
              Hi, I'm a designer with 2 years of experience at early-stage
              startups. My current interest is in intentional usage of AI tools
              in design.
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
        className="overflow-y-auto h-screen p-16 w-full bg-[#fcfcfc] transition-[background-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:ml-0 max-md:h-auto max-md:p-8 max-md:order-2 max-sm:p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200"
      >
        <div className="mb-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl font-medium text-text tracking-tight leading-tight m-0 ${SIDEBAR_TEXT_TRANSITION} max-md:text-xl max-sm:text-xl`}>
              Work
            </h2>
            <div className="max-md:hidden">
              <PageToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {WORK_FILTER_OPTIONS.map(({ id, label }) => (
              <button
                key={id}
                className={`flex items-center gap-2 py-2 px-4 border-0 rounded-full text-sm font-medium cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  activeFilter === id
                    ? "bg-text text-white hover:bg-gray-700"
                    : "bg-gray-100 text-text-muted hover:bg-gray-200 hover:text-text"
                }`}
                onClick={() => setActiveFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {activeFilter === "misc" ? (
          <div className="flex flex-col gap-12 max-md:gap-10">
            {explorativeProjects.map((project) => {
              const originalIndex = projects.findIndex(
                (p) => p.slug === project.slug,
              );
              return (
                <div
                  key={project.slug}
                  className="group/card w-full p-3 md:p-6 flex flex-col md:flex-row gap-6 md:gap-10 items-stretch md:items-start rounded-xl"
                >
                  <button
                    type="button"
                    onClick={() => openCaseStudy(originalIndex)}
                    className="w-full md:w-[min(42%,360px)] md:shrink-0 aspect-[4/3] rounded-xl overflow-hidden flex items-start justify-center bg-gray-100 border-0 p-0 cursor-pointer group"
                  >
                    {project.video ? (
                      <video
                        src={project.video}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        loop
                        muted
                        playsInline
                        autoPlay
                        aria-label={project.name}
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : null}
                  </button>
                  <div className="flex flex-col gap-1 min-w-0 flex-1 px-4 md:px-6">
                    <span
                      className={`text-sm text-text-light font-normal ${SIDEBAR_TEXT_TRANSITION} max-md:text-sm max-sm:text-xs`}
                    >
                      {project.date}
                    </span>
                    <button
                      type="button"
                      onClick={() => openCaseStudy(originalIndex)}
                      className="text-left border-0 p-0 bg-transparent cursor-pointer inline-flex items-center gap-2"
                    >
                      <h3
                        className={`text-lg font-semibold text-text tracking-tight m-0 leading-tight ${SIDEBAR_TEXT_TRANSITION} max-md:text-base max-sm:text-sm`}
                      >
                        {project.name}
                      </h3>
                      {project.url && (
                        <ExternalLink
                          className="opacity-60 text-text-light group-hover/card:opacity-100 group-hover/card:text-text transition-all duration-200 shrink-0"
                          size={14}
                          aria-hidden
                        />
                      )}
                    </button>
                    <p
                      className={`text-sm text-text-light font-normal leading-relaxed mt-2 mb-0 ${SIDEBAR_TEXT_TRANSITION} cursor-text select-text`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10 w-full max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-6">
            {filteredProjects.map((project) => {
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
        )}
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
