import './InfoCard.css'

function InfoCard({ number, icon, title, description }) {
  return (
    <div className="info-card">
      <div className={`info-indicator ${icon ? 'info-icon' : 'info-number'}`}>
        {icon ? icon : number}
      </div>
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

