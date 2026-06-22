import { useState } from 'react';
import { projects } from '../data/projects';

const ChevronIcon = ({ open }) => (
  <svg className={`sidebar-chevron ${open ? 'open' : ''}`} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z" fill="currentColor" />
  </svg>
);

const StoryIcon = () => (
  <svg className="sidebar-item-icon story" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z" fill="currentColor" />
  </svg>
);

const DocsIcon = () => (
  <svg className="sidebar-item-icon docs" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z" fill="currentColor" />
  </svg>
);

const ComponentIcon = () => (
  <svg className="sidebar-item-icon component" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z" fill="currentColor" />
  </svg>
);

export default function Sidebar({ activePage, onNavigate, isOpen, onClose }) {
  const [openGroups, setOpenGroups] = useState({ 'telegram-bots': true, 'web-projects': true });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleGroup = (groupId) => {
    setOpenGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const telegramBots = projects.filter(p => p.category === 'Telegram Botlar');
  const webProjects = projects.filter(p => p.category === 'Web Loyihalar');

  const filterProjects = (list) => {
    if (!searchQuery) return list;
    return list.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const handleItemClick = (page) => {
    onNavigate(page);
    if (onClose) onClose();
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">F</div>
          <span className="sidebar-logo-text">Fayzulloh</span>
        </div>
        <span className="sidebar-version">v1.0</span>
      </div>

      <div style={{ padding: '8px 16px 0', fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.05em' }}>
        🚀 FAYZULLOH.DEV
      </div>

      <div className="sidebar-search">
        <input
          type="text"
          className="sidebar-search-input"
          placeholder="Qidiruv..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <nav className="sidebar-nav">
        <button
          className={`sidebar-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => handleItemClick('home')}
        >
          <DocsIcon />
          <span>Bosh sahifa</span>
        </button>

        <div className="sidebar-section-title">Loyihalar</div>

        <div className="sidebar-group">
          <button className="sidebar-group-header" onClick={() => toggleGroup('telegram-bots')}>
            <ChevronIcon open={openGroups['telegram-bots']} />
            <ComponentIcon />
            <span>Telegram Botlar</span>
          </button>
          {openGroups['telegram-bots'] && filterProjects(telegramBots).map(project => (
            <button
              key={project.id}
              className={`sidebar-item ${activePage === project.id ? 'active' : ''}`}
              onClick={() => handleItemClick(project.id)}
            >
              <StoryIcon />
              <span>{project.name}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-group">
          <button className="sidebar-group-header" onClick={() => toggleGroup('web-projects')}>
            <ChevronIcon open={openGroups['web-projects']} />
            <ComponentIcon />
            <span>Web Loyihalar</span>
          </button>
          {openGroups['web-projects'] && filterProjects(webProjects).map(project => (
            <button
              key={project.id}
              className={`sidebar-item ${activePage === project.id ? 'active' : ''}`}
              onClick={() => handleItemClick(project.id)}
            >
              <StoryIcon />
              <span>{project.name}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-section-title">Sahifalar</div>
        <button
          className={`sidebar-item ${activePage === 'about' ? 'active' : ''}`}
          onClick={() => handleItemClick('about')}
        >
          <DocsIcon />
          <span>Haqimda</span>
        </button>
        <button
          className={`sidebar-item ${activePage === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <DocsIcon />
          <span>Aloqa</span>
        </button>
      </nav>
    </aside>
  );
}
