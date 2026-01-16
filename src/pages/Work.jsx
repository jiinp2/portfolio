import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FileText } from "lucide-react";
import CaseStudy from "../components/CaseStudy";
import ProjectCard from "../components/ProjectCard";
import TabSection from "../components/TabSection";
import PageToggle from "../components/PageToggle";
import { projects } from "../data/projects";

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

  // Persist tab state to localStorage
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  // Open case study
  const openCaseStudy = (projectIndex) => {
    const project = projects[projectIndex];
    navigate(`/${project.slug}`);
    setSelectedProject(projectIndex);
    setIsCaseStudyOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Close case study
  const closeCaseStudy = () => {
    navigate("/");
    setIsCaseStudyOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Check URL parameter and open case study if slug matches
  useEffect(() => {
    if (projectSlug) {
      const projectIndex = projects.findIndex((p) => p.slug === projectSlug);
      if (projectIndex !== -1) {
        setSelectedProject(projectIndex);
        setIsCaseStudyOpen(true);
        document.body.style.overflow = "hidden";
      }
    } else {
      setIsCaseStudyOpen(false);
      setSelectedProject(null);
      document.body.style.overflow = "auto";
    }
  }, [projectSlug]);

  // Filter projects based on active filter
  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  );

  return (
    <div
      className={`grid grid-cols-[minmax(320px,380px)_1fr] h-screen w-screen transition-[grid-template-columns] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:h-auto ${
        isCaseStudyOpen ? "grid-cols-1" : ""
      }`}
    >
      {/* Left Column - About Me Section */}
      <aside
        className={`bg-white p-16 border-r border-gray-100 h-auto overflow-y-auto overflow-x-hidden [scrollbar-gutter:stable] transition-[background-color,border-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:relative max-md:w-screen max-md:min-h-auto max-md:h-auto max-md:p-8 max-md:border-r-0 max-md:border-b max-md:border-b-gray-100 max-md:order-1 max-md:overflow-visible max-md:overflow-y-visible max-md:[scrollbar-gutter:auto] max-sm:p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 ${
          isCaseStudyOpen
            ? "max-md:transform max-md:-translate-x-full max-md:opacity-0 max-md:transition-[transform,opacity] max-md:duration-[800ms] max-md:ease-[cubic-bezier(0.4,0,0.2,1)]"
            : ""
        }`}
      >
        <div className="w-full max-md:max-w-none max-md:text-left">
          {/* INTRO */}
          <div className="mb-8">
            <Link
              to="/misc"
              className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 overflow-hidden cursor-pointer no-underline transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02]"
            >
              <img
                src="/home/jiin_profile.png"
                alt="Jiin Park"
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
            <h1 className="text-xl font-semibold text-text mb-4 tracking-tight leading-tight transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:text-xl max-sm:text-xl">
              Jiin Park
            </h1>
            <p className="text-base text-text-light mb-8 font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:text-base max-md:mb-8 max-sm:text-base">
              Product Designer <br /> + Design Engineer
            </p>
          </div>

          {/* ABOUT TEXT */}
          <div className="mb-10 max-md:mb-8">
            <p className="text-sm text-text-muted leading-relaxed mb-4 transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] last:mb-0">
              I design and build digital products.
              <br />
              At Maison, I help build trust and transparency for real estate
              professionals.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-2 flex-wrap mb-10 max-md:mb-8">
            <a
              href="/JiinPark_Resume.pdf"
              className="inline-flex items-center gap-2 py-2 px-4 bg-gray-100 text-text-muted rounded-full no-underline text-sm font-medium transition-all duration-200 hover:bg-gray-200 hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={16} className="flex-shrink-0 text-current" />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jiinnoh/"
              className="inline-flex items-center gap-2 py-2 px-4 bg-gray-100 text-text-muted rounded-full no-underline text-sm font-medium transition-all duration-200 hover:bg-gray-200 hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/home/linkedin.png"
                alt="LinkedIn"
                className="w-4 h-4 flex-shrink-0 object-contain"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/jiinp2"
              className="inline-flex items-center gap-2 py-2 px-4 bg-gray-100 text-text-muted rounded-full no-underline text-sm font-medium transition-all duration-200 hover:bg-gray-200 hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/home/github.png"
                alt="GitHub"
                className="w-4 h-4 flex-shrink-0 object-contain"
              />
              GitHub
            </a>
          </div>

          {/* TAB INTERFACE */}
          <TabSection activeTab={activeTab} onTabChange={setActiveTab}>
            {activeTab === "experience" && (
              <div className="mb-0">
                <div className="mb-10 last:mb-0 max-md:gap-2">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2025
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Founding Design Engineer
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Maison
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2022/23
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Product Designer
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Drip Design
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2020
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          UI Design & UX Research Intern
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Myant
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="mb-0">
                <div className="mb-10 last:mb-0 max-md:gap-2">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2025
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Software Engineering
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          BrainStation
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2022
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Design System
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Memorisely
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2021
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          UI Design
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          BrainStation
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr] gap-4 items-start max-md:gap-2">
                      <span className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                        2021
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <div className="text-sm font-medium text-text transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          Industrial Design
                        </div>
                        <div className="text-sm text-text-light font-normal transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                          OCADU
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabSection>
        </div>
      </aside>

      {/* Right Column - Case Studies Grid */}
      <main
        className={`overflow-y-auto h-screen p-16 w-full bg-[#fcfcfc] transition-[background-color,color] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:ml-0 max-md:h-auto max-md:p-8 max-md:order-2 max-sm:p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200`}
      >
        <div className="mb-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-text tracking-tight leading-tight m-0 transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:text-xl max-sm:text-xl">
              Work
            </h2>
            <PageToggle isWorkPage={true} />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              className={`flex items-center gap-2 py-2 px-4 border-0 rounded-full text-sm font-medium cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeFilter === "case-studies"
                  ? "bg-text text-white hover:bg-gray-700"
                  : "bg-gray-100 text-text-muted hover:bg-gray-200 hover:text-text"
              }`}
              onClick={() => setActiveFilter("case-studies")}
            >
              Selected
            </button>
            <button
              className={`flex items-center gap-2 py-2 px-4 border-0 rounded-full text-sm font-medium cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeFilter === "archive"
                  ? "bg-text text-white hover:bg-gray-700"
                  : "bg-gray-100 text-text-muted hover:bg-gray-200 hover:text-text"
              }`}
              onClick={() => setActiveFilter("archive")}
            >
              Archive
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full max-md:grid-cols-1 max-md:gap-6">
          {filteredProjects.map((project, index) => {
            const originalIndex = projects.findIndex(
              (p) => p.name === project.name
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
      </main>

      {/* Case Study View */}
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
