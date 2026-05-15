import { ExternalLink } from "lucide-react";

const TITLE_HEADING_CLASS =
  "text-lg font-semibold text-text tracking-tight m-0 leading-tight transition-colors duration-600 ease-in-out inline-flex items-center gap-2 flex-1 max-md:text-base max-sm:text-sm";

const DATE_CLASS =
  "text-sm text-text-light m-0 font-normal leading-normal transition-colors duration-600 ease-in-out shrink-0 max-md:text-sm max-sm:text-xs";

const DESCRIPTION_CLASS_BASE =
  "mt-2 mb-0 text-sm font-normal leading-relaxed text-text-light transition-colors duration-600 ease-in-out";

const MORE_WORK_PRIMARY_BUTTON_CLASS =
  "inline-flex w-full shrink-0 items-center justify-center gap-2 text-sm font-medium text-text border border-gray-200 bg-white rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 cursor-pointer disabled:cursor-not-allowed";

const PREVIEW_BACKGROUND_BY_SLUG = {
  "scrivis-tattoos": "bg-gray-100",
  "pokemon-valentine": "bg-[#ffcfec]",
  "rabbu-portfolio": "bg-rabbu",
  "rabbu-marketplace": "bg-rabbu",
  rabbu: "bg-rabbu",
  kobo: "bg-kobo",
  skiin: "bg-skiin",
  maison: "bg-maison",
};

const STANDARD_IMAGE_CLASS_BASE =
  "max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 max-sm:w-full max-sm:h-full max-sm:object-cover";

function normalizePreviewBackgroundClass(slug) {
  return PREVIEW_BACKGROUND_BY_SLUG[slug] ?? "bg-gray-100";
}

function buildStandardImageClasses(slug) {
  let modifier = "";
  switch (slug) {
    case "maison":
      modifier =
        " !max-w-[40%] !max-h-[40%] max-sm:!max-w-[65%] max-sm:!max-h-[65%] max-sm:!object-contain [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(5%)_saturate(200%)_hue-rotate(10deg)]";
      break;
    case "rabbu-portfolio":
    case "rabbu":
      modifier = " !w-[60%] !h-[150%] !object-cover !object-top";
      break;
    case "kobo":
      modifier = " !w-full !h-[150%] !object-cover !object-top";
      break;
    default:
      modifier = "";
  }
  return `${STANDARD_IMAGE_CLASS_BASE}${modifier}`;
}

function buildPreviewContainerClasses(slug) {
  const bg = normalizePreviewBackgroundClass(slug);
  const base = `w-full aspect-4/3 flex items-center justify-center overflow-hidden p-8 box-border ${bg} max-md:p-3 max-sm:p-3`;

  switch (slug) {
    case "rabbu-portfolio":
    case "rabbu":
      return `${base} !pb-0 !items-start max-md:!p-3 max-md:!pb-0 max-md:!items-start`;
    case "kobo":
      return `${base} !pb-0 !items-start max-md:!p-2 max-md:!pb-0 max-md:!items-start`;
    default:
      return base;
  }
}

function CardTitleRow({ name, date }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h3 className={TITLE_HEADING_CLASS}>{name}</h3>
      <p className={DATE_CLASS}>{date}</p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isSelected,
  onClick,
  disabled,
  useShortDescription = false,
  isMoreWork = false,
}) {
  const isExplorative = project.category === "misc";
  const isExternalLink = Boolean(project.url);
  const displayDescription = useShortDescription
    ? (project.descriptionShort ?? project.description)
    : project.description;

  const interactiveScaleSuffix = disabled ? "" : "group-hover:scale-105";
  const explorativeMediaClass =
    `w-full h-full object-cover object-center transition-transform duration-300 ${interactiveScaleSuffix}`.trimEnd();
  const standardMediaOuterClass =
    `${buildStandardImageClasses(project.slug)} ${interactiveScaleSuffix}`.trimEnd();

  const rootVisualStateClass = disabled
    ? "opacity-60 cursor-default"
    : "cursor-pointer";

  const handlePrimaryAction = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) {
      return;
    }
    if (isExternalLink) {
      window.open(project.url, "_blank", "noopener,noreferrer");
      return;
    }
    onClick(index);
  };

  const handleCardSurfaceClick = () => {
    if (!disabled) {
      onClick(index);
    }
  };

  const previewInnerClassName = buildPreviewContainerClasses(project.slug);

  const standardCaseMarkup = (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
      <div
        className={`project-preview ${previewInnerClassName}`}
        data-slug={project.slug}
      >
        {project.video ? (
          <video
            src={project.video}
            className={standardMediaOuterClass}
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
            className={standardMediaOuterClass}
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
  );

  const explorativeMarkup = (
    <div
      className="w-full aspect-4/3 rounded-xl overflow-hidden flex items-center justify-center bg-transparent"
      data-slug={project.slug}
    >
      {project.video ? (
        <video
          src={project.video}
          className={explorativeMediaClass}
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
          className={explorativeMediaClass}
        />
      ) : null}
    </div>
  );

  return (
    <div
      className={`group flex flex-col gap-4 max-md:gap-3 max-sm:gap-2 ${rootVisualStateClass} h-full`}
      onClick={handleCardSurfaceClick}
    >
      {isExplorative ? explorativeMarkup : standardCaseMarkup}

      {isMoreWork ? (
        <div className="flex min-h-0 flex-1 flex-col gap-6 p-0">
          <div className="flex min-h-0 flex-1 flex-col gap-1">
            <CardTitleRow name={project.name} date={project.date} />
            {displayDescription ? (
              <p className={DESCRIPTION_CLASS_BASE}>{displayDescription}</p>
            ) : null}
          </div>

          <button
            type="button"
            className={MORE_WORK_PRIMARY_BUTTON_CLASS}
            onClick={handlePrimaryAction}
            disabled={disabled}
          >
            {isExternalLink ? (
              <>
                <ExternalLink size={16} className="shrink-0" />
                <span>Open link</span>
              </>
            ) : (
              <span>Read case study</span>
            )}
          </button>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col gap-1 p-0">
          <CardTitleRow name={project.name} date={project.date} />
          {displayDescription ? (
            <p className={`${DESCRIPTION_CLASS_BASE} flex-1`}>
              {displayDescription}
            </p>
          ) : (
            <div className="min-h-0 flex-1" />
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
