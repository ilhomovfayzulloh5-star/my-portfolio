export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-preview">
        <div className="project-card-preview-gradient" style={{ background: project.gradient }} />
        <div className="project-card-preview-icon">{project.icon}</div>
      </div>
      <div className="project-card-body">
        <h2 className="project-card-title">{project.name}</h2>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag, i) => (
            <span key={tag} className={`project-card-tag ${project.tagClasses[i] || ''}`}>
              {tag}
            </span>
          ))}
        </div>
        {project.botLink && (
          <a
            href={project.botLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '20px', fontSize: '13px', height: '40px' }}
          >
            {project.category === 'Telegram Bots' ? '🤖 Try this Bot' : '🌐 Visit Website'}
          </a>
        )}
      </div>
    </div>
  );
}
