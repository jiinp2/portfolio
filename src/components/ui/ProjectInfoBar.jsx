function ProjectInfoBar({ infoItems }) {
  if (!infoItems || infoItems.length === 0) return null;

  return (
    <div className="mt-8 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {infoItems.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-xl px-5 py-4">
          <div className="text-xs text-text-muted tracking-tight leading-tight">
            {item.label}
          </div>
          <div className="mt-2 text-sm font-normal text-text tracking-normal leading-relaxed wrap-break-word">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectInfoBar;

