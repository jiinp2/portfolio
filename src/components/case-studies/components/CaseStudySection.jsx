import InfoCard from "../../ui/InfoCard";

const SECTION_HEADING_SIDE_BY_SIDE_CLASS =
  "text-base font-semibold text-text mb-4 tracking-tight leading-tight";

const SECTION_HEADING_STACKED_CLASS = `${SECTION_HEADING_SIDE_BY_SIDE_CLASS} max-w-[560px] mx-auto block text-left`;

const SIDE_BY_SIDE_CHILD_PROSE_CLASS =
  "[&>p]:text-sm [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:max-w-[560px] [&>p]:mx-auto [&>p]:block [&>p]:text-left";

const STACKED_CHILDREN_PROSE_CLASS =
  `${SIDE_BY_SIDE_CHILD_PROSE_CLASS} [&>ul]:text-sm [&>ul]:text-text-muted [&>ul]:leading-relaxed [&>ul]:mb-4 [&>ul]:max-w-[560px] [&>ul]:mx-auto [&>ul]:block [&>ul]:text-left [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:text-sm [&>ol]:text-text-muted [&>ol]:leading-relaxed [&>ol]:mb-4 [&>ol]:max-w-[560px] [&>ol]:mx-auto [&>ol]:block [&>ol]:text-left [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2`;

const GRAY_MEDIA_FRAME_CLASS =
  "w-full bg-[#f3f4f6] rounded-xl p-4 flex items-center justify-center";

const SIDE_BY_SIDE_IMAGE_IMG_CLASS =
  "w-full rounded-xl max-h-[500px] object-contain";

const STACKED_PRIMARY_IMAGE_IMG_CLASS = "w-full rounded-xl";

const INFO_CARDS_GRID_FOUR_CLASS =
  "grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1";

const INFO_CARDS_GRID_DEFAULT_CLASS =
  "grid grid-cols-6 gap-4 max-lg:grid-cols-4 max-sm:grid-cols-1";

function getInfoCardSpanClass(layout, cardCount) {
  if (layout === "info-cards-four") {
    return "col-span-1 max-lg:col-span-2 max-sm:col-span-1";
  }
  if (cardCount === 2) {
    return "col-span-3 max-lg:col-span-2 max-sm:col-span-1";
  }
  return "col-span-2 max-lg:col-span-2 max-sm:col-span-1";
}

function SideBySideTextColumn({ title, children, className }) {
  return (
    <div className={className}>
      {title ? (
        <h3 className={SECTION_HEADING_SIDE_BY_SIDE_CLASS}>{title}</h3>
      ) : null}
      <div className={SIDE_BY_SIDE_CHILD_PROSE_CLASS}>{children}</div>
    </div>
  );
}

function SideBySideFramedImageColumn({ image, className }) {
  return (
    <div className={className}>
      <div className={GRAY_MEDIA_FRAME_CLASS}>
        <img
          src={image.src}
          alt={image.alt}
          className={SIDE_BY_SIDE_IMAGE_IMG_CLASS}
        />
      </div>
      {image.caption ? (
        <p className="case-study-image-caption">{image.caption}</p>
      ) : null}
    </div>
  );
}

function CaseStudySideBySideSection({
  title,
  children,
  sideBySideImage,
  reverse,
}) {
  const flipped = reverse || false;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 items-center">
      {flipped ? (
        <>
          <SideBySideTextColumn
            title={title}
            className="order-1 md:order-1"
          >
            {children}
          </SideBySideTextColumn>
          <SideBySideFramedImageColumn
            image={sideBySideImage}
            className="w-full order-2 md:order-2"
          />
        </>
      ) : (
        <>
          <SideBySideFramedImageColumn
            image={sideBySideImage}
            className="w-full order-2 md:order-1"
          />
          <SideBySideTextColumn title={title} className="order-1 md:order-2">
            {children}
          </SideBySideTextColumn>
        </>
      )}
    </div>
  );
}

function CaseStudySection({
  title,
  children,
  image,
  images,
  infoCards,
  infoCardsLayout = "",
  sideBySide,
  accentColor,
  photoGrid,
}) {
  if (sideBySide && sideBySide.image) {
    return (
      <CaseStudySideBySideSection
        title={title}
        sideBySideImage={sideBySide.image}
        reverse={sideBySide.reverse || false}
      >
        {children}
      </CaseStudySideBySideSection>
    );
  }

  return (
    <div className="w-full max-w-none mb-24">
      {title ? (
        <h3 className={SECTION_HEADING_STACKED_CLASS}>{title}</h3>
      ) : null}
      <div className={STACKED_CHILDREN_PROSE_CLASS}>{children}</div>

      {infoCards && infoCards.length > 0 ? (
        <div
          className={`mt-8 w-full ${
            infoCardsLayout === "info-cards-four"
              ? INFO_CARDS_GRID_FOUR_CLASS
              : INFO_CARDS_GRID_DEFAULT_CLASS
          }`}
        >
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`${getInfoCardSpanClass(infoCardsLayout, infoCards.length)} h-full`}
            >
              <InfoCard
                {...card}
                accentColor={accentColor || card.accentColor}
              />
            </div>
          ))}
        </div>
      ) : null}

      {image ? (
        <div className="w-full mt-4 mb-8">
          <div className={GRAY_MEDIA_FRAME_CLASS}>
            <img
              src={image.src}
              alt={image.alt}
              className={STACKED_PRIMARY_IMAGE_IMG_CLASS}
            />
          </div>
          {image.caption ? (
            <p className="case-study-image-caption">{image.caption}</p>
          ) : null}
        </div>
      ) : null}

      {images && images.length > 0 ? (
        <div className="grid grid-cols-[2fr_1fr] gap-6 mt-4 max-sm:grid-cols-1 max-sm:gap-4">
          {images.map((img, index) => (
            <div key={index} className="w-full">
              <div className={GRAY_MEDIA_FRAME_CLASS}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={STACKED_PRIMARY_IMAGE_IMG_CLASS}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {photoGrid && photoGrid.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 w-full mt-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {photoGrid.map((img, index) => (
            <div key={index} className="w-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CaseStudySection;
