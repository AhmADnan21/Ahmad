import { 
  FaCheckCircle, 
  FaBug, 
  FaRobot, 
  FaServer, 
  FaClipboardCheck, 
  FaUsers 
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCheckCircle />,
      title: 'Manual Testing',
      skills: [
        'Test case design',
        'Functional testing',
        'Regression testing',
        'UAT (User Acceptance Testing)',
        'Exploratory testing'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Automation Testing',
      skills: [
        'Selenium (Python)',
        'Appium (Mobile Testing)',
        'BDD (Behave, Cucumber)',
        'Page Object Model (POM)',
        'Data-driven testing'
      ]
    },
    {
      icon: <FaServer />,
      title: 'AI-Driven Automation',
      skills: [
        'Cursor AI for Selenium',
        'Cursor AI for Appium',
        'AI-assisted code generation',
        'Code quality maintenance',
        'Automated script optimization'
      ]
    },
    {
      icon: <FaServer />,
      title: 'API Testing',
      skills: [
        'Postman',
        'Metersphere',
        'Endpoint validation',
        'Status code verification',
        'Response payload testing'
      ]
    },
    {
      icon: <FaBug />,
      title: 'Test Management & Bug Tracking',
      skills: [
        'Jira',
        'TestRail',
        'Bug lifecycle management',
        'Test execution tracking',
        'Defect reporting'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Agile/Scrum & Tools',
      skills: [
        'Sprint planning',
        'Daily standups',
        'Sprint retrospectives',
        'Git & GitHub',
        'CI/CD (GitHub Actions)',
        'Chrome DevTools'
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive set of technical skills and tools I use to deliver high-quality software testing solutions
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

