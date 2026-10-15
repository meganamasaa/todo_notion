const express = require('express');
const cors = require('cors');
const blocksRouter = require('./routes/blocks');
const historyRouter = require('./routes/history');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/blocks', blocksRouter);
app.use('/api/history', historyRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
