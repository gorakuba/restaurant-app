const { createPool } = require('mysql2');
const databaseConnection = createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11524673',
  password: 'bCgMd4F5h6',
  database: 'sql11524673',
});

module.exports = databaseConnection;
