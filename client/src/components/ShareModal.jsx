import React, { useState } from 'react';

const SHARE_URL = `${window.location.origin}/page/7f3a1c2e-84b0-4d9e-b2f1-0a6e9d3c8f12`;

export default function ShareModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('share');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SHARE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-tabs">
          <button
            className={`modal-tab ${activeTab === 'share' ? 'active' : ''}`}
            onClick={() => setActiveTab('share')}
          >
            Share
          </button>
          <button
            className={`modal-tab ${activeTab === 'publish' ? 'active' : ''}`}
            onClick={() => setActiveTab('publish')}
          >
            Publish
          </button>
        </div>

        <div className="modal-invite-row">
          <input
            type="text"
            className="modal-invite-input"
            placeholder="Email or group, separated by commas"
            readOnly
          />
          <button className="modal-invite-btn">Invite</button>
        </div>

        <div className="modal-user-row">
          <div className="modal-user-avatar">MA</div>
          <div className="modal-user-info">
            <span className="modal-user-name">Megan Amasa (You)</span>
          </div>
          <span className="modal-user-access">Full access</span>
        </div>

        <div className="modal-divider" />

        <div className="modal-general-access">
          <span className="modal-access-label">General access</span>
          <div className="modal-access-row">
            <span className="modal-access-icon">🌐</span>
            <span className="modal-access-text">Anyone on the web with link</span>
            <span className="modal-access-level">Can edit</span>
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-footer">
          <span className="modal-learn-link">Learn about sharing</span>
          <button className="modal-copy-btn" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy link'}
          </button>
        </div>
      </div>
    </div>
  );
}
