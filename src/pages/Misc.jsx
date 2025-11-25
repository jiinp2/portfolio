import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FileText, ArrowLeftRight } from 'lucide-react'
import CaseStudy from '../components/CaseStudy'
import ProjectCard from '../components/ProjectCard'
import TabSection from '../components/TabSection'
import './Work.css'

// Project data for Misc page
const projects = [
  { name: 'Pokemon Valentine', label: 'Pokemon Valentine', date: '2025', category: 'all', slug: 'pokemon-valentine', image: '/misc/pokemon_valentine.png', url: 'https://pokemon-valentine.vercel.app/' }
]

function Misc() {
  const navigate = useNavigate()
  const { projectSlug } = useParams()
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem('activeTab')
    return (savedTab === 'skills' ? 'experience' : savedTab) || 'experience'
  })
  const [activeFilter, setActiveFilter] = useState('all')
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Persist tab state to localStorage
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab)
  }, [activeTab])

  // Open case study
  const openCaseStudy = (projectIndex) => {
    const project = projects[projectIndex]
    // Open external URL if project has one
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer')
      return
    }
    navigate(`/${project.slug}`)
    setSelectedProject(projectIndex)
    setIsCaseStudyOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  // Close case study
  const closeCaseStudy = () => {
    navigate('/misc')
    setIsCaseStudyOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto' // Restore scrolling
  }

  // Apply dark mode to body/html with smooth transition
  useEffect(() => {
    // Small delay to allow initial render before applying dark mode
    const timer = setTimeout(() => {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    }, 10)
    
    return () => {
      clearTimeout(timer)
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark-mode')
      document.body.classList.remove('dark-mode')
    }
  }, [])

  // Check URL parameter and open case study if slug matches
  useEffect(() => {
    if (projectSlug) {
      const projectIndex = projects.findIndex(p => p.slug === projectSlug)
      if (projectIndex !== -1) {
        setSelectedProject(projectIndex)
        setIsCaseStudyOpen(true)
        document.body.style.overflow = 'hidden'
      }
    } else {
      setIsCaseStudyOpen(false)
      setSelectedProject(null)
      document.body.style.overflow = 'auto'
    }
  }, [projectSlug])

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''} ${isCaseStudyOpen ? 'case-study-active' : ''}`}>
      {/* Left Column - About Me Section */}
      <aside className="about-section">
        <div className="about-content">
          {/* INTRO */}
          <div className="profile-section">
            <div className="profile-photo">
              <img src="/home/jiin_ac.png" alt="Jiin Park" className="profile-image" />
            </div>
            <h1 className="main-heading">Jiin Park</h1>
            <p className="subheading">Product Designer <br /> + Design Engineer</p>
          </div>
          
          {/* ABOUT TEXT */}
          <div className="about-text">
            <p>
              I design and build digital products. At <strong>Maison</strong>, I help create better ways for real estate professionals to connect and collaborate.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-buttons">
            <a 
              href="/JiinPark_Resume_Portfolio.pdf" 
              className="social-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText size={16} />
              Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/jiinnoh/" 
              className="social-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/home/linkedin.png" alt="LinkedIn" className="social-icon-img" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/jiinp2" 
              className="social-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/home/github.png" alt="GitHub" className="social-icon-img" />
              GitHub
            </a>
          </div>

          {/* TAB INTERFACE */}
          <TabSection activeTab={activeTab} onTabChange={setActiveTab}>
            {activeTab === 'experience' && (
              <div className="experience-section">
                <div className="experience-category">
                  <div className="experience-list">
                    <div className="experience-item">
                      <span className="experience-date">2025</span>
                      <div className="experience-role">
                        <div className="experience-role-title">Design Engineer</div>
                        <div className="experience-role-place">Maison</div>
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2022/23</span>
                      <div className="experience-role">
                        <div className="experience-role-title">Product Designer</div>
                        <div className="experience-role-place">Drip Design</div>
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2020</span>
                      <div className="experience-role">
                        <div className="experience-role-title">UI Design & UX Research Intern</div>
                        <div className="experience-role-place">Myant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="experience-section">
                <div className="experience-category">
                  <div className="experience-list">
                    <div className="experience-item">
                      <span className="experience-date">2025</span>
                      <div className="experience-role">
                        <div className="experience-role-title">Software Engineering</div>
                        <div className="experience-role-place">BrainStation</div>
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2022</span>
                      <div className="experience-role">
                        <div className="experience-role-title">Design System</div>
                        <div className="experience-role-place">Memorisely</div>
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021</span>
                      <div className="experience-role">
                        <div className="experience-role-title">UI Design</div>
                        <div className="experience-role-place">BrainStation</div>
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021</span>
                      <div className="experience-role">
                        <div className="experience-role-title">Industrial Design</div>
                        <div className="experience-role-place">OCADU</div>
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
      <main className="projects-section">
        <div className="work-header">
          <div className="work-title-wrapper">
            <Link to="/" className="work-title-link">
              <h2 className="work-title">Misc</h2>
            </Link>
            <Link to="/" className="rotate-icon-link">
              <ArrowLeftRight className="rotate-icon rotate-icon-reverse" size={20} />
            </Link>
          </div>
          <div className="work-filters">
            <button 
              className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
          </div>
        </div>
        <div className="case-studies-grid">
          {filteredProjects.map((project, index) => {
            const originalIndex = projects.findIndex(p => p.name === project.name)
            return (
              <ProjectCard
                key={originalIndex}
                project={project}
                index={originalIndex}
                isSelected={selectedProject === originalIndex}
                onClick={openCaseStudy}
              />
            )
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
  )
}

export default Misc

