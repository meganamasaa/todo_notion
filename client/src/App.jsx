import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import GuestBanner from './components/GuestBanner';
import Block from './components/Block';
import ShareModal from './components/ShareModal';
import HistoryPanel from './components/HistoryPanel';

const GUEST_PATH = '/page/7f3a1c2e-84b0-4d9e-b2f1-0a6e9d3c8f12';

function getSessionId() {
  let id = localStorage.getItem('guestSessionId');
  if (!id) {
    id = 'Guest #' + Math.random().toString(16).slice(2, 6).toUpperCase();
    localStorage.setItem('guestSessionId', id);
  }
  return id;
}

export default function App() {
  const isGuest = window.location.pathname === GUEST_PATH;
  const [sessionId] = useState(() => isGuest ? getSessionId() : 'Megan Amasa');
  const [blocks, setBlocks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/api/blocks')
      .then((r) => r.json())
      .then(setBlocks)
      .catch(console.error);
  }, []);

  const handleSave = async (blockId, content) => {
    const res = await fetch(`/api/blocks/${blockId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, sessionId }),
    });
    const data = await res.json();
    if (data.ok) {
      setBlocks((prev) =>
        prev.map((b) => (b.id === blockId ? { ...b, content } : b))
      );
    }
  };

  return (
    <div className="app">
      <TopBar
        sessionId={sessionId}
        isGuest={isGuest}
        onShareClick={() => setShowModal(true)}
      />
      {isGuest && <GuestBanner sessionId={sessionId} />}
      <div className="page-layout">
        <div className="page-content">
          <div className="page-cover">
            <div className="cover-emoji">💖</div>
          </div>
          <div className="page-body">
            {blocks.map((block) => (
              <Block
                key={block.id}
                block={block}
                sessionId={sessionId}
                onSave={handleSave}
              />
            ))}
          </div>
        </div>
        <HistoryPanel />
      </div>
      {showModal && <ShareModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
