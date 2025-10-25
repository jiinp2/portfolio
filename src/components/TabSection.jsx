import './TabSection.css'

function TabSection({ activeTab, onTabChange, children }) {
  return (
    <div className="tabs-section">
      <div className="tabs-header">
        <button 
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => onTabChange('experience')}
        >
          EXPERIENCE
        </button>
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => onTabChange('skills')}
        >
          SKILLS
        </button>
      </div>

      <div className="tab-content">
        {children}
      </div>
    </div>
  )
}

export default TabSection
