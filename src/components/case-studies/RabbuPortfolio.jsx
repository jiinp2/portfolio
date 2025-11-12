import { useState, useEffect, useRef } from 'react'
import './RabbuPortfolio.css'

function RabbuPortfolio({ onClose }) {
  const [activeSection, setActiveSection] = useState('overview')
  const sectionRefs = useRef({})

  // Table of contents sections
  const tocSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'design-research', label: 'Design Research' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'final-design', label: 'Final Design' },
    { id: 'key-features', label: 'Key Features' }
  ]

  // Intersection Observer for tracking active section
  useEffect(() => {
    const contentElement = document.querySelector('.case-study-content')
    if (!contentElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
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

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

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
            <h1 className="case-study-title">Rabbu Portfolio</h1>
            <p className="case-study-subtitle">A platform where short-term rental investors can manage their properties and track performance.</p>
            <div className="hero-image-placeholder">
              <span>Hero Image Placeholder</span>
            </div>
          </div>

        {/* Project Info Bar */}
        <div className="project-info-bar">
          <div className="info-item">
            <h3>Team</h3>
            <p>Rabbu (3 PMs), Drip Design (2 Designers)</p>
          </div>
          <div className="info-item">
            <h3>Role</h3>
            <p>Design Research, UI & UX Design</p>
          </div>
          <div className="info-item">
            <h3>Timeline</h3>
            <p>Mar 2022 - Feb 2023</p>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" ref={el => sectionRefs.current.overview = el} className="case-study-section">
          <h2>Overview</h2>
          
          <div className="subsection">
            <h3>Introduction</h3>
            <p>Rabbu approached Drip Design to help design their short-term rental (STR) platform by incorporating tools they had previously launched as well as newer features that will help short-term rental investors find and manage property investments.</p>
            <p>This case study follows the work for Rabbu Portfolio and Rabbu Marketplace can be found here.</p>
          </div>

          <div className="subsection">
            <h3>What is Rabbu Portfolio?</h3>
            <p>Is a part of Rabbu's STR platform where users can manage their property investments from performance evaluation, rental activity, and statements.</p>
          </div>
        </section>

        {/* Outcomes Section */}
        <section id="outcomes" ref={el => sectionRefs.current.outcomes = el} className="case-study-section">
          <h2>Outcomes</h2>
          <ul className="outcomes-list">
            <li>End-to-end design and launch of Rabbu's Portfolio platform, enhancing the STR management experience.</li>
            <li>Revitalized the user interface for cohesion with Rabbu Marketplace.</li>
          </ul>
        </section>

        {/* Design Research Section */}
        <section id="design-research" ref={el => sectionRefs.current['design-research'] = el} className="case-study-section">
          <h2>Design Research</h2>
          
          <div className="subsection">
            <h3>Early Stage Hypothetical User Journeys</h3>
            <p>Utilizing hypothetical user journeys provided by Rabbu, we aimed to define user needs and desired outcomes.</p>
            <p>Our goal would be to transition from idealized user journeys to more realistic and user-tested versions through future iterations.</p>
          </div>

          <div className="subsection">
            <h3>New User Journey</h3>
            <p>This journey outlines the process of a new Rabbu Portfolio user, from initial discovery to successful property management.</p>
            
            <div className="journey-cards">
              <div className="journey-card">
                <div className="journey-number">1</div>
                <h4>Discovery</h4>
                <p>Investors looking for an online platform to manage their first investment discovers Rabbu Portfolio.</p>
              </div>
              <div className="journey-card">
                <div className="journey-number">2</div>
                <h4>Expert Consultation</h4>
                <p>The investor is provided a walkthrough by a Rabbu expert, who demonstrates the platform's efficient property management system.</p>
              </div>
              <div className="journey-card">
                <div className="journey-number">3</div>
                <h4>Seamless Onboarding</h4>
                <p>The investor signs a property management contract with Rabbu, officially onboarding their property to the platform.</p>
              </div>
              <div className="journey-card">
                <div className="journey-number">4</div>
                <h4>Portfolio Management</h4>
                <p>The investor monitors their performance and financials, leading to their first successful investment.</p>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3>Experienced User Journey</h3>
            <p>This journey outlines the process of how an experienced user who finds success with utilizing Portfolio decides to search and onboard additional properties they have found on Rabbu Marketplace.</p>
            
            <div className="journey-cards">
              <div className="journey-card">
                <div className="journey-number">1</div>
                <h4>Strategic Expansion</h4>
                <p>The investor is aware of Rabbu Marketplace, a platform where they can search for properties to expand their short-term rental portfolio.</p>
              </div>
              <div className="journey-card">
                <div className="journey-number">2</div>
                <h4>Market Analysis</h4>
                <p>They deep-dive into potential properties. Utilizing Marketplace tools to assess investment viability.</p>
              </div>
              <div className="journey-card">
                <div className="journey-number">3</div>
                <h4>Informed Investments</h4>
                <p>After thorough analysis and consultation with Rabbu experts, the investor selects an additional property to invest in.</p>
              </div>
              <div className="journey-card">
                <div className="journey-number">4</div>
                <h4>Scalable Management</h4>
                <p>The investor manages their short-term rentals all-in-one place, easing operations across multiple properties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section id="design-process" ref={el => sectionRefs.current['design-process'] = el} className="case-study-section">
          <h2>Design Process</h2>
          
          <div className="subsection">
            <h3>Rabbu One</h3>
            <p>Rabbu decided to transition to a unified account system facilitated seamless access to both Marketplace and Portfolio, enhancing user interaction across Rabbu services.</p>
          </div>

          <div className="subsection">
            <h3>Unified Account Matrix</h3>
            <p>Defining how users will interact with different Rabbu services throughout their journey helped with creating transitions between products.</p>
            <div className="image-placeholder large">
              <span>Matrix Diagram Placeholder</span>
            </div>
          </div>
        </section>

        {/* Final Design Section */}
        <section id="final-design" ref={el => sectionRefs.current['final-design'] = el} className="case-study-section">
          <h2>Final Design</h2>
          
          <div className="subsection">
            <h3>Rabbu Portfolio</h3>
            <p>The platform is organized into Dashboard, Properties, Calendar, Reviews, Activity, Pricing, and Statements, providing users comprehensive oversight over their investment properties.</p>
            
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-image">
                  <div className="image-placeholder">
                    <span>Dashboard Image</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Dashboard</h4>
                  <p>A customizable snapshot of property trends.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-image">
                  <div className="image-placeholder">
                    <span>Properties & Calendar Image</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Properties & Calendar</h4>
                  <p>Displays property statuses and booking details.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-image">
                  <div className="image-placeholder">
                    <span>Reviews & Activity Image</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Reviews & Activity Feed</h4>
                  <p>Keeps property owners updated on guest feedback and property activities.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-image">
                  <div className="image-placeholder">
                    <span>Pricing & Statements Image</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Pricing & Statements</h4>
                  <p>Easy access to property related financial statements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="key-features" ref={el => sectionRefs.current['key-features'] = el} className="case-study-section">
          <h2>Key Features</h2>
          
          <div className="key-features">
            <div className="key-feature">
              <div className="key-feature-image">
                <div className="image-placeholder large">
                  <span>Performance Dashboard Image</span>
                </div>
              </div>
              <div className="key-feature-content">
                <h3>Comprehensive Performance Insights</h3>
                <p>Delivers real-time and customizable insights of financial and operational metrics, empowering investors to make data-driven decisions.</p>
              </div>
            </div>

            <div className="key-feature">
              <div className="key-feature-image">
                <div className="image-placeholder large">
                  <span>Property Reservations Image</span>
                </div>
              </div>
              <div className="key-feature-content">
                <h3>Streamlined Property Booking Management</h3>
                <p>Simplifies booking management by displaying bookings across all properties and listing platforms.</p>
              </div>
            </div>

            <div className="key-feature">
              <div className="key-feature-image">
                <div className="image-placeholder large">
                  <span>Activity Feed Image</span>
                </div>
              </div>
              <div className="key-feature-content">
                <h3>Real-Time Property Activity Tracker</h3>
                <p>Provides real-time updates to property happenings, elevating guest satisfaction through proactive property management.</p>
              </div>
            </div>
          </div>
        </section>

          {/* Next Project Link */}
          <div className="next-project">
            <a href="#" className="next-project-link">
              Next Project: Rabbu Marketplace →
            </a>
          </div>
        </div>

        {/* Right Column - Table of Contents */}
        <div className="case-study-right">
          <nav className="table-of-contents">
            <ul className="toc-list">
              {tocSections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default RabbuPortfolio
