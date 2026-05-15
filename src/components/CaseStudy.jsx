import Rabbu from "./case-studies/Rabbu";
import RabbuPortfolio from "./case-studies/RabbuPortfolio";
import RabbuMarketplace from "./case-studies/RabbuMarketplace";
import Kobo from "./case-studies/Kobo";
import Skiin from "./case-studies/Skiin";
import Maison from "./case-studies/Maison";

/** Keys match `project.name` from `projects` data. */
const CASE_STUDY_COMPONENT_BY_PROJECT_NAME = {
  Maison,
  Rabbu,
  "Rabbu Portfolio": RabbuPortfolio,
  "Rabbu Marketplace": RabbuMarketplace,
  Kobo,
  Skiin,
};

function CaseStudy({ project, onClose }) {
  const CaseStudyView = CASE_STUDY_COMPONENT_BY_PROJECT_NAME[project.name];
  const caseStudyProps = {
    onClose,
    currentProjectSlug: project.slug,
  };

  if (CaseStudyView) {
    return <CaseStudyView {...caseStudyProps} />;
  }

  return (
    <div className="case-study-overlay">
      <div className="case-study-content">
        <button className="back-button" onClick={onClose}>
          ← Back
        </button>
        <h1 className="case-study-title">{project.name}</h1>
        <div className="case-study-body">
          <p>Case study content goes here...</p>
          <p>
            This is where the detailed project information, process, and
            results would be displayed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
