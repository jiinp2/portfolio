import './Work.css'

function Work() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Product Designer crafting beautiful, user-centered experiences
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>Your Photo Here</span>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <span>Project Image</span>
            </div>
            <div className="project-content">
              <h3>Project Title</h3>
              <p>Brief description of the project and your role in it.</p>
              <div className="project-tags">
                <span className="tag">UI/UX</span>
                <span className="tag">Mobile</span>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <span>Project Image</span>
            </div>
            <div className="project-content">
              <h3>Project Title</h3>
              <p>Brief description of the project and your role in it.</p>
              <div className="project-tags">
                <span className="tag">Web Design</span>
                <span className="tag">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
