const express = require('express');
const cors = require('cors');
const { fetchNumbers, validIds } = require('./fetchNumbers');
const { updateWindow, getAverage, getWindow } = require('./windowManager');

const app = express();
const PORT = 9876;

app.use(cors());

app.get('/numbers/:id', async (req, res) => {
  const { id } = req.params;

  if (!validIds.includes(id)) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const numbers = await fetchNumbers(id);
  const prevState = getWindow();
  updateWindow(numbers);
  const currState = getWindow();
  const avg = getAverage();

  return res.json({
    windowPrevState: prevState,
    windowCurrState: currState,
    numbers: numbers,
    avg: avg,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
