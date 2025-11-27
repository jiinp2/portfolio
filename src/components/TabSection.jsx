import { useEffect, useRef, useState } from 'react'

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

    // Update on activeTab change and window resize
    const timeoutId = setTimeout(updateIndicator, 0)
    window.addEventListener('resize', updateIndicator)
    
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeTab])

  return (
    <div className="mb-10 max-md:mb-8">
      <div className="flex gap-0 mb-10 border-b border-gray-100 relative max-md:mb-8" ref={tabsRef}>
        <button
          className={`tab-button bg-transparent border-0 py-3 text-sm font-medium text-gray-400 uppercase tracking-wide cursor-pointer transition-colors duration-200 mr-6 min-h-[44px] flex items-center relative z-10 hover:text-gray-500 max-md:py-4 max-sm:py-3 max-sm:mr-4 ${activeTab === 'experience' ? 'active text-text' : ''}`}
          onClick={() => onTabChange('experience')}
        >
          EXPERIENCE
        </button>
        <button
          className={`tab-button bg-transparent border-0 py-3 text-sm font-medium text-gray-400 uppercase tracking-wide cursor-pointer transition-colors duration-200 mr-6 min-h-[44px] flex items-center relative z-10 hover:text-gray-500 max-md:py-4 max-sm:py-3 max-sm:mr-4 ${activeTab === 'education' ? 'active text-text' : ''}`}
          onClick={() => onTabChange('education')}
        >
          EDUCATION
        </button>
        <div className="absolute bottom-[-1px] h-0.5 bg-text transition-all duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] z-20" ref={indicatorRef} style={indicatorStyle} />
      </div>

      <div className="min-h-[200px] max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-sm hover:[&::-webkit-scrollbar-thumb]:bg-gray-200">
        {children}
      </div>
    </div>
  )
}

export default TabSection
