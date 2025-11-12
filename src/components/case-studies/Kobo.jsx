import { useState, useEffect, useRef } from 'react'
import './Kobo.css'

function Kobo({ onClose }) {
  const [activeSection, setActiveSection] = useState('overview')
  const sectionRefs = useRef({})
  const tocListRef = useRef(null)
  const indicatorRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({})

  // Table of contents sections
  const tocSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'design-research', label: 'Design Research' },
    { id: 'design-process', label: 'Design Process' },
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
            <h1 className="case-study-title">Kobo</h1>
            <p className="case-study-subtitle">A redesign of the user interface and user flow of the popular eBook and audiobook app.</p>
            <div className="hero-image-placeholder">
              <span>Hero Image Placeholder</span>
            </div>
          </div>

          {/* Project Info Bar */}
          <div className="project-info-bar">
            <div className="info-item">
              <h3>Team</h3>
              <p>Independent Project</p>
            </div>
            <div className="info-item">
              <h3>Role</h3>
              <p>Design Research, UI & UX Design</p>
            </div>
            <div className="info-item">
              <h3>Timeline</h3>
              <p>Nov - Dec 2021</p>
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" ref={el => sectionRefs.current.overview = el} className="case-study-section">
            <h2>Overview</h2>
            
            <div className="subsection">
              <h3>Introduction</h3>
              <p>This project, the final assignment for the UI Design course at BrainStation, involved choosing the Kobo mobile application to redesign its user interface.</p>
            </div>

            <div className="subsection">
              <h3>What is Kobo?</h3>
              <p>Kobo is a reading platform that offers a wide selection of e-books and audiobooks for users to access on their electronic devices.</p>
            </div>

            <div className="subsection">
              <h3>Objective</h3>
              <p>The objective of the project was to enhance the app's user interface by applying the skills and knowledge acquired throughout the course. Additionally, I aimed to improve user flows and clarify the application's offerings for users seeking a comprehensive e-book and audiobook app.</p>
            </div>

            <div className="subsection">
              <h3>Outcomes</h3>
              <ul className="outcomes-list">
                <li>A redesigned onboarding process to better showcase the app's key features, setting clear expectations.</li>
                <li>Reorganizing the tab bar and redesigning the hierarchy helps users navigate the app more efficiently, while an updated visual style offers a more modern look.</li>
              </ul>
            </div>
          </section>

          {/* Design Research Section */}
          <section id="design-research" ref={el => sectionRefs.current['design-research'] = el} className="case-study-section">
            <h2>Design Research</h2>
            
            <div className="subsection">
              <h3>Competitor Analysis</h3>
              <p>A competitor analysis was conducted to better understand the e-book and audiobook market and gather insights into user expectations in terms of features and flows.</p>
              <div className="competitor-grid">
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Kindle</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Audible</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Apple Books</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Google Play</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Additional Apps</h3>
              <p>Additional platforms were studied to gain insights into how content is organized when there is large number of content to choose from. For example, apps like Spotify were examined to see how users manage access to two different types of content (music and podcasts).</p>
              <div className="competitor-grid">
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Goodreads</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Wattpad</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Libby</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Spotify</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>App Analysis</h3>
              <p>The app was reviewed in-depth through a heuristic review using Jakob Nielson's 10 general principles for interactive design. This approach helped identify areas for improvement and ensured that the redesign would align with industry standards.</p>
            </div>

            <div className="subsection">
              <h3>Key Takeaways</h3>
              <ul className="takeaways-list">
                <li>More context should be provided for features to effectively communicate their value.</li>
                <li>Offer personalization during onboarding to tailor content for users.</li>
                <li>Ensure consistency with features shown online and make different subscription tiers visible.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>Navigation Key Takeaways</h3>
              <ul className="takeaways-list">
                <li>Clarify the purpose of unclear sections in the app.</li>
                <li>Could combine e-books and audiobooks into one library for simpler navigation.</li>
                <li>Can increase customization options to include progress tracking and other relevant features.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>App Store Reviews</h3>
              <p>Takeaways based on app store reviews to see how real users felt about the app.</p>
              
              <div className="review-categories">
                <div className="review-category">
                  <h4>Confusing Aspects</h4>
                  <ul className="review-list">
                    <li>The application is difficult to navigate</li>
                    <li>Misunderstandings of how books can be purchased</li>
                  </ul>
                </div>
                <div className="review-category">
                  <h4>Lacks User-Friendliness</h4>
                  <ul className="review-list">
                    <li>Accessing various features are not very intuitive</li>
                    <li>Frustrations from unresponsiveness</li>
                  </ul>
                </div>
                <div className="review-category">
                  <h4>Missing Features</h4>
                  <ul className="review-list">
                    <li>Unable to search books based on author or certain genres</li>
                    <li>Book recommendations that are relevant to the user</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section id="design-process" ref={el => sectionRefs.current['design-process'] = el} className="case-study-section">
            <h2>Design Process</h2>
            
            <div className="subsection">
              <h3>Information Architecture</h3>
              <p>Planning the information architecture visually allowed me to map out where to move or combine different features and as a reference for prioritizing redesigns within the project's scope. The goal was to make it easier for users to find what they are looking for by improving the app's navigation and organization.</p>
              <div className="image-placeholder large">
                <span>Information Architecture Diagram</span>
              </div>
            </div>

            <div className="subsection">
              <h3>Early Wireframes</h3>
              <p>Early ideations were explored through sketches and mid-fidelity wireframes of key screens. These helped to iterate on navigation and interactions, and refine the information architecture.</p>
              <div className="image-placeholder large">
                <span>Early Wireframes</span>
              </div>
            </div>

            <div className="subsection">
              <h3>Moodboard</h3>
              <p>This moodboard was created with the goal of using imagery that evokes a nostalgic and warm feeling of a local bookshop inspired by copy on Kobo's website stating, 'Your favourite local bookshop.'</p>
              <div className="image-placeholder large">
                <span>Moodboard</span>
              </div>
            </div>

            <div className="subsection">
              <h3>Style Guide</h3>
              <p>This style guide introduces an updated color palette that revitalizes Kobo's current visual language.</p>
              <div className="image-placeholder large">
                <span>Style Guide</span>
              </div>
            </div>
          </section>

          {/* Final Design Section */}
          <section id="final-design" ref={el => sectionRefs.current['final-design'] = el} className="case-study-section">
            <h2>Final Design</h2>
            
            <div className="subsection">
              <h3>Kobo Redesign</h3>
              <h4>Introducing Key Features</h4>
              <p>The redesigned onboarding process introduces users to personalization possibilities and the breadth of content available. This ensures users are immediately aware of the app's capabilities, setting the stage for a tailored and engaging experience from the start.</p>
              <div className="image-placeholder large">
                <span>Onboarding Screens</span>
              </div>
            </div>

            <div className="subsection">
              <h4>Subscriptions & User Preferences</h4>
              <p>The different subscription plans are outlined upfront. Users can choose their preferred genres, enabling the tailored recommendations.</p>
              <div className="image-placeholder large">
                <span>Subscriptions & Preferences Screens</span>
              </div>
            </div>

            <div className="subsection">
              <h4>Redesigned Tab Bar & Home Screen Customization</h4>
              <p>The tab bar has been redesigned for improved navigation efficiency. Users can also reorganize their Home Screen according to their usage patterns.</p>
              <div className="image-placeholder large">
                <span>Tab Bar & Home Screen Customization</span>
              </div>
            </div>

            <div className="subsection">
              <h4>Combined eBook & Audiobook Library</h4>
              <p>Users can now effortlessly switch between their eBooks, audiobooks, and collections in a unified library interface. Simplifying navigation and reducing the cognitive load, making it easier for users to manage and access their content.</p>
              <div className="image-placeholder large">
                <span>Combined Library Screens</span>
              </div>
            </div>

            <div className="subsection">
              <h4>Easier to Find & Choose Books</h4>
              <p>A new grid view showcases book covers, enabling users to visually sift through titles more easily. Accompanied by personalized book lists, this design enhances discoverability and ensures users can find books that cater to their tastes with minimal effort.</p>
              <div className="image-placeholder large">
                <span>Discover Screens</span>
              </div>
            </div>

            <div className="subsection">
              <h4>Context At-A-Glance</h4>
              <p>Key information about books is displayed above the fold, including a clear indication that books cannot be directly purchased in the app. This transparency eliminates confusion and helps set accurate expectations for the purchasing process.</p>
              <div className="image-placeholder large">
                <span>Book Detail Screens</span>
              </div>
            </div>

            <div className="subsection">
              <h4>Search & Profile</h4>
              <p>An updated search that allows users to search titles and authors.</p>
              <p>The profile design is a quick concept where users can follow each other, view the books they are currently reading, share goals and awards, and more.</p>
              <div className="image-placeholder large">
                <span>Search & Profile Screens</span>
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

export default Kobo
