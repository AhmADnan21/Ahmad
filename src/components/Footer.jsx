import { FaHeart, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Ahmad<span>Abdullah</span></h3>
            <p className="footer-tagline">
              Senior QA Automation Engineer passionate about delivering quality software through comprehensive testing strategies.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:ahmad7adnan7@gmail.com">ahmad7adnan7@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="https://wa.me/601139279164" target="_blank" rel="noopener noreferrer">+60 1139 279164</a>
              </li>
              <li>
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/ahmad-abdullah-6878a424b" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Ahmad Abdullah. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> by Ahmad Abdullah
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

