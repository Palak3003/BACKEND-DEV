const express = require('express');
const app = express();

let books = [
  { id: 1, title: '1984' },
  { id: 2, title: 'The Great Gatsby' },
  { id: 3, title: 'To Kill a Mockingbird' },
  { id: 4, title: 'Animal Farm' },
  { id: 5, title: 'The Catcher in the Rye' }
];

// GET /api/books?page=1&limit=2
app.get('/api/books', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedBooks = books.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    totalBooks: books.length,
    data: paginatedBooks
  });
});

app.listen(3000, () => {
  console.log('Exercise 3 server running on port 3000');
});
