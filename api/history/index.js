const store = require('../_store');

module.exports = function handler(req, res) {
  if (req.method === 'GET') {
    return res.json(store.editHistory);
  }
  res.status(405).json({ error: 'Method not allowed' });
};
