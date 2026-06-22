export default function Toolbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'canvas', label: 'Canvas' },
    { id: 'docs', label: 'Docs' },
  ];

  return (
    <div className="toolbar">
      <div className="toolbar-traffic-lights">
        <div className="toolbar-dot red" />
        <div className="toolbar-dot yellow" />
        <div className="toolbar-dot green" />
      </div>

      <div className="toolbar-url">
        <span className="toolbar-url-lock">🔒</span>
        <span>✦ fayzulloh.craft</span>
      </div>

      <div className="toolbar-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`toolbar-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
