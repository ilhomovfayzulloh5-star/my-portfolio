import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">📬 Contact</h2>
        <p className="contact-subtitle">Feel free to reach out to me</p>

        <div className="contact-links">
          <a href="https://t.me/fayzulloh_ilhomov" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">💬</span>
            Telegram
          </a>
          <a href="tel:+998973686701" className="contact-link">
            <span className="contact-link-icon">📞</span>
            +998 97 368 67 01
          </a>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
          Send a Message
        </h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              className="contact-form-input"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              className="contact-form-input"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="contact-form-textarea"
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            {sent ? '✅ Sent!' : '📤 Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
