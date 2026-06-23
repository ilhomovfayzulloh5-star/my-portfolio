export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        ✨ New projects available
      </div>

      <h1 className="hero-title">
        Hi, I'm <span>Fayzulloh</span> —<br />
        I craft code into art
      </h1>

      <p className="hero-description">
        Building Telegram bots and web apps that make a difference.
        Turning ideas into elegant, user-friendly digital experiences. 🚀
      </p>

      <div className="hero-actions">
        <button className="btn btn-primary" onClick={() => onNavigate('kun-tartibi-bot')}>
          ⚡ View My Projects
        </button>
        <button className="btn btn-secondary" onClick={() => onNavigate('about')}>
          👋 About Me
        </button>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">7+</div>
          <div className="hero-stat-label">Projects</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">2+</div>
          <div className="hero-stat-label">Years Experience</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">10+</div>
          <div className="hero-stat-label">Technologies</div>
        </div>
      </div>
    </section>
  );
}
