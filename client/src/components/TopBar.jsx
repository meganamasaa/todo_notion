import React from 'react';

export default function TopBar({ sessionId, isGuest, onShareClick }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-icon">📄</span>
        <span className="topbar-title">Reason's why I love notion!</span>
      </div>
      <div className="topbar-right">
        <span className="topbar-edited">Edited 3m ago</span>
        <button className="topbar-share-btn" onClick={onShareClick}>
          Share
        </button>
        {isGuest ? (
          <span className="session-badge">{sessionId}</span>
        ) : (
          <span className="owner-badge">MA</span>
        )}
        <button className="topbar-menu-btn">···</button>
      </div>
    </div>
  );
}
