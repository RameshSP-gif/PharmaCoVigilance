const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();
const SECRET_KEY = "your_secret_key";

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'User registered' });
  });
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if (err || result.length === 0) return res.status(400).json({ error: 'User not found' });
    const user = result[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      console.error(`Password mismatch: Given = ${password}, In DB (hashed) = ${user.password}`);
      if (err || !isMatch) return res.status(400).json({ error: 'Invalid credentials' });
      const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
      res.status(200).json({ message: 'Logged in successfully'+SECRET_KEY });
    });
  });
});

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

// Change password route
router.post('/change-password', isAuthenticated, (req, res) => {
  const { oldPassword, newPassword } = req.body;
  db.query('SELECT * FROM users WHERE id = ?', [req.user.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    const user = result[0];
    bcrypt.compare(oldPassword, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(400).json({ error: 'Old password incorrect' });
      bcrypt.hash(newPassword, 10, (err, hash) => {
        db.query('UPDATE users SET password = ? WHERE id = ?', [hash, req.user.id], (err) => {
          if (err) return res.status(500).json({ error: 'Database error' });
          res.status(200).json({ message: 'Password changed' });
        });
      });
    });
  });
});

// Forgot password route (Basic implementation)
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  // Here you would send an email with a reset link
  res.status(200).json({ message: 'Reset link sent' });
});

module.exports = router;
