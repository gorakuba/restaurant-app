const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const app = express();

// get all drinks route
app.get('/drinks', (req, res) => {
  db.query(
    'SELECT id, name, count, description, price, photoSrc FROM drinks',
    (error, result) => {
      if (error) {
        console.error(error);
      }
      console.log(res.send(result));
    }
  );
});

// get one drink route
app.get('drinks/:id', (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT id, name, count, description, price, photoSrc FROM drinks WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        console.error(error);
      }
      console.log(res.send(result));
    }
  );
});
