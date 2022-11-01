const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const connection = require('./connections/db.connections');

const app = express();

let corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// database connection
connection.connect((err) => {
  if (err) return console.error(err);
  console.log('connected to database!');
});
//////////////////////

app.get('/', (req, res) => {
  res.send('welcome!');
});

app.get('/login-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'loginForm.html'));
});

app.get('/register-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registerForm.html'));
});

require('./routes/auth.routes')(app);
require('./routes/products.routes');

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} ...`);
});
