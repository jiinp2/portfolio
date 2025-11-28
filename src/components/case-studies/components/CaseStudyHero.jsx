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
      {/* Project Info Bar */}
      {infoItems && infoItems.length > 0 && (
        <div className="project-info-bar">
          {infoItems.map((item, index) => (
            <div key={index} className="info-item">
              <h3>{item.label}</h3>
              <p className="text-sm text-muted font-normal">{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CaseStudyHero;
