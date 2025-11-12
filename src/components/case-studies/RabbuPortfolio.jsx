import { useState, useEffect, useRef } from 'react'
import './RabbuPortfolio.css'

function RabbuPortfolio({ onClose }) {
  const [activeSection, setActiveSection] = useState('overview')
  const sectionRefs = useRef({})
  const tocListRef = useRef(null)
  const indicatorRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({})

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

    // Initial position
    updateIndicator()

    // Update on activeSection change
    const timeoutId = setTimeout(updateIndicator, 0)
    
    return () => clearTimeout(timeoutId)
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
        <div className="case-study-left flex items-start pt-8">
          <button className="back-button sticky cursor-pointer" onClick={onClose}>
            ← Back
          </button>
        </div>
        
        {/* Middle Column - Main Content */}
        <div className="case-study-content">
          {/* Hero Section */}
          <div className="hero-section mb-8 text-left">
            <h1 className="case-study-title text-2xl font-semibold tracking-tight text-default mb-6">Rabbu Portfolio</h1>
            <p className="case-study-subtitle text-lg text-light font-normal mb-12 max-w-4xl leading-relaxed">A platform where short-term rental investors can manage their properties and track performance.</p>
            <div className="hero-image-placeholder w-full flex items-center justify-center text-xl font-medium">
              <span>Hero Image Placeholder</span>
            </div>
          </div>

        {/* Project Info Bar */}
        <div className="project-info-bar grid grid-cols-3 gap-8 mb-8 p-8">
          <div className="info-item">
            <h3 className="text-sm font-semibold text-light uppercase tracking-wide mb-2">Team</h3>
            <p className="text-lg text-default font-medium m-0">Rabbu (3 PMs), Drip Design (2 Designers)</p>
          </div>
          <div className="info-item">
            <h3 className="text-sm font-semibold text-light uppercase tracking-wide mb-2">Role</h3>
            <p className="text-lg text-default font-medium m-0">Design Research, UI & UX Design</p>
          </div>
          <div className="info-item">
            <h3 className="text-sm font-semibold text-light uppercase tracking-wide mb-2">Timeline</h3>
            <p className="text-lg text-default font-medium m-0">Mar 2022 - Feb 2023</p>
          </div>
        </div>

        {/* Overview Section */}
        <section id="overview" ref={el => sectionRefs.current.overview = el} className="case-study-section mb-12">
          <h2 className="text-2xl font-semibold text-default mb-8 tracking-tight leading-tight">Overview</h2>
          
          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">Introduction</h3>
            <p className="text-lg leading-relaxed text-muted mb-6">Rabbu approached Drip Design to help design their short-term rental (STR) platform by incorporating tools they had previously launched as well as newer features that will help short-term rental investors find and manage property investments.</p>
            <p className="text-lg leading-relaxed text-muted mb-6">This case study follows the work for Rabbu Portfolio and Rabbu Marketplace can be found here.</p>
          </div>

          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">What is Rabbu Portfolio?</h3>
            <p className="text-lg leading-relaxed text-muted mb-6">Is a part of Rabbu's STR platform where users can manage their property investments from performance evaluation, rental activity, and statements.</p>
          </div>
        </section>

        {/* Outcomes Section */}
        <section id="outcomes" ref={el => sectionRefs.current.outcomes = el} className="case-study-section mb-12">
          <h2 className="text-2xl font-semibold text-default mb-8 tracking-tight leading-tight">Outcomes</h2>
          <ul className="outcomes-list list-none p-0 m-0">
            <li className="py-4 relative pl-8 text-lg leading-relaxed text-muted border-b border-gray-100">End-to-end design and launch of Rabbu's Portfolio platform, enhancing the STR management experience.</li>
            <li className="py-4 relative pl-8 text-lg leading-relaxed text-muted border-b-0">Revitalized the user interface for cohesion with Rabbu Marketplace.</li>
          </ul>
        </section>

        {/* Design Research Section */}
        <section id="design-research" ref={el => sectionRefs.current['design-research'] = el} className="case-study-section mb-12">
          <h2 className="text-2xl font-semibold text-default mb-8 tracking-tight leading-tight">Design Research</h2>
          
          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">Early Stage Hypothetical User Journeys</h3>
            <p className="text-lg leading-relaxed text-muted mb-6">Utilizing hypothetical user journeys provided by Rabbu, we aimed to define user needs and desired outcomes.</p>
            <p className="text-lg leading-relaxed text-muted mb-6">Our goal would be to transition from idealized user journeys to more realistic and user-tested versions through future iterations.</p>
          </div>

          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">New User Journey</h3>
            <p className="text-lg leading-relaxed text-muted mb-8">This journey outlines the process of a new Rabbu Portfolio user, from initial discovery to successful property management.</p>
            
            <div className="journey-cards grid grid-cols-4 gap-6 mt-8">
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Discovery</h4>
                <p className="text-lg leading-relaxed text-light m-0">Investors looking for an online platform to manage their first investment discovers Rabbu Portfolio.</p>
              </div>
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Expert Consultation</h4>
                <p className="text-lg leading-relaxed text-light m-0">The investor is provided a walkthrough by a Rabbu expert, who demonstrates the platform's efficient property management system.</p>
              </div>
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Seamless Onboarding</h4>
                <p className="text-lg leading-relaxed text-light m-0">The investor signs a property management contract with Rabbu, officially onboarding their property to the platform.</p>
              </div>
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Portfolio Management</h4>
                <p className="text-lg leading-relaxed text-light m-0">The investor monitors their performance and financials, leading to their first successful investment.</p>
              </div>
            </div>
          </div>

          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">Experienced User Journey</h3>
            <p className="text-lg leading-relaxed text-muted mb-8">This journey outlines the process of how an experienced user who finds success with utilizing Portfolio decides to search and onboard additional properties they have found on Rabbu Marketplace.</p>
            
            <div className="journey-cards grid grid-cols-4 gap-6 mt-8">
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Strategic Expansion</h4>
                <p className="text-lg leading-relaxed text-light m-0">The investor is aware of Rabbu Marketplace, a platform where they can search for properties to expand their short-term rental portfolio.</p>
              </div>
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Market Analysis</h4>
                <p className="text-lg leading-relaxed text-light m-0">They deep-dive into potential properties. Utilizing Marketplace tools to assess investment viability.</p>
              </div>
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Informed Investments</h4>
                <p className="text-lg leading-relaxed text-light m-0">After thorough analysis and consultation with Rabbu experts, the investor selects an additional property to invest in.</p>
              </div>
              <div className="journey-card bg-white border border-gray-200 rounded-xl p-8 relative transition">
                <div className="journey-number absolute -top-3 left-8 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <h4 className="text-xl font-semibold text-default mb-4 mt-2 tracking-tight leading-tight">Scalable Management</h4>
                <p className="text-lg leading-relaxed text-light m-0">The investor manages their short-term rentals all-in-one place, easing operations across multiple properties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section id="design-process" ref={el => sectionRefs.current['design-process'] = el} className="case-study-section mb-12">
          <h2 className="text-2xl font-semibold text-default mb-8 tracking-tight leading-tight">Design Process</h2>
          
          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">Rabbu One</h3>
            <p className="text-lg leading-relaxed text-muted mb-6">Rabbu decided to transition to a unified account system facilitated seamless access to both Marketplace and Portfolio, enhancing user interaction across Rabbu services.</p>
          </div>

          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">Unified Account Matrix</h3>
            <p className="text-lg leading-relaxed text-muted mb-6">Defining how users will interact with different Rabbu services throughout their journey helped with creating transitions between products.</p>
            <div className="image-placeholder large bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xl my-4 h-72">
              <span>Matrix Diagram Placeholder</span>
            </div>
          </div>
        </section>

        {/* Final Design Section */}
        <section id="final-design" ref={el => sectionRefs.current['final-design'] = el} className="case-study-section mb-12">
          <h2 className="text-2xl font-semibold text-default mb-8 tracking-tight leading-tight">Final Design</h2>
          
          <div className="subsection mb-6">
            <h3 className="text-xl font-semibold text-default mb-4 tracking-tight leading-tight">Rabbu Portfolio</h3>
            <p className="text-lg leading-relaxed text-muted mb-8">The platform is organized into Dashboard, Properties, Calendar, Reviews, Activity, Pricing, and Statements, providing users comprehensive oversight over their investment properties.</p>
            
            <div className="feature-cards grid grid-cols-auto-fit gap-8 mt-8">
              <div className="feature-card bg-white border border-gray-200 rounded-xl overflow-hidden transition">
                <div className="feature-image h-48 overflow-hidden">
                  <div className="image-placeholder bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-lg my-4 h-48">
                    <span>Dashboard Image</span>
                  </div>
                </div>
                <div className="feature-content p-6">
                  <h4 className="text-xl font-semibold text-default mb-3 tracking-tight leading-tight">Dashboard</h4>
                  <p className="text-lg leading-relaxed text-light m-0">A customizable snapshot of property trends.</p>
                </div>
              </div>

              <div className="feature-card bg-white border border-gray-200 rounded-xl overflow-hidden transition">
                <div className="feature-image h-48 overflow-hidden">
                  <div className="image-placeholder bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-lg my-4 h-48">
                    <span>Properties & Calendar Image</span>
                  </div>
                </div>
                <div className="feature-content p-6">
                  <h4 className="text-xl font-semibold text-default mb-3 tracking-tight leading-tight">Properties & Calendar</h4>
                  <p className="text-lg leading-relaxed text-light m-0">Displays property statuses and booking details.</p>
                </div>
              </div>

              <div className="feature-card bg-white border border-gray-200 rounded-xl overflow-hidden transition">
                <div className="feature-image h-48 overflow-hidden">
                  <div className="image-placeholder bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-lg my-4 h-48">
                    <span>Reviews & Activity Image</span>
                  </div>
                </div>
                <div className="feature-content p-6">
                  <h4 className="text-xl font-semibold text-default mb-3 tracking-tight leading-tight">Reviews & Activity Feed</h4>
                  <p className="text-lg leading-relaxed text-light m-0">Keeps property owners updated on guest feedback and property activities.</p>
                </div>
              </div>

              <div className="feature-card bg-white border border-gray-200 rounded-xl overflow-hidden transition">
                <div className="feature-image h-48 overflow-hidden">
                  <div className="image-placeholder bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-lg my-4 h-48">
                    <span>Pricing & Statements Image</span>
                  </div>
                </div>
                <div className="feature-content p-6">
                  <h4 className="text-xl font-semibold text-default mb-3 tracking-tight leading-tight">Pricing & Statements</h4>
                  <p className="text-lg leading-relaxed text-light m-0">Easy access to property related financial statements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="key-features" ref={el => sectionRefs.current['key-features'] = el} className="case-study-section mb-12">
          <h2 className="text-2xl font-semibold text-default mb-8 tracking-tight leading-tight">Key Features</h2>
          
          <div className="key-features mt-6">
            <div className="key-feature grid grid-cols-2 gap-12 mb-8 items-center">
              <div className="key-feature-image w-full">
                <div className="image-placeholder large bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xl my-4 h-72">
                  <span>Performance Dashboard Image</span>
                </div>
              </div>
              <div className="key-feature-content">
                <h3 className="text-2xl font-semibold text-default mb-4 tracking-tight leading-tight">Comprehensive Performance Insights</h3>
                <p className="text-lg leading-relaxed text-muted m-0">Delivers real-time and customizable insights of financial and operational metrics, empowering investors to make data-driven decisions.</p>
              </div>
            </div>

            <div className="key-feature grid grid-cols-2 gap-12 mb-8 items-center">
              <div className="key-feature-image w-full">
                <div className="image-placeholder large bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xl my-4 h-72">
                  <span>Property Reservations Image</span>
                </div>
              </div>
              <div className="key-feature-content">
                <h3 className="text-2xl font-semibold text-default mb-4 tracking-tight leading-tight">Streamlined Property Booking Management</h3>
                <p className="text-lg leading-relaxed text-muted m-0">Simplifies booking management by displaying bookings across all properties and listing platforms.</p>
              </div>
            </div>

            <div className="key-feature grid grid-cols-2 gap-12 mb-8 items-center">
              <div className="key-feature-image w-full">
                <div className="image-placeholder large bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xl my-4 h-72">
                  <span>Activity Feed Image</span>
                </div>
              </div>
              <div className="key-feature-content">
                <h3 className="text-2xl font-semibold text-default mb-4 tracking-tight leading-tight">Real-Time Property Activity Tracker</h3>
                <p className="text-lg leading-relaxed text-muted m-0">Provides real-time updates to property happenings, elevating guest satisfaction through proactive property management.</p>
              </div>
            </div>
          </div>
        </section>

          {/* Next Project Link */}
          <div className="next-project mt-12 pt-6 border-t border-gray-200 text-center">
            <a href="#" className="next-project-link text-xl font-medium text-primary transition-colors">
              Next Project: Rabbu Marketplace →
            </a>
          </div>
        </div>

        {/* Right Column - Table of Contents */}
        <div className="case-study-right flex items-start pt-8">
          <nav className="table-of-contents sticky top-8 h-fit w-fit max-w-64 p-0">
            <ul className="toc-list list-none p-0 m-0" ref={tocListRef}>
              {tocSections.map((section) => (
                <li key={section.id} className="mb-3">
                  <button
                    data-section-id={section.id}
                    className={`toc-item bg-none border-none p-0 text-sm cursor-pointer text-left w-full transition-colors relative block ${activeSection === section.id ? 'active text-default font-semibold' : 'text-gray-400'}`}
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

export default RabbuPortfolio
