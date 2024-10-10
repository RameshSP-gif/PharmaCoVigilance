const express = require('express');
const db = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ error: 'Not authenticated' });
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token invalid' });
    req.user = decoded;
    next();
  });
};

// Create a question
/*router.post('/', isAuthenticated, (req, res) => {
  const { question_text } = req.body;
  db.query('INSERT INTO questions (user_id, question_text) VALUES (?, ?)', [req.user.id, question_text], (err) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'Question created' });
  });
});*/

// Create a question
router.post('/', (req, res) => {
  const { question_text, user_id } = req.body; // Expect user_id in the request body

  if (!user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  db.query('INSERT INTO questions (user_id, question_text) VALUES (?, ?)', [user_id, question_text], (err) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'Question created' });
  });
});


// Get all questions
router.get('/', (req, res) => {
  db.query('SELECT * FROM questions', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(200).json(results);
  });
});

// Get a single question by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM questions WHERE id = ?', [id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'Question not found' });
    res.status(200).json(results[0]);
  });
});

module.exports = router;
