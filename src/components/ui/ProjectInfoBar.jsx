function ProjectInfoBar({ infoItems }) {
  if (!infoItems || infoItems.length === 0) return null;

  return (
    <div className="project-info-bar">
      {infoItems.map((item, index) => (
        <div key={index} className="info-item">
          <h4>{item.label}</h4>
          <p className="text-sm text-muted font-normal">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectInfoBar;

