const express = require('express');
const app = express();

let books = [
  { id: 1, title: 'The Great Gatsby' },
  { id: 2, title: 'To Kill a Mockingbird' },
  { id: 3, title: '1984' },
  { id: 4, title: 'Animal Farm' }
];

// GET /api/books/search?title=animal
app.get('/api/books/search', (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Search title is required' });
  }

  const results = books.filter(book =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(results);
});

app.listen(3000, () => {
  console.log('Exercise 5 server running on port 3000');
});
