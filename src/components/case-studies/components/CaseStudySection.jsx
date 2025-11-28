import InfoCard from "../../ui/InfoCard";

function CaseStudySection({
  title,
  children,
  image,
  images,
  infoCards,
  infoCardsLayout = "",
  sideBySide,
  accentColor,
}) {
  // Side-by-side layout variant
  if (sideBySide && sideBySide.image) {
    const isReversed = sideBySide.reverse || false;

    return (
      <div
        className={`key-feature ${
          isReversed ? "" : "key-feature-image-large"
        } grid grid-cols-2 gap-12 mb-8 items-center`}
      >
        {isReversed ? (
          <>
            <div className="key-feature-content">
              {title && (
                <h3 className="text-lg font-semibold text-default mb-4 tracking-tight leading-tight">
                  {title}
                </h3>
              )}
              {children}
            </div>
            <div className="key-feature-image w-full">
              <div className="image-container w-full">
                <img
                  src={sideBySide.image.src}
                  alt={sideBySide.image.alt}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="key-feature-image w-full">
              <div className="image-container w-full">
                <img
                  src={sideBySide.image.src}
                  alt={sideBySide.image.alt}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <div className="key-feature-content">
              {title && (
                <h3 className="text-lg font-semibold text-default mb-4 tracking-tight leading-tight">
                  {title}
                </h3>
              )}
              {children}
            </div>
          </>
        )}
      </div>
    );
  }

  // Default stacked layout
  return (
    <div className="subsection">
      {title && (
        <h3 className="text-lg font-semibold text-default mb-4 tracking-tight leading-tight">
          {title}
        </h3>
      )}
      {children}

      {/* Info Cards */}
      {infoCards && infoCards.length > 0 && (
        <div className={`info-cards ${infoCardsLayout} mt-8`}>
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              {...card}
              accentColor={accentColor || card.accentColor}
            />
          ))}
        </div>
      )}

      {/* Single Full-Width Image */}
      {image && (
        <div className="image-container w-full mt-4">
          <img src={image.src} alt={image.alt} className="w-full rounded-xl" />
        </div>
      )}

      {/* Multiple Images Grid */}
      {images && images.length > 0 && (
        <div className="outcomes-images-grid mt-4">
          {images.map((img, index) => (
            <div key={index} className="image-container w-full">
              <img src={img.src} alt={img.alt} className="w-full rounded-xl" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CaseStudySection;
