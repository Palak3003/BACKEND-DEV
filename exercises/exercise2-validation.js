const express = require('express');
const app = express();

app.use(express.json());

// Validation middleware
const validateYear = (req, res, next) => {
  const { year } = req.body;

  if (!year || isNaN(year)) {
    return res.status(400).json({ error: 'Year must be a number' });
  }

  if (year < 1500 || year > new Date().getFullYear()) {
    return res.status(400).json({
      error: 'Year must be between 1500 and the current year'
    });
  }

  next();
};

app.post('/api/books', validateYear, (req, res) => {
  res.json({ message: 'Valid book data received' });
});

app.listen(3000, () => {
  console.log('Exercise 2 server running on port 3000');
});
