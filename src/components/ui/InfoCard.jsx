import { cloneElement } from "react";

const NUMBER_BADGE_CLASS =
  "w-8 h-8 rounded-full text-white text-sm font-semibold flex items-center justify-center max-sm:w-7 max-sm:h-7 max-sm:text-xs";

function buildAccentInlineStyles(accentColor) {
  if (!accentColor) {
    return { iconStyle: {}, numberStyle: {} };
  }
  return {
    iconStyle: { color: accentColor },
    numberStyle: { backgroundColor: accentColor },
  };
}

function listItemAccentClass(listItemType) {
  return listItemType === "pro" ? "text-green-500" : "text-red-500";
}

function InfoCard({
  number,
  icon,
  title,
  description,
  image,
  imageAlt,
  accentColor,
  listItems,
}) {
  const { iconStyle, numberStyle } = buildAccentInlineStyles(accentColor);
  const hasImage = Boolean(image);

  const rootLayoutClass = hasImage
    ? "p-0 overflow-hidden"
    : "p-6 max-sm:p-5";

  const titlePaddingClass = hasImage ? "px-4 mt-0 mb-2" : "mb-2 mt-0";

  const bodyHorizontalPaddingClass = hasImage ? "px-4 mb-4" : "";

  return (
    <div
      className={`relative bg-surface border border-border rounded-xl h-full flex flex-col ${rootLayoutClass}`}
    >
      {hasImage ? (
        <div className="w-full h-auto mb-5 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-auto block object-cover"
          />
        </div>
      ) : null}
      {!hasImage && (icon || number) ? (
        <div className="mb-5">
          {icon ? (
            cloneElement(icon, { size: 24, style: iconStyle })
          ) : (
            <div className={NUMBER_BADGE_CLASS} style={numberStyle}>
              {number}
            </div>
          )}
        </div>
      ) : null}
      <h4
        className={`font-semibold text-text tracking-tight leading-tight block text-left ${titlePaddingClass}`}
      >
        {title}
      </h4>
      {listItems && listItems.length > 0 ? (
        <ul className={`m-0 p-0 list-none ${bodyHorizontalPaddingClass}`}>
          {listItems.map((item, index) => (
            <li key={index} className="mb-4 flex items-start">
              {item.icon ? (
                <div
                  className={`shrink-0 mr-2 ${listItemAccentClass(item.type)}`}
                >
                  {item.icon}
                </div>
              ) : null}
              <div className="text-sm leading-relaxed text-text-muted flex-1">
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p
          className={`text-sm leading-relaxed text-text-muted m-0 block text-left flex-1 ${bodyHorizontalPaddingClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default InfoCard;
