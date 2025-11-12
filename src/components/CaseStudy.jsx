import RabbuPortfolio from './case-studies/RabbuPortfolio'
import RabbuMarketplace from './case-studies/RabbuMarketplace'
import Kobo from './case-studies/Kobo'
import Skiin from './case-studies/Skiin'

function CaseStudy({ project, onClose }) {
  // Route to specific case study component based on project name
  const renderCaseStudy = () => {
    switch (project.name) {
      case 'Rabbu Portfolio':
        return <RabbuPortfolio onClose={onClose} />
      case 'Rabbu Marketplace':
        return <RabbuMarketplace onClose={onClose} />
      case 'Kobo':
        return <Kobo onClose={onClose} />
      case 'Skiin':
        return <Skiin onClose={onClose} />
      default:
        return (
          <div className="case-study-overlay">
            <div className="case-study-content">
              <button className="back-button" onClick={onClose}>
                ← Back
              </button>
              <h1 className="case-study-title">{project.name}</h1>
              <div className="case-study-body">
                <p>Case study content goes here...</p>
                <p>This is where the detailed project information, process, and results would be displayed.</p>
              </div>
            </div>
          </div>
        )
    }
  }

  return renderCaseStudy()
}

export default CaseStudy
