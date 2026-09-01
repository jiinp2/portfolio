import { ExternalLink } from "lucide-react";

const TITLE_HEADING_CLASS =
  "text-lg font-semibold text-text tracking-tight m-0 leading-tight transition-colors duration-600 ease-in-out inline-flex items-center gap-2 flex-1 max-md:text-base max-sm:text-sm";

const DATE_CLASS =
  "text-sm text-text-light m-0 font-normal leading-normal transition-colors duration-600 ease-in-out shrink-0 max-md:text-sm max-sm:text-xs";

const DESCRIPTION_CLASS_BASE =
  "mt-2 mb-0 text-sm font-normal leading-relaxed text-text-light transition-colors duration-600 ease-in-out";

const PROJECT_CARD_CTA_CLASS =
  "project-card-cta project-card-cta-trigger inline-flex w-40 self-start items-center justify-center gap-2 text-sm font-medium text-text border border-border bg-surface rounded-lg px-3 py-1.5 transition-colors hover:bg-gray-50 dark:hover:bg-dark-bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 cursor-pointer disabled:cursor-not-allowed";

const PROJECT_CARD_HOVER_SYNC_CLASS =
  "has-[.project-card-preview-trigger:hover]:[&_.project-card-preview-frame]:border-text/30 has-[.project-card-cta-trigger:hover]:[&_.project-card-preview-frame]:border-text/30 has-[.project-card-preview-trigger:hover]:[&_.project-card-preview-media]:scale-105 has-[.project-card-cta-trigger:hover]:[&_.project-card-preview-media]:scale-105 has-[.project-card-preview-trigger:hover]:[&_.project-card-cta]:bg-gray-50 has-[.project-card-preview-trigger:hover]:[&_.project-card-cta]:dark:bg-dark-bg-elevated";

const PREVIEW_BACKGROUND_BY_SLUG = {
  "pokemon-valentine": "bg-[#ffcfec]",
  "rabbu-portfolio": "bg-rabbu",
  "rabbu-marketplace": "bg-rabbu",
  rabbu: "bg-rabbu",
  kobo: "bg-kobo",
  skiin: "bg-skiin",
  maison: "bg-maison",
};

const PREVIEW_FILL_SLUGS = new Set(["scrivis-tattoos"]);

const STANDARD_IMAGE_CLASS_BASE =
  "max-w-full max-h-full w-auto h-auto object-contain max-sm:w-full max-sm:h-full max-sm:object-cover";

function isFillPreview(slug) {
  return PREVIEW_FILL_SLUGS.has(slug);
}

function normalizePreviewBackgroundClass(slug) {
  return PREVIEW_BACKGROUND_BY_SLUG[slug] ?? "bg-gray-100";
}

function buildStandardImageClasses(slug) {
  if (isFillPreview(slug)) {
    return "h-full w-full object-cover object-center";
  }

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
  if (isFillPreview(slug)) {
    return "box-border flex aspect-4/3 w-full overflow-hidden bg-transparent p-0";
  }

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

function ProjectCardPreview({ project, interactive = false, className = "" }) {
  const mediaClass =
    `${buildStandardImageClasses(project.slug)} project-card-preview-media${interactive ? " transition-transform duration-300" : ""}`.trimEnd();
  const previewInnerClassName = buildPreviewContainerClasses(project.slug);

  return (
    <div
      className={`project-card-preview-frame bg-surface rounded-xl overflow-hidden border border-border${interactive ? " transition-colors" : ""} ${className}`.trimEnd()}
    >
      <div
        className={`project-preview ${previewInnerClassName}`}
        data-slug={project.slug}
        {...(isFillPreview(project.slug) ? { "data-fill": "true" } : {})}
      >
        {project.video ? (
          <video
            src={project.video}
            className={mediaClass}
            loop
            muted
            playsInline
            autoPlay
            aria-label={project.name}
          />
        ) : project.image ? (
          <img src={project.image} alt={project.name} className={mediaClass} />
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
}

function ProjectCard({
  project,
  index,
  onOpenProject,
  disabled = false,
  useShortDescription = false,
  useStandardPreview = false,
}) {
  const isExplorative = project.category === "misc";
  const isExternalLink = Boolean(project.url);
  const displayDescription = useShortDescription
    ? (project.descriptionShort ?? project.description)
    : project.description;

  const handlePrimaryAction = () => {
    if (disabled) {
      return;
    }
    onOpenProject(index);
  };

  const previewAriaLabel = isExternalLink
    ? `Visit ${project.name} site`
    : `View ${project.name} case study`;

  const standardPreview = (
    <ProjectCardPreview project={project} interactive={!disabled} />
  );

  const explorativePreview = (
    <div
      className={`project-card-preview-frame w-full aspect-4/3 rounded-xl overflow-hidden flex items-center justify-center bg-transparent border border-border${!disabled ? " transition-colors" : ""}`}
      data-slug={project.slug}
    >
      {project.video ? (
        <video
          src={project.video}
          className={`project-card-preview-media w-full h-full object-cover object-center${!disabled ? " transition-transform duration-300" : ""}`}
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
          className={`project-card-preview-media w-full h-full object-cover object-center${!disabled ? " transition-transform duration-300" : ""}`}
        />
      ) : null}
    </div>
  );

  const previewContent =
    isExplorative && !useStandardPreview ? explorativePreview : standardPreview;

  return (
    <article
      className={`flex h-full flex-col gap-4 max-md:gap-3 max-sm:gap-2 ${disabled ? "opacity-60" : PROJECT_CARD_HOVER_SYNC_CLASS}`}
    >
      <button
        type="button"
        className="project-card-preview-trigger block w-full rounded-xl border-0 bg-transparent p-0 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed"
        onClick={handlePrimaryAction}
        disabled={disabled}
        aria-label={previewAriaLabel}
      >
        {previewContent}
      </button>

      <div className="flex min-h-0 flex-1 flex-col gap-1">
        <CardTitleRow name={project.name} date={project.date} />
        {displayDescription ? (
          <p className={DESCRIPTION_CLASS_BASE}>{displayDescription}</p>
        ) : null}
      </div>

      <button
        type="button"
        className={`${PROJECT_CARD_CTA_CLASS} -mt-2`}
        onClick={handlePrimaryAction}
        disabled={disabled}
      >
        {isExternalLink ? (
          <>
            <ExternalLink size={16} className="shrink-0" aria-hidden="true" />
            <span>Visit site</span>
          </>
        ) : (
          <span>View case study</span>
        )}
      </button>
    </article>
  );
}

export default ProjectCard;
export { ProjectCardPreview };
