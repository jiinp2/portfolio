import { useEffect, useRef, useState } from 'react'
import './TabSection.css'

function TabSection({ activeTab, onTabChange, children }) {
  const tabsRef = useRef(null)
  const indicatorRef = useRef(null)
  const [indicatorStyle, setIndicatorStyle] = useState({})

  useEffect(() => {
    if (!tabsRef.current || !indicatorRef.current) return

    const updateIndicator = () => {
      const activeButton = tabsRef.current.querySelector('.tab-button.active')
      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton
        setIndicatorStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }

    // Initial position
    updateIndicator()

    // Update on activeTab change
    const timeoutId = setTimeout(updateIndicator, 0)
    
    return () => clearTimeout(timeoutId)
  }, [activeTab])

  return (
    <div className="tabs-section">
      <div className="tabs-header" ref={tabsRef}>
        <button 
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => onTabChange('experience')}
        >
          EXPERIENCE
        </button>
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => onTabChange('education')}
        >
          EDUCATION
        </button>
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => onTabChange('skills')}
        >
          SKILLS
        </button>
        <div className="tab-indicator" ref={indicatorRef} style={indicatorStyle} />
      </div>

      <div className="tab-content">
        {children}
      </div>
    </div>
  )
}

export default TabSection
