import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      type: 'degree',
      icon: <FaGraduationCap />,
      title: 'B.Eng. Electrical and Electronic Engineering',
      institution: 'Universiti Tenaga Nasional (UNITEN)',
      year: '2018',
      description: 'Bachelor of Engineering degree with focus on electrical and electronic systems'
    },
    {
      type: 'certification',
      icon: <FaCertificate />,
      title: 'ISTQB Certified – Technical Test Analyst (Advanced Level)',
      institution: 'Coursera',
      year: 'Advanced Level',
      description: 'Advanced level certification demonstrating expertise in technical testing and test automation',
      link: 'https://coursera.org/share/6ac7407a508623e9ecba90556c562df3'
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Academic background and professional certifications
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-icon">
                {item.icon}
              </div>
              <div className="education-content">
                <h3 className="education-title">{item.title}</h3>
                <h4 className="education-institution">{item.institution}</h4>
                <div className="education-year">
                  <FaAward className="year-icon" />
                  {item.year}
                </div>
                <p className="education-description">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="verification-link"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="info-card">
            <h4>Continuous Learning</h4>
            <p>
              Committed to staying updated with the latest testing methodologies, automation frameworks, and industry best practices through continuous professional development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

