const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins
app.use(cors());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Stock Span Visualizer Backend is running!');
});

// Proxy endpoint for Yahoo Finance data
app.get('/api/stock-chart', async (req, res) => {
  const { symbol, range, interval } = req.query;
  if (!symbol) {
    return res.status(400).json({ error: 'Stock symbol is required' });
  }

  const yahooFinanceUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range || '1d'}&interval=${interval || '1m'}`;

  try {
    const response = await fetch(yahooFinanceUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Yahoo Finance:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
}); 