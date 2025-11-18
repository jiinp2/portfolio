import { useState, useEffect, useRef } from 'react'
import './Skiin.css'

function Skiin({ onClose }) {
  const [activeSection, setActiveSection] = useState('overview')
  const sectionRefs = useRef({})
  const tocListRef = useRef(null)
  const indicatorRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({})

  // Table of contents sections
  const tocSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'design-research', label: 'Design Research' },
    { id: 'final-design', label: 'Final Design' }
  ]

  // Intersection Observer for tracking active section
  useEffect(() => {
    const contentElement = document.querySelector('.case-study-content')
    if (!contentElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0
        let activeEntry = null

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            activeEntry = entry
          }
        })

        if (activeEntry) {
          setActiveSection(activeEntry.target.id)
        }
      },
      {
        root: contentElement,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Update indicator position
  useEffect(() => {
    if (!tocListRef.current || !indicatorRef.current) return

    const updateIndicator = () => {
      const activeButton = tocListRef.current.querySelector(`button[data-section-id="${activeSection}"]`)
      if (activeButton && indicatorRef.current) {
        const buttonRect = activeButton.getBoundingClientRect()
        const navRect = indicatorRef.current.parentElement.getBoundingClientRect()
        const top = buttonRect.top - navRect.top + buttonRect.height / 2
        setIndicatorStyle({
          top: `${top}px`,
        })
      }
    }

    // Use requestAnimationFrame for smoother updates
    const rafId = requestAnimationFrame(() => {
    updateIndicator()
    })
    
    return () => cancelAnimationFrame(rafId)
  }, [activeSection])

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      setActiveSection(sectionId)
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="case-study-overlay">
      <div className="case-study-layout">
        {/* Left Column - Back Button */}
        <div className="case-study-left">
          <button className="back-button sticky" onClick={onClose}>
            ← Back
          </button>
        </div>
        
        {/* Middle Column - Main Content */}
        <div className="case-study-content">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="case-study-title">Skiin</h1>
            <p className="case-study-subtitle">Innovating wellness through real-time tracking and sensory textiles.</p>
            <div className="hero-image-container w-full">
              <div className="hero-card">
                <img 
                  src="/case_studies/skiin/hero.avif" 
                  alt="Skiin Hero" 
                  className="hero-image w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Project Info Bar */}
          <div className="project-info-bar">
            <div className="info-item">
              <h3>Team</h3>
              <p>Myant Design Team</p>
            </div>
            <div className="info-item">
              <h3>Role</h3>
              <p>Design Research, UI & UX Design</p>
            </div>
            <div className="info-item">
              <h3>Timeline</h3>
              <p>Feb - Aug 2021</p>
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" ref={el => sectionRefs.current.overview = el} className="case-study-section">
            <h2>Overview</h2>
            
            <div className="subsection">
              <h3>Introduction</h3>
              <p>As a part of OCAD University's internship program I interned at Myant, a wearable technology company that specializes in textiles knitted with sensors. My primary focus was on Myant's in-house product, Skiin, although my responsibilities extended to external client projects as well.</p>
            </div>

            <div className="subsection">
              <h3>What Is Skiin?</h3>
              <p>Skiin consists of bio-sensing garments that work in tandem with a mobile application, offering users real-time insights into their wellness. Sensors collect and track health data over time, which can be shared with a user's circle of care.</p>
              <p>
                <a href="https://www.myanthealth.com/" className="external-link" target="_blank" rel="noopener noreferrer">
                  Product Page ↗
                </a>
              </p>
            </div>

            <div className="subsection">
              <h3>My Responsibilities</h3>
              <p>For Skiin, my responsibilities included ideating and wireframing the application's communication and mood logging features, aiming to enhance user interaction and emotional tracking.</p>
            </div>

            <div className="subsection">
              <h3>Outcomes</h3>
              <ul className="outcomes-list">
                <li>Designed the user flow and high-fidelity wireframes for Skiin's communication features and mood logging feature.</li>
              </ul>
            </div>
          </section>

          {/* Design Research Section */}
          <section id="design-research" ref={el => sectionRefs.current['design-research'] = el} className="case-study-section">
            <h2>Design Research</h2>
            
            <div className="subsection">
              <h3>Existing Research</h3>
              <p>To understand Skiin's users and their needs, I relied on existing research conducted by the design and research team. This included a combination of user surveys, interviews, and focus groups. I analyzed research findings to inform design decisions.</p>
            </div>

            <div className="subsection">
              <h3>Key Takeaways</h3>
              <ul className="takeaways-list">
                <li>Users highly value products that integrate seamlessly into their daily lives and deliver precise wellness insights.</li>
                <li>Users expressed a desire for a product that motivates them to maintain healthy habits.</li>
                <li>The team identified the need to differentiate by focusing on the unique benefits of textile technology.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>Competitive Research</h3>
              <p>Before ideation, I conducted an analysis of competing products, focusing on their visual design elements and user journeys, to identify opportunities for enhancing the Skiin experience.</p>
            </div>
          </section>

          {/* Final Design Section */}
          <section id="final-design" ref={el => sectionRefs.current['final-design'] = el} className="case-study-section">
            <h2>Final Design</h2>
            
            <div className="subsection">
              <h3>Communication Features</h3>
              <p>Enhancing remote connection through Skiin's in-app messaging and video calling.</p>
              <div className="image-container w-full mt-4">
                <img 
                  src="/case_studies/skiin/1.avif" 
                  alt="Communication Features Screens" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div className="subsection">
              <h3>Staying in the Loop</h3>
              <p>Within group chats, each member has a status bar that provides a quick view on their current health.</p>
              <div className="image-container w-full mt-4">
                <img 
                  src="/case_studies/skiin/2.webp" 
                  alt="Status Bar Screens" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div className="subsection">
              <div className="key-feature grid grid-cols-2 gap-12 mb-8 items-center">
                <div className="key-feature-content">
                  <h3>In-Depth Updates</h3>
                  <p>The status bar can be expanded to view user location and more detailed metrics over time.</p>
                </div>
                <div className="key-feature-image w-full">
                  <img 
                    src="/case_studies/skiin/3.avif" 
                    alt="In-Depth Updates Screens" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="subsection">
              <div className="key-feature grid grid-cols-2 gap-12 mb-8 items-center">
                <div className="key-feature-image w-full">
                  <img 
                    src="/case_studies/skiin/4.webp" 
                    alt="Mood Logging Screens" 
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="key-feature-content">
                  <h3>Mood Logging</h3>
                  <p>Enhancing remote connection through Skiin's in-app messaging and video calling.</p>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Mood Logging Flow</h3>
              <p>Users can select their mood on a scale of 1-5, add the date, include a note on what they did that day, and tag factors that influenced their mood.</p>
              <div className="image-container w-full mt-4">
                <img 
                  src="/case_studies/skiin/5.webp" 
                  alt="Mood Logging Flow" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div className="subsection">
              <h3>Patterns Over Time</h3>
              <p>By viewing mood logs on a daily, weekly, or monthly basis, users can identify reoccurring patterns and understand how they are affected by their daily activities.</p>
              <div className="image-container w-full mt-4">
                <img 
                  src="/case_studies/skiin/6.webp" 
                  alt="Patterns Over Time Screens" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Table of Contents */}
        <div className="case-study-right">
          <nav className="table-of-contents">
            <ul className="toc-list" ref={tocListRef}>
              {tocSections.map((section) => (
                <li key={section.id}>
                  <button
                    data-section-id={section.id}
                    className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="toc-indicator" ref={indicatorRef} style={indicatorStyle} />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Skiin
