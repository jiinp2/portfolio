import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="page-title">About Me</h1>
          
          <div className="about-text">
            <p>
              I'm a passionate product designer with a focus on creating meaningful 
              user experiences. With a background in both design and user research, 
              I bring a holistic approach to every project.
            </p>
            
            <p>
              I believe in the power of design to solve real problems and create 
              positive impact. My process involves deep user research, iterative 
              prototyping, and continuous collaboration with cross-functional teams.
            </p>
          </div>

          <div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Design</h3>
                <ul>
                  <li>UI/UX Design</li>
                  <li>User Research</li>
                  <li>Prototyping</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Adobe Creative Suite</li>
                  <li>Principle</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Process</h3>
                <ul>
                  <li>Design Thinking</li>
                  <li>Agile Methodologies</li>
                  <li>User Testing</li>
                  <li>Cross-functional Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
