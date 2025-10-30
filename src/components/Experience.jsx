import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'QA Automation Engineer',
      company: 'Xiaoxi Tech',
      location: 'Kuala Lumpur',
      period: 'Aug 2024 – Present',
      current: true,
      achievements: [
        'Improved test reliability via reusable Selenium/Appium components',
        'Boosted Chrome Lighthouse performance score by 25%',
        'Reduced API testing turnaround by 30% through optimized test scenarios'
      ],
      responsibilities: [
        'Designed and executed manual and automation test scenarios for web and mobile apps',
        'Automated core user flows using Selenium (Python) and Appium in BDD (Behave)',
        'Used Cursor AI to accelerate script development while maintaining logic control',
        'Performed manual API testing and Chrome Lighthouse performance analysis'
      ]
    },
    {
      title: 'QA Engineer',
      company: 'Accendo Technologies',
      location: 'Kuala Lumpur',
      period: 'Mar 2022 – Aug 2024',
      current: false,
      achievements: [
        'Reduced critical bug backlog by 70%',
        'Improved regression test coverage by 40%',
        'Enhanced QA collaboration and test efficiency across multiple sprints'
      ],
      responsibilities: [
        'Participated in Agile sprints, created manual test cases, and executed regression tests',
        'Automated regression scenarios using Virtuoso (low-code)',
        'Executed UAT cycles, tracked bugs via Jira, and coordinated fixes with dev teams'
      ]
    },
    {
      title: 'Manual QA Tester (Remote)',
      company: 'Kenlink Group Sdn Bhd',
      location: 'Remote',
      period: 'Sep 2020 – Dec 2021',
      current: false,
      responsibilities: [
        'Designed and executed manual test cases for internal tools',
        'Logged, verified, and retested bugs across system updates',
        'Collaborated with development team to ensure timely bug resolution'
      ],
      achievements: []
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My career journey in Quality Assurance and Test Automation
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  {exp.current && (
                    <span className="current-badge">Current</span>
                  )}
                </div>
                
                <div className="experience-meta">
                  <span className="meta-item">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>

                <div className="experience-details">
                  {exp.achievements.length > 0 && (
                    <>
                      <h5 className="details-subtitle achievements-title">Key Achievements:</h5>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="achievement-icon" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <h5 className="details-subtitle">Responsibilities:</h5>
                  <ul className="details-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

