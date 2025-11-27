
function ScrollIndicators({ projects, activeProject, onProjectClick, isVisible = true }) {
  if (!isVisible) return null

  return (
    <div className="fixed right-[25px] top-1/2 -translate-y-1/2 z-[100] max-md:hidden">
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full border border-gray-400 bg-transparent cursor-pointer transition-all duration-200 p-0 outline-none hover:border-gray-500 hover:scale-110 ${
              activeProject === index ? 'bg-text border-text hover:border-text hover:bg-text' : ''
            }`}
            onClick={() => onProjectClick(index)}
            aria-label={project.label}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollIndicators
