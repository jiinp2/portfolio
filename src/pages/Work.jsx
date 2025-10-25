import { useState, useEffect, useRef } from 'react'
import CaseStudy from '../components/CaseStudy'
import ScrollIndicators from '../components/ScrollIndicators'
import ProjectCard from '../components/ProjectCard'
import TabSection from '../components/TabSection'
import './Work.css'

function Work() {
  const [activeTab, setActiveTab] = useState('experience')
  const [activeProject, setActiveProject] = useState(0)
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const projectRefs = useRef([])
  const projectsSectionRef = useRef(null)

  // Scroll to project function
  const scrollToProject = (index) => {
    if (projectRefs.current[index]) {
      projectRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

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

  // Project data for cleaner mapping
  const projects = [
    { name: 'Rabbu Portfolio', label: 'Scroll to Rabbu Portfolio' },
    { name: 'Rabbu Marketplace', label: 'Scroll to Rabbu Marketplace' },
    { name: 'Kobo', label: 'Scroll to Kobo' },
    { name: 'Skiin', label: 'Scroll to Skiin' }
  ]

  // Intersection Observer to track active project
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0
        let activeIndex = 0

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            const index = projectRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1) {
              activeIndex = index
            }
          }
        })

        // Update active project if we found a valid intersection
        if (maxRatio > 0) {
          console.log('Setting active project to:', activeIndex, 'with ratio:', maxRatio)
          setActiveProject(activeIndex)
        }
      },
      {
        root: projectsSectionRef.current,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    )

    // Wait for refs to be available
    const timer = setTimeout(() => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          console.log('Observing project:', index)
          observer.observe(ref)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`container ${isCaseStudyOpen ? 'case-study-active' : ''}`}>
      {/* Left Column - About Me Section */}
      <aside className="about-section">
        <div className="about-content">
          {/* INTRO */}
          <h1 className="main-heading">Jiin Park</h1>
          <p className="subheading">Product Designer + Design Engineer</p>
          
          {/* ABOUT TEXT */}
          <div className="about-text">
            <p>
              I'm a product designer with a strong interest in design and development, which led me to joining BrainStation's software development program through Code to Career.
            </p>
          </div>

          {/* LINKS SECTION */}
          <div className="links-section">
            <h2 className="section-heading">LINKS</h2>
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

          {/* TAB INTERFACE */}
          <TabSection activeTab={activeTab} onTabChange={setActiveTab}>
            {activeTab === 'experience' && (
              <div className="experience-section">
                <div className="experience-category">
                  <h3 className="category-heading">WORK</h3>
                  <div className="experience-list">
                    <div className="experience-item">
                      <span className="experience-date">2025 - Current</span>
                      <span className="experience-role">Design Engineer at Maison</span>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2022 - 2023</span>
                      <span className="experience-role">Product Designer at Drip Design</span>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021 - 2022</span>
                      <span className="experience-role">Freelance UI & UX Designer at DGDL</span>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2020</span>
                      <span className="experience-role">UI Design & UX Research Intern at Myant</span>
                    </div>
                  </div>
                </div>

                <div className="experience-category">
                  <h3 className="category-heading">EDUCATION</h3>
                  <div className="experience-list">
                    <div className="experience-item">
                      <span className="experience-date">2025</span>
                      <span className="experience-role">Software Engineering, Diploma @ BrainStation</span>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2022</span>
                      <span className="experience-role">Design System, Certification @ Memorisely</span>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021</span>
                      <span className="experience-role">UI Design, Certification @ BrainStation</span>
                    </div>
                    <div className="experience-item">
                      <span className="experience-date">2021</span>
                      <span className="experience-role">Industrial Design, BDes @ OCADU</span>
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
          </TabSection>
        </div>
      </aside>

      {/* Right Column - Project Cards */}
      <main className="projects-section" ref={projectsSectionRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isSelected={selectedProject === index}
            onClick={openCaseStudy}
            ref={el => projectRefs.current[index] = el}
          />
        ))}
      </main>

      {/* Case Study View */}
      {isCaseStudyOpen && selectedProject !== null && (
        <CaseStudy 
          project={projects[selectedProject]} 
          onClose={closeCaseStudy} 
        />
      )}

      {/* Scroll Indicator Navigation */}
      <ScrollIndicators
        projects={projects}
        activeProject={activeProject}
        onProjectClick={scrollToProject}
        isVisible={!isCaseStudyOpen}
      />
    </div>
  )
}

export default Work
