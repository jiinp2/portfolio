import './StepCard.css'

function StepCard({ number, title, description }) {
  return (
    <div className="step-card">
      <div className="step-number">
        {number}
      </div>
      <h4 className="step-card-title">
        {title}
      </h4>
      <p className="step-card-description">
        {description}
      </p>
    </div>
  )
}

export default StepCard
