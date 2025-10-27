import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Ahmad Abdullah</span>
            </h1>
            <h2 className="hero-subtitle">Senior QA Automation Engineer</h2>
            <p className="hero-description">
              Detail-oriented Senior QA Automation Engineer with <strong>5+ years of experience</strong> in manual and automation testing for web, mobile, and API applications. Skilled in Selenium, Appium, and BDD frameworks, with strong expertise in manual API testing using Postman.
            </p>
            <p className="hero-description">
              Experienced in Agile/Scrum environments, bug reporting, and cross-functional collaboration. Adept at using AI tools (Cursor AI) to accelerate automation development while maintaining full control of code quality.
            </p>

            <div className="hero-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Malaysian Permanent Resident</span>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <a href="tel:+60113927916">+60 1139 279164</a>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <a href="mailto:ahmad7adnan7@gmail.com">ahmad7adnan7@gmail.com</a>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmad-abdullah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-image slide-in-right">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>AA</span>
                </div>
              </div>
              <div className="profile-details">
                <h3>Ahmad Abdullah</h3>
                <p>QA Engineer</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Exp.</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">ISTQB</span>
                    <span className="stat-label">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  )
}

export default Hero

