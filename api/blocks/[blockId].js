const store = require('../_store');

module.exports = function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { blockId } = req.query;
  const { content, sessionId } = req.body;
  const block = store.blocks.find(b => b.id === blockId);

  if (!block) return res.status(404).json({ error: 'Block not found' });

  block.content = content;

  store.editHistory.unshift({
    sessionId,
    blockId: block.id,
    content: content.slice(0, 60),
    timestamp: new Date().toISOString(),
  });

  if (store.editHistory.length > 50) store.editHistory.pop();

  res.json({ ok: true, block, editedBy: sessionId, timestamp: new Date() });
};
