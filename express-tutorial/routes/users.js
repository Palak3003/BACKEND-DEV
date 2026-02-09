const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  res.send('List of users');
});

// GET user by ID
router.get('/:id', (req, res) => {
  res.send(`User details for ID: ${req.params.id}`);
});

// POST create user
router.post('/', (req, res) => {
  res.send('User created');
});

module.exports = router;
