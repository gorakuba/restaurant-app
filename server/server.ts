require('dotenv').config();
const express = require('express');
// const cors = require('cors');
// const db = require('./config/database');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// login route
app.get('/login', async (req, res) => {
  // const { username, password } = req.body;

  const dbUrl =
    'mongodb+srv://gorakuba_:fQqFYwadZdrBNUaO@cluster0.wfbbico.mongodb.net/restaurant-resources?retryWrites=true&w=majority';

  try {
    await mongoose.connect(dbUrl);
    res.send('database connected!');
  } catch (err) {
    console.error(err);
  }
});

// get all drinks route
// app.get('/drinks', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM resaturant-resources.dishes',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one drink route
// app.get('/drinks/:id', (req, res) => {
//   const id = req.params.id;

//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM drinks WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get all fast-foods route
// app.get('/fast-foods', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM fastfoods',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one fast-food route
// app.get('/fast-foods/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM fastfoods WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get all meat-dishes route
// app.get('/meat-dishes', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM meatdishes',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one meat-dish route
// app.get('/meat-dishes/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM meatdishes WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get all pizzas route
// app.get('/pizzas', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM pizzas',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one pizza route
// app.get('/pizzas/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM pizzas WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get all soups route
// app.get('/soups', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM soups',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one soup route
// app.get('/soups/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM soups WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get all specilas route
// app.get('/specials', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM specials',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one special route
// app.get('/specials/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM specials WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get all vege-dishes route
// app.get('/vege-dishes', (req, res) => {
//   db.query(
//     'SELECT id, name, count, price, photoSrc FROM vegedishes',
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get one vege-dish route
// app.get('/vege-dishes/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(
//     `SELECT id, name, count, description, price, photoSrc FROM vegedishes WHERE id = ${id}`,
//     (error, result) => {
//       if (error) {
//         console.error(error);
//       }
//       res.send(result);
//     }
//   );
// });

// // get menu route
// app.get('/menu', (req, res) => {
//   db.query('SELECT id, name FROM menu', (error, result) => {
//     if (error) {
//       console.error(error);
//     }
//     res.send(result);
//   });
// });

// // get modal route
// app.get('/modal-content', (req, res) => {
//   db.query('SELECT id, title, content FROM modal', (error, result) => {
//     if (error) {
//       console.error(error);
//     }
//     res.send(result);
//   });
// });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});
