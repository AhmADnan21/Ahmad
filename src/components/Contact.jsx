import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ahmad7adnan7@gmail.com',
      link: 'mailto:ahmad7adnan7@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone (WhatsApp)',
      value: '+60 1139 279164',
      link: 'https://wa.me/601139279164'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Kuala Lumpur, Malaysia',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      username: 'Ahmad Abdullah',
      link: 'https://www.linkedin.com/in/ahmad-abdullah-6878a424b'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      username: 'View My Projects',
      link: 'https://github.com/AhmADnan21'
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-wrapper">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm currently working as a Senior QA Automation Engineer at Xiaoxi Tech and am always interested in hearing about new opportunities, collaborations, and projects.
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-card-icon">
                    {info.icon}
                  </div>
                  <div className="contact-card-content">
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="contact-link"
                        target={info.link.startsWith('https://wa.me') ? '_blank' : undefined}
                        rel={info.link.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-buttons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <div className="social-text">
                      <span className="social-label">{social.label}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-visual">
            <div className="visual-card">
              <div className="visual-content">
                <div className="availability-badge">
                  <span className="status-dot"></span>
                  Available for Opportunities
                </div>
                <h3>Senior QA Automation Engineer</h3>
                <p>5+ Years Experience</p>
                <div className="skills-tags">
                  <span className="tag">Selenium</span>
                  <span className="tag">Appium</span>
                  <span className="tag">BDD</span>
                  <span className="tag">API Testing</span>
                  <span className="tag">Agile/Scrum</span>
                </div>
                <div className="response-time">
                  <FaEnvelope />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

