export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        ✨ Yangi loyihalar tayyor
      </div>

      <h1 className="hero-title">
        Salom, men <span>Fayzulloh</span> —<br />
        kodda san'at yarataman
      </h1>

      <p className="hero-description">
        Telegram botlar va veb-ilovalar ustasi. Har bir satr kodda foydalanuvchi
        tajribasini mukammal qilishga intilib ishlayman. 🚀
      </p>

      <div className="hero-actions">
        <button className="btn btn-primary" onClick={() => onNavigate('tarjima-bot')}>
          ⚡ Loyihalarimni ko'ring
        </button>
        <button className="btn btn-secondary" onClick={() => onNavigate('about')}>
          👋 Men haqimda
        </button>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">7+</div>
          <div className="hero-stat-label">Loyihalar</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">2+</div>
          <div className="hero-stat-label">Yillik tajriba</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">10+</div>
          <div className="hero-stat-label">Texnologiyalar</div>
        </div>
      </div>
    </section>
  );
}
