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
      </div>
    </div>
  );
}
