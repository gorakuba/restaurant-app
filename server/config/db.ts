const { createPool } = require('mysql2');
const database = createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11524673',
  password: 'bCgMd4F5h6',
  database: 'sql11524673',
});

module.exports = database;
