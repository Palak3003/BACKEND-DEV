const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 3, title: 'Animal Farm', author: 'George Orwell', year: 1945 }
];

// GET /api/books?author=George Orwell&year=1949
app.get('/api/books', (req, res) => {
  let result = books;
  const { author, year } = req.query;

  if (author) {
    result = result.filter(
      book => book.author.toLowerCase() === author.toLowerCase()
    );
  }

  if (year) {
    result = result.filter(
      book => book.year === parseInt(year)
    );
  }

  res.json(result);
});

app.listen(3000, () => {
  console.log('Exercise 1 server running on port 3000');
});
