import { cloneElement } from "react";

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
  const iconStyle = accentColor ? { color: accentColor } : {};
  const numberStyle = accentColor ? { backgroundColor: accentColor } : {};

  return (
    <div
      className={`relative bg-white border border-gray-200 rounded-xl h-full flex flex-col ${
        image ? "p-0 overflow-hidden" : "p-6 max-sm:p-5"
      }`}
    >
      {image && (
        <div className="w-full h-auto mb-5 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-auto block object-cover"
          />
        </div>
      )}
      {!image && (icon || number) && (
        <div className="mb-5">
          {icon ? (
            cloneElement(icon, { size: 24, style: iconStyle })
          ) : (
            <div
              className="w-8 h-8 rounded-full text-white text-sm font-semibold flex items-center justify-center max-sm:w-7 max-sm:h-7 max-sm:text-xs"
              style={numberStyle}
            >
              {number}
            </div>
          )}
        </div>
      )}
      <h4
        className={`font-semibold text-text tracking-tight leading-tight block text-left ${
          image ? "px-4 mt-0 mb-2" : "mb-2 mt-0"
        }`}
      >
        {title}
      </h4>
      {listItems && listItems.length > 0 ? (
        <ul className={`m-0 p-0 list-none ${image ? "px-4 mb-4" : ""}`}>
          {listItems.map((item, index) => (
            <li key={index} className="mb-4 flex items-start">
              {item.icon && (
                <div
                  className={`shrink-0 mr-2 ${
                    item.type === "pro" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.icon}
                </div>
              )}
              <div className="text-sm leading-relaxed text-gray-500 flex-1">
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p
          className={`text-sm leading-relaxed text-gray-500 m-0 block text-left flex-1 ${
            image ? "px-4 mb-4" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default InfoCard;
