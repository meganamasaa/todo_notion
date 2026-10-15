const express = require('express');
const router = express.Router();
const store = require('../store');

router.get('/', (req, res) => {
  res.json(store.blocks);
});

router.patch('/:blockId', (req, res) => {
  const { content, sessionId } = req.body;
  const block = store.blocks.find(b => b.id === req.params.blockId);
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
});

module.exports = router;
