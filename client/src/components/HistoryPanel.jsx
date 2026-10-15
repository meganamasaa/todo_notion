import React, { useState, useEffect } from 'react';

function formatTime(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  if (diff < 60000) return 'Just now';
  return new Date(isoString).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export default function HistoryPanel() {
  const [history, setHistory] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchHistory = () => {
      fetch('/api/history')
        .then((r) => r.json())
        .then(setHistory)
        .catch(() => {});
    };
    fetchHistory();
    const interval = setInterval(fetchHistory, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`history-panel ${collapsed ? 'collapsed' : ''}`}>
      <div className="history-header" onClick={() => setCollapsed(!collapsed)}>
        <span>Edit history</span>
        <span className="history-toggle">{collapsed ? '◀' : '▶'}</span>
      </div>
      {!collapsed && (
        <div className="history-list">
          {history.length === 0 ? (
            <div className="history-empty">No edits yet</div>
          ) : (
            history.map((entry, i) => (
              <div key={i} className="history-entry">
                <div className="history-entry-header">
                  <span className="history-session">{entry.sessionId}</span>
                  <span className="history-time">{formatTime(entry.timestamp)}</span>
                </div>
                <div className="history-content">
                  {entry.content}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
