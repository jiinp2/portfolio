import { ExternalLink } from "lucide-react";

const TITLE_HEADING_CLASS =
  "text-lg font-semibold text-text tracking-tight m-0 leading-tight transition-colors duration-600 ease-in-out inline-flex items-center gap-2 flex-1 max-md:text-base max-sm:text-sm";

const DATE_CLASS =
  "text-sm text-text-light m-0 font-normal leading-normal transition-colors duration-600 ease-in-out shrink-0 max-md:text-sm max-sm:text-xs";

const DESCRIPTION_CLASS_BASE =
  "mt-2 mb-0 text-sm font-normal leading-relaxed text-text-light transition-colors duration-600 ease-in-out";

const PROJECT_CARD_CTA_CLASS =
  "project-card-cta project-card-cta-trigger inline-flex w-40 self-start items-center justify-center gap-2 text-sm font-medium text-text border border-border bg-surface rounded-lg px-3 py-1.5 transition-colors hover:bg-gray-100 hover:border-gray-300 dark:hover:bg-dark-bg-elevated dark:hover:border-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 cursor-pointer disabled:cursor-not-allowed";

const PROJECT_CARD_HOVER_SYNC_CLASS =
  "has-[.project-card-preview-trigger:hover]:[&_.project-card-preview-frame]:border-text/30 has-[.project-card-cta-trigger:hover]:[&_.project-card-preview-frame]:border-text/30 has-[.project-card-preview-trigger:hover]:[&_.project-card-cta]:bg-gray-100 has-[.project-card-preview-trigger:hover]:[&_.project-card-cta]:border-gray-300 has-[.project-card-preview-trigger:hover]:[&_.project-card-cta]:dark:bg-dark-bg-elevated has-[.project-card-preview-trigger:hover]:[&_.project-card-cta]:dark:border-neutral-600";

const PREVIEW_BACKGROUND_BY_SLUG = {
  "pokemon-valentine": "bg-[#ffcfec]",
  "rabbu-portfolio": "bg-rabbu",
  "rabbu-marketplace": "bg-rabbu",
  rabbu: "bg-rabbu",
  kobo: "bg-kobo",
  skiin: "bg-skiin",
  maison: "bg-[#A8B8D4]",
};

const PREVIEW_FILL_SLUGS = new Set(["scrivis-tattoos"]);

const STANDARD_IMAGE_CLASS_BASE =
  "max-h-full max-w-full h-auto w-auto object-contain";

function isFillPreview(slug) {
  return PREVIEW_FILL_SLUGS.has(slug);
}

function isMaisonPreview(slug) {
  return slug === "maison";
}

function normalizePreviewBackgroundClass(slug) {
  return PREVIEW_BACKGROUND_BY_SLUG[slug] ?? "bg-gray-100";
}

function buildStandardImageClasses(slug) {
  if (isFillPreview(slug)) {
    return "h-full w-full object-cover object-center";
  }

  switch (slug) {
    case "maison":
      return "relative z-10 shrink-0 w-10 h-10 object-contain [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(5%)_saturate(200%)_hue-rotate(10deg)]";
    case "rabbu-portfolio":
    case "rabbu":
    case "rabbu-marketplace":
    case "kobo":
    case "skiin":
      return `${STANDARD_IMAGE_CLASS_BASE} h-full w-full object-contain object-center`;
    default:
      return STANDARD_IMAGE_CLASS_BASE;
  }
}

function buildPreviewContainerClasses(slug) {
  if (isFillPreview(slug)) {
    return "box-border flex aspect-4/3 w-full overflow-hidden bg-transparent p-0";
  }

  const bg = normalizePreviewBackgroundClass(slug);
  const maisonLayout = isMaisonPreview(slug) ? " relative" : "";
  return `w-full aspect-4/3 flex items-center justify-center overflow-hidden p-8 box-border ${bg}${maisonLayout} max-md:p-3 max-sm:p-3`;
}

function MaisonPreviewGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes maison-glow-drift-a {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(14%, 12%, 0) scale(1.12); }
        }
        @keyframes maison-glow-drift-b {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-16%, 10%, 0) scale(1.14); }
        }
        .maison-glow-blob-a {
          animation: maison-glow-drift-a 8s ease-in-out infinite;
        }
        .maison-glow-blob-b {
          animation: maison-glow-drift-b 10s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .maison-glow-blob-a,
          .maison-glow-blob-b {
            animation: none;
          }
        }
      `}</style>
      <div className="absolute inset-[-20%] rounded-full bg-[#8FA3C4] opacity-50 blur-[70px]" />
      <div className="maison-glow-blob-a absolute -top-[40%] -left-[30%] h-[110%] w-[110%] rounded-full bg-[#1F2C4E] opacity-100 blur-[55px] will-change-transform" />
      <div className="maison-glow-blob-b absolute -top-[15%] -right-[25%] h-[100%] w-[100%] rounded-full bg-[#3A4F7A] opacity-100 blur-[60px] will-change-transform" />
    </div>
  );
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
    `${buildStandardImageClasses(project.slug)} project-card-preview-media`.trimEnd();
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
        {isMaisonPreview(project.slug) ? <MaisonPreviewGlow /> : null}
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
          className="project-card-preview-media h-full w-full object-contain object-center"
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
          className="project-card-preview-media h-full w-full object-contain object-center"
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
        className={`${PROJECT_CARD_CTA_CLASS} mt-auto`}
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
