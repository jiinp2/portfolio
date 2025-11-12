import { useState, useEffect, useRef } from 'react'
import './RabbuMarketplace.css'

function RabbuMarketplace({ onClose }) {
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
    { id: 'final-design', label: 'Final Design' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'design-system', label: 'Design System' }
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
        <div className="case-study-left">
          <button className="back-button sticky" onClick={onClose}>
            ← Back
          </button>
        </div>
        
        {/* Middle Column - Main Content */}
        <div className="case-study-content">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="case-study-title">Rabbu Marketplace</h1>
            <p className="case-study-subtitle">A platform where investors can find and evaluate profitable investment properties.</p>
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
              <p>Rabbu engaged Drip Design to enhance their short-term rental (STR) platform. The collaboration focused on integrating existing tools and introducing new features to assist investors in finding and managing properties effectively.</p>
              <p>This case study follows the work for Rabbu Marketplace and Rabbu Portfolio can be found here.</p>
            </div>

            <div className="subsection">
              <h3>Outcomes</h3>
              <ul className="outcomes-list">
                <li>Creation of a holistic platform of tools for assessing and acquiring successful short-term rentals.</li>
                <li>MVP launched in October 2022, within one month the platform had 33,000+ unique users who ran estimates, and 2,000+ accounts were created. The project delivered a unified platform of tools for property acquisition and management.</li>
              </ul>
            </div>
          </section>

          {/* Design Research Section */}
          <section id="design-research" ref={el => sectionRefs.current['design-research'] = el} className="case-study-section">
            <h2>Design Research</h2>
            
            <div className="subsection">
              <h3>The Short-term Rental Space</h3>
              <p>The STR industry is experiencing growth with the rise of platforms like Airbnb and VRBO. There is an opportunity for a new platform that can assist new to experienced investors in finding, acquiring, and managing properties.</p>
            </div>

            <div className="subsection">
              <h3>Landscape Review</h3>
              <p>We benchmarked relevant and competing platforms to understand user expectations in functionality and common interaction patterns.</p>
              <div className="competitor-grid">
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Airbnb</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Zillow</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>Awning</span>
                  </div>
                </div>
                <div className="competitor-item">
                  <div className="image-placeholder">
                    <span>AirDNA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Previous Design Analysis</h3>
              <p>We evaluated Rabbu's launched tools to better understand product features to identify improvements when integrating them into a holistic platform.</p>
              <div className="image-placeholder large">
                <span>Previous Design Screenshots</span>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section id="design-process" ref={el => sectionRefs.current['design-process'] = el} className="case-study-section">
            <h2>Design Process</h2>
            
            <div className="subsection">
              <h3>Hypothetical User Journey</h3>
              <p>During our regular meetings with the Rabbu team we were aligned with their ideal user journey, which helped with informing the platform's navigation. Although hypothetical this journey is informed by Rabbu's interactions and user interviews with customers thus far.</p>
              
              <div className="journey-cards">
                <div className="journey-card">
                  <div className="journey-number">1</div>
                  <h4>Learning</h4>
                  <p>A user researches STRs, reading about our services, and discovering free tools we offer.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">2</div>
                  <h4>Research</h4>
                  <p>Delving deeper into STRs, using Rabbu for revenue calculations and discovering tools for understanding the market.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">3</div>
                  <h4>Investment</h4>
                  <p>The user, now familiar with potential revenue and the market looks to invest in an STR, exploring the out marketplace.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">4</div>
                  <h4>Operation</h4>
                  <p>After acquiring an STR, the user is lead to Rabbu's property management services.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">5</div>
                  <h4>Expansion</h4>
                  <p>Pleased with the success of their first STR, the user looks to invest in more properties.</p>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Free Trial vs. Freemium</h3>
              <p>We compared two models for user engagement prior to users committing to a full subscription. The Free Trial model provided a limited-time access to all features, and in contrast, the Freemium model offered fully free features with the option for users to upgrade to premium for advanced features.</p>
              
              <div className="comparison-section">
                <h4>General Trends</h4>
                <p>This is a comparison of general trends when it comes to comparing the two options.</p>
                
                <div className="comparison-grid">
                  <div className="comparison-column">
                    <h5>Free Trial</h5>
                    <ul className="comparison-list">
                      <li className="pro">Yields higher activation rates, attracting actively searching users.</li>
                      <li className="pro">Achieves higher conversion from free to paid due to urgency.</li>
                      <li className="con">Demands more marketing outreach, reducing resource efficiency.</li>
                    </ul>
                  </div>
                  <div className="comparison-column">
                    <h5>Freemium</h5>
                    <ul className="comparison-list">
                      <li className="pro">Allows self-paced conversion, gradually highlighting premium features.</li>
                      <li className="pro">Results in a higher volume of free accounts.</li>
                      <li className="pro">Improves resource efficiency by reducing the need for aggressive marketing campaigns.</li>
                      <li className="con">May lead to lower activation rates without immediate pressure to explore all features.</li>
                      <li className="con">Improves resource efficiency but can reduce direct revenue increase.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Motivations For Choosing Freemium</h3>
              
              <div className="journey-cards">
                <div className="journey-card">
                  <div className="journey-number">1</div>
                  <h4>Multiple Features for User Exploration</h4>
                  <p>The platform will offer a mix of free and paid features. The free features will still provide users with significant value, as demonstrated by the successful utilization of Rabbu's previously launched tools.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">2</div>
                  <h4>Goal of Increasing User Base</h4>
                  <p>A freemium model is effective when the objective is to expand the user base by attracting more free accounts.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">3</div>
                  <h4>Resource Efficiency and User Outreach</h4>
                  <p>Rabbu aims to enhance resource efficiency and explore alternative methods, moving away from the intensive user outreach efforts employed thus far through direct sales teams.</p>
                </div>
                <div className="journey-card">
                  <div className="journey-number">4</div>
                  <h4>Gradual Activation of Paid Tiers</h4>
                  <p>Frequent users can take their time to explore the platform before deciding to upgrade. This flexibility ideally contributes to more organic and sustainable user growth.</p>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Designing for Freemium</h3>
              <p>Adopting the freemium model influenced our designs, we determined that it would be important to communicate the added benefits of subscribing to a premium account and doing so needs to be a seamless process.</p>
              <p>In the example below the user is still able to see the ratings, average daily rate, revenue, etc. for this property but will need to subscribe to see more comparable listings and additional advanced features.</p>
              <div className="image-placeholder large">
                <span>Freemium Design Example</span>
              </div>
            </div>
          </section>

          {/* Final Design Section */}
          <section id="final-design" ref={el => sectionRefs.current['final-design'] = el} className="case-study-section">
            <h2>Final Design</h2>
            
            <div className="subsection">
              <h3>Rabbu Marketplace</h3>
              <p>Rabbu Marketplace is composed of three different sections, Revenue Estimates, Market Data, and Properties for Sale.</p>
              
              <div className="feature-cards">
                <div className="feature-card">
                  <div className="feature-image">
                    <div className="image-placeholder">
                      <span>Revenue Estimates Icon</span>
                    </div>
                  </div>
                  <div className="feature-content">
                    <h4>Revenue Estimates</h4>
                    <p>Users can run revenue estimates for any US address based on data that utilizes nearby rentals.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-image">
                    <div className="image-placeholder">
                      <span>Market Data Icon</span>
                    </div>
                  </div>
                  <div className="feature-content">
                    <h4>Market Data</h4>
                    <p>Users can access real-time and historical rental statistic trends in any given area.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-image">
                    <div className="image-placeholder">
                      <span>Properties for Sale Icon</span>
                    </div>
                  </div>
                  <div className="feature-content">
                    <h4>Properties for Sale</h4>
                    <p>Users can view on-market properties and easily filter investment opportunities based on their own criteria.</p>
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
                <div className="key-feature-content">
                  <h3>Investment Return Calculator</h3>
                  <p>A tool for investors to determine equity required to acquire a property as well as estimated potential earnings. This calculator can be personalized with custom financial information.</p>
                </div>
                <div className="key-feature-image">
                  <div className="image-placeholder large">
                    <span>Investment Return Calculator Image</span>
                  </div>
                </div>
              </div>

              <div className="key-feature">
                <div className="key-feature-content">
                  <h3>Identifying High-Performance Investments</h3>
                  <p>Investors can efficiently compare properties based on their investment goals such as cash flow vs. long term property appreciation. As well as access to Rabbu's property recommendations.</p>
                </div>
                <div className="key-feature-image">
                  <div className="image-placeholder large">
                    <span>High-Performance Investments Image</span>
                  </div>
                </div>
              </div>

              <div className="key-feature">
                <div className="key-feature-content">
                  <h3>View On-Market Rental Properties</h3>
                  <p>Investors can browse properties to invest in with underwriting provided by Rabbu.</p>
                </div>
                <div className="key-feature-image">
                  <div className="image-placeholder large">
                    <span>On-Market Properties Image</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design System Section */}
          <section id="design-system" ref={el => sectionRefs.current['design-system'] = el} className="case-study-section">
            <h2>Design System</h2>
            
            <div className="subsection">
              <h3>Early Stage Design System</h3>
              <p>Recognizing the need for a cohesive and consistent design approach, this system aims to streamline the design process, ensure consistency across the platform, and facilitate smoother handoffs to the client.</p>
              <div className="image-placeholder large">
                <span>Design System Components</span>
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

export default RabbuMarketplace
