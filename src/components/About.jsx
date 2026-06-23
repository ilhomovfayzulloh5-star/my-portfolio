import { aboutInfo, skills } from '../data/projects';

export default function About() {
  return (
    <div className="about-section">
      <div className="about-card">
        <h2 className="about-title">👋 Hi, I'm {aboutInfo.name}</h2>
        <p className="about-text">{aboutInfo.bio}</p>

        <div className="props-panel">
          <div className="props-panel-header">
            <span className="props-panel-title">Info</span>
          </div>
          <table className="props-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>string</td>
                <td>{aboutInfo.name}</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string</td>
                <td>{aboutInfo.title}</td>
              </tr>
              <tr>
                <td>location</td>
                <td>string</td>
                <td>{aboutInfo.location}</td>
              </tr>
              <tr>
                <td>experience</td>
                <td>string</td>
                <td>{aboutInfo.experience}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '32px', marginBottom: '16px', color: 'var(--text-primary)' }}>
          ⚡ Skills
        </h3>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
