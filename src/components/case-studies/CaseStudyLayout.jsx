import { Link } from "react-router-dom";

function CaseStudyLayout({ children, className = "", toc }) {
  const pageClassName = className
    ? `case-study-page ${className}`
    : "case-study-page";

  return (
    <div className={pageClassName}>
      <div className="case-study-layout">
        <div className="case-study-left">
          <Link to="/" className="back-button sticky no-underline">
            <span className="back-arrow">←</span> Back
          </Link>
        </div>

        <div className="case-study-content">{children}</div>

        {toc}
      </div>
    </div>
  );
}

export default CaseStudyLayout;
