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
  photoGrid,
}) {
  // Side-by-side layout variant
  if (sideBySide && sideBySide.image) {
    const isReversed = sideBySide.reverse || false;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 items-center">
        {isReversed ? (
          <>
            <div className="order-1 md:order-1">
              {title && (
                <h3 className="text-base font-semibold text-text mb-4 tracking-tight leading-tight">
                  {title}
                </h3>
              )}
              <div className="[&>p]:text-sm [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:max-w-[560px] [&>p]:mx-auto [&>p]:block [&>p]:text-left">
                {children}
              </div>
            </div>
            <div className="w-full order-2 md:order-2">
              <div className="w-full bg-[#f3f4f6] rounded-xl p-4 flex items-center justify-center">
                <img
                  src={sideBySide.image.src}
                  alt={sideBySide.image.alt}
                  className="w-full rounded-xl max-h-[500px] object-contain"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full order-2 md:order-1">
              <div className="w-full bg-[#f3f4f6] rounded-xl p-4 flex items-center justify-center">
                <img
                  src={sideBySide.image.src}
                  alt={sideBySide.image.alt}
                  className="w-full rounded-xl max-h-[500px] object-contain"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              {title && (
                <h3 className="text-base font-semibold text-text mb-4 tracking-tight leading-tight">
                  {title}
                </h3>
              )}
              <div className="[&>p]:text-sm [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:max-w-[560px] [&>p]:mx-auto [&>p]:block [&>p]:text-left">
                {children}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Default stacked layout
  return (
    <div className="w-full max-w-none mb-24">
      {title && (
        <h3 className="text-base font-semibold text-text mb-4 tracking-tight leading-tight max-w-[560px] mx-auto block text-left">
          {title}
        </h3>
      )}
      <div className="[&>p]:text-sm [&>p]:text-text-muted [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:max-w-[560px] [&>p]:mx-auto [&>p]:block [&>p]:text-left [&>ul]:text-sm [&>ul]:text-text-muted [&>ul]:leading-relaxed [&>ul]:mb-4 [&>ul]:max-w-[560px] [&>ul]:mx-auto [&>ul]:block [&>ul]:text-left [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:text-sm [&>ol]:text-text-muted [&>ol]:leading-relaxed [&>ol]:mb-4 [&>ol]:max-w-[560px] [&>ol]:mx-auto [&>ol]:block [&>ol]:text-left [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2">
        {children}
      </div>

      {/* Info Cards */}
      {infoCards && infoCards.length > 0 && (
        <div
          className={`mt-8 w-full ${
            infoCardsLayout === "info-cards-four"
              ? "grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1"
              : "grid grid-cols-6 gap-4 max-lg:grid-cols-4 max-sm:grid-cols-1"
          }`}
        >
          {infoCards.map((card, index) => {
            // Calculate grid column span for 3-column layout
            let gridSpan = "col-span-2";
            if (infoCardsLayout !== "info-cards-four") {
              if (infoCards.length === 2) {
                gridSpan = "col-span-3 max-lg:col-span-2 max-sm:col-span-1";
              } else {
                gridSpan = "col-span-2 max-lg:col-span-2 max-sm:col-span-1";
              }
            } else {
              gridSpan = "col-span-1 max-lg:col-span-2 max-sm:col-span-1";
            }

            return (
              <div key={index} className={`${gridSpan} h-full`}>
                <InfoCard
                  {...card}
                  accentColor={accentColor || card.accentColor}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Single Full-Width Image */}
      {image && (
        <div className="w-full mt-4 mb-8">
          <div className="w-full bg-[#f3f4f6] rounded-xl p-4 flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Multiple Images Grid */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-[2fr_1fr] gap-6 mt-4 max-sm:grid-cols-1 max-sm:gap-4">
          {images.map((img, index) => (
            <div key={index} className="w-full">
              <div className="w-full bg-[#f3f4f6] rounded-xl p-4 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Photo Grid (4-column grid) */}
      {photoGrid && photoGrid.length > 0 && (
        <div className="grid grid-cols-4 gap-4 w-full mt-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {photoGrid.map((img, index) => (
            <div key={index} className="w-full">
              <img src={img.src} alt={img.alt} className="w-full rounded-xl" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CaseStudySection;
