import { ExternalLink } from "lucide-react";

function ProjectCard({ project, index, isSelected, onClick, disabled }) {
  // Get background color based on slug
  const getBgColor = () => {
    switch (project.slug) {
      case "scrivis-tattoos":
        return "bg-gray-100";
      case "pokemon-valentine":
        return "bg-[#ffcfec]";
      case "rabbu-portfolio":
      case "rabbu-marketplace":
      case "rabbu":
        return "bg-rabbu";
      case "kobo":
        return "bg-kobo";
      case "skiin":
        return "bg-skiin";
      case "maison":
        return "bg-maison";
      default:
        return "bg-gray-100";
    }
  };

  // Get image/video styles based on slug
  const getImageClasses = () => {
    const base =
      "max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 max-sm:w-full max-sm:h-full max-sm:object-cover";
    switch (project.slug) {
      case "scrivis-tattoos":
        return base;
      case "maison":
        return `${base} !max-w-[40%] !max-h-[40%] max-sm:!max-w-[65%] max-sm:!max-h-[65%] max-sm:!object-contain [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(5%)_saturate(200%)_hue-rotate(10deg)]`;
      case "rabbu-portfolio":
      case "rabbu":
        return `${base} !w-[60%] !h-[150%] !object-cover !object-top`;
      case "kobo":
        return `${base} !w-full !h-[150%] !object-cover !object-top`;
      default:
        return base;
    }
  };

  // Get preview container styles based on slug
  const getPreviewClasses = () => {
    const base = `w-full aspect-[4/3] flex items-center justify-center overflow-hidden p-8 box-border ${getBgColor()} max-md:p-2 max-sm:p-2`;
    switch (project.slug) {
      case "rabbu-portfolio":
      case "rabbu":
        return `${base} !pb-0 !items-start max-md:!p-2 max-md:!pb-0 max-md:!items-start`;
      case "kobo":
        return `${base} !pb-0 !items-start max-md:!p-1 max-md:!pb-0 max-md:!items-start`;
      default:
        return base;
    }
  };

  const isExplorative = project.category === "misc";

  return (
    <div
      className={`group flex flex-col gap-4 max-md:gap-3 max-sm:gap-2 ${
        disabled ? "opacity-60 cursor-default" : "cursor-pointer"
      }`}
      onClick={() => !disabled && onClick(index)}
    >
      {isExplorative ? (
        <div
          className="w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center bg-transparent"
          data-slug={project.slug}
        >
          {project.video ? (
            <video
              src={project.video}
              className={`w-full h-full object-cover object-center transition-transform duration-300 ${
                !disabled ? "group-hover:scale-105" : ""
              }`}
              loop
              muted
              playsInline
              autoPlay
              aria-label={project.name}
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className={`w-full h-full object-cover object-center transition-transform duration-300 ${
                !disabled ? "group-hover:scale-105" : ""
              }`}
            />
          ) : null}
        </div>
      ) : (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
          <div
            className={`project-preview ${getPreviewClasses()}`}
            data-slug={project.slug}
          >
            {project.video ? (
              <video
                src={project.video}
                className={`${getImageClasses()} ${
                  !disabled ? "group-hover:scale-105" : ""
                }`}
                loop
                muted
                playsInline
                autoPlay
                aria-label={project.name}
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className={`${getImageClasses()} ${
                  !disabled ? "group-hover:scale-105" : ""
                }`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-transparent">
                <span className="preview-icon text-5xl opacity-20 text-text max-md:text-4xl max-sm:text-3xl">
                  📄
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1 p-0">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-text tracking-tight m-0 leading-tight transition-colors duration-600 ease-in-out inline-flex items-center gap-2 flex-1 max-md:text-base max-sm:text-sm">
            {project.name}
            {project.url && (
              <ExternalLink
                className="external-link-icon opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-current shrink-0"
                size={14}
              />
            )}
          </h3>
          <p className="text-sm text-text-light m-0 font-normal leading-normal transition-colors duration-600 ease-in-out shrink-0 max-md:text-sm max-sm:text-xs">
            {project.date}
          </p>
        </div>
        {project.description && (
          <p className="text-sm text-text-light mt-2 mb-0 font-normal leading-relaxed transition-colors duration-600 ease-in-out">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
