import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import PropsPanel from './components/PropsPanel';
import About from './components/About';
import Contact from './components/Contact';
import { projects } from './data/projects';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeTab, setActiveTab] = useState('canvas');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentProject = projects.find(p => p.id === activePage);

  const renderContent = () => {
    if (activePage === 'home') {
      return <Hero onNavigate={setActivePage} />;
    }

    if (activePage === 'about') {
      return (
        <div className="canvas">
          <div className="canvas-inner">
            <About />
          </div>
        </div>
      );
    }

    if (activePage === 'contact') {
      return (
        <div className="canvas">
          <div className="canvas-inner">
            <Contact />
          </div>
        </div>
      );
    }

    if (currentProject) {
      return (
        <div className="canvas">
          <div className="canvas-inner">
            <ProjectCard project={currentProject} />
            <PropsPanel props={currentProject.props} />
          </div>
        </div>
      );
    }

    return <Hero onNavigate={setActivePage} />;
  };

  return (
    <div className="app-layout">
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z" fill="currentColor" />
        </svg>
      </button>

      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <Toolbar activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </main>
    </div>
  );
}
