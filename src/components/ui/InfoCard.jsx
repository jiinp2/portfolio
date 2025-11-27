import './InfoCard.css'

function InfoCard({ number, icon, title, description, image, imageAlt }) {
  return (
    <div className={`info-card ${image ? 'info-card-with-image' : ''}`}>
      {image && (
        <div className="info-card-image-container">
          <img src={image} alt={imageAlt || title} className="info-card-image" />
        </div>
      )}
      {!image && (
        <div className={`info-indicator ${icon ? 'info-icon' : 'info-number'}`}>
          {icon ? icon : number}
        </div>
      )}
      <h4 className="info-card-title">
        {title}
      </h4>
      <p className="info-card-description">
        {description}
      </p>
    </div>
  )
}

export default InfoCard

