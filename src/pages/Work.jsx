import { useState } from 'react'
import CaseStudy from '../components/CaseStudy'
import ProjectCard from '../components/ProjectCard'
import TabSection from '../components/TabSection'
import './Work.css'

function Work() {
  const [activeTab, setActiveTab] = useState('links')
  const [activeFilter, setActiveFilter] = useState('all')
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Open case study
  const openCaseStudy = (projectIndex) => {
    setSelectedProject(projectIndex)
    setIsCaseStudyOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  // Close case study
  const closeCaseStudy = () => {
    setIsCaseStudyOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto' // Restore scrolling
  }

  // Project data
  const projects = [
    { name: 'Maison', label: 'Scroll to Maison', date: '2025' },
    { name: 'Rabbu Portfolio', label: 'Scroll to Rabbu Portfolio', date: '2024' },
    { name: 'Rabbu Marketplace', label: 'Scroll to Rabbu Marketplace', date: '2024' },
    { name: 'Kobo', label: 'Scroll to Kobo', date: '2023' },
    { name: 'Skiin', label: 'Scroll to Skiin', date: '2023' }
  ]

  return (
    <div className={`container ${isCaseStudyOpen ? 'case-study-active' : ''}`}>
      {/* Left Column - About Me Section */}
      <aside className="about-section">
        <div className="about-content">
          {/* INTRO */}
          <div className="profile-section">
            <div className="profile-photo">
              <span className="photo-placeholder">Photo</span>
            </div>
            <h1 className="main-heading">Jiin Park</h1>
            <p className="subheading">Product Designer + Design Engineer</p>
          </div>
          
          {/* ABOUT TEXT */}
          <div className="about-text">
            <p>
              I'm a product designer with a strong interest in design and development, which led me to joining BrainStation's software development program through Code to Career.
            </p>
          </div>

          {/* TAB INTERFACE */}
          <TabSection activeTab={activeTab} onTabChange={setActiveTab}>
            {activeTab === 'experience' && (
              <div className="experience-section">
                <div className="experience-category">
                  <h3 className="category-heading">WORK</h3>
                  <div className="experience-list">
                    <div className="experience-item">
                      <span className="experience-date">2025 - Current</span>
                      <div className="experience-role">
                        <strong>Design Engineer</strong><br />
                        Maison
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2022 - 2023</span>
                      <div className="experience-role">
                        <strong>Product Designer</strong><br />
                        Drip Design
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021 - 2022</span>
                      <div className="experience-role">
                        <strong>Freelance UI & UX Designer</strong><br />
                        DGDL
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2020</span>
                      <div className="experience-role">
                        <strong>UI Design & UX Research Intern</strong><br />
                        Myant
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-category">
                  <h3 className="category-heading">EDUCATION</h3>
                  <div className="experience-list">
                    <div className="experience-item">
                      <span className="experience-date">2025</span>
                      <div className="experience-role">
                        <strong>Software Engineering, Diploma</strong><br />
                        BrainStation
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2022</span>
                      <div className="experience-role">
                        <strong>Design System, Certification</strong><br />
                        Memorisely
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021</span>
                      <div className="experience-role">
                        <strong>UI Design, Certification</strong><br />
                        BrainStation
                      </div>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021</span>
                      <div className="experience-role">
                        <strong>Industrial Design, BDes</strong><br />
                        OCADU
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="skills-section">
                <div className="skills-category">
                  <h3 className="category-heading">DESIGN</h3>
                  <div className="skills-content">
                    <div className="skills-icons">
                      <span className="skill-icon">🎨</span>
                      <span className="skill-icon">⚡</span>
                    </div>
                    <p className="skills-text">Figma, Framer</p>
                  </div>
                </div>

                <div className="skills-category">
                  <h3 className="category-heading">DEV</h3>
                  <div className="skills-content">
                    <div className="skills-icons">
                      <span className="skill-icon">🌐</span>
                      <span className="skill-icon">🎨</span>
                      <span className="skill-icon">⚡</span>
                      <span className="skill-icon">🔮</span>
                      <span className="skill-icon">🟢</span>
                    </div>
                    <p className="skills-text">HTML, CSS, JavaScript, React, Node.js</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'links' && (
              <div className="links-section">
                <div className="links-list">
                  <a 
                    href="/JiinPark_Resume_Portfolio.pdf" 
                    className="link-item" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="link-text">Resume</span>
                    <span className="arrow">↗</span>
                  </a>
                  <a href="https://linkedin.com/in/jiinpark" className="link-item" target="_blank" rel="noopener noreferrer">
                    <span className="link-text">LinkedIn</span>
                    <span className="arrow">↗</span>
                  </a>
                  <a href="https://github.com/jiinp2" className="link-item" target="_blank" rel="noopener noreferrer">
                    <span className="link-text">Github</span>
                    <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            )}
          </TabSection>
        </div>
      </aside>

      {/* Right Column - Case Studies Grid */}
      <main className="projects-section">
        <div className="work-header">
          <h2 className="work-title">Work</h2>
          <div className="work-filters">
            <button 
              className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-button ${activeFilter === 'case-studies' ? 'active' : ''}`}
              onClick={() => setActiveFilter('case-studies')}
            >
              Case Studies
            </button>
            <button 
              className={`filter-button ${activeFilter === 'aside' ? 'active' : ''}`}
              onClick={() => setActiveFilter('aside')}
            >
              Aside
            </button>
            <button 
              className={`filter-button ${activeFilter === 'archive' ? 'active' : ''}`}
              onClick={() => setActiveFilter('archive')}
            >
              Archive
            </button>
          </div>
        </div>
        <div className="case-studies-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isSelected={selectedProject === index}
              onClick={openCaseStudy}
            />
          ))}
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

export default Work
