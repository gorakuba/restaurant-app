const { createPool } = require('mysql2');

const db = createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11524673',
  password: 'bCgMd4F5h6',
  database: 'sql11524673',
  connectionLimit: 10,
});

const getProductsData = () => {
  db.query(
    `SELECT id, name, count, description, price, photoSrc FROM drinks`,
    (error, response) => {
      return console.log(response);
    }
  );
};
