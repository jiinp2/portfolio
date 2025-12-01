import ProjectInfoBar from "../../ui/ProjectInfoBar";

function CaseStudyHero({ title, subtitle, imageSrc, imageAlt, infoItems }) {
  return (
    <>
      <div className="hero-section mb-5">
        <h1 className="case-study-title text-xl font-semibold tracking-tight text-default mb-1">
          {title}
        </h1>
        <p className="case-study-subtitle text-base text-light font-normal mb-5 leading-relaxed">
          {subtitle}
        </p>
        <div className="hero-image-container w-full">
          <div className="hero-card">
            <img
              src={imageSrc}
              alt={imageAlt || `${title} Hero`}
              className="hero-image w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <ProjectInfoBar infoItems={infoItems} />
    </>
  );
}

export default CaseStudyHero;
