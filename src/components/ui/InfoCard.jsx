function InfoCard({ number, icon, title, description, image, imageAlt }) {
  return (
    <div className={`relative bg-white border border-gray-200 rounded-xl ${image ? 'p-0 overflow-hidden' : 'p-6 max-sm:p-5'}`}>
      {image && (
        <div className="w-full h-auto mb-4 overflow-hidden rounded-t-xl">
          <img src={image} alt={imageAlt || title} className="w-full h-auto block object-cover" />
        </div>
      )}
      {!image && (
        <div className="flex items-center justify-start mb-3">
          {icon ? (
            <div className="w-8 h-8 text-text text-xl max-sm:w-7 max-sm:h-7 max-sm:text-lg">
              {icon}
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-semibold flex items-center justify-center max-sm:w-7 max-sm:h-7 max-sm:text-xs">
              {number}
            </div>
          )}
        </div>
      )}
      <h4 className={`font-semibold text-text tracking-tight leading-tight block text-left ${image ? 'px-4 mt-0' : 'mb-3 mt-0'}`}>
        {title}
      </h4>
      <p className={`text-sm leading-relaxed text-gray-500 m-0 block text-left ${image ? 'px-4 mb-4' : ''}`}>
        {description}
      </p>
    </div>
  )
}

export default InfoCard

