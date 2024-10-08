const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const questionsRoutes = require('./routes/questions');
const usersRoutes = require('./routes/users');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionsRoutes);
app.use('/api/users', usersRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
