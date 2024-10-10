const express = require('express');
const db = require('../db');
const { isAuthenticated } = require('../middleware'); // Import middleware
const router = express.Router();

// Get user details (protected route)
router.get('/me', (req, res) => {
  
  db.query('SELECT id, username, email, role FROM users WHERE id = ?', [req.user.id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(results[0]);
  });
});

module.exports = router;
