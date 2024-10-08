const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_secret_key";

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({ error: 'Not authenticated' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token invalid' });
    }
    req.user = decoded; // Attach user information to request
    next();
  });
};

module.exports = { isAuthenticated };
