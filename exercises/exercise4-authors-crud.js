const express = require('express');
const app = express();

app.use(express.json());

let authors = [
  { id: 1, name: 'George Orwell' },
  { id: 2, name: 'Harper Lee' }
];

let nextId = 3;

// CREATE author
app.post('/api/authors', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Author name is required' });
  }

  const newAuthor = { id: nextId++, name };
  authors.push(newAuthor);

  res.status(201).json(newAuthor);
});

// READ all authors
app.get('/api/authors', (req, res) => {
  res.json(authors);
});

// READ author by ID
app.get('/api/authors/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));

  if (!author) {
    return res.status(404).json({ error: 'Author not found' });
  }

  res.json(author);
});

// UPDATE author
app.put('/api/authors/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));

  if (!author) {
    return res.status(404).json({ error: 'Author not found' });
  }

  author.name = req.body.name || author.name;
  res.json(author);
});

// DELETE author
app.delete('/api/authors/:id', (req, res) => {
  const index = authors.findIndex(a => a.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Author not found' });
  }

  const deletedAuthor = authors.splice(index, 1);
  res.json({ message: 'Author deleted', author: deletedAuthor[0] });
});

app.listen(3000, () => {
  console.log('Exercise 4 server running on port 3000');
});
