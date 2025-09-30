import './Aside.css'

function Aside() {
  return (
    <div className="aside">
      <div className="aside-container">
        <section className="aside-hero">
          <h1 className="aside-title">Side Projects & Experiments</h1>
          <p className="aside-subtitle">
            Smaller projects, personal experiments, and creative explorations
          </p>
        </section>

        <section className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <span>Project Image</span>
          </div>
          <div className="project-content">
            <h3>Project Title</h3>
            <p>Brief description of this smaller project or personal experiment.</p>
            <div className="project-tags">
              <span className="tag">Personal</span>
              <span className="tag">Experiment</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <span>Project Image</span>
          </div>
          <div className="project-content">
            <h3>Project Title</h3>
            <p>Another small project or creative exploration you've worked on.</p>
            <div className="project-tags">
              <span className="tag">Web</span>
              <span className="tag">Fun</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <span>Project Image</span>
          </div>
          <div className="project-content">
            <h3>Project Title</h3>
            <p>Description of your third side project or personal experiment.</p>
            <div className="project-tags">
              <span className="tag">Mobile</span>
              <span className="tag">Learning</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default Aside
